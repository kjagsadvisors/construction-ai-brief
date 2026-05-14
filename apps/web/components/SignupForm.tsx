"use client";

import { useState } from "react";

const BEEHIIV_SUBSCRIBE_URL = process.env.NEXT_PUBLIC_BEEHIIV_SUBSCRIBE_URL;

export function SignupForm() {
  // When NEXT_PUBLIC_BEEHIIV_SUBSCRIBE_URL is set (production), we hand off to
  // Beehiiv's hosted subscribe page — it owns deliverability, double opt-in,
  // and unsubscribes. AI Breakfast / The Rundown AI / TLDR all use this
  // pattern. We pre-fill the email via query string so the user only clicks
  // confirm on Beehiiv's side.
  const [email, setEmail] = useState("");

  function go(e: React.FormEvent) {
    e.preventDefault();
    const base =
      BEEHIIV_SUBSCRIBE_URL ??
      "https://keerans-newsletter-df7816.beehiiv.com/subscribe";
    const url = email
      ? `${base}?email=${encodeURIComponent(email)}`
      : base;
    window.location.href = url;
  }

  return (
    <form onSubmit={go} className="space-y-5">
      <div>
        <label htmlFor="email" className="meta-strong block mb-2">
          ① Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="field"
          placeholder="you@yourcompany.com"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-ink text-paper font-mono text-sm uppercase tracking-wide2 px-5 py-4 hover:bg-accent transition-colors flex items-center justify-between"
      >
        <span>Subscribe — free, 3× weekly</span>
        <span aria-hidden>→</span>
      </button>
      <p className="meta">
        Hands off to Beehiiv to confirm. One-click unsub on every issue. We
        don't sell your address.
      </p>
    </form>
  );
}
