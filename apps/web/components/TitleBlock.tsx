// TitleBlock — the CAD-style title block in the page footer. Lists project
// metadata in a 4-column grid: drawn-by, dated, sheet, revision.

export function TitleBlock({
  sheet = "1 / 1",
  revision = "A",
}: {
  sheet?: string;
  revision?: string;
}) {
  return (
    <div className="border-t-2 border-ink mt-24">
      <div className="max-w-sheet mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-ink/30 border-x border-ink/30">
          <Cell label="Project" value="Construction AI Brief" wide />
          <Cell label="Drawn by" value="K. Jagadesan" />
          <Cell label="Dated" value={new Date().toISOString().slice(0, 10).replace(/-/g, ".")} />
          <Cell label="Sheet" value={sheet} />
          <Cell label="Rev" value={revision} />
        </div>
        <div className="meta py-3 flex items-center justify-between border-t border-ink/30">
          <span>
            Published independently · constructionaibrief.com · © {new Date().getFullYear()}
          </span>
          <span className="flex items-center gap-3">
            <a href="/privacy" className="hover:text-accent">Privacy</a>
            <span className="text-graphite">·</span>
            <a href="/about" className="hover:text-accent">About</a>
          </span>
        </div>
      </div>
    </div>
  );
}

function Cell({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div className={`px-4 py-3 ${wide ? "md:col-span-1" : ""}`}>
      <div className="meta text-graphite">{label}</div>
      <div className="font-mono text-sm text-ink mt-1 uppercase tracking-wide2 truncate">
        {value}
      </div>
    </div>
  );
}
