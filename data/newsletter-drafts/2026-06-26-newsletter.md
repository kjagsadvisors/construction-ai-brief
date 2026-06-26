---
date: "2026-06-26"
subject: "48% schedule adherence is average | Sensors cut deductibles 50% | CMMC Nov deadline"
title: "The 48% benchmark, sensor insurance savings, and a November compliance clock"
preview: "Buildots published the first public schedule benchmark. Shepherd tied sensors to deductible cuts. Federal contractors have 20 weeks."
---

There's now a public number for construction schedule performance — the first one drawn from more than 200 monitored projects. A few other things landed this week: insurance pricing started rewarding GCs who deploy monitoring hardware, a major open-weight AI compute deal matters if your firm does federal work, and two AI tool stories have implications for how comprehensively teams can run document review.

---

**1. The first public benchmark for schedule adherence is out. The industry average is 48%.**

Buildots launched its Intelligence Lab on June 25, publishing anonymized schedule adherence data from more than 200 global construction projects tracked by in-building cameras measuring actual site progress against BIM-planned milestones. The aggregate number: 48% of planned milestones completed on time. Healthcare leads at 65%, driven by infection-control requirements that force tighter trade sequencing. Data centers track at roughly 57%. Education trails at 39%.

Two immediate uses for a PM: internal calibration (if you're running a data center job at 40% adherence, you're 17 points below comparable projects in the dataset — worth a look-ahead review) and owner conversations. A 65% healthcare figure anchors a schedule pressure discussion as a number, not a feeling. The benchmark is not a census — Buildots monitors mid-rise and above, hospitals, data centers; small commercial and TI work aren't in the sample — and adherence measures time, not cost.

The full benchmark platform is free at buildots.com/lab/. Buildots says academics and industry professionals can also submit hypotheses for data-driven analysis.

[Full breakdown and how to use it in OAC meetings →](https://constructionaibrief.com/posts/2026-06-26-buildots-schedule-benchmark-48-percent)

Source: [Buildots — Intelligence Lab launch](https://www.prnewswire.com/news-releases/buildots-launches-intelligence-lab-constructions-first-ai-powered-research-hub-302810700.html)

---

**2. Builders' risk insurance is now pricing your monitoring hardware**

On June 25, Shepherd — a commercial insurance platform that underwrites builders' risk using live project data — announced a partnership with Brickeye, which makes IoT monitoring hardware for construction jobsites. Projects deploying Brickeye's water-loss prevention and concrete monitoring systems can qualify for water-damage deductibles reduced up to 50%, plus premium credits at renewal. Water damage is the primary driver of builders' risk claims.

The Brickeye program is additive: Shepherd already offers differentiated pricing to GCs using Procore, Autodesk Construction Cloud, OpenSpace, or DroneDeploy at enrollment. If you're running any of those platforms, you qualify for a better starting rate than a firm presenting a blank application.

The math to run before your next bind: on jobs where water-damage deductibles run into the high six or low seven figures — hospitals, multifamily towers, hotels, data centers — a 50% reduction is real money. Compare Brickeye's monitoring cost over project duration against the deductible difference. The discount applies to water-damage claims only, and someone on your team needs to own the alert dashboard and respond when it fires.

[Full breakdown and two decisions before your next bind →](https://constructionaibrief.com/posts/2026-06-26-shepherd-brickeye-builders-risk-monitoring)

Sources: [Shepherd + Brickeye announcement](https://www.prnewswire.com/news-releases/shepherd-and-brickeye-partner-to-bring-iot-risk-intelligence-into-autonomous-underwriting-302809911.html) · [ENR](https://www.enr.com/articles/63217-insurers-offer-discounts-for-using-site-monitoring-tech-to-reduce-risk)

---

**3. Federal contractors doing AI work have 20 weeks**

CMMC 2.0 Phase 2 — mandatory third-party assessments for firms with Level 2 contracts covering USACE work, military facility PM, or federal building construction — begins November 2026. Any AI tool that processes Controlled Unclassified Information (CUI) must meet NIST SP 800-171 controls to comply. Standard commercial APIs — Claude, ChatGPT, Gemini — don't qualify for CUI handling without significant additional procurement overhead. That blocks AI use on spec parsing, RFI drafting, submittal review, and daily log automation precisely where federal project complexity is highest.

On June 22, SpaceX signed a $6.3 billion compute deal with Reflection AI, an open-weight AI lab founded by ex-DeepMind researchers who built AlphaGo and led Gemini's reward modeling. Reflection's stated goal is a frontier-class model with publicly releasable weights you run inside your own environment — no third-party API, no CUI transmission. The lab holds DOE and Pentagon relationships and is valued at $25 billion. The catch: no public frontier model exists yet. The deal secures training infrastructure; the data pipeline is still being built.

What to do before Reflection ships: map which workflows touch CUI on your federal projects, test current open-weight models (Llama 4, Mistral) on non-CUI admin tasks now to build team capability, and audit your AI tool stack for CUI handling before the November Phase 2 deadline — that clock won't move for your technology readiness.

[Full breakdown: CMMC 2.0 workflow mapping and the open-weight path →](https://constructionaibrief.com/posts/2026-06-25-reflection-ai-federal-contractors-open-weight)

Sources: [CNBC — SpaceX + Reflection AI](https://www.cnbc.com/2026/06/22/spacex-ai-colossus-data-center-reflection.html) · [TechCrunch](https://techcrunch.com/2026/06/22/spacex-inks-compute-deal-with-reflection-ai-an-open-source-ai-lab/)

---

**4. Inference costs have a new floor coming — one procurement question to ask now**

OpenAI and Broadcom unveiled Jalapeño on June 24 — OpenAI's first purpose-built inference chip, designed to reduce the per-query cost of running AI models. Microsoft takes approximately 40% of initial production capacity. Deployment into gigawatt-scale data centers begins late 2026, with no pricing changes announced yet. The construction implication is in the contract you sign today, not the chip itself.

AI review tools that were cost-prohibitive to run over full document sets — every drawing, every submittal, every site photo on a large job — are already cheaper to run than they were in 2023. Jalapeño is OpenAI's bet that costs fall further from late 2026 onward for tools built on its services. If you're evaluating or renewing AI contracts built on OpenAI's APIs, ask one question: is pricing per-seat, per-query, or usage-based? Per-seat locks you into today's cost structure regardless of what happens to inference costs. Usage-based is where cost deflation works in your favor over a two- or three-year term.

A use case that didn't pencil at 2025 rates is worth rerunning in early 2027.

[Full analysis: what the inference cost curve means for construction document review →](https://constructionaibrief.com/posts/2026-06-25-openai-jalapeno-chip-construction-ai-inference-cost)

Sources: [OpenAI — Jalapeño](https://openai.com/index/openai-broadcom-jalapeno-inference-chip/) · [TechCrunch](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/) · [CNBC](https://www.cnbc.com/2026/06/24/openai-and-broadcom-reveal-jalapeno-first-ai-chip-in-partnership.html)

---

**Data center spotlight: $475M to cut AI power consumption by 1,000x. What precon leads should know.**

Unconventional AI raised $475 million at a $4.5 billion valuation on June 25 to build neuromorphic computing hardware — a class of chip that runs neural networks on the physics of silicon rather than conventional digital logic. The company's claim: up to 1,000 times lower power consumption than current GPU-based systems. The round was led by Andreessen Horowitz, Lightspeed, and Sequoia, with Jeff Bezos investing directly. The founder is Naveen Rao, former AI chief at Intel and Databricks. U.S. data center construction spending crossed $50 billion annually in 2026.

The case for data center work doesn't change based on a seed-stage company. But facilities designed today are being sized for GPU density assumptions that may not hold across a 25-to-30-year building life. The question for precon leads: how flexible is the infrastructure if the load assumption changes?

Three conversations worth having before permit sets are final: modular power distribution that can be reconfigured without structural demolition; liquid cooling rough-ins, even on facilities not immediately deploying them; and phased utility service rather than pulling full interconnect capacity on day one. These add little cost at rough-in. Retrofitting them after fit-out is multiples more expensive.

[Full breakdown: the three precon conversations on every data center job →](https://constructionaibrief.com/posts/2026-06-26-unconventional-ai-data-center-power-design)

Sources: [TechCrunch — Unconventional AI](https://techcrunch.com/2026/06/25/databricks-former-ai-chief-thinks-he-can-cut-ais-power-bill-by-1000x/) · [Data Center Dynamics](https://www.datacenterdynamics.com/en/news/neuromorphic-compute-startup-unconventional-ai-raises-475m-in-seed-funding/)

---

Two items from this issue have real deadlines: CMMC Phase 2 in November 2026, and the Jalapeño procurement question to answer before your next AI tool renewal. The schedule benchmark and insurance program are available now with no clock. Worth starting there.

Also this week: Anthropic launched Claude Tag — a persistent shared AI agent inside Slack channels with memory, ambient monitoring of stalled threads, and async task execution. For project teams running coordination through Slack, the ambient mode is the part worth evaluating. [We broke it down here.](https://constructionaibrief.com/posts/2026-06-25-claude-tag-slack-project-coordination)

If this landed with you, forward it to someone on your team who's still asking whether AI is worth trying on the next job.

*Three issues a week — [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=punch_list_cta).*

*Construction AI Brief covers AI in commercial construction three times a week.*
