import { db, isPaused } from "./lib/supabase.js";
import { helper } from "./lib/claude.js";
import { brandVoice } from "@cab/voice";
import type { ContentItem, Pillar, Segment } from "@cab/schema";

interface ScoreResult {
  audience_tags: Segment[];
  pillar_tag: Pillar | null;
  novelty_score: number;
  usefulness_score: number;
  evergreen: boolean;
}

const SYSTEM = `${brandVoice()}

You are the scoring pass for Construction AI Brief's content pipeline. Given a raw item from
the lake, return a JSON object describing its fit. Be terse, never fabricate.

Reply with ONLY valid JSON matching this shape:
{
  "audience_tags": Array<"gc_ops"|"trade_sub"|"estimator"|"none">,
  "pillar_tag": "tool_teardown"|"punch_list"|"playbook"|"field_report"|"trend"|null,
  "novelty_score": number,        // 0.0-1.0, how new is this story
  "usefulness_score": number,     // 0.0-1.0, "would a 50-person mech contractor in Baltimore actually use this?"
  "evergreen": boolean
}`;

async function scoreOne(item: ContentItem): Promise<ScoreResult | null> {
  const user = `SOURCE: ${item.source}\nURL: ${item.url}\nTITLE: ${
    item.title ?? "(none)"
  }\n\nBODY:\n${(item.raw_text ?? "").slice(0, 6000)}`;
  const raw = await helper({ system: SYSTEM, user, maxTokens: 400, temperature: 0.2 });
  try {
    const json = JSON.parse(raw.replace(/^```json\s*|\s*```$/g, "").trim());
    return json as ScoreResult;
  } catch (err) {
    console.warn(`[score] bad json for ${item.id}`, raw.slice(0, 200));
    return null;
  }
}

async function main() {
  if (await isPaused()) {
    console.log("[score] kill switch active, skipping");
    return;
  }
  const { data, error } = await db
    .from("content_items")
    .select("*")
    .is("scored_at", null)
    .eq("archived", false)
    .limit(50);
  if (error) throw error;
  const items = (data ?? []) as ContentItem[];
  console.log(`[score] processing ${items.length} items`);

  for (const item of items) {
    const score = await scoreOne(item);
    if (!score) continue;
    const archive =
      score.novelty_score < 0.5 && score.usefulness_score < 0.5;
    await db
      .from("content_items")
      .update({
        audience_tags: score.audience_tags,
        pillar_tag: score.pillar_tag,
        novelty_score: score.novelty_score,
        usefulness_score: score.usefulness_score,
        evergreen: score.evergreen,
        archived: archive,
        scored_at: new Date().toISOString(),
      })
      .eq("id", item.id);
  }
  console.log(`[score] done`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
