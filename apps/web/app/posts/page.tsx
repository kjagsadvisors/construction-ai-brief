import { getAllPosts } from "@/lib/posts";

const PILLAR_LABEL: Record<string, string> = {
  tool_teardown: "Tool teardown",
  punch_list: "Punch list",
  playbook: "Playbook",
  field_report: "Field report",
  trend: "Trend",
};

export const metadata = {
  title: "Index",
  description:
    "Every issue of Construction AI Brief — tool teardowns, the weekly punch list, playbooks, field reports, and one-chart trends.",
};

export default function PostsIndexPage() {
  const posts = getAllPosts();
  return (
    <article className="max-w-sheet mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-20">
      <header className="mb-12">
        <p className="meta mb-3">Index — every issue</p>
        <h1
          className="font-display text-5xl md:text-[64px] tracking-tightest text-ink leading-[1.05] text-balance"
          style={{ fontVariationSettings: '"SOFT" 25, "WONK" 1, "opsz" 144' }}
        >
          Every Construction AI Brief issue, in chronological order.
        </h1>
        <p className="font-body text-xl text-graphite mt-5 max-w-[58ch] text-pretty">
          Tue news digest, Thu deep dive, Fri one chart. Filed by issue number.
          Read in any order — none of it is yesterday's news.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="border-2 border-dashed border-ink/30 bg-paperLite p-10">
          <div className="flag flag-accent mb-4">Drafting</div>
          <p className="font-display text-2xl text-ink max-w-prose">
            First issue ships shortly. Subscribe on the home page to catch №001.
          </p>
        </div>
      ) : (
        <ul className="border-t border-ink">
          {posts.map((p, i) => (
            <li
              key={p.slug}
              className="grid grid-cols-12 gap-4 md:gap-8 border-b border-ink/30 py-5 md:py-6 group hover:bg-paperLite transition-colors"
            >
              <a href={`/posts/${p.slug}`} className="contents">
                <span className="col-span-2 md:col-span-1 font-mono text-[13px] tracking-wide2 text-graphite self-center">
                  №{String(posts.length - i).padStart(3, "0")}
                </span>
                <span className="col-span-3 md:col-span-2 font-mono text-[12px] uppercase tracking-wide2 text-graphite self-center">
                  {new Date(p.date).toISOString().slice(0, 10).replace(/-/g, ".")}
                </span>
                <span className="col-span-7 md:col-span-2 self-center">
                  <span className="font-mono text-[11px] uppercase tracking-wide2 text-ink border border-ink px-2 py-0.5">
                    {PILLAR_LABEL[p.pillar] ?? p.pillar}
                  </span>
                </span>
                <span className="col-span-12 md:col-span-7 font-display text-xl md:text-[22px] text-ink group-hover:text-accent transition-colors text-balance leading-snug">
                  {p.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
