import { env } from "../lib/env.js";
import type { Draft } from "@cab/schema";

// LinkedIn company page post.
// Requires: w_organization_social scope on the access token + the organization URN.
// Doc: https://learn.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/share-api

export async function publishToLinkedIn(draft: Draft): Promise<{
  id: string;
}> {
  const token = env.linkedinToken();
  const org = env.linkedinOrg();
  if (!token || !org) throw new Error("linkedin env missing");

  const res = await fetch("https://api.linkedin.com/v2/ugcPosts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
    },
    body: JSON.stringify({
      author: org,
      lifecycleState: "PUBLISHED",
      specificContent: {
        "com.linkedin.ugc.ShareContent": {
          shareCommentary: { text: draft.body },
          shareMediaCategory: "NONE",
        },
      },
      visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`linkedin publish failed (${res.status}): ${text}`);
  }
  const id = res.headers.get("x-restli-id") ?? "";
  return { id };
}
