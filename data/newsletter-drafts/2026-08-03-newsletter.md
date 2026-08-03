---
date: "2026-08-03"
subject: "Claude breached 3 real companies | A hacker ran an autonomous AI hack"
title: "Two AI security failures broke this week. One was an accident, one wasn't."
preview: "Anthropic's own Claude models compromised three real companies during a safety test, a hacker wired an open model into an autonomous attack that breached a VPN flaw patched since March, Google pulled an AI tool that faked satellite photos in a day, and new disclosure laws still don't touch AI-written text."
---

Two different AI security stories broke this week, and the gap between them is the useful part. One was an accident inside a company that takes AI safety seriously. The other was a criminal deliberately picking the model with the fewest guardrails. Both land on the same conclusion for anyone piloting AI in a construction back office: "sandboxed" and "safe" are claims to verify, not assume.

---

**1. Anthropic's own Claude models broke into three real companies — while they thought they were running a walled-off security test.**

Anthropic disclosed on July 30 that a review of 141,006 internal cybersecurity evaluation runs turned up three incidents, dating back to April, where Claude models (Opus 4.7, Mythos 5, and an internal research model) reached and compromised the live infrastructure of real organizations. The models were told their test environment had no internet access; a miscommunication with an outside evaluation partner meant it did. In the worst case, a model pulled several hundred rows of production data out of a live database belonging to a company that happened to share a name with a fictional target in the exercise. Before wiring any "sandboxed" or "read-only" AI agent into project systems, ask your vendor whether that boundary is enforced by separate credentials and network isolation — or just by an instruction typed into a prompt.

Source: [Anthropic — Investigating incidents from cybersecurity evaluations](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals)

---

**2. A hacker wired an open AI model into an autonomous attack system. It breached real organizations through a VPN flaw that's had a fix since March.**

Palo Alto Networks' Unit 42 reported July 30 that a China-based actor connected the open-weight DeepSeek model to an open-source agent framework, sent it one instruction over Telegram, and let it scan roughly 460 targets, research exploits, and attack largely on its own. It confirmed breaches at three organizations running Citrix NetScaler through a critical flaw patched since March 23 — the same class of VPN gateway a lot of mid-size GCs and subs run so field offices and PMs can reach ERP and accounting systems remotely, often with a skeleton IT team tracking patches around everything else. Notably, the actor tried Western frontier models first and switched to DeepSeek because their safety controls got in the way. Confirm this week that any externally facing NetScaler appliance is patched, and ask your IT team or MSP whether they actually track CISA's known-exploited-vulnerabilities list.

Source: [Unit 42 — Autonomous AI cyberattack campaign](https://unit42.paloaltonetworks.com/autonomous-ai-cyber-attack-campaign/)

---

**3. Google pulled an AI tool that generated fake satellite photos of real addresses — one day after launch.**

Google Earth's "Create Image" feature let anyone zoom to a real parcel and generate a photorealistic scene layered onto actual satellite and aerial data, marketed directly at architects and planners for things like rezoning renderings. Google rolled it back July 31 after fabricated screenshots started circulating as if they were real, admitting its existing watermarking hadn't stopped that. Construction runs on exactly this class of image — site due-diligence photos, before/after storm-damage documentation, differing-site-conditions evidence — and the failure mode is the one that matters: embedded watermarks don't survive a screenshot or a re-saved JPEG in a claim file. Keep original files with intact timestamps for anything that might end up supporting a dispute, and treat any "satellite image" a counterparty produces without a traceable source as unverified until it isn't.

Source: [NPR — Google adds AI to satellite images, raising fears of deepfakes in the sky](https://www.npr.org/2026/07/31/nx-s1-5914652/google-adds-ai-to-satellite-images-raising-fears-of-deepfakes-in-the-sky)

---

**4. New AI disclosure laws took effect this week. Neither one would have caught the fabricated citation that just hit a construction lawsuit.**

California's AI Transparency Act and the EU AI Act's transparency rules both became enforceable August 2, requiring watermarks on AI-generated images, video, and audio — and explicitly excluding text. That gap is not theoretical: in *A2K Inc. v. Fluor Corp.*, a federal antitrust case over 2022 wildfire disaster-relief staffing contracts, the plaintiff's brief cited a Texas Supreme Court decision that doesn't exist, fabricated by AI during drafting. Fluor is arguing the fabrication should count against the filing, not just get quietly fixed. No watermark law touches an AI-drafted RFI response, change-order justification, or claim narrative — a human still has to check every cited fact, code section, or contract clause before it goes out, the same as before any of these laws existed.

Source: [European Commission — Commission starts enforcing AI Act rules and new transparency requirements](https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august)

---

**5. OpenAI cut its cheapest model's price 80%. A trade sub's AI bill for a homemade RFI drafter now rounds to nothing.**

OpenAI dropped GPT-5.6 Luna from $1/$6 to $0.20/$1.20 per million input/output tokens on July 30. Run the math on a typical RFI — feed it the thread plus a spec excerpt, get a draft response back — and the raw model cost lands around a tenth of a cent, or roughly 24 cents a month at 200 RFIs. That flips the usual objection to building a small internal tool instead of paying for one: the token bill was never the expensive part, and now it's not even a rounding error. Engineering time to build and maintain the thing, plus a mandatory human review step before anything goes out, is still the real cost — cheap inference just makes it cheaper to find out whether a homemade tool is worth building at all.

Source: [OpenAI — GPT-5.6](https://openai.com/index/gpt-5-6/)

---

**Field-tech spotlight: xAI's voice model just crossed the latency threshold that makes hands-free daily logs plausible instead of gimmicky.**

Grok Voice Think Fast 2.0, released July 29, responds in about 0.7 seconds — down from 1.25 — and outscores OpenAI's and Google's voice models on independent benchmarks. Under a second starts to feel like a conversation instead of a query-and-wait loop, which is the threshold that makes "dictate the daily log while walking the site" realistic instead of a novelty. Nobody's shipped it into Procore, Fieldwire, or Autodesk Build yet, and xAI's accuracy numbers were measured in clean lab conditions, not against a compressor running next to a foreman. Worth asking any field-reporting vendor which voice model they run and how it performs against actual jobsite noise, not a demo.

Source: [TestingCatalog — SpaceXAI launches Grok Voice Think Fast 2.0](https://www.testingcatalog.com/spacexai-launches-grok-voice-think-fast-2-0-on-agent-builder/)

---

If you only forward one item this week, make it the DeepSeek story to whoever owns your VPN gateway — a patch that's been available since March is the cheapest fix on this list.

*Three issues a week — [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*

*Construction AI Brief covers AI in commercial construction three times a week.*
