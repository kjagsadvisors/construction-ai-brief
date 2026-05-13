import { NextResponse } from "next/server";
import type { Segment } from "@cab/schema";

const VALID_SEGMENTS: Segment[] = ["gc_ops", "trade_sub", "estimator", "none"];

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as {
    email?: string;
    segment?: string;
  } | null;

  const email = body?.email?.trim().toLowerCase();
  const segment = body?.segment as Segment | undefined;

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }
  if (!segment || !VALID_SEGMENTS.includes(segment)) {
    return NextResponse.json({ error: "invalid segment" }, { status: 400 });
  }

  const beehiivKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!beehiivKey || !publicationId) {
    // Dev / pre-launch fallback — log and accept.
    console.warn("[signup] beehiiv env missing; accepting locally", {
      email,
      segment,
    });
    return NextResponse.json({ ok: true, mode: "local" });
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${beehiivKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: "cab_site",
        custom_fields: [{ name: "segment", value: segment }],
      }),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("[signup] beehiiv error", res.status, text);
    return NextResponse.json(
      { error: "subscription provider error" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
