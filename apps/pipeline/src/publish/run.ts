import { db, isPaused } from "../lib/supabase.js";
import { publishToBeehiiv } from "./beehiiv.js";
import { publishToLinkedIn } from "./linkedin.js";
import { publishToX } from "./x.js";
import { publishToMeta } from "./meta.js";
import type { Draft } from "@cab/schema";

async function main() {
  if (await isPaused()) {
    console.log("[publish] kill switch active, skipping");
    return;
  }

  const { data, error } = await db
    .from("drafts")
    .select("*")
    .eq("status", "ready")
    .lte("scheduled_for", new Date().toISOString())
    .limit(20);
  if (error) throw error;
  const drafts = (data ?? []) as Draft[];
  console.log(`[publish] ${drafts.length} ready drafts`);

  for (const draft of drafts) {
    try {
      let external: { id: string; url?: string } = { id: "" };
      switch (draft.channel) {
        case "newsletter":
          external = await publishToBeehiiv(draft);
          break;
        case "linkedin":
          external = await publishToLinkedIn(draft);
          break;
        case "x":
          external = await publishToX(draft);
          break;
        case "threads":
          external = await publishToMeta(draft, "threads");
          break;
        case "instagram":
          external = await publishToMeta(draft, "instagram");
          break;
        case "web":
          // Web is published by committing the MDX to the next.js repo.
          // Phase 5 will wire this via a GitHub commit through the GH API.
          console.log(`[publish] web channel deferred for ${draft.id}`);
          continue;
      }

      await db.from("published").insert({
        draft_id: draft.id,
        channel: draft.channel,
        external_id: external.id || null,
        external_url: external.url ?? null,
        body_snapshot: draft.body,
        title_snapshot: draft.title,
        critic_score_snapshot: draft.critic_score,
      });
      await db
        .from("drafts")
        .update({ status: "published" })
        .eq("id", draft.id);
      console.log(`[publish] ${draft.channel} ✓ ${draft.id}`);
    } catch (err) {
      console.error(`[publish] ${draft.channel} ✗ ${draft.id}`, err);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
