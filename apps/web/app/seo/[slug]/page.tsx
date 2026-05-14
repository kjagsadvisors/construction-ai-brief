import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { SubscribeCTA } from "@/components/SubscribeCTA";

const SEO_DIR = join(process.cwd(), "content", "seo");
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionaibrief.com";

interface SeoPage {
  slug: string;
  title: string;
  description: string;
  target_keyword: string;
  audience: string;
  sources: string[];
  faqs: Array<{ q: string; a: string }>;
  updated_at: string;
  body: string;
}

function getSeoPage(slug: string): SeoPage | null {
  let raw: string;
  try {
    raw = readFileSync(join(SEO_DIR, `${slug}.mdx`), "utf8");
  } catch {
    return null;
  }
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? "Untitled"),
    description: String(data.description ?? ""),
    target_keyword: String(data.target_keyword ?? ""),
    audience: String(data.audience ?? "none"),
    sources: Array.isArray(data.sources) ? data.sources.map(String) : [],
    faqs: Array.isArray(data.faqs) ? data.faqs : [],
    updated_at: String(data.updated_at ?? "2026-01-01"),
    body: content,
  };
}

export function generateStaticParams() {
  let files: string[] = [];
  try {
    files = readdirSync(SEO_DIR).filter((f) => f.endsWith(".mdx"));
  } catch {}
  return files.map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const p = getSeoPage(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    keywords: p.target_keyword,
  };
}

export default function SeoPage({ params }: { params: { slug: string } }) {
  const p = getSeoPage(params.slug);
  if (!p) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    keywords: p.target_keyword,
    dateModified: new Date(p.updated_at).toISOString(),
    image: `${SITE}/opengraph-image`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/seo/${p.slug}` },
    author: { "@type": "Organization", name: "Construction AI Brief", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "Construction AI Brief",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/icon` },
    },
  };

  const faqJsonLd =
    p.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: p.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <article className="max-w-sheet mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <header className="mb-10">
        <p className="meta mb-3">Guide · updated {new Date(p.updated_at).toISOString().slice(0, 10).replace(/-/g, ".")}</p>
        <h1
          className="font-display text-4xl md:text-[60px] leading-[1.05] tracking-tightest text-ink text-balance"
          style={{ fontVariationSettings: '"SOFT" 20, "WONK" 1, "opsz" 144' }}
        >
          {p.title}
        </h1>
        {p.description && (
          <p className="font-body italic text-xl md:text-2xl text-graphite mt-5 max-w-[60ch] text-pretty">
            {p.description}
          </p>
        )}
      </header>

      <div className="prose-cab">
        <MDXRemote
          source={p.body}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>

      {p.faqs.length > 0 && (
        <section className="prose-cab mt-16 border-t-2 border-ink pt-8">
          <h2>Frequently asked questions</h2>
          {p.faqs.map((f, i) => (
            <div key={i} className="my-6">
              <h3 className="font-display text-xl text-ink">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>
      )}

      <SubscribeCTA />

      {p.sources.length > 0 && (
        <footer className="prose-cab mt-12 border-t-2 border-ink pt-6">
          <div className="meta-strong mb-4 flex items-center gap-3">
            <span className="flag">Refs</span>
            <span>Sources cited in this guide</span>
          </div>
          <ol className="space-y-2 font-mono text-xs">
            {p.sources.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="text-graphite shrink-0">R{String(i + 1).padStart(2, "0")}</span>
                <a
                  href={s}
                  rel="external nofollow noopener"
                  className="text-ink hover:text-accent underline decoration-accent decoration-1 underline-offset-2 break-all"
                >
                  {s}
                </a>
              </li>
            ))}
          </ol>
        </footer>
      )}
    </article>
  );
}
