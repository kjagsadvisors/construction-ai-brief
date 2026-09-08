# Construction AI Brief — analytics setup + monitoring

## What's already collecting

| Source | Status | What it tracks | Access |
|---|---|---|---|
| **Vercel Web Analytics** | ✅ Live (cookieless, no user consent required) | Pageviews, top pages, top referrers, country | https://vercel.com/kjagsadvisors-projects/construction-ai-brief/analytics |
| **Beehiiv subscriber analytics** | ✅ Live | Subs gained/lost, open rate, click rate, top referrer source | https://app.beehiiv.com/dashboard |
| **IndexNow submission log** | ✅ Live | Which URLs Bing/MSN/DuckDuckGo know about | `data/indexnow-pushed.jsonl` |
| **RSS feed pulls** | ❌ no provider yet (Feedly stats need a paid plan) | — | n/a |
| **Search referrer keywords (Google)** | ✅ Claimed 2026-09-08 (URL-prefix property, HTML-tag auto-verified) | Which queries actually surface CAB | https://search.google.com/search-console?resource_id=https%3A%2F%2Fconstructionaibrief.com%2F |
| **Search referrer keywords (Bing)** | ✅ Claimed (Google sign-in), sitemaps resubmitted 2026-09-08 | Same for Bing/MSN/DuckDuckGo/Yahoo | https://www.bing.com/webmasters (sign in with Google) |
| **Google Publisher Center** | ✅ Publication "Construction AI Brief" added 2026-09-08 | Google News publication entity (news pages are auto-generated since March 2025 — no separate application exists) | https://publishercenter.google.com/ |
| **Bing News** | ✅ Covered via Bing Webmaster (PubHub retired June 2025 — news inclusion is now algorithmic: verified site + news-sitemap + IndexNow is the whole application) | — | n/a |

## Setup status — DONE 2026-09-08

Everything below was completed on 2026-09-08: GSC claimed (both sitemaps submitted; sitemap.xml re-read same day, 250 pages discovered), Bing Webmaster claimed (both sitemaps resubmitted, processing), IndexNow fixed (the May 20 403 was stale; 245 backlog URLs submitted via `data/indexnow-submit.mjs` — run it after each publish), and Vercel Analytics confirmed live (last 30 days: 135 visitors / 342 pageviews, top referrers google.com and chatgpt.com). The steps below are kept for reference only.

## One-time setup steps (reference — already done)

### 1. Google Search Console (~5 min)

- Visit https://search.google.com/search-console/welcome
- Choose **URL prefix** (not Domain) — easier than DNS verification
- Enter `https://constructionaibrief.com`
- Pick **HTML tag** verification method
- Copy the verification value (the part after `content="..."`)
- In Vercel: project → Settings → Environment Variables → add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = the copied value → Save → Redeploy
- Back in GSC: click Verify (it'll find the tag now)
- Submit the sitemap: `https://constructionaibrief.com/sitemap.xml` and the news sitemap `https://constructionaibrief.com/news-sitemap.xml`

### 2. Bing Webmaster Tools (~5 min)

- Visit https://www.bing.com/webmasters
- Add the site: `https://constructionaibrief.com`
- Choose **Meta tag** verification
- Copy the `content` value from the `<meta name="msvalidate.01" content="...">` they give you
- In Vercel: add env var `NEXT_PUBLIC_BING_VERIFY` = that value → Save → Redeploy
- Back in Bing: click Verify
- Submit the sitemap (same URLs as above)

### 3. Cloudflare Web Analytics (optional, backup channel — ~3 min)

Free, cookieless, gives a second source of truth that doesn't depend on Vercel.

- Visit https://dash.cloudflare.com/?to=/:account/web-analytics → Add a site → `constructionaibrief.com` → JS snippet method
- Copy the `<script>` tag they give you
- Paste it into `apps/web/app/layout.tsx` just before `</body>` (or skip if you trust Vercel Analytics alone)

## Monitoring — what runs automatically

The `cab-weekly-audit` routine (Monday 10am ET) now produces a weekly email to keeranj@kjagsadvisors.com that includes:

- **Subscribers** — total + new this week, source breakdown (Beehiiv)
- **Open rate** — last 4 issues, trailing 28-day avg
- **Click rate** — last 4 issues, trailing 28-day avg
- **Pageviews** — top 10 pages last 7 days, % change vs prior 7 days (Vercel Analytics link)
- **Top referrers** — last 7 days
- **IndexNow** — URLs submitted, count of new URLs successfully indexed
- **GSC + Bing impressions** — once you claim the properties; the routine reads them weekly

Plus a **drift report**: any banned phrases shipped, low-citation-rate posts, missed publication days.

## What to look at, when

- **Daily** — nothing. The autopilot handles it.
- **Sundays** — read the weekly audit email (~5 min). It tells you what's working, what's drifting.
- **Monthly** — open Vercel Analytics dashboard and GSC. Look for new search queries we're starting to rank for.

If the autopilot detects a problem (banned phrase shipped, open rate < 50% of trailing avg, GSC errors), it auto-writes `data/PAUSED.flag` and the next email tells you why.
