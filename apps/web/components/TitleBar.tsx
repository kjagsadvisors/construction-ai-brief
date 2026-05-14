// TitleBar — the strip at the very top of every page. Brand at left always
// links home; issue/date + nav on the right.

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
        <a
          href="/"
          className="group inline-flex items-center gap-2.5 shrink-0"
          aria-label="Construction AI Brief — home"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-4 w-4 text-ink group-hover:text-accent transition-colors shrink-0"
          >
            <path
              d="M2 8 L2 2 L8 2 M22 16 L22 22 L16 22 M22 8 L22 2 L16 2 M2 16 L2 22 L8 22"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="square"
            />
          </svg>
          <span
            className="font-display text-[15px] md:text-base tracking-tightest text-ink group-hover:text-accent transition-colors"
            style={{ fontVariationSettings: '"SOFT" 25, "WONK" 1, "opsz" 96' }}
          >
            Construction AI Brief
          </span>
        </a>
        <div className="meta hidden md:flex items-center gap-4">
          {section && <span className="text-ink">{section}</span>}
          {section && <span aria-hidden className="text-graphite">/</span>}
          <span className="text-graphite hidden lg:inline">
            Issue <span className="text-accent">№{(issueNo ?? 1).toString().padStart(3, "0")}</span> · {today}
          </span>
          <a href="/posts" className="hover:text-accent">Index</a>
          <a href="/about" className="hover:text-accent">About</a>
        </div>
        <a
          href="/#signup"
          className="font-mono text-[11px] uppercase tracking-wide2 px-3 py-1.5 bg-ink text-paper hover:bg-accent transition-colors shrink-0"
        >
          Subscribe →
        </a>
      </div>
    </div>
  );
}
