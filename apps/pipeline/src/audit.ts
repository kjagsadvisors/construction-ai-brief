import { db } from "./lib/supabase.js";
import { helper } from "./lib/claude.js";
import { brandVoice, bannedPhrases } from "@cab/voice";

// Sunday 8am: review the week's published content, flag drift, email Keeran.

const VOICE = brandVoice();
const BANNED = bannedPhrases();

async function main() {
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const { data, error } = await db
    .from("published")
    .select("*")
    .gte("published_at", weekAgo.toISOString())
    .order("published_at", { ascending: false });
  if (error) throw error;
  const pubs = data ?? [];

  if (pubs.length === 0) {
    console.log("[audit] no published items in last 7 days");
    return;
  }

  const offenders: string[] = [];
  for (const p of pubs) {
    const text = `${p.title_snapshot}\n${p.body_snapshot}`.toLowerCase();
    for (const phrase of BANNED) {
      if (text.includes(phrase.toLowerCase())) {
        offenders.push(
          `published ${p.id} (${p.channel}): banned phrase "${phrase}"`,
        );
      }
    }
  }

  const summary = await helper({
    system: `${VOICE}\n\nYou are the weekly auditor. Produce a tight one-page markdown report assessing drift, voice consistency, and quality. Honest, terse.`,
    user: `Last week's published items (${pubs.length}):\n\n${pubs
      .map(
        (p, i) =>
          `[${i + 1}] ${p.channel} · ${p.title_snapshot} · critic ${
            p.critic_score_snapshot ?? "n/a"
          }`,
      )
      .join("\n")}\n\nOffenders flagged by banned-phrase scan: ${
      offenders.length === 0 ? "none" : "\n- " + offenders.join("\n- ")
    }`,
    maxTokens: 1200,
    temperature: 0.3,
  });

  const driftScore =
    offenders.length > 0 ? 0.3 : pubs.length < 5 ? 0.6 : 0.9;

  await db.from("audit_log").insert({
    period_start: weekAgo.toISOString(),
    period_end: now.toISOString(),
    report_md: summary,
    drift_score: driftScore,
    flagged_ids: [],
  });

  // TODO: send `summary` via email (Resend / Beehiiv transactional / Gmail API)
  // to ALERT_EMAIL. Phase 5.
  console.log("[audit] report:\n", summary);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
