---
date: "2026-11-13"
subject: "1,000 spec checks on one PDF | One agent per shared log | AI minutes skip OAC"
title: "Google's new API runs 1,000 yes/no checks against one submittal PDF, and four other stories about where AI fits on a project team"
preview: "A cheap way to screen a submittal against the spec, why one shared agent beat one per PM, and a $34.9B contract that hinged on a lease date."
---

Five items and a robotics note. Three are about how AI tools sit inside a project team: who the agent works for, which meetings it can attend, and what it can check without a person. Two are about the data center work many of you are bidding.

---

**1. Google's new API scores up to 1,000 yes/no questions against one PDF. It never tells you where it looked.**

Google released the Gemini Decisions API on November 11. One request takes a single input of up to 256,000 tokens (text, images, video or PDFs) and up to 1,000 yes/no, multiple-choice or rubric questions, and returns each answer with a confidence score from 0 to 1. List price is $0.10 per million input tokens with no charge for output. For a mechanical or electrical sub, the obvious test is a spec compliance checklist run against a submittal package before it goes to the GC. The limits: it gives no page references and no reasons, Google has published no accuracy figures for construction documents, and it is a developer building block, so someone has to build the tool around it. Treat low-confidence answers as the list a person reviews first, and spot-check the confident ones.

Source: [Google — Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/). Our take: [a submittal check as the first test](https://constructionaibrief.com/posts/2026-11-13-google-gemini-decisions-api-1000-questions-one-pdf-construction-trade-sub-submittal-spec-compliance-checklist).

---

**2. One shared agent beat one agent per person in Anthropic's tests. Assign agents to the log, not to each PM.**

Anthropic researchers published "Worse Together" on November 11. In four simulated settings where several users share something limited (a budget, a calendar, a group order, a code merge queue), a single agent serving everyone outscored per-user agents that messaged each other by about 10 to 45 percentage points for the two Claude models tested. In the group-order test, 65% to 77% of team runs included an edit that went against another user's request, and Claude team runs contained unsupported claims about what other people wanted in 53% to 58% of cases. None of the tests were construction tasks, and the users were simulated. Still, a submittal log, a delivery calendar and a look-ahead schedule are all shared records. If you pilot agents, put one on each record with a named owner, and do not let five personal assistants edit the same log.

Source: [Anthropic — Worse Together](https://alignment.anthropic.com/2026/worse-together/). Our take: [one agent per shared log](https://constructionaibrief.com/posts/2026-11-13-anthropic-worse-together-per-user-agents-vs-shared-coordinator-construction-gc-ops-project-team-shared-logs-schedules).

---

**3. Claude Meetings leaves the call when an outside guest joins. Start with internal meetings.**

Anthropic launched Claude Meetings in beta on November 10. TechCrunch reports it joins a video call as a visible participant, posts a notice in the chat, and produces notes and action items afterward. It works on Google Meet only, on Team and Enterprise plans. By default it will not join a call with external guests unless an admin authorizes it, and it leaves if one joins. An OAC meeting has the owner and architect on it, so that is off the table until your admin decides otherwise on purpose. The lower-risk trial is internal: estimate-to-operations handoffs and weekly project reviews. Compare its action items to your own notes for a few weeks, and have a PM or project engineer review anything before it goes out as minutes.

Source: [TechCrunch — Anthropic launches Claude Meetings](https://techcrunch.com/2026/11/10/anthropic-launches-claude-meetings-to-turn-workplace-discussions-into-plans-and-tasks/). Our take: [why OAC minutes are out for now](https://constructionaibrief.com/posts/2026-11-12-anthropic-claude-meetings-leaves-external-guests-construction-gc-ops-oac-meeting-minutes-internal-meetings-first).

---

**4. A $34.9B compute deal became cancellable over a missed lease deadline. Ask what your data center job is conditioned on.**

Anthropic's amended S-1, filed November 10, says its August agreement with Lambda, about $34.9 billion, is terminable by either party because Lambda did not secure a facility lease by a contract deadline. Per MLQ's reading of the filing, neither side has given notice and Anthropic says it does not currently intend to terminate. About $186.2 billion of Anthropic's roughly $900.9 billion in commitments is subject to termination rights or unmet conditions, and Lambda's fees accrue only as capacity is delivered and accepted. For a GC or sub on this kind of work, the contract that funds the job can turn on a date that is nowhere in your schedule. Before you release long-lead equipment, confirm what you are owed on suspension or termination and who pays cancellation charges.

Source: [MLQ — Anthropic's amended S-1 and the Lambda deal](https://mlq.ai/news/anthropics-amended-s-1-says-its-35-billion-lambda-compute-deal-can-now-be-cancelled-and-raises-its-microsoft-commitment/). Our take: [upstream conditions and termination clauses](https://constructionaibrief.com/posts/2026-11-12-anthropic-s-1-lambda-34-9b-deal-terminable-missed-lease-deadline-construction-gc-sub-upstream-conditions-termination-clauses).

---

**5. Torus raised $500M to set AI compute units behind existing meters. Nobody has said who does the site prep.**

Torus announced $500 million led by Magnetar on November 11 to build Foundry, a factory-built AI inference unit of 1 to 20 MW per site that installs behind the meter at existing commercial and industrial properties. The company says 12 to 16 weeks from contract to running workloads, about a week of site prep, one to two days of installation and commissioning, no building, and no grid upgrade because it uses spare transformer capacity. Those are company claims. The release does not mention permitting or utility review, and it does not say who performs the site prep and tie-in. That scope is the size of a service upgrade, which a regional electrical or sitework sub can do. If a customer brings one up, ask the serving utility about the transformer headroom claim before you price it.

Source: [Torus press release](https://www.financialcontent.com/article/bizwire-2026-11-11-torus-launches-modular-ai-infrastructure-foundry-to-meet-surging-ai-inference-demand-and-secures-500m-in-funding). Our take: [the small-site electrical scope](https://constructionaibrief.com/posts/2026-11-12-torus-500m-foundry-behind-the-meter-ai-containers-construction-electrical-sub-small-site-scope-transformer-headroom).

---

**Robotics spotlight: a humanoid kitted parts at 96% on a Mercedes line**

Google DeepMind said on November 10 that an Apptronik Apollo 2 humanoid running its Gemini Robotics 2.5 model sorted brackets from bulk bins into sequencing trays with a 96% success rate on Mercedes-Benz production lines. Kitting is what a mechanical or electrical prefab shop does before every delivery. DeepMind calls this a proof of concept and does not say how many attempts were counted, what counted as success, or how often a person stepped in. The model is rolling out to robotics partners only. A kit that reaches the field one fitting short can stop a crew, so the number to ask any future vendor for is the error rate after a check step, measured on your parts.

Source: [Google DeepMind — Gemini Robotics 2.5](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/). Our take: [what the other 4% costs](https://constructionaibrief.com/posts/2026-11-13-deepmind-gemini-robotics-2-5-mercedes-kitting-96-percent-construction-mech-elec-sub-prefab-shop-kitting-error-rate).

---

We publish again Monday.

*Construction AI Brief covers AI for contractors three times a week. Forward this to the PM who owns your submittal log, or [subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*
