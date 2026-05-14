import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const TOOLS_DIR = join(process.cwd(), "content", "tools");

interface ToolMeta {
  slug: string;
  name: string;
  category: string;
  verdict: string;
  vendor_url?: string;
  updated_at: string;
}

function getAllTools(): ToolMeta[] {
  let files: string[];
  try {
    files = readdirSync(TOOLS_DIR).filter((f) => f.endsWith(".mdx"));
  } catch {
    return [];
  }
  return files
    .map((file) => {
      const raw = readFileSync(join(TOOLS_DIR, file), "utf8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        name: String(data.name ?? "Unknown tool"),
        category: String(data.category ?? "Construction AI"),
        verdict: String(data.verdict ?? ""),
        vendor_url: data.vendor_url ? String(data.vendor_url) : undefined,
        updated_at: String(data.updated_at ?? data.date ?? "2026-01-01"),
      } satisfies ToolMeta;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export const metadata = {
  title: "Tools directory",
  description:
    "Construction AI Brief's directory of AEC AI tools — honest teardowns, pricing, where each works, where it doesn't.",
};

export default function ToolsPage() {
  const tools = getAllTools();
  return (
    <article className="max-w-sheet mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-20">
      <header className="mb-12">
        <p className="meta mb-3">AEC AI tools — honest reviews</p>
        <h1
          className="font-display text-5xl md:text-[64px] tracking-tightest text-ink leading-[1.05] text-balance"
          style={{ fontVariationSettings: '"SOFT" 25, "WONK" 1, "opsz" 144' }}
        >
          Every AEC AI tool we've torn down.
        </h1>
        <p className="font-body text-xl text-graphite mt-5 max-w-[58ch] text-pretty">
          One page per tool. Verdict, where it works, where it doesn't,
          pricing, who should pilot it, and the two-week test recipe. Updated
          when new versions ship.
        </p>
      </header>

      {tools.length === 0 ? (
        <div className="border-2 border-dashed border-ink/30 bg-paperLite p-10">
          <div className="flag flag-accent mb-4">Building</div>
          <p className="font-display text-2xl text-ink max-w-prose">
            The directory builds as we publish tool teardowns. Each
            Thursday teardown ships a permanent tool page here.
          </p>
        </div>
      ) : (
        <ul className="border-t border-ink">
          {tools.map((t) => (
            <li
              key={t.slug}
              className="grid grid-cols-12 gap-4 md:gap-8 border-b border-ink/30 py-5 md:py-6 group hover:bg-paperLite transition-colors"
            >
              <a href={`/tools/${t.slug}`} className="contents">
                <span className="col-span-12 md:col-span-3 font-display text-xl md:text-[22px] text-ink group-hover:text-accent transition-colors leading-snug">
                  {t.name}
                </span>
                <span className="col-span-12 md:col-span-2 self-center">
                  <span className="font-mono text-[11px] uppercase tracking-wide2 text-ink border border-ink px-2 py-0.5">
                    {t.category}
                  </span>
                </span>
                <span className="col-span-12 md:col-span-6 font-body text-base text-graphite self-center text-pretty">
                  {t.verdict}
                </span>
                <span className="col-span-12 md:col-span-1 font-mono text-[12px] uppercase tracking-wide2 text-graphite self-center md:text-right">
                  {new Date(t.updated_at).toISOString().slice(0, 10).replace(/-/g, ".")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
