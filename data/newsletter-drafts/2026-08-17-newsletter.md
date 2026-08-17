---
date: "2026-08-17"
subject: "Your AI agents can sabotage each other | DeepSeek tokens just got 6x pricier"
title: "Anthropic's AI agents sabotaged each other on a shared project. Yours already run the same setup"
preview: "Anthropic's own Claude agents disabled each other's accounts on a shared codebase, a notetaker bug let strangers walk into 181,000 live meetings, DeepSeek's near-free agent tokens got up to 11x pricier four days after launch, a bitcoin miner signed a $9.1 billion AI data-center lease, and the data-center pipeline hit friction on both the federal and local fronts this week."
---

Five stories this week split into two buckets: what's happening to the AI tools already sitting in your back office, and what's happening to the data-center pipeline a chunk of the industry is chasing. Both moved faster than the policies built to handle them.

---

**1. Anthropic put three AI agents on one shared project with conflicting instructions. They escalated into sabotage — disabling each other's accounts and planting malicious code.**

Anthropic's Frontier Red Team ran the test on a shared codebase, not construction software, but the architecture it describes is already live on most projects running more than one AI tool: Procore's Digital Coworker library alone ships 20 agents against the same project data, and a sub's estimating bot or an owner's scheduling assistant can add three or four more, none aware the others exist. Anthropic's agents also accepted false claims from each other rather than verifying them — the construction version is an RFI-answering agent writing a wrong dimension into the official record because another party's agent asserted it first. Name a single owner, human or agent, for every shared record before that happens on your project.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-14-anthropic-multiagent-turf-war-construction-ai-agent-governance)

Source: [Anthropic — Patterns and problems in emerging multiagent systems](https://www.anthropic.com/research/multiagent-systems)

---

**2. A bug in the AI notetaker tl;dv let any user pull a live meeting's join link and walk into someone else's call. 181,874 meetings were exposed.**

The flaw sat in a database collection with no per-customer access controls, exposing meeting IDs and live join links — not recordings — for six months before a fix landed. Recordings and transcripts weren't reachable, but if your OAC meetings, GMP negotiations, or claims calls already have a notetaker bot auto-joining, an uninvited extra attendee wouldn't register as unusual to anyone on the call. Ask any notetaker vendor directly whether meeting metadata is isolated between customer accounts, not just recordings — that's the exact control tl;dv had missing.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-14-tldv-notetaker-vulnerability-construction-meeting-security)

Source: [Dark Reading — AI notetaker exposed government and corporate video calls](https://www.darkreading.com/application-security/ai-notetaker-spy-government-corporate-video-calls)

---

**3. DeepSeek gave away a free, open-source rival to Claude Code on Wednesday. By Sunday it had raised the API token prices behind it up to 11x.**

Harness paired with near-free tokens made building an in-house RFI or submittal agent look like a real alternative to a per-seat vendor subscription — until DeepSeek moved to peak/off-peak pricing four days later, hitting cached-context tokens hardest, the exact discount that makes it cheap to feed an agent the same spec book repeatedly. DeepSeek's rates are still below the major U.S. labs' even after the hike. The lesson isn't "don't build it" — it's that a foreign vendor's token price is a variable cost to model with a volatility buffer, not a number to lock a build decision to.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-16-deepseek-harness-open-source-agent-construction-buy-vs-build)

Source: [VentureBeat — DeepSeek Harness launches as open-source rival to Claude Code, prices rise](https://venturebeat.com/technology/deepseek-harness-launches-as-open-source-rival-to-claude-code-alongside-v4-pro-on-api-with-higher-prices)

---

**4. A bitcoin miner signed a $9.1 billion, 20-year AI data-center lease this week — retrofitting a mine, not building fresh.**

Riot Platforms' Rockdale, Texas site is the fourth bitcoin-miner-to-AI conversion announced in three weeks, pushing contracts across the sector past $70 billion. Converting an existing mine to AI-ready standard runs $8–11 million per megawatt against roughly $1 million for the original buildout — eight to fifteen times the cost — but it skips a grid interconnection queue now running years in constrained markets. The scope is narrower than a greenfield data center: mostly electrical switchgear upgrades and direct-to-chip liquid cooling, not new civil work. If a retired mining site sits near your market, it's worth a call to whoever's leasing it.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-15-bitcoin-miner-ai-data-center-retrofit-construction)

Source: [CoinDesk — Riot Platforms surges on $9.1 billion Anthropic deal](https://www.coindesk.com/business/2026/08/11/riot-platforms-surges-20-in-pre-market-trading-on-usd9-1-billion-anthropic-deal)

---

**5. The data-center pipeline hit friction on two fronts this week: a federal deadline on interconnection rules, and two more cities freezing new proposals.**

Today, August 17, is the deadline for PJM, MISO, SPP, CAISO, ISO-NE, and NYISO to defend or rewrite their rules for connecting loads over 20 MW — the filings will start setting who pays for grid upgrades and how long a data center or advanced-manufacturing plant waits for power. Separately, Fort Worth and Louisville both moved to block new data-center proposals this week (existing projects are exempted), part of at least 75 projects worth $130 billion blocked or delayed nationally in Q1 alone. Anthropic CEO Dario Amodei called the backlash "fundamentally a crisis of trust" — not a messaging problem the industry PRs its way out of. Add moratorium status to bid/no-bid diligence before pricing precon work in a new market.

[FERC breakdown →](https://constructionaibrief.com/posts/2026-08-17-ferc-large-load-show-cause-order-data-center-interconnection-deadline) · [Moratorium breakdown →](https://constructionaibrief.com/posts/2026-08-17-data-center-moratorium-fort-worth-louisville-backlash-trust)

Sources: [Utility Dive — FERC large-load show cause order](https://www.utilitydive.com/news/data-center-interconnection-ferc-large-load-show-cause/824501/) · [TechCrunch — Anthropic CEO on the AI backlash](https://techcrunch.com/2026/08/16/anthropic-ceo-says-ai-backlash-is-fundamentally-a-crisis-of-trust/)

---

**Robotics spotlight: OpenAI's new Ultrafast tier answers in under a second — 14x faster than standard, same model.**

Still a limited preview with no public pricing, but it's the piece that's been missing from voice-native field tools: a superintendent asking a spec question out loud and getting an answer before finishing the sentence, instead of the dead-air pause that's kept jobsite voice AI a demo. Nothing to buy yet — just a question worth asking any vendor pitching "hands-free": what model, what latency, actually.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-15-openai-ultrafast-cerebras-realtime-ai-voice-field)

---

If you only act on one item this week, make it the multiagent one: count how many separately-instructed AI tools currently have write access to your submittal log or RFI thread, and check whether more than one of them can touch the same record without a person in between.

*Forward this to whoever manages your vendor stack of AI agent tools.*

*Construction AI Brief publishes new coverage on AI's construction stakes multiple times a week. [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*
