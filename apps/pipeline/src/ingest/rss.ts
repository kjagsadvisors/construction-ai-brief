import { XMLParser } from "fast-xml-parser";
import { db } from "../lib/supabase.js";
import { urlHash } from "../lib/hash.js";
import { RSS_SOURCES } from "./sources.js";

const parser = new XMLParser({ ignoreAttributes: false });

interface RssItem {
  title?: string;
  link?: string;
  description?: string;
  pubDate?: string;
  "content:encoded"?: string;
}

export async function ingestRss(): Promise<{ inserted: number; skipped: number }> {
  let inserted = 0;
  let skipped = 0;

  for (const source of RSS_SOURCES) {
    try {
      const res = await fetch(source.url, {
        headers: { "User-Agent": "CABBot/0.1 (+https://constructionaibrief.com/bot)" },
      });
      if (!res.ok) {
        console.warn(`[rss] ${source.name} returned ${res.status}`);
        continue;
      }
      const xml = await res.text();
      const parsed = parser.parse(xml);
      const items: RssItem[] = parsed?.rss?.channel?.item ?? parsed?.feed?.entry ?? [];

      for (const item of items) {
        const url = item.link ?? "";
        if (!url) continue;
        const hash = urlHash(url);
        const { error } = await db.from("content_items").insert({
          source: source.name,
          source_type: "rss",
          url,
          title: item.title ?? null,
          raw_text:
            item["content:encoded"] ?? item.description ?? null,
          hash,
          published_at: item.pubDate
            ? new Date(item.pubDate).toISOString()
            : null,
        });
        if (error) {
          if (error.code === "23505") skipped++;
          else console.error(`[rss] insert error`, error);
        } else inserted++;
      }
    } catch (err) {
      console.error(`[rss] ${source.name} failed`, err);
    }
  }

  return { inserted, skipped };
}
