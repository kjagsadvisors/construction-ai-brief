---
date: "2026-09-28"
subject: "A coding agent deleted 48K files in 103 seconds | Oracle's $165B force majeure"
title: "An AI agent wiped 48,000 files in two minutes. Here's the guardrail before one touches your files"
preview: "A coding agent wiped 48,000 files in under two minutes, the same setup many construction back offices are building right now."
---

This week's pattern is access without a boundary. An AI coding agent wiped out a project's files because nobody scoped what it could touch. A new chat app lets agents answer in a channel without being tagged in. A city council wants a 24-hour clock on AI incidents for anyone holding a public contract. And a $165 billion data center campus shows what happens when the thing that's late isn't the building. Five items, one theme: decide the boundary before the agent finds it for you.

---

**1. A coding agent reportedly deleted 48,000 files and a project's Git history in 103 seconds — the exact setup a construction back office builds when an estimator lets an AI agent loose on live spreadsheets with no backup.**

According to a widely circulated account, an Anthropic Claude Code agent tasked with rebuilding a project mirror wrote a cleanup routine that deleted through 614 directory junctions pointing back into the live project folder, wiping roughly 48,000 files and the local Git history in under two minutes. The specific numbers trace to one Reddit post, not a forensic audit, but the failure mode is documented: Claude Code's bypass-permissions mode skips approval prompts and is meant only for isolated containers, not a live working directory. If your estimating or PM team is using an agentic tool to build bid-tab scripts or submittal-filing macros, scope the agent to a disposable copy and push commits to a remote repo, not just local Git.

[Full breakdown →](https://constructionaibrief.com/posts/2026-09-28-claude-code-file-deletion-construction-agent-sandbox)

Source: [TechRadar — Claude Code AI agent deleted 48,000 files](https://www.techradar.com/pro/security/i-broke-something-a-claude-code-ai-agent-deleted-48-000-files-in-just-over-100-seconds-then-apologized-for-doing-so)

---

**2. A new team-chat startup lets AI agents join a channel and reply without a human tagging them in — a design choice that's a convenience in a scheduling thread and a contract problem in an RFI thread.**

Ando, a $20 million-funded Slack competitor from founder Sara Du, ships agents that sit in channels and pick up work unprompted, built to host agents from Codex, Claude, Devin, or Grokbot. No construction firm has been named as a customer, but the interaction model is coming to whatever platform your project team already uses. Standard subcontract language assumes a directive came from an authorized person, so before any agent gets access to a channel that touches RFIs, change orders, or field directives, require every agent message to visibly disclose itself and block it from originating or replying without a named human sending that specific message.

[Full breakdown →](https://constructionaibrief.com/posts/2026-09-28-ando-agent-native-chat-construction-rfi-authority)

Source: [TechCrunch — Ando builds messaging for humans and agents](https://techcrunch.com/2026/09/24/ando-eyes-slack-as-it-builds-team-messaging-platform-for-humans-and-agents-to-work-together/)

---

**3. Oracle sent a force majeure notice on its $165 billion Stargate data center campus — and the trigger was a denied gas pipeline permit, not a construction delay.**

New Mexico's State Land Office has repeatedly denied the right-of-way permit for the gas pipeline feeding Project Jupiter's power supply, pushing the timeline six months, while a separate air-quality permit is still pending. The buildings can finish on schedule and the campus still can't take power — a gap between substantial completion and actual energization that most data center contracts haven't priced. Before your next data center bid, check whether the force majeure clause names permitting delays specifically (not just weather and acts of God) and whether that risk flows down to your tier or stops at the developer.

[Full breakdown →](https://constructionaibrief.com/posts/2026-09-27-oracle-force-majeure-stargate-data-center-gc-contract-risk)

Source: [CNBC — Oracle cites force majeure on data center](https://www.cnbc.com/2026/09/24/oracle-data-center-force-majeure.html)

---

**4. New York City Council introduced a bill that would require any company holding a city contract — construction firms included — to report AI safety incidents within 24 hours.**

The bill, part of a roughly 10-bill package that gets its first hearing October 5, isn't limited to software vendors: a GC building for the School Construction Authority or a sub on a DOT job counts as a "contractor" the same way a chatbot vendor does. Nothing is law yet, and the standards defining an "AI safety incident" haven't been published. What's worth doing now on any public job is the inventory work underneath it — list which AI tools are actually running (safety cameras, scheduling software, estimating tools) and name who would escalate a failure within 24 hours, since NYC's last first-in-the-nation AI law became the template other states copied.

[Full breakdown →](https://constructionaibrief.com/posts/2026-09-27-nyc-council-ai-bill-24-hour-incident-reporting-city-contractors)

Source: [Fortune — NYC Council AI regulation bills](https://fortune.com/2026/09/25/new-york-city-council-speaker-ai-regulation-bills-openai-anthropic/)

---

**5. A startup launched software that inventories every AI agent a company is secretly running, because fewer than one in five organizations know — and Procore's own no-code Agent Builder means GCs already have the same blind spot.**

Dataiku's Agent Management scans enterprise AI platforms and flags agents with access to sensitive data as high risk, pending review. It doesn't connect to Procore, Autodesk, or Trimble, but the gap it closes already exists inside them: any project team member can spin up an agent with Procore's Agent Builder — including an RFI Creation Agent — with no central list of what exists or what it can touch. Build the manual version this week: one row per agent, who owns it, what data it can read, and whether it only drafts or can also submit on its own.

[Full breakdown →](https://constructionaibrief.com/posts/2026-09-26-dataiku-agent-management-construction-ai-agent-sprawl)

Source: [Help Net Security — Dataiku Agent Management](https://www.helpnetsecurity.com/2026/09/25/dataiku-agent-management/)

---

**Worker-language spotlight:** Google's Gemini can now hold a live, two-way conversation through a lip-synced video avatar in 97 languages, going generally available in Gemini Enterprise on September 24. Nearly a third of the U.S. construction workforce is Hispanic, and OSHA requires safety training in a language the worker actually understands — a live avatar that answers a follow-up question is a genuine step past a translated handout, but nothing here has been validated against OSHA-regulated content yet. Treat it as a supplement a bilingual safety manager checks first, not a replacement for your documented training program.

[Full breakdown →](https://constructionaibrief.com/posts/2026-09-26-gemini-live-avatar-construction-safety-orientation-language)

---

If you only act on one item this week, make it the first: before an AI agent touches a live estimating template or bid archive, scope it to a disposable copy and confirm your commits are actually landing on a remote repo, not just sitting in local Git.

*Forward this to whoever on your team is starting to let an AI agent build its own tools.*

*Construction AI Brief publishes new coverage on AI's construction stakes multiple times a week. [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*
