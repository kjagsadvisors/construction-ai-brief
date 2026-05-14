import { getAllPosts } from "@/lib/posts";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionaibrief.com";
const BRAND = "Construction AI Brief";
const TAGLINE = "The honest read on AI in commercial construction.";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const revalidate = 600; // 10 min — Beehiiv polls hourly

export async function GET() {
  const posts = getAllPosts().slice(0, 30);
  const items = posts
    .map((p) => {
      const url = `${BASE}/posts/${p.slug}`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${esc(p.excerpt ?? "")}</description>
      <category>${p.pillar}</category>
      <author>noreply@constructionaibrief.com (Construction AI Brief, published by kjags advisors)</author>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${BRAND}</title>
    <link>${BASE}</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${TAGLINE}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=600",
    },
  });
}
