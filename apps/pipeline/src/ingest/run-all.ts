import { isPaused } from "../lib/supabase.js";
import { ingestRss } from "./rss.js";
import { ingestExa } from "./exa.js";
import { ingestArxiv } from "./arxiv.js";

async function main() {
  if (await isPaused()) {
    console.log("[ingest] kill switch active, skipping");
    return;
  }
  console.log("[ingest] starting");
  const results = await Promise.allSettled([
    ingestRss(),
    ingestExa(),
    ingestArxiv(),
  ]);
  for (const [i, r] of results.entries()) {
    const name = ["rss", "exa", "arxiv"][i];
    if (r.status === "fulfilled") {
      console.log(`[ingest] ${name}`, r.value);
    } else {
      console.error(`[ingest] ${name} failed`, r.reason);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
