---
date: "2026-11-23"
subject: "OpenAI's 75% outage | Chinese models and federal work | 2M bait prompts"
title: "A Saturday OpenAI outage shows why bid day needs a backup, and five other stories for contractors"
preview: "If one AI provider sits under every bid-day step, Saturday's outage is your warning. Plus: what model is under your vendor's AI?"
---

Six items today. The lead is a three-and-a-half-hour OpenAI outage that would have covered a bid deadline on a weekday. The rest are about knowing which model sits under your tools, carbon specs on data center jobs, where AI checks hold up, and a cheap voice line for service calls.

---

**1. ChatGPT and OpenAI's API failed up to 75% of requests for three and a half hours.**

Between 1:48 and 5:21 p.m. Pacific on Saturday, November 21, maintenance on a database behind OpenAI's authentication service took down both read replicas at once, per OpenAI's incident write-up. ChatGPT logins, file uploads and conversations failed, and so did the API endpoints that estimating add-ons and homemade quote readers call. Your team could have been hit without anyone opening ChatGPT. Before your next bid, list every AI-assisted step and the provider behind it. Move spec review to the day before, keep the leveling sheet in your own spreadsheet, and test a second provider on your real prompts now, not at 1 p.m. on bid day.

Source: [OpenAI status — incident report](https://status.openai.com/incidents/n254wyd7nml7). Our take: [a bid-day fallback plan](https://constructionaibrief.com/posts/2026-11-22-openai-chatgpt-api-outage-75-percent-three-and-a-half-hours-construction-estimator-bid-day-ai-steps-fallback).

---

**2. A House report wants Chinese-built AI models kept out of federal contract work.**

House Homeland Security Chairman Andrew Garbarino and China Select Committee Chairman John Moolenaar released 12 recommendations on November 20. They include keeping PRC models out of work done under government contracts, pulling them from high-risk critical infrastructure functions, and creating an AI bill of materials. None of it is binding yet. The committees also found that Cursor's Composer 2 model was built on Moonshot AI's Kimi K2.5, which nothing in the product name told you. If you build for federal agencies or utility, energy or water owners, send each software vendor one question in writing this month: which base model runs this AI feature, who developed it, and will you tell us if it changes?

Source: [House Homeland Security Committee](https://homeland.house.gov/2026/11/20/chairmen-garbarino-moolenaar-release-joint-investigative-report-urging-removal-of-prc-open-weight-models-from-federal-systems-high-risk-critical-infrastructure/). Also: [CNBC on Cursor](https://www.cnbc.com/2026/11/20/cursor-chinese-ai-models-geopolitical-risk.html). Our take: [the vendor questions for federal jobs](https://constructionaibrief.com/posts/2026-11-23-house-report-bar-prc-open-weight-ai-models-federal-contract-work-construction-gc-ops-federal-jobs-ask-vendors-base-model).

---

**3. A researcher planted fake passwords in 2 million AI prompts and caught three breached providers.**

HD Moore of Dragos sent about two million prompts, each holding a trackable bait secret, to widely used AI services from July through November. Data from at least three AI hosting providers was stolen, and none of them knew until Dragos told them. Some resellers on an inference marketplace logged prompts, and one Chinese lab fetched secret links from about two-thirds of requests marked zero data retention. The risk sits in routers and discount hosts, which is what cheap internal tools often run on. If a consultant built your quote reader or invoice sorter, ask them which company actually serves the model. If they can't say, keep bid numbers and logins out of that tool.

Source: [Dragos](https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens). Our take: [five questions for whoever built your tool](https://constructionaibrief.com/posts/2026-11-22-dragos-two-million-canary-prompts-three-ai-providers-breached-zdr-ignored-construction-trade-sub-homemade-ai-tools-which-provider-serves-it).

---

**4. Meta's emissions rose 45% as it built AI data centers, and it blames slow low-carbon materials supply in part.**

Meta's 2026 sustainability report shows capital goods emissions up 58% in 2025, even with all of its electricity matched to clean power. The company is "re-evaluating our timelines" for its 2030 net-zero goal and says supply chains for low-carbon infrastructure materials "have been slow to develop," per Trellis. That could loosen carbon specs or tighten EPD paperwork, and you can't tell which yet. Concrete, steel and MEP subs should RFI whether the carbon requirements are firm before bidding, confirm the supplier can deliver the specified mix on schedule, and write a substitution clause into the clarifications.

Source: [Trellis](https://trellis.net/article/meta-2026-sustainability-report/). Our take: [what to check before the next data center bid](https://constructionaibrief.com/posts/2026-11-23-meta-emissions-up-45-percent-net-zero-review-capital-goods-low-carbon-materials-construction-trade-sub-concrete-steel-data-center-bid-carbon-specs).

---

**5. New METR data: AI matches skilled people on checkable work, trails experts on judgment, and AI graders go easy.**

METR's Q4 update says models "usually match or outperform skilled humans" on tasks that can be scored, but show "worse judgment than human experts" where there's no clear check. It also found AI judges are "overgenerous" when grading stronger models. None of the tasks are construction tasks. For estimators, the read is to sort each bid step. Counts, extensions and cited spec pulls can be checked against the drawings or a closed bid. Exclusions, contingency and go/no-go stay with a person. A second AI saying the takeoff looks right is not much of a check.

Source: [METR](https://metr.org/blog/2026-11-20-q4-2026-capability-update/). Our take: [splitting the bid into two piles](https://constructionaibrief.com/posts/2026-11-21-metr-q4-capability-update-verifiable-vs-judgment-ai-judges-overgenerous-construction-estimator-checkable-tasks-human-scope-review).

---

**6. OpenAI's phone-ready voice model lists at 5 cents a minute.**

GPT-Live-1.1 hit OpenAI's API on November 19. It listens while it speaks, calls tools, and connects to phone lines through carriers like Twilio and Telnyx. On our arithmetic, 300 after-hours calls at four minutes each come to about $60 a month for the voice layer, before backend model, carrier and build costs. For a mech or plumbing service department, that makes an intake-only no-heat line worth testing this winter. It would take the address, unit and symptom, check the service agreement and page the on-call tech. Keep arrival times and pricing out of its mouth, and run 20 mock calls before a real customer reaches it.

Source: [OpenAI — GPT-Live-1.1 model page](https://developers.openai.com/api/docs/models/gpt-live-1.1). Our take: [what an after-hours line would cost](https://constructionaibrief.com/posts/2026-11-21-openai-gpt-live-1-1-voice-agent-5-cents-minute-construction-trade-sub-after-hours-service-line-foreman-call-in-cost).

---

**Robotics spotlight: the money is concentrated.**

Construction robotics startups raised about $1.6 billion in 2026 through October 29, more than four times all of 2025, per Crunchbase data. The deal count barely moved, with 30 rounds against 28. Bedrock Robotics, Icon and Gravis took about 83% of it, and Bedrock and Gravis both retrofit heavy equipment for autonomy. For sitework subs, that means autonomous excavator vendors will be well funded and pitching hard. Ask for production numbers from jobs like yours, and settle who owns the downtime before a machine shows up.

Source: [Value Add VC — sector snapshot of Crunchbase data](https://valueaddvc.com/pulse/construction-robotics-funding-1-6b-2026-sector-snapshot).

---

We publish again Wednesday.

*Construction AI Brief covers AI for contractors three times a week. Forward this to your precon lead, or [subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*
