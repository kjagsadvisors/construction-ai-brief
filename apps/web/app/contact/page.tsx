export const metadata = {
  title: "Contact",
  description:
    "How to reach Construction AI Brief — corrections, tips, story leads, press, and partnerships.",
};

export default function ContactPage() {
  return (
    <article className="max-w-sheet mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-20">
      <header className="mb-12">
        <p className="meta mb-3">Contact</p>
        <h1
          className="font-display text-5xl md:text-[64px] tracking-tightest text-ink leading-[1.05] text-balance"
          style={{ fontVariationSettings: '"SOFT" 25, "WONK" 1, "opsz" 144' }}
        >
          How to reach us.
        </h1>
      </header>

      <div className="prose-cab">
        <h2>Editorial — tips, leads, corrections</h2>
        <p>
          Got something we should cover? Spotted a fact that doesn't check out?
          Email{" "}
          <a href="mailto:hello@constructionaibrief.com">
            hello@constructionaibrief.com
          </a>
          . We read every message.
        </p>

        <h2>Corrections policy</h2>
        <p>
          Construction AI Brief publishes 3× weekly and cites every stat. When
          we get a fact wrong, we fix it — inline, with a strike-through, a
          dated correction note at the bottom of the article, and an
          acknowledgement in the next issue if the error materially changed
          the takeaway. We do not silently rewrite history. To request a
          correction, email{" "}
          <a href="mailto:corrections@constructionaibrief.com">
            corrections@constructionaibrief.com
          </a>{" "}
          with the URL, the specific claim, and a citation supporting the
          correction.
        </p>

        <h2>Press + partnerships</h2>
        <p>
          For press inquiries, podcast guest requests, or partnership /
          newsletter swap proposals, email{" "}
          <a href="mailto:hello@constructionaibrief.com">
            hello@constructionaibrief.com
          </a>
          . We respond within two business days.
        </p>

        <h2>Editorial team</h2>
        <p>
          Construction AI Brief is a small editorial property. Keeran
          Jagadesan is the editor.
        </p>

        <h2>Submit a tool for teardown</h2>
        <p>
          Building an AEC AI tool you want reviewed? We accept submissions
          but make no promise of coverage and pay zero attention to PR
          pressure. Tool teardowns include what your product can't do — if
          that's a dealbreaker, please don't pitch us. Send a one-paragraph
          description + a working demo URL to{" "}
          <a href="mailto:tips@constructionaibrief.com">
            tips@constructionaibrief.com
          </a>
          .
        </p>

        <h2>Subscribe</h2>
        <p>
          Free, three issues a week.{" "}
          <a href="/#signup">Sign up on the home page</a>.
        </p>
      </div>
    </article>
  );
}
