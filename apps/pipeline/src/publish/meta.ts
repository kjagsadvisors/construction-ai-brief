import { env } from "../lib/env.js";
import type { Draft, Channel } from "@cab/schema";

// Meta Graph API for Threads + Instagram. Two-step: create container, publish.
// Threads doc: https://developers.facebook.com/docs/threads
// IG doc: https://developers.facebook.com/docs/instagram-platform/content-publishing

export async function publishToMeta(
  draft: Draft,
  channel: Extract<Channel, "threads" | "instagram">,
): Promise<{ id: string }> {
  const token = env.metaToken();
  if (!token) throw new Error("meta env missing");

  const userId =
    channel === "threads" ? env.metaThreadsUserId() : env.metaIgUserId();
  if (!userId) throw new Error(`meta user id missing for ${channel}`);

  const apiBase =
    channel === "threads"
      ? "https://graph.threads.net/v1.0"
      : "https://graph.facebook.com/v20.0";

  // Step 1: create media container.
  const containerRes = await fetch(`${apiBase}/${userId}/threads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      media_type: "TEXT",
      text: draft.body,
      access_token: token,
    }),
  });
  if (!containerRes.ok) {
    throw new Error(`meta container failed: ${await containerRes.text()}`);
  }
  const container = (await containerRes.json()) as { id: string };

  // Step 2: publish container.
  const publishRes = await fetch(`${apiBase}/${userId}/threads_publish`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      creation_id: container.id,
      access_token: token,
    }),
  });
  if (!publishRes.ok) {
    throw new Error(`meta publish failed: ${await publishRes.text()}`);
  }
  const published = (await publishRes.json()) as { id: string };
  return { id: published.id };
}
