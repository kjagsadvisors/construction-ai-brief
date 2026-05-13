import { db, isPaused } from "./lib/supabase.js";
import { drafter, helper } from "./lib/claude.js";
import {
  brandVoice,
  pillarTemplates,
  bannedPhrases,
  ctaTemplates,
} from "@cab/voice";
import type { ContentItem, Channel, Pillar, Segment } from "@cab/schema";

interface DraftJob {
  slotId: string;
  pillar: Pillar;
  channel: Channel;
  primaryAudience: Segment;
}

const VOICE = brandVoice();
const PILLARS = pillarTemplates();
const BANNED = bannedPhrases();
const CTAS = ctaTemplates();

function containsBanned(text: string): string | null {
  const lower = text.toLowerCase();
  for (const phrase of BANNED) {
    if (lower.includes(phrase.toLowerCase())) return phrase;
  }
  return null;
}

async function pickItems(
  pillar: Pillar,
  audience: Segment,
): Promise<ContentItem[]> {
  const { data, error } = await db
    .from("content_items")
    .select("*")
    .eq("archived", false)
    .eq("pillar_tag", pillar)
    .contains("audience_tags", [audience])
    .gte("usefulness_score", 0.5)
    .order("novelty_score", { ascending: false })
    .limit(7);
  if (error) throw error;
  return (data ?? []) as ContentItem[];
}

async function research(items: ContentItem[]): Promise<string> {
  if (items.length === 0) return "No items available.";
  const summary = items
    .map(
      (i, idx) =>
        `[${idx + 1}] ${i.title ?? i.url}\nURL: ${i.url}\nNotes: ${(
          i.raw_text ?? ""
        ).slice(0, 1500)}`,
    )
    .join("\n\n---\n\n");
  return await helper({
    system: `${VOICE}\n\nYou are the researcher. Read the items, return a structured brief. Cite item numbers.`,
    user: `Source items:\n\n${summary}\n\nProduce a tight 250-word brief noting which 3-5 items matter most and why.`,
    maxTokens: 800,
    temperature: 0.4,
  });
}

async function writeDraft(job: DraftJob, brief: string): Promise<{
  title: string;
  body: string;
  excerpt: string;
}> {
  const system = `${VOICE}\n\n${PILLARS}\n\nYou are writing for ${job.channel} as a ${job.pillar} piece for the ${job.primaryAudience} audience. Follow the pillar template exactly. Cite every stat. Reply with JSON: {"title": "...", "excerpt": "...", "body": "..."}.`;
  const raw = await drafter({
    system,
    user: `Research brief:\n\n${brief}\n\nWrite the piece now.`,
    maxTokens: 4000,
    temperature: 0.7,
  });
  try {
    return JSON.parse(raw.replace(/^```json\s*|\s*```$/g, "").trim());
  } catch {
    throw new Error("drafter returned non-JSON");
  }
}

interface CriticResult {
  score: number;
  banned_found: string | null;
  notes: string;
}

async function critique(
  draft: { title: string; body: string },
  job: DraftJob,
): Promise<CriticResult> {
  const earlyBanned = containsBanned(`${draft.title}\n${draft.body}`);
  if (earlyBanned) {
    return {
      score: 0,
      banned_found: earlyBanned,
      notes: `banned phrase "${earlyBanned}" present`,
    };
  }
  const raw = await helper({
    system: `${VOICE}\n\nYou are the critic. Score 0-10 on "would Keeran publish this". Reject vendor-voice, unsourced stats, missing limits section, wrong audience match. JSON only: {"score": int, "notes": "..."}`,
    user: `Pillar: ${job.pillar}\nAudience: ${job.primaryAudience}\nChannel: ${job.channel}\n\nTITLE: ${draft.title}\n\nBODY:\n${draft.body}`,
    maxTokens: 400,
    temperature: 0.2,
  });
  try {
    const parsed = JSON.parse(raw.replace(/^```json\s*|\s*```$/g, "").trim());
    return {
      score: Number(parsed.score) || 0,
      banned_found: null,
      notes: String(parsed.notes ?? ""),
    };
  } catch {
    return { score: 0, banned_found: null, notes: "critic returned non-JSON" };
  }
}

function appendCta(body: string, job: DraftJob, medium: string): string {
  const options = CTAS[job.primaryAudience] ?? CTAS.none;
  const cta = options[0];
  if (!cta) return body;
  const url = cta.url.replace("{medium}", medium).replace("{pillar}", job.pillar);
  return `${body}\n\n${cta.text} [Book a call →](${url})`;
}

export async function runDraft(job: DraftJob): Promise<void> {
  if (await isPaused()) {
    console.log(`[draft] kill switch active, skipping ${job.slotId}`);
    return;
  }
  const items = await pickItems(job.pillar, job.primaryAudience);
  const brief = await research(items);
  const draft = await writeDraft(job, brief);
  const critic = await critique(draft, job);
  const status = critic.score >= 7 ? "ready" : "rejected";
  const withCta =
    status === "ready" ? appendCta(draft.body, job, job.channel) : draft.body;

  await db.from("drafts").insert({
    slot_id: job.slotId,
    pillar: job.pillar,
    channel: job.channel,
    audience_primary: job.primaryAudience,
    title: draft.title,
    excerpt: draft.excerpt,
    body: withCta,
    source_item_ids: items.map((i) => i.id),
    drafter_model: process.env.CLAUDE_DRAFTER_MODEL ?? "claude-opus-4-7",
    critic_model: process.env.CLAUDE_HELPER_MODEL ?? "claude-sonnet-4-6",
    critic_score: critic.score,
    critic_notes: critic.notes,
    status,
    ready_at: status === "ready" ? new Date().toISOString() : null,
  });
  console.log(`[draft] ${job.slotId} → ${status} (${critic.score})`);
}

// CLI entry: drive from env, or use the publish scheduler.
async function main() {
  const pillar = (process.env.PILLAR ?? "punch_list") as Pillar;
  const channel = (process.env.CHANNEL ?? "newsletter") as Channel;
  const audience = (process.env.AUDIENCE ?? "gc_ops") as Segment;
  const slotId = process.env.SLOT_ID ?? new Date().toISOString();
  await runDraft({ slotId, pillar, channel, primaryAudience: audience });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
