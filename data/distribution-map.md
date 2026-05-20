# Construction AI Brief — distribution map

Every traffic channel where Construction AI Brief can show up, ranked by autopilot leverage. Reader has heard "Google" — this map is everything else.

---

## Tier 1 — Search engines (each is its own index)

Different engines, different ranking algorithms, different audiences. **Submitting once to each unlocks parallel traffic streams.**

| Engine | Powers | How to get in | Autopilot status |
|---|---|---|---|
| **Google** | Google.com, Google Discover, Chrome | Google Search Console + sitemap | ✅ Live (sitemap + news sitemap) |
| **Bing** | **MSN, Microsoft Edge new tab, Windows widgets, Yahoo, DuckDuckGo, ChatGPT search, Copilot** | Bing Webmaster Tools + IndexNow | ⚠️ **Ship IndexNow this commit** |
| **IndexNow** | Bing + Yandex + Naver + Seznam.cz in one push | Generate key, serve at `/{key}.txt`, POST URLs to api.indexnow.org | ⚠️ **Ship this commit** |
| **DuckDuckGo** | Privacy-focused users (~25M daily) | Auto-indexed via Bing partnership | ✅ via Bing |
| **Yandex** | Russian audience | Yandex Webmaster | ✅ via IndexNow |
| **Brave Search** | Brave Browser default | Brave Search submit URL | manual one-time |
| **Kagi** | Paid search ($10/mo), 50K+ users, tech-leaning | No submission; pulls from Bing index | ✅ via Bing |
| **Naver** | Korean audience | Naver Webmaster | ✅ via IndexNow |
| **Ecosia** | Bing-powered, 20M users | Auto via Bing | ✅ via Bing |

**The big unlock here: shipping IndexNow today instantly indexes us in Bing → which means MSN/Edge new tab/Windows widgets/DuckDuckGo/Yahoo/Kagi pick us up. That's the answer to the MSN question — Bing is the upstream for all of it.**

---

## Tier 2 — News aggregators / portals

Each aggregator has its own publisher onboarding. Once approved, every new article auto-flows to massive audiences.

| Aggregator | Reach | Approval requirements | Status |
|---|---|---|---|
| **Microsoft Start / MSN** | Edge new tab default + Windows lock-screen news widget + MSN.com (~1B users globally) | Microsoft Start publisher application (free). Needs RSS feed + 30-day publication history + corrections policy. | ⏳ Ready to apply after 30 days |
| **Apple News** | iPhone/iPad/Mac built-in app, ~125M users (US) | Apple News Publisher (free) — RSS-based onboarding. Needs editorial standards + apple-news-format-friendly RSS | ⏳ Ready to apply after 30 days |
| **Google Discover** | Mobile Google feed on Chrome (massive on Android) | No application — earned via quality + topical authority. Needs high-res OG images, mobile-first | ✅ All requirements met, earns over time |
| **Google News** | Google News tab + Top Stories carousels | Google Publisher Center | ⏳ Apply after 30 days |
| **Flipboard** | Curated reading app, ~150M users | Free Flipboard Publisher Tools — RSS-based | ⏳ Apply now (no waiting period) |
| **SmartNews** | Mobile news app, ~50M users | SmartNews Publisher Program (selective) | ⏳ Apply after 30 days |
| **NewsBreak** | Mobile news app, ~50M US users | NewsBreak Creator Program | ⏳ Apply now |
| **Feedly** | RSS reader, ~15M users | Auto-pulled from RSS, no submission | ✅ Live via `/feed.xml` |
| **Inoreader** | RSS reader | Auto via RSS | ✅ Live |
| **Pocket** | Firefox built-in + standalone app | Pocket Curator program (selective) — relevant for AEC/AI content | ⏳ Apply after 50+ articles |

---

## Tier 3 — LLM / AI search

Where AI assistants pull answers from. Different optimization than Google.

| Surface | What it weights | Status |
|---|---|---|
| **ChatGPT search** | Bing-backed + native crawl + brand entity recognition | ✅ via IndexNow → Bing; `/llms.txt` for direct citation |
| **Claude w/ web search** | Anthropic's crawl + heavy weight on cited stats | ✅ `/llms.txt`, citation density, NewsArticle schema |
| **Perplexity** | Own web crawler + Bing fallback | ✅ via Bing; benefits from FAQ schema |
| **Google Gemini** | Google grounding | ✅ via Google indexing |
| **You.com** | Bing + own | ✅ via Bing |
| **Brave AI** | Brave Search index | ✅ via Bing partnership |
| **Copilot (MS)** | Bing | ✅ via IndexNow |

---

## Tier 4 — Social distribution + algorithmic feeds

Each platform is its own algorithm. The IG carousel routine + LinkedIn drafts already cover this for some.

| Platform | How CAB shows up | Autopilot status |
|---|---|---|
| **LinkedIn Company Page** | Daily long-form post to the Construction AI Brief company page. **Personal LinkedIn is explicitly off-limits — the autopilot will skip the LinkedIn step entirely if the company page is unreachable rather than fall back to personal.** | ⏳ drafted by `cab-socials-daily`; posting waits on company page setup (see `data/social/COMPANY-PAGE-SETUP.md`) |
| **LinkedIn Articles** | Cross-published full articles with canonical link back to CAB | ⚠️ **New routine in this commit** |
| **LinkedIn Newsletter** | Native LinkedIn newsletter, ~10× LinkedIn organic reach | manual one-time setup; cross-pub via API after |
| **X (Twitter)** | 4-6 tweet thread per issue | ✅ drafted; needs account |
| **Threads** | Looser tone, posted via Chrome MCP | ✅ drafted; needs account |
| **Instagram (carousel)** | 6-slide via Canva MCP | ✅ generated by `cab-socials-daily`; needs account |
| **Facebook Page** | Auto-share each issue + 1 carousel/week to facebook.com/constructionaibrief. Lower leverage for AEC audience but free brand surface. | ✅ Page live; posting via cab-socials-daily Chrome MCP step |
| **Bluesky** | Growing tech-savvy audience | TBD when adoption justifies |
| **Mastodon** | Federated, tech-leaning, small but loyal | TBD |
| **TikTok** | When Higgsfield video gen is wired | future routine |
| **Pinterest** | Visual SEO — pins surface in Google image search + Pinterest internal search | ⚠️ **New routine in this commit** |
| **Reddit** | Value-first comments + occasional submissions | drafted by `cab-outreach-weekly`; manual post |
| **Hacker News** | Show HN / News submission for high-quality teardowns | ⚠️ **Add to outreach routine timing** |
| **Lobsters** | Smaller HN-equivalent, tech-focused | Manual when relevant |

---

## Tier 5 — Cross-republication (with canonical tags)

Republish each newsletter article on other platforms with canonical link pointing back to `constructionaibrief.com`. Doesn't dilute SEO (canonical signals Google we own it); does add new reader audiences.

| Platform | Audience | Republish path |
|---|---|---|
| **Medium** | 100M+ readers, AI/tech tagged content gets surfaced | Medium API (POST /posts) with canonicalUrl |
| **Hashnode** | Developer-heavy, growing AI section | Hashnode GraphQL API + canonicalUrl |
| **Dev.to** | Tech-leaning, AI vertical active | Dev.to API + canonical_url |
| **LinkedIn Articles** | LinkedIn network amplification | LinkedIn Posts API (or Chrome MCP) |
| **Substack notes** | Substack's adjacent reader pool | Manual (Substack doesn't accept republications cleanly) |

The new `cab-republish-cross-platform` routine drafts the cross-platform versions on every newsletter ship.

---

## Tier 6 — Newsletter aggregators / discovery

Free directory listings — submit once, get exposure to readers actively looking for newsletters.

| Aggregator | Submit at | Status |
|---|---|---|
| **Reletter** | reletter.com | Manual one-time |
| **Letterlist** | letterlist.com | Manual one-time |
| **Newsletter Stack** | newsletterstack.com | Manual one-time |
| **Refind** | refind.com (curator-pushed) | Manual one-time |
| **The Sample** | thesample.ai (newsletter-of-the-day swap network) | Manual one-time; high leverage |
| **Inbox Reads** | inboxreads.co | Manual one-time |
| **Substack-of-the-week** style lists | various | weekly outreach routine drafts pitches |

---

## Tier 7 — Trade industry channels

The slow but high-quality path. Each gets one direct relationship.

| Channel | Audience | Path |
|---|---|---|
| **AGC chapter newsletters** | Local GC contractors | Direct pitch from outreach routine, propose monthly column |
| **ABC chapter newsletters** | Open-shop contractors | Same |
| **MCAA chapter newsletters** | Mechanical sub leadership | Same |
| **NECA chapters** | Electrical | Same |
| **AEC Tech podcasts** | BIM After Dark, ConTechCrew, Bricks & Bytes, Construction Disruptors | Outreach for guest spot |
| **Conference panels** | BILT, AU, AEC Next, ENR FutureTech | Outreach for speaker proposals |

---

## What the autopilot ships THIS commit

1. **IndexNow integration** — Free, instant indexing into Bing/Yandex/Naver/Seznam (= MSN/Edge/DuckDuckGo/Yahoo/Kagi/ChatGPT-search downstream). New routine pushes every new URL within 60 min of commit.

2. **Cross-platform republication routine** — On every newsletter ship, generates Medium/Hashnode/Dev.to/LinkedIn Article versions with canonical tag pointing to CAB. Posts via APIs where keys exist, queues drafts otherwise.

3. **Pinterest pin drafts** — Daily, from the IG carousel: 3 Pinterest pins with target-keyword captions for visual SEO. Queues to `data/social/{date}-pinterest.md`.

4. **HN submission watcher** — Adds to the existing weekly outreach routine: if any post in the week scored ≥9 on critic's "would Keeran publish this," suggest it as a Show HN / news submission with optimal timing (Tue 9am ET historically best).

5. **Distribution-map.md** — This file. The autopilot reads it as ground truth for which channels to push to.

6. **30-day-mark application packet** — When 30 days of consistent publishing hit (mid-June 2026), the autopilot generates ready-to-submit application packets for Microsoft Start + Apple News + Flipboard + SmartNews + NewsBreak. Keeran clicks Submit; the routine has pre-filled every field.

---

## Manual one-time submissions (5 minutes each, do whenever)

Even before the 30-day mark, these are submittable today:

1. **Bing Webmaster Tools** — bing.com/webmasters → verify domain → submit sitemap
2. **Yandex Webmaster** — webmaster.yandex.com (Russian audience)
3. **Brave Search** — search.brave.com/help/submit-url
4. **Flipboard Publisher** — about.flipboard.com/publishers
5. **NewsBreak Creator** — creator.newsbreak.com
6. **The Sample** — thesample.ai/publishers
7. **Reletter** — reletter.com/submit
8. **Refind** — refind.com (apply for curator)

Wait until 30 days of consistent publishing for these (they reject under-100-articles publishers):

1. **Google Publisher Center** — publishercenter.google.com
2. **Microsoft Start Publisher Network**
3. **Apple News Publisher**
4. **SmartNews Publisher Program**
5. **Google AdSense / AdManager** (monetization, deferred)
