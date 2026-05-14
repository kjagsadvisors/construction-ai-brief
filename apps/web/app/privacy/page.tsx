export const metadata = {
  title: "Privacy",
  description:
    "How Construction AI Brief collects, uses, and protects your data.",
};

const LAST_UPDATED = "2026-05-14";

export default function PrivacyPage() {
  return (
    <article className="max-w-sheet mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-20">
      <header className="mb-12">
        <p className="meta mb-3">
          Privacy policy · last updated {LAST_UPDATED.replace(/-/g, ".")}
        </p>
        <h1
          className="font-display text-5xl md:text-[64px] tracking-tightest text-ink leading-[1.05] text-balance"
          style={{ fontVariationSettings: '"SOFT" 25, "WONK" 1, "opsz" 144' }}
        >
          What we collect, why, and how to get rid of it.
        </h1>
      </header>

      <div className="prose-cab">
        <p>
          Construction AI Brief is a newsletter. We try to collect as little
          from you as possible while still being able to send you what you
          signed up for and improve the site over time. This page lays out
          what we do collect, who handles it, and how to get your data
          removed.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Email address</strong> — when you subscribe. Used to
            deliver the newsletter and (rarely) one-off editor's notes.
          </li>
          <li>
            <strong>Role segment</strong> — when you tell us whether you're a
            GC, sub, or estimator. Used to tailor a small portion of each
            issue and the CTAs you see.
          </li>
          <li>
            <strong>Engagement signals</strong> — opens, clicks, and
            unsubscribes recorded by our email service provider (Beehiiv).
            Used to tune deliverability and editorial direction.
          </li>
          <li>
            <strong>Anonymous page analytics</strong> — pageviews and basic
            referrer info via Vercel Analytics. No cookies, no IP storage, no
            cross-site tracking.
          </li>
        </ul>

        <p>
          That's it. We do not collect your name unless you give it to us in
          an email reply. We do not run Facebook, LinkedIn, or Google
          retargeting pixels.
        </p>

        <h2>Who handles the data</h2>
        <ul>
          <li>
            <strong>Beehiiv</strong> — our email service provider. Handles
            subscriber list, deliverability, opens/clicks tracking, and
            unsubscribes. Their privacy policy:{" "}
            <a
              href="https://www.beehiiv.com/privacy"
              rel="external noopener"
            >
              beehiiv.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Vercel</strong> — hosts the website and provides
            privacy-preserving analytics (no cookies, no IPs retained). Their
            privacy policy:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              rel="external noopener"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </li>
        </ul>
        <p>
          We do not sell or rent your email address. We do not share the
          subscriber list with any third party except the providers listed
          above strictly so they can perform their service.
        </p>

        <h2>Cookies</h2>
        <p>
          The website does not set tracking cookies. Beehiiv's hosted
          subscribe page may set a session cookie required for the subscribe
          flow; this is governed by Beehiiv's privacy policy.
        </p>

        <h2>Your rights</h2>
        <ul>
          <li>
            <strong>Unsubscribe.</strong> Every issue has a one-click
            unsubscribe link in the footer. Once you unsubscribe, you stop
            receiving mail immediately.
          </li>
          <li>
            <strong>Access or delete your data.</strong> Email{" "}
            <a href="mailto:privacy@constructionaibrief.com">
              privacy@constructionaibrief.com
            </a>{" "}
            and we will return what we have on file or delete it within seven
            business days.
          </li>
          <li>
            <strong>Correct your data.</strong> Same address — tell us what's
            wrong and we'll fix it.
          </li>
        </ul>

        <h2>Children</h2>
        <p>
          The newsletter is intended for adults working in commercial
          construction. We do not knowingly collect data from anyone under
          16. If you believe a child has subscribed, email us and we will
          remove the record.
        </p>

        <h2>Who controls the data</h2>
        <p>
          The data controller is Rankee LLC (d/b/a kjags advisors), the
          publisher of Construction AI Brief. Reach the editor at{" "}
          <a href="mailto:keeranj@kjagsadvisors.com">
            keeranj@kjagsadvisors.com
          </a>
          .
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If anything here changes materially, we will update the
          "last updated" date at the top of this page and note the change in
          the next issue of the newsletter.
        </p>
      </div>
    </article>
  );
}
