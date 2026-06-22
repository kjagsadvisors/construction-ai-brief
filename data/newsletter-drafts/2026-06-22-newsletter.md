---
date: "2026-06-22"
subject: "Trunk Tools Cortex launches | Procore agents expand | Cursor's 90-day clock"
title: "Trunk Tools Cortex, Procore's five agents, and why your AI vendor list needs an audit"
preview: "Three moves this week that change what's on your construction software stack."
---

Three significant construction AI developments landed this week. One is a new product category — AI that actually reads construction drawings. The other two are platform moves that change how you should think about the tools your team is already using. A fourth story, still running since June 12, is a vendor risk audit that most GC ops teams haven't completed.

---

**1. Trunk Tools ships Cortex — drawing AI with specific claims to test**

Trunk Tools launched Cortex on June 17, a five-agent platform built specifically to process construction drawings — not just text documents. The claimed numbers: a 20-sheet change bulletin reviewed with written change narratives in under five minutes; submittal cycle time down 74% (median across users over the past 12 months); submittals open more than 60 days down from 42% of the log to 2%.

Those are specific enough to verify against your own projects, which is the point. Most AI tools embedded in construction management platforms, including Procore's new agent suite, don't process drawings — drawings are visual and spatial in ways that general-purpose models weren't built for. Cortex's five agents cover drawing bulletin review, submittal review, RFI management, bid leveling, and submittal register generation. TrunkSubmittal is already embedded inside Procore as a workflow step; Cortex also integrates with Autodesk Forma, Box, SharePoint, Egnyte, and Dropbox.

None of the agents make decisions. TrunkReview flags drawing changes; your PE assesses whether a change creates a scope gap or cost event. TrunkSubmittal flags discrepancies; your responsible engineer closes the loop. The question worth asking on a demo: show me accuracy on a project type similar to mine — commercial office, healthcare, data center — not on your own test sets.

[Full breakdown of each agent and what it can't do →](https://constructionaibrief.com/posts/2026-06-21-trunk-tools-cortex-construction-drawings-ai)

Source: [GlobeNewswire — Trunk Tools launches Cortex](https://www.globenewswire.com/news-release/2026/06/17/3313698/0/en/trunk-tools-launches-cortex-to-tackle-construction-s-hardest-ai-problem-drawings.html)

---

**2. Procore's five embedded agents move toward broader beta**

Following its Datagrid acquisition in January, Procore demonstrated five embedded AI agents at its Innovation Summit on June 17. The agents: Deep Search (simultaneous search across specs, drawings, and RFIs with source links), Submittal Reviewer (first-pass compliance check against project specs), RFI Agent (completeness check and edits before submission), Daily Log Agent (drafts from photos, emails, and voice notes already in Procore), and Contract Review Agent (flags conflicts between contracts, drawings, and specs). None of them approve anything — every call stays with the engineer or PM.

Private beta is running now with select firms. Procore has said broader access is coming this summer as a paid tier. If submittals or RFIs are a real time drain in your Procore environment, requesting beta access now puts you ahead of the pricing conversation when the paid tier drops.

One question to run before you sign up: Procore pulled Trunk Tools from API access in fall 2025 over concerns about third-party bulk data export for AI training. The same platform terms now govern how your project data — submittals, RFIs, daily logs — flows into Procore's own agents. Ask your account team what the paid-tier addendum says about training data use. The answer may be acceptable; having it before you're locked in is the better position.

[Full breakdown of each agent and the data terms question →](https://constructionaibrief.com/posts/2026-06-21-procore-ai-agents-what-they-do)

Source: [BusinessWire — New Procore AI Experience Embeds Datagrid into Procore](https://www.businesswire.com/news/home/20260521183451/en/New-Procore-AI-Experience-Embeds-Datagrid-into-Procore)

---

**3. The Anthropic export ban is a vendor risk audit, not just a news story**

On June 12, the US Commerce Department ordered Anthropic to suspend access to its two most capable models — Fable 5 and Mythos 5. Both went dark globally, with no advance warning, on a government directive. As of June 20, access had not been restored. Anthropic expects the models back soon; Kalshi's prediction market was pricing restoration before July 1 at roughly 57%.

The models will likely come back. The question they leave behind is the one worth answering now: how many tools in your project stack are running on AI providers you've never mapped? Trimble's SketchUp uses Claude for AI-assisted 3D modeling. Other contech vendors run Claude through Amazon Bedrock or Azure AI Foundry without advertising which foundation model is underneath. ENR Top 400 firms with foreign-national staff on work authorizations found those employees locked out of Claude-based tools mid-project, mid-submittal cycle, with no timeline.

Three questions worth having answers to before the next outage: (1) what model does each AI feature in your stack actually use; (2) what does the vendor do if that model is restricted or unavailable; (3) do you have internal tools built on a single model provider with no documented fallback?

[Full vendor risk audit and the three questions →](https://constructionaibrief.com/posts/2026-06-20-anthropic-model-shutdown-vendor-risk-construction)

Sources: [Anthropic on X — statement on the US government directive](https://x.com/AnthropicAI/status/2065597531644743999) · [National Law Review — Anthropic suspends Fable 5 and Mythos 5](https://natlawreview.com/article/ai-company-anthropic-suspends-access-claude-fable-5-claude-mythos-5-following-us)

---

**4. SpaceX buys Cursor — construction innovation teams have about 90 days**

SpaceX agreed to buy Cursor — the AI coding editor — for $60 billion in stock on June 16, with a Q3 2026 close expected pending regulatory review. If your firm has developers building internal tools, there's a reasonable chance they're working in Cursor. As of this month, Cursor had over one million paying users and adoption in 64% of Fortune 500 companies. The tool is popular because it lets teams run Claude, GPT-5.5, or Gemini interchangeably inside the same editor — useful for construction-specific tools where one model handles document reasoning and another handles table extraction.

SpaceX also owns xAI, the company behind Grok, after a merger earlier this year. When the Cursor deal closes, SpaceX will own the editor and a competing frontier model. When Anthropic faced a similar situation with Windsurf in 2025 — an acquisition in progress by a company that owned a competing model — it cut Windsurf's direct Claude access mid-project. The situation eventually resolved, but not before teams lost access mid-workflow.

Nothing breaks tomorrow. Cursor remains fully multi-model today. But teams that have built spec extractors, RFI drafters, or submittal checkers in Cursor should answer two questions before Q3 close: which model does each tool actually depend on, and what's the fallback editor if Cursor shifts toward Grok-only post-acquisition?

[Full analysis of the acquisition and what to do about it →](https://constructionaibrief.com/posts/2026-06-22-cursor-spacex-acquisition-construction-tool-risk)

Sources: [TechCrunch — SpaceX to acquire Cursor for $60B](https://techcrunch.com/2026/06/16/spacex-to-acquire-cursor-for-60b-in-stock-days-after-blockbuster-ipo/) · [CNBC — SpaceX, Cursor deal](https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html)

---

**Robotics spotlight: Figure AI is building one humanoid per hour — construction remains the hardest environment to deploy them**

Automate 2026 opened in Chicago today — North America's largest automation show, with more than 1,000 exhibitors and, for the first time in the event's 50-year history, a dedicated pavilion for humanoid robots. Figure AI is now manufacturing its Figure 03 at a rate of one per hour, up from one per day four months ago. The Figure 03 carries 110 pounds, navigates stairs and uneven terrain without being reprogrammed for each new environment, and learns tasks through demonstration rather than hand-coded instructions.

Construction needs this more than any other industry. The Associated Builders and Contractors estimates the industry needs to attract 349,000 net new workers in 2026, rising to 456,000 by 2027. Construction also has the hardest deployment environment of any sector — terrain changes week to week, temporary stairs appear and disappear as floors close out, water and debris are the ambient condition. Every humanoid going into commercial production today is headed to a factory floor, not a jobsite.

The near-term signal to watch isn't humanoids on jobsites. It's whether purpose-built autonomous equipment — Built Robotics' excavation and piling fleet, already running on solar projects through a partnership with Quanta Services' Blattner — expands into vertical construction in the next 18 months. That's the closer window. Built's 8-Layer Safety System has run across dozens of projects without a worker injury; that safety track record is the data that eventually justifies expansion from utility-scale to commercial vertical.

[Full analysis of the deployment gap and what to actually watch →](https://constructionaibrief.com/posts/2026-06-22-humanoid-robots-production-scale-construction-labor)

Sources: [BusinessWire — Automate 2026 opens](https://www.businesswire.com/news/home/20260615964855/en/A3s-Automate-2026-Opens-Next-Week-in-Chicago) · [Figure AI — Ramping Figure 03 production](https://www.figure.ai/news/ramping-figure-03-production) · [ABC — 349,000 construction workers needed in 2026](https://www.abc.org/News-Media/News-Releases/abc-construction-industry-must-attract-349000-workers-in-2026-despite-macroeconomic-headwinds)

---

The vendor risk questions raised by the Anthropic export ban and the Cursor acquisition have a 90-day window. The Procore and Trunk Tools agent launches have a beta queue. Both types of decisions can be deferred — but only one of them gets harder to answer once the window closes.

If anything here would land with someone you respect, forward it. We're trying to be the read that ends the "should we even try AI" conversation in commercial construction.

*Three issues a week — [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=punch_list_cta).*

*Construction AI Brief covers what matters in construction AI three times a week.*
