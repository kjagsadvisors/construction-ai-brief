# Construction AI Brief — keyword cluster + pillar plan

_Generated 2026-07-01 (content-strategist). Companion to `data/geo-competitor-teardown.md`._

## Strategy
Don't fight head terms ("AI in construction") owned by Procore/Autodesk/ENR. Win three surfaces: (1) **long-tail question queries**, (2) **news-driven queries** (freshness via the hourly stream → Top Stories/Discover), (3) **AI-Overview/LLM citation** via extraction structure. Pillar pages are durable evergreen hubs; the hourly news stream is the freshness engine that links into them.

Pillar pages live at `/seo/<slug>` (route reads `apps/web/content/seo/*.mdx`; supports `title, description, target_keyword, audience, sources, faqs, updated_at`).

## The six pillars
1. **AI for construction paperwork (RFIs, submittals, change orders)** — `/seo/ai-construction-rfi-submittal-change-order-guide`. Densest existing coverage; highest buyer intent. Medium/EV.
2. **AI construction estimating & bid leveling** — `/seo/ai-construction-estimating-takeoff-guide`. Highest purchase intent; win the "free/small contractor/is it worth it" long-tails. Easy–Medium on modifiers.
3. **The data center construction boom** — `/seo/data-center-construction-boom-contractors-guide`. Strongest freshness engine (capex, electrician shortage, lead times). ND-heavy.
4. **Robots & physical AI on the jobsite** — `/seo/construction-robots-jobsite-physical-ai-guide`. Curiosity queries with vendor-fluff SERPs; neutral hub wins AI Overview. EV+ND.
5. **AI risk, security & compliance** — `/seo/construction-ai-risk-liability-security-guide`. Low-competition legal/risk long-tails; differentiated moat (liability, prompt injection, CUI, vendor shutdown). Easy–Medium/EV.
6. **The real cost of AI in your construction software** — `/seo/ai-construction-software-cost-pricing-guide`. Signature edge: token/compute economics → SaaS bill. Medium.

(Full cluster query lists per pillar + per-pillar FAQ questions are in the strategist output; each pillar ships with 6–10 internal links from existing posts on day one.)

## Quick wins — first 30 days (thin SERPs, fresh/specific answer can rank or get cited fast)
1. AI submittal review for mechanical/MEP contractors (post exists → build Q&A page)
2. Free AI estimating software for small contractors
3. Is Procore Estimating worth it for a subcontractor
4. Who is liable when construction AI makes a mistake
5. How much do data center electricians make (2026)
6. What can humanoid robots do on a jobsite today
7. Prompt-injection risk in AI document review
8. AI hiring-law checklist for construction employers (IL/CO)
9. PDF/OCR extraction problem in construction submittals
10. Federal contractors + cloud AI on CUI projects
11. How to qualify as an electrical sub for data center work
12. GitHub Copilot token billing — cost of internal construction tools
13. AI bid leveling, how it works
14. Robot safety case/certification for jobsites (NVIDIA HALOS angle)
15. Will AI compute shortages make my project software unreliable

Cadence: publish Pillars 1, 3, 5 as hubs weeks 1–2 (most existing posts to link), then 2–3 quick-win Q&A pages/week under `/seo/`. Keep the hourly stream unchanged as freshness fuel.

## Interlinking model (news stream ↔ pillars)
- Add a `hub` frontmatter field to each news post mapping it to one pillar (keep `pillar` as the editorial-format tag).
- Each news post links **up** to its hub ("For the full picture, see our guide to …").
- Each hub links **down** to its 3–5 latest supporting posts (auto-filtered by `hub`), keeping hubs perpetually fresh.
- Cross-link siblings within a cluster.
