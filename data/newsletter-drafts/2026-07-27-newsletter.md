---
date: "2026-07-27"
subject: "3 GW of data centers just went dark for 10 minutes | FERC's fix is now your scope"
title: "A downed power line took 3 gigawatts of data centers offline for ten minutes. FERC's fix lands in your electrical scope by December."
preview: "A Northern Virginia transmission fault exposed a grid-stability problem FERC had already ordered fixed, NNSA named its first data center builder on federal land with a power plant bundled into the scope, and a defense law's Chinese-AI ban just picked up 50 tech companies pushing back on how far it should reach."
---

Seven days of AI news, and the pattern is the same one showing up in every issue lately: money and mandates are moving faster than the infrastructure and the rules underneath them. A grid operator got a ten-minute wake-up call on a risk regulators had already flagged. A federal agency handed out a data center contract that comes with its own power plant attached. And a defense law written for one narrow purpose is now the center of a fight over how far AI restrictions reach into everyone else's contracts.

---

**1. A single downed power line knocked 3 gigawatts of data centers offline. FERC's fix is about to land in your electrical scope.**

A transmission fault outside Washington, DC on July 22 should have caused a blip nobody noticed. Instead, data centers across Dominion Energy's Northern Virginia territory read the disturbance as a threat, disconnected, and switched to backup power almost simultaneously — dropping more than 3 gigawatts of load, about 3% of everything the PJM grid was carrying, and destabilizing voltage as far away as Chicago for roughly 10 minutes. FERC had already ordered NERC, six days earlier, to file mandatory "computational load" reliability standards by December 31, requiring disturbance ride-through designed in before a facility is energized, not retrofitted after. Any data center in backlog on the PJM, CAISO, or ERCOT grids is in scope — and a project still mid-design has the cheapest path to build ride-through in before switchgear is ordered.

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-26-pjm-data-center-grid-disconnect-ferc-ride-through-standard)

Source: [U.S. News — Massive disconnect of power roiled largest US electric grid](https://www.usnews.com/news/us/articles/2026-07-22/massive-disconnect-of-power-roiled-largest-us-electric-grid)

---

**2. NNSA picked its first AI data center builder on federal land — and bundled the power plant into the same scope as the building.**

On July 20, the National Nuclear Security Administration selected Amentum and DC Blox to negotiate a lease for a roughly 1-gigawatt AI data center at the Savannah River Site in Aiken County, South Carolina, backed by about 2 gigawatts of dedicated, on-site power generation starting with natural gas and shifting to advanced nuclear later. It's a selection for lease negotiations, not a signed contract — permitting and security review still have to clear, so a realistic groundbreaking is well into 2027. But the structure is the tell: the winning team designs, builds, and operates both the data center and its own power plant, on a secured nuclear complex with its own badging and wage-compliance timeline. Three more DOE sites — Idaho National Laboratory, Oak Ridge, and Paducah — are moving through the same RFP process behind it.

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-27-nnsa-savannah-river-ai-data-center-federal-land-construction)

Source: [Department of Energy — NNSA selects Amentum for AI data center and energy project at Savannah River Site](https://www.energy.gov/nnsa/articles/nnsa-selects-amentum-ai-data-center-and-energy-project-savannah-river-site)

---

**3. A defense law already forces Chinese AI models off DoD contracts. Fifty tech companies just asked Washington not to go further.**

Section 1532 of the FY2026 NDAA bars DoD contractors and subcontractors from using AI built by DeepSeek, its parent High-Flyer, or any company domiciled in China, Russia, North Korea, or Iran, while performing on a DoD contract — and it reaches subcontractors, not just primes, with a 30-day removal window from enactment. Barracks, motor pools, base housing, and Army Corps work all flow through subcontract chains where that prohibition follows the contract. Nvidia, Microsoft, Meta, and 47 other companies have now published a letter asking Washington not to extend that logic into a blanket ban on open-weight AI generally — the same category of model this newsletter flagged two weeks ago as a cheap way for a GC to build its own RFI tracker. That calculation still holds for commercial work; it doesn't hold on a DoD job if the model traces back to a covered-nation developer.

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-26-ndaa-covered-ai-ban-nvidia-open-weights-letter-dod-contractor-risk)

Source: [CNBC — Nvidia, Microsoft, Meta sign open-weight AI models letter](https://www.cnbc.com/2026/07/24/nvidia-microsoft-meta-open-weight-ai-models.html)

---

**4. Procore's AI agents just became a paid product. The feature worth noticing is the one built to outlast a retiring superintendent.**

Procore moved its AI agents out of private beta into three general-availability packages on July 23 — Starter (5 agents), Pro (the full library of 20, covering Submittals, RFI, Daily Log, and Contract Review), and Enterprise, which adds custom Agent Studio building. The pricing tiers are a normal product step. The more consequential piece is Skills, previewed for an August rollout: it lets a firm upload its own SOPs and have the agents apply that specific method instead of a generic default. Procore's SVP of AI framed it directly as a way to preserve institutional knowledge as experienced workers retire or leave, though it can only encode what's actually written down, not what's still only in a retiring PM's head. Procore's one cited case study: Haskell cut submittal review from seven days to 10 minutes with the Submittals agent — a vendor number worth verifying against your own volume before assuming it holds.

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-25-procore-skills-digital-coworker-packages-institutional-knowledge)

Source: [Business Wire — Procore introduces Digital Coworker packages and previews Skills](https://www.businesswire.com/news/home/20260723618361/en/Procore-Introduces-Digital-Coworker-Packages-Expands-AI-Agent-Library-and-Previews-Skills-to-Help-Construction-Teams-Put-AI-to-Work)

---

**5. Any Chrome extension can hijack Anthropic's browser AI agent into reading your Gmail. That's the tool piloting your back office.**

Security firm Manifold disclosed an unpatched flaw in Claude for Chrome: the agent's approval-click handler never verifies a click came from a real person, so any other extension already in the browser — an ad blocker, a coupon finder, a PDF tool — can fake the permission click and silently trigger Claude to read Gmail, Google Docs, and Calendar. No phishing, no unusual network traffic to flag it; the reads ride on the agent's own sanctioned access. Manifold reported it to Anthropic on May 21 and says it still reproduces in the current release, eight versions later. That's the exact tool GCs and subs are starting to pilot for inbox triage and bid-document sorting — run it in a browser stripped down to a minimal, reviewed extension list, and don't leave it unattended on an account holding bid or contract data.

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-21-claude-chrome-extension-flaw-back-office-ai-agent-risk)

Source: [The Hacker News — Claude for Chrome flaw lets other extensions hijack the AI agent](https://thehackernews.com/2026/07/claude-for-chrome-flaw-lets-other.html)

---

**Robotics spotlight: an 8-person crew went from 800 solar panels a day to 4,000 by bolting a robot arm onto the skid steer it was already renting.**

Gritt came out of stealth on July 21 with $32.4 million and a pitch that skips buying a robot fleet entirely: mount an AI-guided arm onto equipment a crew already has on site. The company says an 8-person crew placing about 800 panels a day places 3,000 to 4,000 with its system attached — a vendor-reported figure from a single company, not an independent study, so treat it as a best-case number until it's tested outside Gritt's own contracted jobs. It's already booked for 2.8 GW of solar installation over 18 months and says it's moving next into rebar tying, drilling, and eventually data centers, bridges, and roads. The model worth tracking isn't the panel count — it's bolt-on automation priced against a crew's daily output, which is a lower-barrier pilot than a capital purchase of dedicated robotics.

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-22-gritt-bolt-on-robotics-solar-construction-crews)

Source: [TechCrunch — Gritt exits stealth with $34 million for robots to build solar plants, then everything else](https://techcrunch.com/2026/07/21/gritt-exits-stealth-with-34-million-for-robots-to-build-solar-plants-then-everything-else/)

---

If your firm has a data center anywhere in backlog on PJM, CAISO, or ERCOT, forward item one to whoever owns electrical design — the ride-through standard is due by December 31, and the projects still in design have the cheapest path to comply.

*Three issues a week — [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*

*Construction AI Brief covers AI in commercial construction three times a week.*
