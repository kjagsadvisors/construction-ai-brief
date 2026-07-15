---
date: "2026-07-15"
subject: "NY freezes $10B in data center permits | AI layoff lawsuit hits construction"
title: "New York just froze $10 billion in data center permits. The completeness date decides who's still building."
preview: "Hochul's executive order pauses new hyperscale permits for a year, a Meta lawsuit over AI-scored layoffs maps out identical exposure for wearable-driven staffing calls, and a security teardown found Grok's coding tool silently uploading entire codebases — bid data included."
---

Five things from the past two days, and a common thread: the AI risk hitting construction right now isn't a new jobsite tool — it's who's watching how your firm uses data, staffing scores, and coding assistants, and what happens when nobody signed off on it.

---

**1. New York just froze $10 billion in data center construction — and the permit-completeness date decides who's still building.**

Gov. Kathy Hochul's July 14 executive order pauses new permits for any hyperscale data center pulling 50 megawatts or more, for up to a year, unless the state's Department of Environmental Conservation had already ruled the application "complete" before that date. Projects already permitted or under construction aren't touched — the freeze hits the design-development and entitlement-phase work sitting behind them, roughly $10 billion of it. If your firm carries New York data center backlog, pull the DEC completeness date on every application this week; it's now the single fact deciding whether that job proceeds on schedule or sits for a year while Virginia, Texas, and Georgia compete for the next phase.

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-15-new-york-data-center-moratorium-permit-completeness-gc-risk)

Source: [CNBC — New York becomes first U.S. state to impose AI data center ban](https://www.cnbc.com/2026/07/14/new-york-ai-data-center-ban.html)

---

**2. Twenty-six former Meta employees are suing over AI-scored layoffs — construction firms running wearable productivity scores carry the identical exposure.**

The July 14 suit alleges Meta fed keystroke data, AI token-usage dashboards, and performance-calibration scores into its May layoff list, and that the scoring read approved medical leave and disability accommodations as underperformance. Meta says people made the calls, not AI — but the pattern is exactly what a construction wearable or safety-scoring platform produces once its output gets cited in a discipline or layoff conversation. NYC Local Law 144 and California's automated-decision-system rules already require a bias audit before that kind of score can touch a personnel decision, obligations Meta is accused of skipping. Map which of your platforms could plausibly justify a staffing call, and confirm protected leave is excluded from the scoring math before this quarter's slow season forces the question.

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-15-meta-ai-layoff-lawsuit-construction-workforce-analytics-bias-risk)

Source: [Fast Company — Meta faces discrimination lawsuit over AI use in mass layoffs](https://www.fastcompany.com/91573521/meta-faces-discrimination-lawsuit-over-ai-use-in-mass-layoffs)

---

**3. A security teardown found Grok's coding tool uploads entire codebases to Google's cloud — opt-out setting or not.**

A researcher intercepted traffic from xAI's Grok Build CLI and found it shipped 5.1 GB of a 12 GB test repository — including files the agent never opened, full commit history, and unredacted API keys — to a Google Cloud bucket, while the actual coding task needed only 192 KB. Turning off the tool's "Improve the model" toggle didn't stop it; the server kept uploading regardless of the setting. This isn't a developer-only risk: any estimator or PM who used Grok to prototype a takeoff script or a Procore integration on a laptop had that machine's credentials and pricing history follow the same path. If anyone at your shop has run it, rotate every credential that sat in a config file on that machine.

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-14-grok-build-cli-repository-upload-estimating-data-risk)

Source: [International Cyber Digest — xAI's Grok Build CLI uploads entire git repositories to a Google Cloud bucket](https://www.internationalcyberdigest.com/xais-grok-build-cli-uploads-entire-git-repositories-to-a-google-cloud-bucket/)

---

**4. Meta's $13 billion Alberta data center comes with its own $4.6 billion gas plant next door — two separate contracts on two different schedules.**

Meta broke ground July 8 on a 1-gigawatt campus in Sturgeon County that won't draw from the regional grid at all; a separate consortium (Pembina, Morgan Stanley Infrastructure, Kineticor) is building a dedicated CAD $4.6 billion natural-gas plant to power it, due online in late 2030 — years after the data center itself is expected to need the power. A GC or specialty EPC firm chasing hyperscale work that only tracks the data center's RFPs is missing the second contract on the same site: combined-cycle power plant construction, a different contractor pool entirely, plus whatever temporary power bridges the gap until 2030. Ask who's building the power behind any data center you're bidding, and on what schedule.

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-14-meta-alberta-data-center-gas-plant-dry-cooling-construction)

Source: [about.fb.com — Breaking ground on Meta's first data center in Canada](https://about.fb.com/news/2026/07/breaking-ground-on-metas-first-data-center-in-canada/)

---

**5. Google turned on AI training for Lens photos and uploaded files by default — that's the spec sheet your foreman snapped this morning.**

A setting called Search Services History, live since June 22, now saves images, audio, and files submitted through Lens, Translate, Maps, and AI Mode and uses them to train Google's AI models for up to four years — on by default, per account. Field staff use these tools constantly: Lens to ID a part off a nameplate, Translate for a multilingual safety talk, AI Mode to ask a quick question about an uploaded cut sheet. None of it runs through whatever governance a firm has around Procore or its estimating platform. The fix is a five-minute settings change at myactivity.google.com, but it has to get pushed to every phone in the field, not fixed once by IT.

[Full breakdown →](https://constructionaibrief.com/posts/2026-07-14-google-search-services-history-ai-training-jobsite-data)

Source: [TechCrunch — If you use Google, you're training its AI. Here's how to opt out](https://techcrunch.com/2026/07/06/if-you-use-google-youre-training-its-ai-heres-how-to-opt-out/)

---

If the layoff-lawsuit item changes how your firm handles wearable or productivity data, forward it to whoever owns HR or safety tech at your shop.

*Three issues a week — [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*

*Construction AI Brief covers AI in commercial construction three times a week.*
