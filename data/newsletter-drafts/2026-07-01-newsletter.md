---
date: "2026-07-01"
subject: "Cowork billing starts today | Copilot's 10x cost jump | $725B chasing subs"
title: "Two AI tools your team may already be using just sent their first real bill"
preview: "Microsoft's Copilot Cowork starts billing today. GitHub Copilot users already saw theirs. A security paper flags what your document-review agent might miss — and $725B in data center capex is still chasing a short list of qualified subs."
---

Four things from the past few days with a specific action attached — two of them have a bill attached too.

---

**1. Microsoft's Copilot Cowork starts billing today for anyone in the preview program.**

Cowork — Microsoft's autonomous agent that can be handed a multi-step task, leave the conversation, work across Teams, SharePoint, Outlook, and Excel, and report back when it's done — went generally available June 16. If your firm was in Microsoft's Frontier preview, July 1 is when the meter starts: $0.01 per Copilot Credit, no published table of what a given task costs, and it requires a full Microsoft 365 Copilot license per seat. It also can't touch Procore, Autodesk, or Sage unless IT has wired up a Federated Connector, so for most GC and sub offices its native reach today is the back-office stack, not the project stack.

The workflows worth pointing it at are specific ones — weekly schedule comparison against last week's baseline, RFI log monitoring for anything open past 14 days, submittal rev comparison — not a general productivity mandate. If your team is in the preview, check the admin console today and know what you're spending before the second cycle closes.

[Full breakdown and three workflows worth testing →](https://constructionaibrief.com/posts/2026-06-30-copilot-cowork-gc-workflows-billing)

Source: [Microsoft — Copilot Cowork GA](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/)

---

**2. GitHub Copilot's flat-rate plan ended a month ago. The first full bill just closed, and it's rough.**

June 30 closed the first full billing cycle under GitHub's new metered pricing for Copilot Chat, agent mode, code review, and the CLI. On GitHub's own community board, users are reporting single agent-mode requests burning over half a monthly credit allotment, and outside reporting has developers projecting monthly bills jumping from $29 to $750, or $50 to $3,000, once usage prices out at metered rates.

The construction exposure isn't developers — it's whoever in your shop quietly built an RFI tracker, a submittal-log watcher, or a vendor cut-sheet scraper using Copilot's agent mode because they had a seat and enough curiosity to try it. Those multi-step, low-supervision tools are exactly what draws hardest on the metered pool. If one of your internal tools runs on a Copilot seat, check Settings → Billing → GitHub Copilot before the next cycle closes and set a hard spending cap.

[Full breakdown and what to check before your next cycle →](https://constructionaibrief.com/posts/2026-07-01-github-copilot-usage-billing-construction-internal-tools)

Source: [GitHub — moving to usage-based billing](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)

---

**3. A new security study found 8 of 30 deployed AI agents have documented prompt-injection incidents. Submittal and RFI review is the direct construction exposure.**

Researchers presenting at FAccT 2026 studied 30 deployed commercial AI agents — including Microsoft Copilot Studio, ChatGPT, and Google Gemini Enterprise — and found 8 with known incidents tied to prompt injection: instructions embedded in a document that redirect what the agent does. Only 7 of the 30 have documented defenses against it, and only 9 run in a sandbox that limits what the agent can do if it processes a malicious file.

The construction version: a sub's product data sheet contains text claiming full spec compliance, or an RFI response contains an instruction to disregard a flagged discrepancy — and a vulnerable agent treats either as fact instead of a claim from a party with a stake in the outcome. Before you deploy an agent to read submittals or RFIs, ask your vendor directly whether it defends against *indirect* injection (not just prompts you type), whether it's sandboxed, and whether it publishes safety evaluations alongside performance benchmarks. Most won't have a good answer to all three yet.

[Full breakdown and the three vendor questions →](https://constructionaibrief.com/posts/2026-06-30-ai-agent-prompt-injection-construction-documents)

Source: [The 2025 AI Agent Index — FAccT 2026](https://arxiv.org/abs/2602.17753)

---

**4. Hyperscalers are planning $725 billion in 2026 capex. The electrical and mechanical subs qualified to do that work are already booked.**

Amazon, Microsoft, Google, and Meta collectively confirmed roughly $725 billion in 2026 capital expenditure — up 77% from 2025 — and nearly all of it eventually moves through a construction site. But data center electrical and mechanical work isn't standard commercial scope: it means 2N power redundancy commissioned to millisecond switchover tolerances, high-density liquid cooling, and integrated systems testing that simulates failures on an energized facility. Getting on a hyperscaler's preferred-contractor list requires Tier III/IV project history, NFPA 70E arc-flash documentation, and safety-record floors that some firms simply can't clear yet.

The ramp from deciding to pursue this work to a first hyperscaler-tier award runs 18 to 24 months. The firms already booked solid made that call in 2024. For a trade firm with clean safety records and capacity in electrical or mechanical disciplines, the margin premium still makes the arithmetic work — it just isn't a fast decision.

[Full breakdown of what qualification actually requires →](https://constructionaibrief.com/posts/2026-06-30-data-center-electrical-credentials-725-billion)

Source: [Tom's Hardware — hyperscaler capex plans](https://www.tomshardware.com/tech-industry/big-tech/big-techs-ai-spending-plans-reach-725-billion)

---

**Also this week**

Anthropic released Claude Sonnet 5 on June 30, holding the same standard pricing as the model it replaces ($3/$15 per million tokens after an introductory rate through August 31) while closing most of the agentic-performance gap to its flagship Opus tier. For an estimating lead who's priced out an internal bid-leveling agent — one that reads sub quotes against a spec section and flags exclusions before buyout — that's the tier you already budgeted for now doing work that used to require Opus-level pricing. Test it against one real buyout package before committing budget to a custom build. [Full breakdown →](https://constructionaibrief.com/posts/2026-07-01-claude-sonnet-5-pricing-construction-estimating-agents)

Google has been rationing Meta's access to its Gemini models since March because it can't supply enough compute to meet demand — this despite spending over $180 billion this year and paying SpaceX $920 million a month for emergency GPU capacity. If the two largest AI buyers on earth are capacity-constrained, the AI feature bolted onto your submittal or RFI tool is further down the same line, and it's worth asking your vendor what happens to that feature under load before you rely on it for something time-sensitive. [Full breakdown and three vendor questions →](https://constructionaibrief.com/posts/2026-07-01-google-meta-compute-shortage-construction-ai-reliability)

---

The two billing stories above are really one story: the flat-rate era of AI tooling is ending, one product at a time, and the tools your team already leaned on informally are the ones about to show up as a real line item.

If this landed with you, forward it to whoever owns the software budget at your firm.

*Three issues a week — [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*

*Construction AI Brief covers AI in commercial construction three times a week.*
