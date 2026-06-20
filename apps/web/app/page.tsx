import { SignupForm } from "@/components/SignupForm";
import { Wordmark } from "@/components/Wordmark";
import { getAllPosts } from "@/lib/posts";

const PILLAR_LABEL: Record<string, string> = {
  tool_teardown: "Tool teardown",
  punch_list: "Punch list",
  playbook: "Playbook",
  field_report: "Field report",
  trend: "Trend",
};

export default function HomePage() {
  const posts = getAllPosts();
  const issueCount = Math.max(posts.length, 1);

  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section
        id="signup"
        className="relative max-w-sheet mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24"
      >
        {/* subtle finer grid only in the hero, layered atop the body grid */}
        <div
          className="absolute inset-x-6 md:inset-x-10 inset-y-4 -z-10 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(27,31,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,31,42,0.04) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        <Wordmark size="lg" />

        <div className="dim mt-10 mb-10">
          <span className="tick" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-7">
            <p className="meta-strong mb-5">
              <span className="flag flag-accent mr-3">Section A</span>
              The Brief
            </p>
            <h1
              className="font-display text-5xl md:text-[78px] leading-[0.98] tracking-tightest text-balance text-ink"
              style={{ fontVariationSettings: '"SOFT" 20, "WONK" 0, "opsz" 144' }}
            >
              The honest read on{" "}
              <span className="italic text-accent">AI in commercial construction.</span>
            </h1>
            <p className="font-body text-xl md:text-[22px] leading-relaxed text-graphite mt-7 max-w-[58ch] text-pretty">
              Tool teardowns, news that matters to a 50-person mech contractor,
              and field reports from people actually shipping AI on the jobsite.
              In your inbox <strong className="text-ink">Tuesday, Thursday, Friday.</strong>
            </p>
          </div>

          <aside className="md:col-span-5 md:pl-8 md:border-l-2 md:border-ink relative">
            <div className="meta-strong mb-2 flex items-center gap-3">
              <span aria-hidden>↳</span>
              <span>The Brief — Subscribe</span>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-wide2 text-graphite mb-6">
              No spam. Unsub in one click. Always free.
            </p>
            <SignupForm />
            <div className="dim mt-8 mb-4">
              <span className="tick" />
            </div>
            <p className="meta">
              Read by PMs, supers, mech &amp; elec subs, and estimators.
            </p>
          </aside>
        </div>
      </section>

      {/* ─── Pillars strip ──────────────────────────────────────────── */}
      <section className="border-y-2 border-ink bg-paperLite">
        <div className="max-w-sheet mx-auto px-6 md:px-10 py-10 md:py-12 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
          {Object.entries(PILLAR_LABEL).map(([key, label], i) => (
            <div key={key} className="relative">
              <div className="meta text-graphite mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-xl text-ink leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Index of Issues ──────────────────────────────────────────── */}
      <section className="max-w-sheet mx-auto px-6 md:px-10 py-16 md:py-24">
        <header className="flex items-end justify-between mb-8 gap-6 flex-wrap">
          <div>
            <p className="meta mb-2">Section B</p>
            <h2
              className="font-display text-4xl md:text-5xl text-ink tracking-tightest"
              style={{ fontVariationSettings: '"SOFT" 25, "WONK" 1, "opsz" 144' }}
            >
              Index of issues
            </h2>
          </div>
          <div className="meta-strong">
            <span className="text-graphite">Total published —</span>{" "}
            <span className="text-accent">{String(issueCount).padStart(3, "0")}</span>
          </div>
        </header>

        {posts.length === 0 ? (
          <div className="border-2 border-dashed border-ink/30 bg-paperLite p-10 md:p-14">
            <div className="flag flag-accent mb-4">Drafting</div>
            <p className="font-display text-2xl text-ink max-w-prose">
              The first issue ships shortly. Subscribe above to be in for
              issue №001.
            </p>
          </div>
        ) : (
          <ul className="border-t border-ink">
            {posts.map((p, i) => (
              <li
                key={p.slug}
                className="grid grid-cols-12 gap-4 md:gap-8 border-b border-ink/30 py-5 md:py-6 group hover:bg-paperLite transition-colors"
              >
                <a
                  href={`/posts/${p.slug}`}
                  className="contents"
                >
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
      </section>

      {/* ─── Editor's note ──────────────────────────────────────────── */}
      <section className="max-w-sheet mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-ink pt-10">
          <p className="meta md:col-span-3">Section C — Editor's note</p>
          <div className="md:col-span-9 font-body text-lg md:text-xl text-ink leading-relaxed max-w-[62ch] text-pretty">
            <p>
              Most AI coverage in construction is either VC-flavored hype or
              vendor PR. Construction AI Brief is the read I wished existed:
              an editorial property that calls out what works on Monday
              morning, what's a waste of money, and what the honest tradeoffs
              are. No "revolutionary," no fluff — just the week's biggest AI
              moves and what they mean for a 50-person mechanical contractor.
            </p>
            <p className="mt-5 meta text-graphite">— The editors</p>
          </div>
        </div>
      </section>
    </>
  );
}
