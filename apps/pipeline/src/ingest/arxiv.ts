import { XMLParser } from "fast-xml-parser";
import { db } from "../lib/supabase.js";
import { urlHash } from "../lib/hash.js";
import { ARXIV_QUERIES } from "./sources.js";

const parser = new XMLParser({ ignoreAttributes: false });

export async function ingestArxiv(): Promise<{ inserted: number; skipped: number }> {
  let inserted = 0;
  let skipped = 0;

  for (const q of ARXIV_QUERIES) {
    const url = `http://export.arxiv.org/api/query?search_query=all:${encodeURIComponent(
      q,
    )}&sortBy=submittedDate&sortOrder=descending&max_results=10`;
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const xml = await res.text();
      const parsed = parser.parse(xml);
      const entries: Array<{
        title?: string;
        summary?: string;
        published?: string;
        id?: string;
      }> = parsed?.feed?.entry ?? [];
      const list = Array.isArray(entries) ? entries : [entries];
      for (const e of list) {
        if (!e?.id) continue;
        const hash = urlHash(e.id);
        const { error } = await db.from("content_items").insert({
          source: "arXiv",
          source_type: "arxiv",
          url: e.id,
          title: e.title?.trim() ?? null,
          raw_text: e.summary?.trim() ?? null,
          hash,
          published_at: e.published ?? null,
        });
        if (error) {
          if (error.code === "23505") skipped++;
          else console.error("[arxiv] insert error", error);
        } else inserted++;
      }
    } catch (err) {
      console.error(`[arxiv] query "${q}" failed`, err);
    }
  }

  return { inserted, skipped };
}
