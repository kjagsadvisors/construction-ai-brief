// Admin dashboard — phase 6.
// Open rates, click rates, lead segments, content quality scores, kill switch.
// Stub for now; protected by env-gated basic auth in middleware (TODO).

export const dynamic = "force-dynamic";

export default function AdminPage() {
  return (
    <div className="max-w-prose mx-auto px-4 py-12 font-sans">
      <h1 className="text-3xl mb-4">Admin</h1>
      <p className="text-muted">
        Phase 6 dashboard: open rates, click rates, segment growth, content
        quality scores, kill switch. Wired up after the autopilot is shipping
        consistently.
      </p>
    </div>
  );
}
