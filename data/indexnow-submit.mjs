#!/usr/bin/env node
// Submit sitemap URLs to IndexNow, skipping URLs already in indexnow-pushed.jsonl.
// Usage: node data/indexnow-submit.mjs [--dry-run]
import { readFileSync, appendFileSync, existsSync, unlinkSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dir = dirname(fileURLToPath(import.meta.url));
const cfg = JSON.parse(readFileSync(join(dir, "indexnow.json"), "utf8"));
const logPath = join(dir, "indexnow-pushed.jsonl");
const dryRun = process.argv.includes("--dry-run");

const pushed = new Set(
  existsSync(logPath)
    ? readFileSync(logPath, "utf8")
        .trim()
        .split("\n")
        .filter(Boolean)
        .map((l) => JSON.parse(l).url)
    : []
);

const sitemaps = [
  `https://${cfg.host}/sitemap.xml`,
  `https://${cfg.host}/news-sitemap.xml`,
];
const urls = new Set();
for (const sm of sitemaps) {
  const xml = await (await fetch(sm)).text();
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(m[1].trim());
}
// Always re-ping the feeds/sitemaps themselves so engines re-crawl them.
const fresh = [...urls].filter((u) => !pushed.has(u));

console.log(`${urls.size} sitemap URLs, ${pushed.size} already pushed, ${fresh.length} to submit`);
if (!fresh.length) process.exit(0);
if (dryRun) {
  fresh.forEach((u) => console.log("  " + u));
  process.exit(0);
}

// IndexNow allows up to 10,000 URLs per POST; batch at 500 to be safe.
for (let i = 0; i < fresh.length; i += 500) {
  const batch = fresh.slice(i, i + 500);
  const res = await fetch(cfg.endpoints[0], {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: cfg.host,
      key: cfg.key,
      keyLocation: cfg.keyLocation,
      urlList: batch,
    }),
  });
  console.log(`batch ${i / 500 + 1}: ${batch.length} URLs -> HTTP ${res.status}`);
  if (res.status === 200 || res.status === 202) {
    const now = new Date().toISOString().replace(/\.\d+Z$/, "Z");
    for (const url of batch) {
      appendFileSync(
        logPath,
        JSON.stringify({ url, submitted_at: now, http_status: res.status, endpoint: "api.indexnow.org" }) + "\n"
      );
    }
  } else {
    console.error(await res.text());
    process.exit(1);
  }
}

const pausedFlag = join(dir, "PAUSED.flag");
if (existsSync(pausedFlag)) {
  unlinkSync(pausedFlag);
  console.log("Removed PAUSED.flag — IndexNow submissions working again.");
}
