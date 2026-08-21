---
date: "2026-08-21"
subject: "An excavator is now running with no one watching it | AI racks just hit 140kW"
title: "The autonomous excavator has no operator — and no rulebook yet"
preview: "Bedrock Robotics is running excavators on live GC jobsites with no operator, no remote pilot, and no spotter, Cerebras's new AI chip needs 120-140kW of cooling per rack, Pennsylvania won't open a data center permit file without a signed local-jobs deal, a retry bug in an AI coding tool knocked GitHub's Actions and API offline for almost 8 hours, and Anthropic's mandatory 30-day data retention isn't going away — but who holds that data is about to change."
---

Five stories this week, and each one is a rule that shifted while nobody sent a memo — a safety plan, a mechanical spec, a permit checklist, a vendor's fine print. Read all five for what's different by Monday.

---

**1. Bedrock Robotics is running excavators with no operator, no remote pilot, and no spotter on the ground — and most site safety plans don't have a line for that.**

On August 17, Bedrock Robotics said its retrofit kit — LiDAR, GPS, an inertial measurement unit, and eight cameras bolted to an excavator's cab roof — has moved from supervised testing to full autonomy on active jobsites for Sundt Construction (a Nevada water treatment facility), Zachry Construction (1.2 million cubic yards of civil sitework), and Champion Site Prep in Texas. A site manager still sets the dig plan; the machine executes it, stopping itself only when its sensors detect something too close. If you self-perform excavation or sub to a GC running this kind of equipment, your safety director and insurance broker need an explicit answer for stop-distance behavior, shutdown authority, and how a stop gets logged — before a job assumes a human is in that seat.

Source: [Construction Dive — Bedrock Robotics moves to fully autonomous excavators on jobsites](https://www.constructiondive.com/news/bedrock-robotics-fully-autonomous-excavators-jobsites/828267/)

---

**2. Cerebras's new AI chip draws up to 140kW per rack. Most data centers built even a year ago can't cool that.**

Cerebras launched its CS-4 rack-scale system on August 19, built from three wafer-scale processors packed into modular units it calls Wafer-Scale Backpacks — roughly 46kW each, three per rack, for a system total of 120-140kW. That's well above the 20-50kW that's been standard for "AI-ready" colocation space, and Cerebras itself says the density doesn't fit conventional colocation buildings without a mechanical overhaul. For a mechanical or electrical sub bidding data center work, direct liquid cooling is now base scope rather than an add-alternate, and power distribution needs to be priced by kilowatts per rack, not square footage. If an RFP still references a 2024 or 2025 AI-ready spec, flag it before you price to a number that's already three to five times too low.

Source: [The Register — Cerebras CS-4 rack systems juice chips for every last drop of AI performance](https://www.theregister.com/systems/2026/08/19/cerebras-cs-4-rack-systems-juice-chips-for-every-last-drop-of-ai-performance/5289286)

---

**3. Pennsylvania won't open a data center permit file until the developer signs a binding local-jobs deal.**

Governor Josh Shapiro's Executive Order 2026-05, signed August 18, pulls every data center over 25 megawatts of peak demand out of the state's fast-track permitting program and bars the Department of Environmental Protection from reviewing an application until the developer has a signed commitment to the state's GRID Requirements — including local hiring and a community benefit agreement — plus local approval. The sales-and-use tax exemption most of these deals are priced around is also being updated to require that same GRID compliance. Before pricing data center work in Pennsylvania, confirm with the developer whether that commitment is actually signed, not just promised, since it now decides the date the permit clock starts.

Source: [Utility Dive — Pennsylvania executive order on data centers](https://www.utilitydive.com/news/pennsylvania-executive-order-data-centers/828261/)

---

**4. A retry bug in an AI coding assistant helped take GitHub down for almost 8 hours. If your back-office automation runs on it, that outage was yours too.**

GitHub's August 19 postmortem traced the August 17 outage to a networking component in its Central US data center that hit its concurrency limit while the autoscaling policy meant to catch it was watching the wrong metric. A separate bug in VS Code's retry logic then spiked traffic to GitHub's Copilot Token Service roughly tenfold, from a normal 7,000-9,000 requests per second to as high as 100,000. Issues, pull requests, the API, Actions, and Copilot were down for nearly 8 hours; Git operations, Packages, and Pages stayed up. A growing number of precon and ops teams are building their own submittal or estimating automation on GitHub Actions instead of buying a vendor tool — worth a five-minute conversation with whoever built yours about what the manual fallback is on a day it matters.

Source: [The Register — GitHub blames 8-hour outage on autoscaling fail and VS Code retry storm](https://www.theregister.com/saas/2026/08/19/github-blames-8-hour-outage-on-autoscaling-fail-and-vs-code-retry-storm/5289547)

---

**5. Anthropic's mandatory 30-day data retention isn't going away — but as of this week, enterprise customers can host that data themselves instead of handing it to Anthropic.**

Anthropic has required 30 days of retention on prompts and outputs sent to its top-tier Claude models since June, with no opt-out even for customers who'd negotiated a zero-retention contract. Bloomberg reported August 20 that Anthropic is now building a system, in coordination with more than 100 enterprise customers, to let that retained data sit on the customer's own cloud infrastructure instead of Anthropic's — a change in custody, not in the underlying rule. Most contractors never call these models directly; they show up inside a construction platform's AI feature. Before rolling one out on anything touching pricing or claims language, ask the vendor which model it's actually calling, whether flagged interactions can be held longer than 30 days, and where that data will physically sit.

Source: [Bloomberg — Anthropic plans to change data retention policy for advanced AI](https://www.bloomberg.com/news/articles/2026-08-20/anthropic-plans-to-change-data-retention-policy-for-advanced-ai)

---

If you only act on one item this week, make it the Bedrock story: get your safety director and your insurance broker talking about autonomous equipment before a GC bids a job assuming a human's still in the seat.

*Forward this to whoever writes your site-specific safety plans.*

*Construction AI Brief publishes new coverage on AI's construction stakes multiple times a week. [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*
