---
date: "2026-11-09"
subject: "Data center ballots | Fluor's open GMP | Perplexity's agents | Agility's $1.8M | Local bid tools"
title: "Voters rejected data centers in 40 of 41 local measures, and five other stories for GCs and subs to check against their contracts"
preview: "Ballot losses for data centers, a GMP with no price, always-on AI agents, a humanoid maker's thin sales, and bid tools that never leave your PC."
---

Five items this week. Two are about data center work stalling or being priced on thin information, and three are about AI tools you might be asked to adopt. Each ends with a question to put to an owner, a vendor, or your own team before you commit crews or files.

---

**1. Voters rejected data centers in 40 of 41 local ballot measures. Check where your unstarted jobs sit.**

Route Fifty's preliminary count shows opponents winning virtually every local data center measure on November 3, with Harwood, North Dakota, the one exception. Fortune reports Ohio held 21 of the 41 measures. The wording matters more than the headline: some measures ban campuses over 25 MW, others reject a rezoning, and some only add financial guarantees. A ban in Trenton, Ohio, likely won't reach an AWS campus already under construction, while voters in Ashville backed blocking one that is. Results are unofficial until counties certify them. For a GC or sub with an unstarted data center job, ask the owner in writing whether the site is covered, and what your contract says about standby time and suspension if work stops.

Source: [Route Fifty — Voters reject data centers in local ballot initiatives](https://www.route-fifty.com/artificial-intelligence/2026/11/voters-reject-data-centers-local-ballot-initiatives/417033/) and [Fortune on the Ohio measures](https://fortune.com/2026/11/04/ohio-data-center-ballot-measures-midterm-elections/). Our take: [what to do about a stalled job](https://constructionaibrief.com/posts/2026-11-08-data-center-ballot-results-40-of-41-construction-gc-sub-stalled-jobs-standby-claims-after-vote).

---

**2. Fluor signed a GMP contract for Anthropic's Kentucky campus, and the price isn't set. Ask how buyout will work.**

TeraWulf's November 4 SEC filing says it signed a definitive EPC agreement with Fluor on a guaranteed-maximum-price basis for three buildings at the Hawesville, Kentucky, campus, which supports about $19 billion in lease commitments from Anthropic. The filing does not disclose the GMP, the size of Google's credit support, or the debt terms, and financing is described as anticipated, not closed. It lists open-book cost reporting and phased completions from late 2027 through Q2 2028. When a GMP is assembled from trade buyout, early packages lock in cost and late packages carry risk. If you are bidding a package, ask when it is bought out relative to the GMP, who carries quantity growth, and whether your contracting party is paid from closed financing.

Source: [TeraWulf SEC filing](https://www.sec.gov/Archives/edgar/data/0001083301/000162828026069810/wulfhawesvillecsaandepcmpr.htm) and [Data Center Frontier](https://www.datacenterfrontier.com/hyperscale/article/55389531/terawulfs-19b-anthropic-lease-puts-its-brownfield-ai-strategy-to-the-test). Our take: [open-book GMP buyout questions](https://constructionaibrief.com/posts/2026-11-05-terawulf-fluor-gmp-anthropic-kentucky-construction-gc-sub-open-book-gmp-buyout-questions).

---

**3. Perplexity's Teammates are always-on agents that can watch Slack and Gmail. Set access rules before a PM tries one.**

Perplexity launched Teammates on November 5: named agents that keep working on an assignment without a new prompt, connect to tools like Slack, Gmail and GitHub, and can message coworkers in Slack for approval. Launch access is web-only for Max subscribers at $200 a month, and coverage notes credit-based pricing is coming without details. The risk for a project team is permissions: an agent that inherits a PM's inbox can see owner correspondence, pay apps and change order pricing. Give it its own account or a limited folder, start with read-only work such as a weekly RFI and submittal status summary, and keep anything sent to owners, architects or subs under human approval.

Source: [Perplexity — Teammates are agents for complex, ongoing work](https://www.perplexity.ai/en-GB/hub/blog/teammates-are-agents-for-complex-ongoing-work) and [Shiftdelete](https://shiftdelete.net/en/perplexity-teammates-ai-agents). Our take: [access rules for a pilot](https://constructionaibrief.com/posts/2026-11-08-perplexity-teammates-always-on-agents-construction-gc-ops-pm-slack-gmail-permissions-pilot-rules).

---

**4. Anthropic made inference hooks generally available in Claude Enterprise. A GC can block owner-confidential files before the AI sees them, if IT writes the rules.**

Anthropic announced on November 5 that prompt hooks and pre-tool-call hooks are generally available. They send prompts and tool calls to a company's own security tool, which can apply its data-loss rules before the request proceeds. Owner NDAs, security-sensitive layouts and sub bid pricing are the files a project engineer might paste into a chat. The catch: Claude ships no rules, so you need a security product that supports hooks and someone to define what "owner-confidential" looks like. It also covers only Claude Enterprise, not a personal chat login. Ask your IT provider whether it can write those rules, and test them in logging-only mode first if your vendor offers it.

Source: [Anthropic — Claude Enterprise security updates](https://claude.com/blog/claude-enterprise-security-updates) and [The Next Web](https://thenextweb.com/news/anthropic-inference-hooks-dlp-claude-enterprise). Our take: [a bid-data protection checklist](https://constructionaibrief.com/posts/2026-11-07-anthropic-claude-enterprise-inference-hooks-ga-construction-gc-ops-owner-nda-bid-data-dlp-checklist).

---

**5. Microsoft published steps to run a coding agent on one 24 GB workstation GPU. An estimator can build bid-file tools without uploading the bid.**

A November 5 Microsoft Foundry post walks through running Alibaba's Qwen3.8-27B locally and connecting it to GitHub Copilot. Microsoft says it needs an Nvidia GPU with at least 24 GB of VRAM for up to 64K tokens of context; the example is Windows. The benchmark scores are Microsoft's own, not independent tests. For estimating, the point is privacy: cleaning a bid-tab CSV or reformatting sub quotes into a leveling sheet no longer requires pasting quotes into a cloud service. Keep it to small, checkable jobs on a copy of the file, and don't let a local model silently change a bid total.

Source: [Microsoft Foundry blog](https://devblogs.microsoft.com/foundry/foundry-local-agentic-coding-qwen3-8-27b/) and [Visual Studio Magazine](https://visualstudiomagazine.com/articles/2026/11/05/microsoft-shows-how-to-run-qwen-coding-agents-locally-with-github-copilot.aspx). Our take: [private spreadsheet tools for estimators](https://constructionaibrief.com/posts/2026-11-09-microsoft-foundry-local-qwen-27b-local-coding-agent-construction-estimator-sub-private-spreadsheet-tools-24gb-gpu).

---

**Robotics spotlight: Agility Robotics is public with $1.8M in sales**

Agility Robotics began trading on Nasdaq on November 5 under AGLT after a SPAC merger, valuing existing equity at about $2.5 billion. Its 2025 revenue was about $1.8 million against a net loss of $138.1 million, and reports say roughly 64 percent of revenue came from related parties. More than $300 million in Digit orders are conditional and are not recognized revenue. If a prefab shop is offered a robot lease, read the filings first and ask what happens to service and software support if the vendor cannot fund itself.

Source: [TechRepublic — Agility Robotics goes public](https://www.techrepublic.com/article/news-agility-robotics-nasdaq-debut-2-5-billion-valuation/) and [The Robot Report](https://www.therobotreport.com/agility-robotics-reports-18m-revenue-ahead-of-humanoid-spac/). Our take: [reading the filings before a robot lease](https://constructionaibrief.com/posts/2026-11-08-agility-robotics-nasdaq-debut-1-8m-revenue-construction-prefab-shop-robot-lease-vendor-viability).

---

We publish again Wednesday.

*Construction AI Brief covers AI for contractors three times a week. Forward this to a colleague who prices or runs data center work, or [subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*
