import { NextResponse } from "next/server";

// Beehiiv → Construction AI Brief event ingest.
// Configure in Beehiiv: Settings → Webhooks → events: subscription.created,
// subscription.deleted, post.opened, post.clicked.
// Verification: Beehiiv signs with HMAC SHA256 in the `Beehiiv-Signature` header.

export async function POST(req: Request) {
  const signature = req.headers.get("beehiiv-signature");
  const secret = process.env.BEEHIIV_WEBHOOK_SECRET;
  const raw = await req.text();

  if (secret) {
    const expected = await sign(secret, raw);
    if (signature !== expected) {
      return NextResponse.json({ error: "bad signature" }, { status: 401 });
    }
  }

  let event: { type?: string; data?: Record<string, unknown> };
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }

  // TODO (phase 5): persist to supabase `events` table.
  // For now we accept + log so beehiiv can be wired up early.
  console.info("[webhook/beehiiv]", event.type);
  return NextResponse.json({ ok: true });
}

async function sign(secret: string, body: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(body));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
