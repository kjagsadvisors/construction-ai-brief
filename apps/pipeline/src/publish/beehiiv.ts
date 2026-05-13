import { env } from "../lib/env.js";
import type { Draft } from "@cab/schema";

export async function publishToBeehiiv(draft: Draft): Promise<{
  id: string;
  url: string;
}> {
  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${env.beehiivPubId()}/posts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.beehiivKey()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: draft.title,
        subtitle: draft.excerpt,
        content_html: markdownToHtml(draft.body),
        scheduled_at: draft.scheduled_for ?? new Date().toISOString(),
        status: "confirmed",
        platforms: ["email", "web"],
      }),
    },
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`beehiiv publish failed (${res.status}): ${text}`);
  }
  const json = (await res.json()) as { data?: { id: string; url: string } };
  if (!json.data) throw new Error("beehiiv: missing data");
  return json.data;
}

// Minimal markdown → html shim. Replace with `marked` or `micromark` once the
// pipeline is shipping real issues.
function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.*)$/gm, "<h3>$1</h3>")
    .replace(/^## (.*)$/gm, "<h2>$1</h2>")
    .replace(/^# (.*)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/\n\n/g, "</p><p>")
    .replace(/^/, "<p>")
    .concat("</p>");
}
