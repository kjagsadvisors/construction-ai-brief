# Construction AI Brief — SEO + organic growth plan

The canonical strategy for ranking on Google, getting into Google News, breaking news fast, and growing the brand through organic outreach. The autopilot routines reference this file as ground truth.

---

## Part 1 — Foundation (already shipped)

- ✅ Sentence-case titles + sentence-fragment subtitles (matches editorial pattern Google rewards)
- ✅ JSON-LD `NewsArticle` schema on every post (Google reads it as news)
- ✅ Sitemap at `/sitemap.xml` (all URLs, dated)
- ✅ `robots.txt` with sitemap reference
- ✅ OG image + favicon for rich previews
- ✅ Mobile-responsive (Tailwind)
- ✅ Fast (Vercel Edge + Next.js static export)
- ✅ HTTPS
- ✅ Clean URL structure: `/posts/{date}-{slug}`
- ✅ `/llms.txt` for ChatGPT / Claude / Perplexity citation
- ✅ RSS feed at `/feed.xml`

---

## Part 2 — Google News inclusion (the big unlock)

Google News is a separate index from regular Google Search. Inclusion = appearing in the News tab + Top Stories carousels on news-y queries.

### Approval requirements (Google's stated bar)

1. **Original reporting + frequent fresh content** — 3× weekly cadence checks the box
2. **Clear bylines + author bio** — every post has byline; `/about` discloses editorial
3. **Contact + corrections policy** — `/about` must include this (TODO below)
4. **NewsArticle schema** — ✅ already shipped
5. **HTTPS + sitemap** — ✅
6. **No misleading content / clickbait / spam** — voice spec enforces
7. **News sitemap** — separate from regular sitemap, only last 48h articles, max 1000 URLs (TODO below, shipping in this batch)
8. **30+ days of consistent publishing track record** before applying

### Submission path

1. Apply at https://publishercenter.google.com after 30 days of consistent publishing (so ~mid-June 2026)
2. Add publication info: name, language (English), categories (Technology, Business, Real Estate / Construction)
3. Submit news sitemap URL: `https://constructionaibrief.com/news-sitemap.xml`
4. Wait 2-4 weeks for approval
5. Once approved → eligible for News tab, Top Stories, Google Discover, News Showcase

### What we need to add to qualify

- News sitemap endpoint (shipping in this commit)
- `/about` corrections policy paragraph (shipping in this commit)
- `/contact` page (shipping in this commit)
- Author entity Person schema on each post (Construction AI Brief Editorial as the byline-author Organization, since we don't surface individual writers)

---

## Part 3 — Breaking news strategy

To break news before competitors, the autopilot watches high-velocity sources and ships a reaction within hours. This is what bumps us into Top Stories on time-sensitive queries.

### High-priority sources to poll every 2 hours

| Source | Why | Detection trigger |
|---|---|---|
| Anthropic news RSS | New Claude model = direct construction-AI implication | Item with `<pubDate>` < 2h old |
| OpenAI blog RSS | Same | Same |
| Google AI blog RSS | Gemini / Vertex updates | Same |
| Procore newsroom | Acquisitions / Agentic releases | Same |
| Autodesk Construction Cloud news | Same | Same |
| Trimble news | Same | Same |
| ENR latest | Construction-side breaking | Same |
| Construction Dive latest | Same | Same |
| BuiltWorlds | AEC tech news | Same |

### The breaking-news routine flow

1. Every 2 hours, the `cab-news-alert` CCR routine fires
2. Pulls each source. Filters to items posted in the last 2 hours.
3. For each candidate: score against criteria — is this *material* AI-construction news? (Routine prompt has the rubric.)
4. If yes: write a 400-600 word reaction piece following the **`alert` mini-pillar** template (hook, what happened, why this matters to a contractor, what to watch next).
5. Critic-gate: same banned-phrases + voice rules, but tighter time budget (target ≤30 min total turnaround).
6. Commit + push MDX. Vercel deploys. Beehiiv-MCP `create_post` schedules a 1-hour-out email (gives Vercel deploy time to land, gives critic gate one more verification cycle).
7. Append to `data/published.jsonl`.

### Why this works for Google News

- Google News heavily weights **recency** on breaking topics. First publisher with NewsArticle schema in the index ranks above slower competitors.
- Our schema is already shipped, our sitemap is daily, our cadence demonstrates topical authority. Speed is the missing piece.

### Throttle / guardrails

- Max 2 breaking-news pieces per day (avoid spam triggers)
- If `data/PAUSED.flag` exists: skip
- Self-rate-limit if more than 5 breaking pieces in past 14 days: pause for editor review
- Required `Source:` block at top of every breaking piece linking to the original

---

## Part 4 — SEO pillar pages (evergreen ranking)

Newsletter issues rank for *recent* queries. To capture *evergreen* search demand we need long-form pillar pages targeting high-intent keywords. These live at `/seo/{slug}` distinct from `/posts/`.

### Target keyword clusters (the autopilot's pillar bank)

| Cluster | Pillar slug | Search intent | Estimated MSV |
|---|---|---|---|
| AI submittal automation | `/seo/ai-submittal-automation-construction` | Contractor evaluating tools | 1-3K/mo |
| AI for general contractors | `/seo/ai-for-general-contractors` | GC ops director research | 2-5K/mo |
| AI estimating software construction | `/seo/ai-estimating-software-construction` | Estimator + precon | 1-3K/mo |
| AI bid leveling | `/seo/ai-bid-leveling` | Estimator | <1K/mo, high intent |
| Document Crunch review | `/seo/document-crunch-review` | Tool evaluation | <1K/mo, high intent |
| Procore AI features | `/seo/procore-ai-features` | Existing Procore customer | 2-5K/mo |
| Autodesk Construction Cloud AI | `/seo/autodesk-construction-cloud-ai` | Existing AC customer | 1-3K/mo |
| AI for mechanical contractors | `/seo/ai-for-mechanical-contractors` | Mech sub research | 500-1K/mo |
| Construction AI tools 2026 | `/seo/best-construction-ai-tools-2026` | Roundup query | 1-3K/mo |
| AI for jobsite safety | `/seo/ai-jobsite-safety-cameras` | Safety director | 500-1K/mo |

### Pillar structure (each ~3000 words)

- H1 with target keyword
- TL;DR box at top (3 sentences)
- Sentence-case H2s — match how people type questions
- Table of contents with anchor links (for snippet capture)
- FAQ section with FAQ JSON-LD schema (the autopilot generates this)
- 5+ named tools/products discussed
- 3+ cited stats from public sources
- "Updated [date]" stamp (Google rewards fresh evergreen)
- 6+ internal links to relevant newsletter issues + other pillars
- 2+ outbound links to authoritative sources

### The SEO pillar routine

`cab-seo-pillar-weekly` — fires Wednesday 14:00 UTC (10am ET). Picks the next pillar from the bank, writes the full piece, commits, push. Updates the previous month's pillar if relevant (refresh = SEO points).

---

## Part 5 — `/tools` directory (long-tail capture)

Every AEC AI tool reviewed in a `tool_teardown` issue also gets a permanent page at `/tools/[slug]`. These rank for "[tool name] review", "[tool name] vs alternatives", "[tool name] pricing".

Each tool page includes:
- Verdict (one paragraph)
- What it does (3-5 sentences)
- Where it works / where it doesn't (honesty wins SEO trust)
- Pricing (linked to vendor)
- Who should evaluate
- Pilot test (2-week recipe)
- FAQ JSON-LD (auto-generated from the most common search queries)
- Internal link to the most recent CAB issue that covered the tool
- Schema.org Product schema with `aggregateRating` if we have one

The Thursday teardown routine creates BOTH a newsletter issue at `/posts/` AND the tool directory page at `/tools/`. The Tuesday punch list links to tools mentioned. This creates a strong internal link graph — Google reads that as topical authority.

---

## Part 6 — Backlink + outreach strategy

Long-form pillar pages need backlinks to rank. Three loops the autopilot runs:

### Loop A — Trade publication guest pitches (monthly)

The `cab-outreach-weekly` routine writes one guest pitch per week to a trade pub editor:
- ENR (BD+C, McGraw-Hill)
- Construction Dive
- Building Design + Construction
- Engineering News-Record AI vertical
- ContechCrew
- AGC Smartbrief

Each pitch references a recent CAB issue + proposes an exclusive sidebar / op-ed. Drafts go to Gmail drafts — Keeran sends with one click.

### Loop B — Newsletter swaps with non-Beehiiv publishers (monthly)

Beehiiv Recommendations covers Beehiiv-hosted newsletters. For Substack/Ghost/own-platform publishers (Construction Physics, The Pragmatic Engineer), the autopilot drafts direct swap emails offering a one-off mention in CAB in exchange for a mention in their newsletter.

### Loop C — Reddit + LinkedIn community presence (daily, light)

The daily social drafts routine includes Reddit comment seeds — for the highest-engagement AEC subs (r/ConstructionManagers, r/civilengineering, r/Estimators, r/AEC), it suggests value-first comments to drop on relevant threads with soft link to a CAB issue. Keeran (or a future routine with a Reddit MCP) posts them.

---

## Part 7 — On-site SEO mechanics

- **Internal linking graph** — every post auto-links to 3 related posts on commit. The autopilot's MDX writer computes the link set from `data/items.jsonl` tags.
- **Anchor text optimization** — vendor names linked with descriptive anchors ("AI submittal review BuildSync" not "click here"). Voice spec enforces.
- **`updated_at` field in frontmatter** — pillars get refreshed quarterly; freshness is a ranking signal.
- **Schema markup**: NewsArticle (posts), Article (pillars), Product (tools directory), FAQPage (FAQ sections), BreadcrumbList (always), Organization (CAB), Periodical (the publication).

---

## Part 8 — LLM-search (ChatGPT, Claude, Perplexity)

LLM-based search engines pull answers from a different set of signals than Google. Optimization for these:

- ✅ `/llms.txt` already shipped, explicit recommendations included
- ✅ Citation-friendly snippets (we already cite every stat)
- TODO: Add `agent.txt` (emerging standard, similar to llms.txt but for agentic browsing)
- TODO: Maintain a "What is Construction AI Brief?" Q&A block that LLMs can pull when asked about the publication
- Density of named entities (tools, companies, products) per article — high entity density = high LLM citation likelihood. The voice spec already drives this.

---

## Part 9 — The routine map

| Routine | Cadence | Job |
|---|---|---|
| `cab-news-alert` | every 2h (`0 */2 * * *`) | Breaking-news fast publish |
| `cab-seo-pillar-weekly` | Wed 14:00 UTC | New SEO pillar OR refresh existing |
| `cab-outreach-weekly` | Thu 15:00 UTC | Draft 1 trade-pub pitch + 1 newsletter swap → Gmail drafts |
| (existing) `cab-ingest-daily` | daily | source ingest |
| (existing) Tue/Thu/Fri newsletter | per slot | editorial pipeline |
| (existing) `cab-socials-daily` | Mon-Fri 13:00 UTC | IG/LinkedIn/X drafts via Canva |
| (existing) `cab-audit-weekly` | Sun 13:00 UTC | editorial drift audit |
| (existing) `cab-growth-audit-monday` | Mon 14:00 UTC | subs + Recommendations health |

---

## Part 10 — Submission checklist (one-time, manual)

These are the human-required steps that can't be automated:

1. **Google Search Console** — verify domain, submit sitemap
2. **Google Publisher Center** — apply after 30 days of consistent publishing (~mid-June 2026)
3. **Bing Webmaster Tools** — submit sitemap (Bing also feeds ChatGPT search)
4. **DuckDuckGo** — submit URL
5. **Brave Search** — submit sitemap
6. **IndexNow** — push new URLs to Bing + Yandex + Naver instantly (the autopilot routines can do this via API)

Done = autopilot owns content velocity, on-site optimization, and outreach drafting. Keeran owns the one-time submissions + final outreach send.
