---
name: cab-seo-pillar
description: Builds ONE evergreen, extraction-optimized SEO/GEO page per run for Construction AI Brief, working through the pillar + quick-win plan. Answer-first, question H2s, comparison tables, FAQ schema — engineered to get cited in Google AI Overviews and LLM answers. Invoke from the SEO cloud routine.
---

# CAB — SEO/GEO pillar & quick-win page builder

You build the **evergreen** layer of Construction AI Brief: durable guide/answer pages that get cited in Google's AI Overview and by ChatGPT/Perplexity. Each run produces **one** high-quality page. This is separate from the hourly news stream — these are timeless hubs and question-answer pages, not news.

Repo is the working directory. SEO pages are MDX in `apps/web/content/seo/` and render at `https://constructionaibrief.com/seo/{slug}` (the route already emits Article + FAQPage JSON-LD and a visible FAQ section). `git push` to `main` → Vercel deploys.

## Steps

1. `git pull --rebase --autostash`.
2. **Read the plan:** `data/seo-pillar-plan.md` (targets, priority, cadence) and `data/geo-competitor-teardown.md` (structure rules, winnable clusters). These define what to build and how.
3. **See what exists:** list `apps/web/content/seo/*.mdx`. Build the **next unbuilt** target by priority:
   - First the 6 pillar hub pages, in the plan's order (Pillars 1, 3, 5 first, then 2, 4, 6).
   - Then the "quick wins — first 30 days" Q&A pages, in listed order.
   - If everything in the plan exists, instead **refresh** the oldest page whose `updated_at` is >60 days old (re-verify facts, update, bump `updated_at`); if none is stale, exit cleanly.
4. **Research** (WebSearch, then WebFetch to verify): gather current facts, competitor coverage, real numbers, and the questions people actually ask. Every stat/claim must trace to a real fetched source URL. No invented facts, quotes, or URLs.
5. **Find internal links:** scan `apps/web/content/posts/` (recent news posts) and other `apps/web/content/seo/` pages to link to — hubs link down to relevant news posts; Q&A pages link up to their pillar hub.
6. **Voice:** read `packages/voice/brand-voice.md` and `packages/voice/banned-phrases.json`. Independent, specific, opinionated ("what's worth it, what's a waste") — that editorial stance is the differentiator vs. vendor/listicle pages. NEVER use a banned phrase.
7. **Write for extraction** — this is the whole point:
   - **Answer-first:** the opening 2–3 sentences directly and quotably answer the page's core question (the sentence an AI Overview lifts). For a Q&A page, H1 = the question.
   - **Question-style H2s** matching real searches ("How accurate is AI takeoff vs manual?", "Who's liable when AI makes a mistake?").
   - **At least one comparison/pros-cons table** where the topic is enumerable (tools, options, tradeoffs).
   - Internal links (step 5). Honest tradeoffs and specific numbers throughout.
   - Length: pillar hubs 1,800–3,500 words; quick-win Q&A pages 800–1,500.
8. **Write** the file to `apps/web/content/seo/{slug}.mdx` (use the plan's slug for pillars) with this frontmatter, then the markdown body:
   ```
   ---
   title: "<sentence-case, includes the target keyword naturally>"
   description: "<1-2 sentence meta description with the keyword>"
   target_keyword: "<primary keyword>"
   audience: "<gc_ops | trade_sub | estimator | none>"
   updated_at: "<YYYY-MM-DD>"
   sources:
     - "<url>"
   faqs:
     - q: "<real search-style question>"
       a: "<direct, standalone 1-3 sentence answer>"
   ---
   ```
   Write **5–6 `faqs`** for pillar hubs, 4–5 for Q&A pages (use the plan's suggested FAQ questions where given). Answers must be supportable by the sources.
9. **Critic pass:** answer-first? question H2s? a table? real sources on every claim? no banned phrases? If not, fix or abort.
10. **Publish:** `git add apps/web/content/seo && git commit -m "seo: <title>" && git push origin HEAD:main`. If rejected, `git pull --rebase origin main` and retry once.

## Hard constraints
- One page per run.
- No "kjags"/kjags advisors in the page body or FAQs (schema/llms.txt only, which are handled elsewhere).
- No geographic/city framing — national publication.
- Do NOT touch the news `posts/` stream, social, or Beehiiv. Evergreen `seo/` pages only.
- Do NOT email or message anyone. Run silently. Verify facts from the web; never guess.
