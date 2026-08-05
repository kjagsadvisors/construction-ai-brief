---
date: "2026-08-05"
subject: "A single link hijacked a ChatGPT agent | McCarthy runs field ops on Palantir"
title: "AI agents are getting hijacked with one link. Construction just started plugging them into the back office."
preview: "A crafted URL could silently hand an attacker an employee's full ChatGPT access, the White House can now sit on a new frontier model for 30 days before release, Palantir's record quarter includes a top-20 GC running field ops on its platform, data center developers are now backing power bills with billions in bank guarantees, LinkedIn held its AI infrastructure spend flat for a year, and Sequoia bet $1 billion on factory-built nuclear reactors."
---

Two stories this week are about who controls an AI tool once it's plugged into your systems. Four more are about the infrastructure boom behind it — how it gets financed, how fast it's actually growing, and what it costs to build your operation inside someone else's platform. All six land on the same desk: whoever at your shop is approving AI connectors, qualifying data center clients, or fielding a "unified platform" pitch.

---

**1. A single link hijacked a fully authorized ChatGPT agent. If your back office runs one, that's the same door.**

Security firm Zenity Labs disclosed a flaw in ChatGPT's Workspace Agent Builder that let a crafted URL silently spin up a rogue AI agent with an employee's full authorized access — email, files, Slack, calendar — no click-to-confirm beyond opening the link. OpenAI patched it in June, but Zenity just raised $125 million to sell governance tools for exactly this failure mode, betting that policing what AI agents can touch is becoming its own software category. A 15-person mechanical sub building its own AI back-office agent won't have that tooling, so the discipline has to be manual: give any connected agent its own login and the minimum access the task needs, and review what it's authorized to touch on a schedule, the same as a new hire with a badge.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-04-zenity-agentforger-ai-agent-security-trade-sub-risk)

Source: [Businesswire — Zenity Raises $125 Million to Secure the Era of 1 Billion AI Agents](https://www.businesswire.com/news/home/20260803963850/en/Zenity-Raises-$125-Million-to-Secure-the-Era-of-1-Billion-AI-Agents)

---

**2. The White House can now sit on a new AI model for 30 days before anyone else gets it — including the model your back-office tool runs on.**

A June executive order lets AI labs voluntarily submit a new frontier model for federal cybersecurity testing; if it's flagged as "covered," the government gets exclusive access for up to 30 days before the developer can release it elsewhere. OpenAI, Anthropic, Google, and Meta reviewed the draft framework with the White House this week. Procore and Autodesk aren't exposed — they run their own proprietary models — but any DIY tool built directly on a lab's API inherits whatever release schedule that lab is now on. Don't build a rollout date or a client commitment around a capability that isn't live yet.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-04-white-house-ai-cybersecurity-framework-covered-frontier-model-construction-vendor-risk)

Source: [Bloomberg — OpenAI, Anthropic, Google to join White House AI safety meeting](https://www.bloomberg.com/news/articles/2026-08-03/openai-anthropic-google-to-join-white-house-ai-safety-meeting)

---

**3. Palantir just posted record AI earnings. Its clearest construction proof point is a top-20 GC running field ops on the platform.**

Palantir's Q2 revenue grew 93% to $1.94 billion, with U.S. commercial revenue up 149% and full-year guidance raised to as much as $8.16 billion. Months earlier, McCarthy Building Companies — a top-20 U.S. GC — signed a multi-year, multi-million-dollar deal to build its entire field-operations system on Palantir's platform, modeling its schedules, crews, and equipment inside Palantir's proprietary data layer instead of connecting to data it already has. That's a fundamentally different commitment than a point tool like Procore or OpenSpace: weeks to value versus months, and low switching cost versus high. There's no disclosed version of McCarthy's deal sized for a mid-size GC or sub, but the question is worth asking of any "unified data" pitch regardless of scale: what does getting your data back out looks like on day one if you leave in three years.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-05-palantir-earnings-mccarthy-ai-operating-system-lockin)

Source: [CNBC — Palantir (PLTR) earnings Q2 2026](https://www.cnbc.com/2026/08/03/palantir-pltr-earnings-q2-2026.html)

---

**4. Data center developers are now putting billions in bank guarantees behind their power bills. That's a fix for the delay that's been wrecking your schedule.**

Blackstone's QTS approached about a dozen banks for roughly $2 billion in guaranteed utility payments; DigitalBridge's Switch has assembled close to $10 billion in bank-backed credit support for the same purpose. Utilities have been reluctant to build the substations and transmission lines a data center campus needs until they're confident the project won't cancel on them — a bank-backed guarantee removes that specific hesitation, letting utility construction start earlier in the timeline. It doesn't touch permitting or equipment lead times, and it's only available to the largest, most capitalized operators right now. But for a GC or sub qualifying a data center client, whether bank-backed credit support exists behind the power commitment is now a real precon question — not just the interconnection agreement or the press release.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-05-data-center-bank-guarantees-power-queue-gc-schedule)

Source: [Bloomberg — AI power demands spur builders to seek billions in bank pledges](https://www.bloomberg.com/news/articles/2026-08-04/ai-power-demands-spur-builders-to-seek-billions-in-bank-pledges)

---

**5. LinkedIn will run a full year of new AI features without building another data center. That's the demand assumption behind your next hyperscale bid.**

LinkedIn's infrastructure team says it roughly doubled the output of its existing GPU fleet in six months through software efficiency alone — better utilization, model distillation, smarter workload allocation — and will hold data center investment flat for a year as a result. Nothing here signals a broader slowdown: parent Microsoft grew its own capex 69% year-over-year in the same quarter. What it proves is narrower — AI usage growth doesn't convert automatically into square footage, and a customer's internal efficiency work is invisible on a permit application until a "next phase" quietly doesn't get issued on schedule. Price and staff against what's actually contracted on a hyperscale master plan, and negotiate defined stop points between phases rather than assuming the roadmap is a backlog.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-05-linkedin-gpu-efficiency-data-center-flat-gc-backlog-risk)

Source: [TechRadar — LinkedIn says it won't be spending big on AI hardware this year](https://www.techradar.com/pro/linkedin-says-it-wont-be-spending-big-on-ai-hardware-this-year-but-it-has-a-good-reason-why)

---

**6. Sequoia just put $1 billion behind reactors built like factory hardware. The GCs who want that scope need a certification that takes up to 18 months to earn.**

Valar Atomics raised a $1 billion Series B on August 3 to move from a single test reactor to a production line of small modular reactors for AI data centers, and the construction scope is already real — Bechtel is building TerraPower's Natrium reactor in Wyoming under a project labor agreement, and Clayco is on a DOE submission for a nuclear-AI data center campus at Idaho National Lab. The gating item for any GC that wants in isn't bonding capacity, it's ASME's NQA-1 nuclear quality certification: 9 to 12 months for a contractor already running ISO 9001, 12 to 18 months from scratch, then a triennial audit cycle. If a heavy-civil or MEP GC in a state with active SMR test-bed activity wants to be eligible when this scope hits bid lists at commercial scale, that clock needs to start now, not after the first RFQ shows up.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-04-valar-atomics-smr-funding-nqa1-construction-opportunity)

Source: [TechCrunch — Sequoia's Shaun Maguire leads $1B round for nuclear startup Valar Atomics](https://techcrunch.com/2026/08/03/sequoias-shaun-maguire-leads-1b-round-for-nuclear-startup-valar-atomics/)

---

If you only forward one item this week, make it the AgentForger story to whoever in your shop just gave an AI agent access to the company inbox — the flaw is patched, but the exposure it revealed isn't.

*Three issues a week — [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*

*Construction AI Brief covers AI in commercial construction three times a week.*
