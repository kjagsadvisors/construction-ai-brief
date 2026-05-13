import Exa from "exa-js";
import { db } from "../lib/supabase.js";
import { urlHash } from "../lib/hash.js";
import { env } from "../lib/env.js";
import { EXA_QUERIES } from "./sources.js";

export async function ingestExa(): Promise<{ inserted: number; skipped: number }> {
  const exa = new Exa(env.exaKey());
  let inserted = 0;
  let skipped = 0;

  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  for (const query of EXA_QUERIES) {
    try {
      const result = await exa.searchAndContents(query, {
        numResults: 10,
        startPublishedDate: since.toISOString(),
        text: { maxCharacters: 6000 },
      });
      for (const r of result.results) {
        const hash = urlHash(r.url);
        const { error } = await db.from("content_items").insert({
          source: "Exa",
          source_type: "exa",
          url: r.url,
          title: r.title ?? null,
          raw_text: r.text ?? null,
          hash,
          published_at: r.publishedDate ?? null,
        });
        if (error) {
          if (error.code === "23505") skipped++;
          else console.error(`[exa] insert error`, error);
        } else inserted++;
      }
    } catch (err) {
      console.error(`[exa] query "${query}" failed`, err);
    }
  }

  return { inserted, skipped };
}
