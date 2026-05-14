import { getAllPosts } from "@/lib/posts";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionaibrief.com";
const NAME = "Construction AI Brief";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Google News sitemap: only articles from the last 48 hours, max 1000 URLs.
// Spec: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
export const revalidate = 300; // 5 min

export async function GET() {
  const cutoff = Date.now() - 48 * 60 * 60 * 1000;
  const recent = getAllPosts().filter(
    (p) => new Date(p.date).getTime() >= cutoff,
  );
  const urls = recent
    .map((p) => {
      const loc = `${BASE}/posts/${p.slug}`;
      const pub = new Date(p.date).toISOString();
      return `  <url>
    <loc>${loc}</loc>
    <news:news>
      <news:publication>
        <news:name>${esc(NAME)}</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pub}</news:publication_date>
      <news:title>${esc(p.title)}</news:title>
    </news:news>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
