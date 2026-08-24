---
date: "2026-08-24"
subject: "An excavator now runs itself with no one in the cab | AI is writing exploits for your sub's PLCs"
title: "The equipment runs itself now. So does the invoice."
preview: "Bedrock Robotics is running excavators with no operator, no remote pilot, and no spotter on live GC jobsites, the NSA and CISA say hackers are using AI to write exploits for the Siemens PLCs your controls sub commissions, Cerebras's new chip needs a rack cooling number most data centers built five years ago can't hit, Pennsylvania just made data center permits conditional on a signed local-jobs deal, a $100 billion debt package is quietly becoming the real counterparty on the next hyperscale bid, and a CEO found his own AI agent had spent $1,000 while he was at dinner."
---

Six stories from the past week, and every one is the same shift: something that used to run under a person's hand — an excavator, an exploit script, a coding agent's spending — is now running on its own, and the safety plan, the security checklist, or the spending cap hasn't caught up. Read the first two for what's moving unsupervised right now. Read the rest for what shows up on your bid, your rack schedule, and your invoice because of it.

---

**1. An excavator is now digging on live jobsites with nobody in the cab, nobody on a remote console, and nobody standing by as a spotter.**

Bedrock Robotics says its retrofit kit — LiDAR, GPS, and cameras bolted to an excavator's roof — moved from supervised testing to full autonomy this month on jobs with Sundt Construction, Zachry Construction, and Champion Site Prep, including a 1.2 million cubic yard sitework project. A site manager still sets the plan; the machine executes it, stopping on its own if a person or unrecognized object gets too close. Every existing site safety plan assumes a person is in that seat, backed by exclusion zones and a spotter — this swaps all of that for proximity software the crew didn't write and can't inspect. If autonomous earthmoving is showing up on a job you're bidding against or considering, get your safety director and your insurance broker talking before an incident forces it.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-20-bedrock-robotics-fully-autonomous-excavator-no-operator-safety-plan)

Source: [Construction Dive — Bedrock Robotics' fully autonomous excavators hit jobsites](https://www.constructiondive.com/news/bedrock-robotics-fully-autonomous-excavators-jobsites/828267/)

---

**2. The NSA and CISA say hackers are now using AI to write exploit code for the exact PLCs your electrical sub racks and commissions.**

A joint advisory from the NSA, CISA, FBI, DOE, and EPA on August 19 warns that threat actors are combining internet-scanning tools with AI coding assistants to generate exploitation scripts for Siemens S7 PLCs — the controllers behind pumps, valves, and building automation on water, energy, manufacturing, and commercial jobs. The advisory flags something specific to construction: a PLC is most exposed during commissioning, not operation, when it's energized on a temporary network with shared credentials while punch-list items get closed out and before the owner's IT team has taken over. Inventory every S7 PLC before it's powered up, change default and commissioning-shared credentials before energization, and treat any third-party "monitoring tool" offered during startup as unverified until IT signs off.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-21-cisa-siemens-plc-ai-exploits-construction-commissioning-cyber-risk)

Source: [CISA Advisory AA26-231A](https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-231a)

---

**3. Cerebras's new AI chip needs 120-140kW of cooling per rack. Most data centers built even two years ago can't hit that number.**

The CS-4, launched August 19, packs three wafer-scale processors into a single rack running 120-140kW — in the same bracket as Nvidia's densest GPU racks, with vendors already previewing 240kW for next year. Standard enterprise colocation runs 3-5kW a rack; even "AI-ready" space built in 2024-2025 typically maxes out at 20-50kW. For a mechanical or electrical sub, that means direct liquid cooling and dense power distribution belong in the base bid from slab-down, not as an add-alternate — and any RFP still referencing an older AI-ready spec sheet is pricing to a number that's already moved 3-5x.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-21-cerebras-cs-4-liquid-cooling-rack-density-data-center-mep)

Source: [The Register — Cerebras CS-4 rack systems](https://www.theregister.com/systems/2026/08/19/cerebras-cs-4-rack-systems-juice-chips-for-every-last-drop-of-ai-performance/5289286)

---

**4. Pennsylvania won't even open a data center permit file anymore until the developer signs a binding local-jobs commitment.**

Governor Shapiro's Executive Order 2026-05, signed August 18, pulls every data center over 25 megawatts out of the state's fast-track permitting program and blocks DEP from reviewing an application until the developer has a signed commitment to hire and train local workers, a community-benefit agreement, and local approval in hand. The state's data center sales-tax exemption is being updated to require the same commitment, so a developer who won't sign loses the tax break along with the fast permit path. Before pricing Pennsylvania data center work, confirm whether that commitment and local approval are actually signed — that paperwork now sets the date the schedule gets built backward from.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-20-pennsylvania-data-center-executive-order-grid-permitting-construction)

Source: [Pennsylvania Governor's Office — Executive Order 2026-05](https://www.pa.gov/governor/newsroom/2026-press-releases/governor-shapiro-signs-executive-order-on-data-center-developmen)

---

**5. Broadcom is reportedly borrowing up to $100 billion for Anthropic's AI chips — through a shell entity that may be the actual party signing your next data center contract.**

Reports this week put Broadcom's debt package for Anthropic's chip and networking buildout at $60-100 billion, issued through a special-purpose vehicle rather than Broadcom's own balance sheet — the same financing structure now standard across hyperscale AI data centers. Construction attorneys warn that when one of these projects misses a completion milestone, lenders can move to take control of the project entity's cash accounts, and the developer then looks to its own contractors for the resulting losses. Before bidding one of these jobs, get precon to identify the actual contracting entity — not the AI lab's name on the press release — and confirm payment bond and lien rights attach to it.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-22-broadcom-100-billion-debt-anthropic-chips-data-center-spv-contract-risk)

Source: [CNBC — Broadcom debt deal expected to reach upwards of $70 billion](https://www.cnbc.com/2026/08/21/broadcom-debt-deal-expected-to-reach-upwards-of-70-billion-sources.html)

---

**6. A CEO found his own AI agent had spent $1,000 over one unsupervised weekend. Your estimating team's next agentic pilot bills the same way.**

Maxio CEO Branden Jenkins discovered a coding agent he was running from his phone had auto-recharged his card in $1,000 increments all weekend, with nobody watching until he checked the dashboard at dinner. The billing model underneath that surprise is the same one running in the estimating, submittal, and RFI-drafting agents construction vendors are shipping now: EY found a fully orchestrated agentic workflow now costs roughly 30 times more per interaction than a simple AI query did in 2023, because the agent keeps working, and billing, as long as the task takes. Before turning an agent loose on a spec book or a takeoff unsupervised, cap the auto-recharge on any token wallet tied to a company card, set a per-agent spending ceiling with a real alert, and define the point where it hands an ambiguous task back to a person instead of looping on it.

[Full breakdown →](https://constructionaibrief.com/posts/2026-08-23-maxio-ai-agent-token-cost-construction-governance)

Source: [Fortune — CEO caught his own AI agent spending $1,000 at dinner](https://fortune.com/2026/08/22/tokenmaxxing-ceo-dinner-1000-dollars-insecurity-maxio-jenkins/)

---

**One more worth a look:** a free, anonymous coding model called Ox Alpha went viral on OpenRouter this week — nobody has claimed ownership, and its own terms don't clearly say who keeps your prompts. That's the exact profile of the tool an estimator or PM reaches for over a weekend to speed up takeoff or draft an RFI. Set the rule now: no real bid data, drawings, or client information goes into any AI tool that doesn't have a named, contactable operator behind it. [Full breakdown →](https://constructionaibrief.com/posts/2026-08-24-ox-alpha-stealth-ai-model-construction-shadow-ai-data-risk)

If you only act on one item this week, make it the CISA advisory: pull your commissioning procedure and check it against the five items in that checklist before the next PLC goes live on your job.

*Forward this to whoever's writing the safety plan for your next job with autonomous equipment on it.*

*Construction AI Brief publishes new coverage on AI's construction stakes multiple times a week. [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*
