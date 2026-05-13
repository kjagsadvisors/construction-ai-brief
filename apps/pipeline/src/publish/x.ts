import { env } from "../lib/env.js";
import type { Draft } from "@cab/schema";

// Typefully API — handles X + Threads from one endpoint. Cheaper than X Basic.
// https://support.typefully.com/en/articles/8718287-typefully-api

export async function publishToX(draft: Draft): Promise<{ id: string }> {
  const key = env.typefullyKey();
  if (!key) throw new Error("typefully env missing");

  const res = await fetch("https://api.typefully.com/v1/drafts/", {
    method: "POST",
    headers: {
      "X-API-KEY": key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: draft.body,
      threadify: true,
      share: true,
      auto_retweet_enabled: false,
      schedule_date: draft.scheduled_for,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`typefully publish failed (${res.status}): ${text}`);
  }
  const json = (await res.json()) as { id?: string | number };
  return { id: String(json.id ?? "") };
}
