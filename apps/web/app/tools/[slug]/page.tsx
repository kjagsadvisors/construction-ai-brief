import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const TOOLS_DIR = join(process.cwd(), "content", "tools");
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionaibrief.com";

interface Tool {
  slug: string;
  name: string;
  category: string;
  verdict: string;
  vendor_url?: string;
  pricing?: string;
  audience: string;
  updated_at: string;
  body: string;
  faqs?: Array<{ q: string; a: string }>;
}

function getTool(slug: string): Tool | null {
  let raw: string;
  try {
    raw = readFileSync(join(TOOLS_DIR, `${slug}.mdx`), "utf8");
  } catch {
    return null;
  }
  const { data, content } = matter(raw);
  return {
    slug,
    name: String(data.name ?? "Unknown tool"),
    category: String(data.category ?? "Construction AI"),
    verdict: String(data.verdict ?? ""),
    vendor_url: data.vendor_url ? String(data.vendor_url) : undefined,
    pricing: data.pricing ? String(data.pricing) : undefined,
    audience: String(data.audience ?? "gc_ops"),
    updated_at: String(data.updated_at ?? data.date ?? "2026-01-01"),
    faqs: Array.isArray(data.faqs) ? data.faqs : [],
    body: content,
  };
}

export function generateStaticParams() {
  let files: string[] = [];
  try {
    files = readdirSync(TOOLS_DIR).filter((f) => f.endsWith(".mdx"));
  } catch {}
  return files.map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const t = getTool(params.slug);
  if (!t) return {};
  return {
    title: `${t.name} review`,
    description: t.verdict,
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const t = getTool(params.slug);
  if (!t) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: t.name,
    description: t.verdict,
    category: t.category,
    url: t.vendor_url,
    review: {
      "@type": "Review",
      author: {
        "@type": "Organization",
        name: "Construction AI Brief",
        url: SITE,
      },
      reviewBody: t.verdict,
      datePublished: t.updated_at,
    },
  };

  const faqJsonLd =
    t.faqs && t.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: t.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <article className="max-w-sheet mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="border-2 border-ink bg-paperLite">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink">
          <TBCell label="Tool" value={t.name} accent />
          <TBCell label="Category" value={t.category} />
          <TBCell label="For" value={t.audience.replace("_", " ")} />
          <TBCell
            label="Updated"
            value={new Date(t.updated_at).toISOString().slice(0, 10).replace(/-/g, ".")}
          />
        </div>
        <div className="border-t-2 border-ink p-6 md:p-10">
          <h1
            className="font-display text-4xl md:text-[56px] leading-[1.05] tracking-tightest text-ink text-balance"
            style={{ fontVariationSettings: '"SOFT" 20, "WONK" 1, "opsz" 144' }}
          >
            {t.name} review
          </h1>
          <p className="font-body italic text-xl md:text-2xl text-graphite mt-5 max-w-[60ch] text-pretty">
            {t.verdict}
          </p>
          {t.vendor_url && (
            <p className="meta mt-6">
              Vendor site:{" "}
              <a
                href={t.vendor_url}
                rel="external nofollow noopener"
                className="text-ink hover:text-accent underline decoration-accent decoration-1 underline-offset-2"
              >
                {t.vendor_url}
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="prose-cab mt-14">
        <MDXRemote
          source={t.body}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
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
