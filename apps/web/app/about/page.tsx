export const metadata = {
  title: "About",
  description:
    "Construction AI Brief is an editorial property covering AI in commercial construction. Three issues a week.",
};

export default function AboutPage() {
  return (
    <article className="max-w-sheet mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-20">
      <header className="mb-12">
        <p className="meta mb-3">About — masthead + disclosure</p>
        <h1
          className="font-display text-5xl md:text-[64px] tracking-tightest text-ink leading-[1.05] text-balance"
          style={{ fontVariationSettings: '"SOFT" 25, "WONK" 1, "opsz" 144' }}
        >
          The honest read on AI in commercial construction.
        </h1>
      </header>

      <div className="prose-cab">
        <p>
          Construction AI Brief is a media property covering AI for general
          contractors, trade subs, and estimators in commercial construction.
          We sit next to the people doing the work and report on what actually
          ships on Monday morning, what's a waste of money, and what the
          honest tradeoffs are.
        </p>

        <h2>What you'll read here</h2>
        <p>Three issues per week. Five pillars.</p>
        <ul>
          <li>
            <strong>Tuesday — Punch list.</strong> News digest. Five to seven
            items that mattered this week, each with a "why this matters to a
            contractor" line and a cited source.
          </li>
          <li>
            <strong>Thursday — Deep dive.</strong> Rotates: tool teardown,
            workflow playbook, or anonymized field report from a real client
            engagement.
          </li>
          <li>
            <strong>Friday — One chart.</strong> A single piece of data,
            sourced, with three short paragraphs on what it shows and what to
            watch next.
          </li>
        </ul>

        <h2>Editorial disclosure</h2>
        <p>
          We do not write vendor PR. We disclose any client relationship when
          it's directly relevant to a piece. We do not bury negative reviews
          of tools we ourselves resell or implement. Every stat in every issue
          traces to a public, cited source. If you spot something that looks
          off,{" "}
          <a href="mailto:editor@constructionaibrief.com">
            email the editor
          </a>{" "}
          and we'll either correct it on the public record or explain why we
          stand by it.
        </p>

        <h2>Corrections policy</h2>
        <p>
          When we get a fact wrong, we fix it inline with a strike-through, a
          dated correction note at the bottom of the article, and an
          acknowledgement in the next issue if the error materially changed
          the takeaway. We don't silently rewrite history. To request a
          correction, email{" "}
          <a href="mailto:corrections@constructionaibrief.com">
            corrections@constructionaibrief.com
          </a>
          .
        </p>

        <h2>Subscribe</h2>
        <p>
          Free, three issues per week, one-click unsub.{" "}
          <a href="/#signup">Sign up on the home page</a>.
        </p>
      </div>
    </article>
  );
}
