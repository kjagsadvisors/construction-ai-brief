import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPost } from "@/lib/posts";
import { SubscribeCTA } from "@/components/SubscribeCTA";

const PILLAR_LABEL: Record<string, string> = {
  tool_teardown: "Tool teardown",
  punch_list: "Punch list",
  playbook: "Playbook",
  field_report: "Field report",
  trend: "Trend",
};

const AUDIENCE_LABEL: Record<string, string> = {
  gc_ops: "GC ops",
  trade_sub: "Trade sub",
  estimator: "Estimator",
  none: "Industry",
};

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionaibrief.com";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const all = getAllPosts();
  const issueNo = all.findIndex((p) => p.slug === params.slug);
  const issueLabel = issueNo === -1 ? "001" : String(all.length - issueNo).padStart(3, "0");
  const isoDate = new Date(post.date).toISOString().slice(0, 10).replace(/-/g, ".");

  // JSON-LD Article schema — Google + ChatGPT-search read this for entity recognition.
  // Publisher = kjags advisors (Organization). This is the SEO play.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    image: `${SITE}/opengraph-image`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/posts/${post.slug}` },
    author: {
      "@type": "Organization",
      name: "Construction AI Brief",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "kjags advisors",
      url: "https://kjagsadvisors.com",
      sameAs: [
        "https://kjagsadvisors.com",
        "https://jobhost.ai",
        "https://bidverify.ai",
      ],
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/icon`,
      },
    },
    isPartOf: {
      "@type": "Periodical",
      name: "Construction AI Brief",
      issn: undefined,
    },
    articleSection: PILLAR_LABEL[post.pillar] ?? post.pillar,
    keywords: [
      "AI in construction",
      "construction AI",
      "AEC AI",
      PILLAR_LABEL[post.pillar],
      AUDIENCE_LABEL[post.audience],
    ].join(", "),
  };

  return (
    <article className="max-w-sheet mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Title block ────────────────────────────────────────────── */}
      <div className="border-2 border-ink bg-paperLite">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink">
          <TBCell label="Issue" value={`№${issueLabel}`} accent />
          <TBCell label="Pillar" value={PILLAR_LABEL[post.pillar] ?? post.pillar} />
          <TBCell label="Audience" value={AUDIENCE_LABEL[post.audience] ?? post.audience} />
          <TBCell label="Dated" value={isoDate} />
        </div>
        <div className="border-t-2 border-ink p-6 md:p-10">
          <h1
            className="font-display text-4xl md:text-[64px] leading-[1.02] tracking-tightest text-ink text-balance"
            style={{ fontVariationSettings: '"SOFT" 20, "WONK" 1, "opsz" 144' }}
          >
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="font-body italic text-xl md:text-2xl text-graphite mt-5 max-w-[60ch] text-pretty">
              {post.excerpt}
            </p>
          )}
          <div className="meta mt-6 flex items-center gap-3">
            <span>By</span>
            <span className="text-ink">Construction AI Brief</span>
            <span aria-hidden>·</span>
            <a
              href="/about"
              className="text-ink hover:text-accent underline decoration-accent decoration-1 underline-offset-2"
            >
              About this publication
            </a>
          </div>
        </div>
      </div>

      {/* ── Drop cap accent + body ─────────────────────────────────── */}
      <div className="prose-cab mt-14 first-letter:font-display first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-accent">
        <MDXRemote
          source={post.body}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>

      <SubscribeCTA />

      {/* ── Sources block — like a drawing reference list ──── */}
      {post.sources && post.sources.length > 0 && (
        <footer className="max-w-prose mx-auto mt-16 border-t-2 border-ink pt-6">
          <div className="meta-strong mb-4 flex items-center gap-3">
            <span className="flag">Refs</span>
            <span>Sources cited in this issue</span>
          </div>
          <ol className="space-y-2 font-mono text-xs">
            {post.sources.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="text-graphite shrink-0">
                  R{String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={s}
                  className="text-ink hover:text-accent underline decoration-accent decoration-1 underline-offset-2 break-all"
                >
                  {s}
                </a>
              </li>
            ))}
          </ol>
        </footer>
      )}

      {/* ── Approved-stamp flourish ────────────────────────────── */}
      <div className="max-w-prose mx-auto mt-12 flex items-center justify-between gap-4">
        <div className="meta">End of sheet — issue №{issueLabel}</div>
        <div
          className="font-mono text-xs uppercase tracking-wide2 text-stamp border-2 border-stamp px-3 py-1.5"
          style={{ transform: "rotate(-3deg)" }}
        >
          Published · {isoDate}
        </div>
      </div>
    </article>
  );
}

function TBCell({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="p-4 md:p-5">
      <div className="meta text-graphite">{label}</div>
      <div
        className={`font-mono text-sm md:text-base mt-1 uppercase tracking-wide2 ${
          accent ? "text-accent" : "text-ink"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
