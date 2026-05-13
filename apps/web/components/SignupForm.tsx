"use client";

import { useState } from "react";
import type { Segment } from "@cab/schema";

const SEGMENTS: { value: Segment; label: string }[] = [
  { value: "gc_ops", label: "GC project teams / ops" },
  { value: "trade_sub", label: "Trade sub leadership" },
  { value: "estimator", label: "Estimator / precon" },
  { value: "none", label: "Other" },
];

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [segment, setSegment] = useState<Segment>("gc_ops");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setError(null);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, segment }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? `Signup failed (${res.status})`);
      }
      setState("done");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (state === "done") {
    return (
      <div className="border-2 border-approval bg-paperLite p-6 animate-reveal">
        <div className="flag flag-approval mb-3">Received</div>
        <p className="font-display text-2xl text-ink leading-snug">
          You're in.
        </p>
        <p className="font-body text-base text-graphite mt-2">
          First issue lands the next publication day. Check your inbox for the
          confirmation — if it's not there in 2 minutes, look in promotions.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-7">
      <div>
        <label
          htmlFor="email"
          className="meta-strong block mb-2"
        >
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
      <div>
        <label
          htmlFor="segment"
          className="meta-strong block mb-2"
        >
          ② Best description of your role
        </label>
        <select
          id="segment"
          value={segment}
          onChange={(e) => setSegment(e.target.value as Segment)}
          className="field field-mono"
        >
          {SEGMENTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-ink text-paper font-mono text-sm uppercase tracking-wide2 px-5 py-4 hover:bg-accent transition-colors disabled:opacity-50 disabled:hover:bg-ink flex items-center justify-between"
      >
        <span>{state === "loading" ? "Submitting transmittal…" : "Submit transmittal"}</span>
        <span aria-hidden>→</span>
      </button>
      {error && (
        <div className="border-2 border-stamp p-3">
          <p className="font-mono text-xs text-stamp uppercase tracking-wide2">
            ⚠ {error}
          </p>
        </div>
      )}
    </form>
  );
}
