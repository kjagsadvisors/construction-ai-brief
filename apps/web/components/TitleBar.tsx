// TitleBar — the strip at the very top of every page, mimicking a sheet
// title bar with issue number + ISO date + section link.

export function TitleBar({
  issueNo,
  section,
}: {
  issueNo?: number;
  section?: string;
}) {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, ".");
  return (
    <div className="border-b border-ink bg-paper">
      <div className="max-w-sheet mx-auto px-6 md:px-10 py-2.5 flex items-center justify-between gap-6">
        <div className="meta-strong flex items-center gap-4">
          <span>
            Issue <span className="text-accent">№{(issueNo ?? 1).toString().padStart(3, "0")}</span>
          </span>
          <span aria-hidden className="text-graphite">/</span>
          <span>{today}</span>
        </div>
        <div className="meta hidden md:flex items-center gap-4">
          {section && <span className="text-ink">{section}</span>}
          {section && <span aria-hidden className="text-graphite">/</span>}
          <a href="/posts" className="hover:text-accent">Index</a>
          <a href="/about" className="hover:text-accent">About</a>
        </div>
        <a
          href="#signup"
          className="font-mono text-[11px] uppercase tracking-wide2 px-3 py-1.5 bg-ink text-paper hover:bg-accent transition-colors"
        >
          Subscribe →
        </a>
      </div>
    </div>
  );
}
