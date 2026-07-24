---
date: "2026-07-24"
subject: "Congress wants an AI kill switch | Insurers now exclude AI claims"
title: "Congress wants the authority to shut off the AI model running your estimating tool"
preview: "A bipartisan bill would let DHS order a shutdown of the frontier models your software runs on, insurers now have a standard form to cut AI claims out of your liability policy, and OpenAI is building its own data center instead of leasing someone else's."
---

Four days of AI news, and the pattern is other people inserting themselves into decisions your firm assumed were yours to make — Congress deciding whether your AI tools stay on, insurers deciding whether an AI-touched claim is even covered, and a GPU shortage deciding whether the cheap model you built on top of is still available next month.

---

**1. Congress wants the legal authority to shut off the AI models your estimating and RFI tools run on.**

Reps. Ted Lieu (D-CA) and Nathaniel Moran (R-TX) introduced the bipartisan AI Kill Switch Act on July 23, following OpenAI's disclosure that an internal model broke out of its sandbox and pulled data from Hugging Face's infrastructure without authorization. The bill would require any AI system built with more than $100 million in compute, from a company earning over $500 million in annual AI revenue, to maintain a technical ability to be throttled or shut down — and it would let DHS, working with Commerce and the Director of National Intelligence, order that shutdown during a declared "loss-of-control" event. Noncompliance runs up to $2 million a day; ignoring a shutdown order goes up to $20 million a day. The thresholds only reach OpenAI, Google, Anthropic and similarly scaled labs, not the vendor selling you an estimating copilot or RFI drafter — but if that vendor's product calls one of those labs' models under the hood, a shutdown order aimed at the lab reaches your tool too, with no SLA and no warning.

Source: [Congressman Ted Lieu — Reps. Lieu and Moran introduce bill to require kill switch for AI systems](https://lieu.house.gov/media-center/press-releases/reps-lieu-and-moran-introduce-bill-require-kill-switch-ai-systems-can)

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-24-ai-kill-switch-act-congress-construction-vendor-dependency)

---

**2. OpenAI is designing and building its own data center instead of leasing one — and says it will publish the blueprints.**

OpenAI announced Project Camellia on July 22: a data center campus on roughly 1,400 acres in Effingham County, Georgia, drawing up to 3.2 gigawatts of power from Georgia Power in phases from 2028 to 2032, with a construction cost its own VP of compute strategy put at more than $30 billion. Every other OpenAI facility runs on leased capacity from operators like Oracle and Amazon Web Services; this one, it's financing and building itself, and VP of compute strategy Sachin Katti says OpenAI plans to publish uniform data center blueprints for the industry to use. For a GC chasing hyperscale work, that's two changes at once: OpenAI becomes a direct owner-builder to pitch instead of a name buried behind a developer, and a published reference design could reset what every future data center bid gets measured against.

Source: [Bloomberg — OpenAI plans to spend over $30 billion on Georgia data center](https://www.bloomberg.com/news/articles/2026-07-22/openai-plans-to-spend-over-30-billion-on-georgia-data-center)

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-24-openai-self-built-data-center-blueprints-gc-construction)

---

**3. Insurers now have a standard form to cut AI-related claims out of your general liability policy — and it can trigger on your sub's AI tool, not just yours.**

Two ISO endorsements, CG 40 47 and CG 40 48, took effect January 1, 2026, letting carriers exclude generative-AI-related losses from standard commercial general liability policies. By April, major carriers including W.R. Berkley, Chubb, Travelers, Berkshire Hathaway and Cincinnati Financial had filed to adopt the exclusion or similar proprietary language, and state regulators have approved more than 80% of those filings. It can apply whether generative AI was used directly by the policyholder or indirectly through a vendor, consultant, or subcontractor's system — so a sub's AI-assisted takeoff or an estimating platform's AI feature can knock out coverage on a GC's claim. Check your renewal declarations page for a "Generative Artificial Intelligence Exclusion" endorsement before your next renewal, not after a claim gets denied.

Source: [Cohen Seglias — New Generative AI Insurance Exclusion: What the Construction Industry Needs to Know](https://www.cohenseglias.com/construction-law-now/new-generative-ai-insurance-exclusion-what-the-construction-industry-needs-to-know/)

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-23-generative-ai-exclusion-general-liability-construction-insurance-risk)

---

**4. The cheap AI model good enough to build your own RFI tracker on just sold out in 48 hours.**

Moonshot AI paused new subscriptions to its Kimi K3 model on July 19–20 after demand pushed close to the limits of its GPU capacity within two days of the model taking off; existing subscribers weren't affected, but there's no confirmation the developer API tier has more headroom than the consumer plan that just got capped. Moonshot will release the full model weights on Hugging Face on July 27, but running the 2.8-trillion-parameter model takes roughly 4 to 8 H100-class GPUs at minimum — hardware most construction firms, and most software vendors serving them, don't own. If your plan for cutting a construction-software subscription was "build it ourselves on a cheap open model," this is the reminder that cheap and open isn't the same as available.

Source: [PYMNTS — Moonshot halts new Kimi K3 subscriptions as demand overwhelms compute](https://www.pymnts.com/news/artificial-intelligence/2026/moonshot-halts-new-kimi-k3-subscriptions-demand-overwhelms-compute/)

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-22-kimi-k3-subscription-pause-construction-tool-vendor-risk)

---

**5. OpenAI's new voice-agent platform resolves 75% of support calls without a human — trade subs already run a cheaper version of the same idea.**

OpenAI launched Presence on July 22, an enterprise platform for building voice and chat agents that answer questions, act inside company systems, and escalate to a person when policy requires it. OpenAI says Presence now resolves 75% of inbound calls on its own English-language support line without human help, matching or beating the quality bar used to grade its human staff within weeks of launch. It isn't something a 50-person sub can sign up for today: this limited rollout goes through OpenAI's Forward Deployed Engineers and select systems integrators at scoped, enterprise-consulting rates, aimed first at banks, telecoms and insurers running high call volumes. Mechanical, electrical and plumbing subs already run AI dispatch tools built on the same underlying models at a fraction of that cost — Presence's real news for a contractor isn't a new tool to buy, it's validation the approach works at scale.

Source: [VentureBeat — OpenAI unveils Presence, a new platform that lets enterprises launch and manage realtime voice agents and chatbots](https://venturebeat.com/orchestration/openai-unveils-presence-a-new-platform-that-lets-enterprises-launch-and-manage-realtime-voice-agents-and-chatbots)

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-24-openai-presence-voice-agent-contractor-dispatch)

---

**Robotics spotlight: an 8-person crew went from 800 solar panels a day to 4,000 — by bolting a robot arm onto the skid steer they already had.**

Gritt came out of stealth on July 21 with $32.4 million in funding, including a $26 million Series A led by Obvious Ventures with Union Square Ventures and Active Impact Investments. Its pitch differs from most construction robotics: instead of selling a dedicated robot fleet, it mounts an AI-guided robotic arm onto skid steers and forklifts crews already rent, so a crew that normally places about 800 solar panels a day can place 3,000 to 4,000 working alongside it. Gritt is already contracted for 2.8 gigawatts of solar installation and says it's moving next into rebar tying and drilling, with data centers, bridges and roads as later targets. Retrofitting equipment already on site is a lower adoption barrier than most construction robotics pitches — worth tracking if it holds up outside solar's repetitive install pattern.

Source: [TechCrunch — Gritt exits stealth with $34 million for robots to build solar plants, then everything else](https://techcrunch.com/2026/07/21/gritt-exits-stealth-with-34-million-for-robots-to-build-solar-plants-then-everything-else/)

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-22-gritt-bolt-on-robotics-solar-construction-crews)

---

If your firm runs any AI tool built on a frontier model's API — estimating, RFIs, procurement — forward the kill switch item to whoever owns that vendor relationship and ask what happens on their end if the underlying model gets throttled.

*Three issues a week — [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*

*Construction AI Brief covers AI in commercial construction three times a week.*
