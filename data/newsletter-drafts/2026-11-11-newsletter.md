---
date: "2026-11-11"
subject: "AI reads drawings at 57% | Trimble's AI tools | Claude Sheets | Fireworks breach"
title: "The best AI agents pass 57% of the hard checks on drawing-heavy work, and four other stories for estimators and PMs to test before they trust"
preview: "A drawing-review benchmark with construction tasks, Trimble's new AI tools, a spreadsheet that builds itself, and a vendor breach to learn from."
---

Five items and a robotics note. Most of this issue is about checking work an AI tool hands you: a drawing review, a schedule change, a bid tab formula, a code change. Each item ends with a test you can run or a question to put to a vendor.

---

**1. The best AI agents meet 57% of the harder checks on drawing-heavy work. Find out whether your tool looks at the sheet.**

Google DeepMind and Artificial Analysis released a 200-task benchmark on November 10 covering professional work built on drawings, photos and schematics. Construction is one of 10 sectors, with tasks written by architects, estimators and quantity surveyors. The top model, Claude Fable 5.2, satisfied 56.6% of the harder grading criteria and 73.3% of all criteria, at an average list-price API cost of $35.28 per task. Gemini 4 Carbon scored 54.3% for $5.63. On one construction task, pricing pavement defects from inspection photos, an agent with its image-viewing tool removed fell from 86.7% to 14.3% because it missed the defects that were not in the written log. DeepMind built the test, its own model is the cost leader, and the report gives no construction-only score. For an estimator, ask your vendor whether the tool reads the drawing image or only the extracted text, then run it on a past job where you already know the scope gaps.

Source: [Google — Multimodal Knowledge Agent benchmark](https://blog.google/innovation-and-ai/models-and-research/gemini-models/multimodal-knowledge-agent-benchmark/), the [technical report](https://storage.googleapis.com/deepmind-media/papers/mka_tech_paper.pdf) and the [Artificial Analysis leaderboard](https://artificialanalysis.ai/evaluations/mka). Our take: [how to test whether your tool looks at the sheet](https://constructionaibrief.com/posts/2026-11-11-deepmind-mka-benchmark-ai-agents-drawings-57-percent-construction-estimator-precon-drawing-review-vision-test).

---

**2. Trimble put six AI tools into Connect, including a scheduling agent that imports P6. Change order drafting is not ready.**

Trimble announced the tools on November 9. Available now: steel modeling from a prompt, point cloud classification, 360 video capture aligned to drawings, a voice-driven punch walk that pins items to drawings, invoice matching against POs and delivery receipts, and Trimble Connect Scheduling. The scheduling tool is available in North America, imports Primavera P6 and MS Project files with logic and baselines, links the master schedule to look-aheads, RFIs, weather and daily reports, and suggests resequencing for the team to approve. Neither release gives pricing or any measured results. Contract risk analysis and drafted potential change orders are listed as in development. For a PM, the low-risk trial is to import a finished job's schedule and see whether the risk flags match what actually slipped.

Source: [Trimble — Connect platform AI capabilities](https://news.trimble.com/2026-11-09-Trimble-Launches-New-Trimble-Connect-Platform-AI-Capabilities-Aimed-at-De-Risking-Construction) and [Trimble — Connect Scheduling](https://news.trimble.com/2026-11-09-Trimble-Launches-New-AI-Accelerated-Scheduling-Solution-to-Help-Contractors-Protect-Project-Milestones).

---

**3. Claude Sheets can build a bid tab from a prompt. Check every formula before a total leaves the sheet.**

Anthropic launched Claude Sheets in beta on November 10 on all paid plans. Claude generates a shared spreadsheet with tabs, formulas, formatting and dropdowns, then edits cells and outlines each change so you can see what it touched. That is a quick way to set up a leveling sheet or an alternates log. Anthropic's own post says sheets have "simple spreadsheet functionality" for now and points people who need full Excel features to .xlsx export or its Excel add-in. A generated SUM range that stops one row short looks the same as a correct one, so click through every total.

Source: [Anthropic — Sheets, Whiteboards and Data](https://claude.com/resources/articles/sheets-whiteboards-data). Our take: [what to check on a generated bid tab](https://constructionaibrief.com/posts/2026-11-11-anthropic-claude-sheets-beta-construction-estimator-bid-tab-leveling-sheet-formula-check-xlsx-export).

---

**4. The top coding agent fully finished 26% of real change requests. Budget review time if AI maintains your internal tools.**

Co-Design Bench, a test built from real user sessions, asks agents to rework an existing web app. The Decoder reports the best of ten models met about 70% of the requirements per task on average but got only 26.4% of tasks fully right. That gap matters to an estimating shop that had a chatbot build a bid-comparison page or quantity roll-up and now wants changes: mostly done can still mean one total is wrong. The benchmark used web apps, so it says nothing direct about Excel macros. Write each change as a numbered list, test every item, and keep the prior version.

Source: [The Decoder — coding agents still need human cleanup](https://the-decoder.com/ai-coding-agents-still-need-human-cleanup-on-nearly-three-out-of-four-tasks-in-a-real-world-test/). Our take: [planning for the other 74%](https://constructionaibrief.com/posts/2026-11-10-co-design-bench-coding-agents-26-percent-construction-estimator-sub-internal-bid-tool-change-requests).

---

**5. Fireworks AI's breach reached stored datasets and secrets, not its zero-retention services. Ask your AI vendors what they keep.**

Fireworks AI hosts and tunes models for other software companies. Its November 9 bulletin says attackers accessed billing information and, for certain customers, stored secrets, datasets and incomplete model weights. It reports no detected impact to its inference, Training SDK and Nexus services, which retain no data by default. The lesson for a GC is about files at rest. A tool that offers to tune a model on your past submittals, RFI logs or estimates has to store them somewhere, often with a hosting company you have never heard of. Ask each AI vendor which subprocessor holds your files, how long it keeps them, and which of your Procore, accounting or email API keys it stores. If a vendor reports a breach, rotate those keys at the system that issued them.

Source: [Fireworks AI security bulletin](https://fireworks.ai/security/bulletins/october-2026-security-incident-update) and [Runtime Wire](https://runtimewire.com/article/fireworks-ai-second-security-breach-customer-data). Our take: [questions on training files and API keys](https://constructionaibrief.com/posts/2026-11-10-fireworks-ai-breach-stored-datasets-model-weights-construction-gc-ops-ai-vendor-training-data-api-key-rotation).

---

**Robotics spotlight: Path Robotics raised $300M, and only 50 mobile welders ship next year**

Path Robotics closed a $300 million Series E on November 10 at a $2.45 billion valuation, led by Georgian, bringing its total raised past $610 million. Its Rove unit puts the company's welding model on a four-legged robot that walks to the part, and The Next Web reports construction sites are among its targets. Path's own page says only 50 units ship in 2027, with early adopters chosen from a waitlist, and it lists no weld processes, positions, materials or price. A steel fabricator or a mechanical sub with a pipe shop should get those specs in writing before planning around one.

Source: [The Next Web — Path Robotics Series E](https://thenextweb.com/news/path-robotics-300m-series-e-2-45bn-valuation) and [Path Robotics — Rove](https://www.path-robotics.com/rove). Our take: [what a fab shop should ask](https://constructionaibrief.com/posts/2026-11-11-path-robotics-300m-series-e-rove-50-units-2027-construction-steel-fabricator-mech-sub-welding-robot-questions).

---

We publish again Friday.

*Construction AI Brief covers AI for contractors three times a week. Forward this to the estimator who checks your bid tabs, or [subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*
