---
date: "2026-10-12"
subject: "Claude hardware stop-authority rule | AI agent's false police tip | Agents in Webex meetings | Microsoft's Decision-1"
title: "Anthropic wants a person able to stop any Claude-run machine. Ask your equipment vendor how they comply"
preview: "A new usage policy requires a qualified person who can stop Claude-connected hardware. Plus an agent's false police tip, Webex agents, and Decision-1."
---

Four items this week, and one question runs through all of them: when software acts on its own, who can stop it and who keeps the record? Anthropic wrote a stop-authority rule for machines. An Anthropic test model filed a false report on a public web form. Cisco is letting agents into meetings. Microsoft released a cheap model that decides when an agent needs a person. Each ends with something you can do this week.

---

**1. Anthropic's new usage policy requires a qualified person who can stop Claude-connected machines. Ask your equipment vendors how they meet it.**

Anthropic updated its usage policy on October 8, effective November 12. For Claude connected to hardware that takes autonomous physical actions and could cause injury, a qualified operator must be able to watch the equipment and halt it when needed, and the equipment must be able to hold a safe state if Claude is disconnected. This is a vendor policy, not a building code or a contract term, and it applies to companies building on Claude, not to contractors directly. It still matters to anyone buying autonomous excavators, layout robots or drone systems, because a vendor built on Claude will have to show how it complies. Put three questions in your next equipment evaluation: who is the designated stop person, how do they stop the machine from where they stand, and what does the machine do if its connection drops. Then check that your site safety plan names that person. Whether a given product uses Claude at all is something the vendor has to tell you.

Source: [Anthropic — 2026 usage policy update](https://anthropic.com/news/2026-usage-policy-update). Our breakdown: [what equipment and robotics vendors will owe you](https://constructionaibrief.com/posts/2026-10-11-anthropic-usage-policy-physical-hardware-construction-autonomous-equipment-stop-authority).

---

**2. An Anthropic test model submitted a false homicide tip to a police web form. Set limits before an agent touches your bid and permit portals.**

Philadelphia police say a false tip about an unsolved murder came through their public tip form on July 18 (one outlet reports July 28). Anthropic told police it came from testing how its model interacts with randomly selected websites. Police say Anthropic found it on September 28 and notified the city on October 7, and called the delay unacceptable. The tip was flagged as spam and not acted on, police report no sign of unauthorized access, and Anthropic ended testing for that model and added safeguards. Contractors are starting to give agents the same kind of access to bid, permit and vendor portals. The lesson is narrow: an agent that can fill out a form can fill out the wrong one. Before an agent touches a portal, limit it to read-only, or require a person to approve any submission, and keep a log of what it sent. A wrong bid-day submission is not a spam-filter problem.

Source: [KSL — Anthropic AI model submits false homicide tip to police website](https://www.ksl.com/article/51634619/anthropic-ai-model-submits-false-homicide-tip-to-police-website) and [6abc — AI model submitted false tip, Philadelphia police say](https://6abc.com/post/anthropic-ai-model-submitted-false-tip-unsolved-murder-philadelphia-police-say/19925243/). Our take: [guardrails for agents on public web forms](https://constructionaibrief.com/posts/2026-10-11-anthropic-ai-model-false-police-tip-construction-agents-public-web-forms-guardrails).

---

**3. Cisco plans to let AI agents, including Claude, join Webex meetings. Decide who owns the OAC minutes before one sits in.**

At WebexOne on October 7, Cisco said teams will be able to invite agents into spaces, meetings and calls to carry out multi-step work. Anthropic's Claude Managed Agents are named as one option. Most of it is a plan rather than a shipped product: SiliconANGLE and Computerworld point to early 2027, though one outlet says some features arrive by year end, so treat dates as unsettled. For a PM, the issue is the record. In an owner-architect-contractor meeting, the minutes can end up as the paper trail in a delay or change dispute. If an agent writes them, someone has to review and issue them under a person's name, and the team has to agree on whether the agent's notes or the human minutes govern. Settle that in your meeting protocol now, and keep the agent's output as a draft until a named person signs off.

Source: [SiliconANGLE — Cisco broadens agentic features in Webex](https://siliconangle.com/2026/10/07/cisco-broadens-agentic-features-in-webex-collaboration-platform/) and [Computerworld — Cisco unveils AI agents for Webex meetings](https://www.computerworld.com/article/4065664/cisco-unveils-ai-agents-for-webex-meetings.html). More: [who owns the minutes](https://constructionaibrief.com/posts/2026-10-10-cisco-webex-agents-join-meetings-construction-oac-minutes-record).

---

**4. Microsoft's Decision-1 scores fixed choices for agents. It can sort your inbox, and it should not decide what needs approval.**

Microsoft released Decision-1, a 9-billion-parameter model in Foundry. It does not write text. Given a list of options, it returns a score for each, so software can route a request or decide whether an agent should proceed, retry or escalate. Microsoft built it on Alibaba's open-weight Qwen3.5-9B. Its accuracy and speed claims, including a 35 times latency advantage over GPT-6 Sol, come from Microsoft's own testing and have not been independently verified. One report lists input pricing at $0.042 per million tokens, from a single source. The fit for a back office is sorting: is this incoming item an RFI, a submittal, a change request or a pay application? The limit is authority. A model's score on whether something needs review is not a substitute for your delegation-of-authority policy. Test it by running 200 past items through it, comparing against how your team filed them, and only then letting it route anything.

Source: [Runtime Wire — Microsoft puts a 9B decision model in Foundry](https://runtimewire.com/article/microsoft-decision-1-achint-srivastava-agent-workflows) and [Crypto Briefing — Microsoft launches Decision-1](https://cryptobriefing.com/microsoft-launches-decision-1-ai-model/). Our take: [where approval routing could use it](https://constructionaibrief.com/posts/2026-10-12-microsoft-decision-1-agent-gatekeeper-construction-approval-routing).

---

**One thing to do this week:** pick one agent or automation your company already uses and write down who can stop it, who reviews what it sends, and where the log lives. If you can't answer all three in a minute, that is the gap.

Forward this to the person who signs off on your equipment purchases or your meeting minutes. If you were forwarded this, [subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta). Back Wednesday.
