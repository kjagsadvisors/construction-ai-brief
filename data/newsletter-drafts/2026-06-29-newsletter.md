---
date: "2026-06-29"
subject: "Ford's QC rehire lesson | Gemini reads your full project | IL hiring law live"
title: "What Ford learned from cutting QC engineers, and what construction ops directors should do with it"
preview: "Ford spent three years rehiring 350 quality engineers. Gemini 2.5 Pro holds a full project document set. Illinois AI hiring compliance has been active for six months."
---

Three things from the past few days that have direct implications for a GC or trade sub on a commercial project today.

---

**1. Ford cut experienced QC engineers for AI. Then spent three years rehiring 350 of them.**

Between 2023 and 2026, Ford progressively reduced its experienced quality engineers as it leaned harder on automated detection systems across its plants. The results were bad enough that Ford quietly spent those same years rehiring 350 of those engineers. Ford COO Kumar Galhotra told reporters this week: "We had been relying more and more on automated quality systems and not getting the desired results." Ford VP of Vehicle Hardware Engineering Charles Poon was more direct: "Mistakenly we thought that by just introducing artificial intelligence and ingesting the design requirements that we had, that that would produce a high-quality product."

Ford now ranks first among mainstream brands in the JD Power Initial Quality Survey released this week and expects $1 billion in reduced warranty and materials costs this year — after bringing the engineers back.

The construction parallel is specific. AI inspection tools configured against a BIM model document what the camera sees and compare it to the model. What they don't carry: whether a discrepancy is an RFI-approved modification or a field error, whether a crew's pattern on this particular project means a different inspection protocol is warranted, whether the MEP coordination drawing was updated after the last model push. A senior QC engineer with three similar jobs behind them makes that call. The model doesn't.

The organizational logic that produces the Ford mistake shows up in construction too — the AI subscription has a line item, the QC salary has a line item, and someone decides you don't need both. Poon's line applies directly: "AI is a fantastic tool, but it's only as good as the information you use to train it."

[Full breakdown and the three-part oversight model that makes AI inspection work →](https://constructionaibrief.com/posts/2026-06-29-ford-ai-quality-lesson-construction-qc-staff)

Sources: [Bloomberg](https://www.bloomberg.com/news/articles/2026-06-25/ford-has-been-rehiring-quality-inspectors-after-ai-fell-short) · [TechCrunch](https://techcrunch.com/2026/06/28/ford-rehires-gray-beard-engineers-after-ai-falls-short/)

---

**2. Gemini 2.5 Pro can now hold a full project document set in one session**

Google released Deep Think reasoning for Gemini 2.5 Pro this week — but the detail that matters for construction is the context window. At just over one million tokens (roughly 3,000 pages), a single Gemini 2.5 Pro session can hold a 600-page project manual, 280 RFIs with responses, 400 submitted items with approval documentation, and a 50-item change order log simultaneously.

Most AI document tools work through retrieval: they chunk files into fragments and surface the closest matches to a query. That handles narrow lookups well. It fails when a question requires synthesizing inconsistent information across five document types at once — which is exactly what claims prep and scope analysis require.

Three immediate workflows worth testing: **claims prep** (load your RFI log, change order log, and relevant spec sections; ask which owner-directed clarifications changed scope without a corresponding approved CO); **precon scope gap analysis** (load the project spec and draft subcontract; ask what work in Div 21–23 isn't explicitly assigned); and **close-out narrative** (feed key correspondence, the approved SOV, and daily reports from disputed periods; ask for a draft factual project summary to edit, not write from scratch).

Deep Think API access isn't available yet — Google says it's coming in weeks. For now, this runs through the Gemini app, which means manual document upload rather than a direct feed from your project management system.

[Three specific workflows and where human judgment still has to show up →](https://constructionaibrief.com/posts/2026-06-29-gemini-deep-think-construction-claims-prep)

Source: [Google — Gemini 2.5 Deep Think launch](https://blog.google/products-and-platforms/products/gemini/gemini-2-5-deep-think/)

---

**3. Illinois AI hiring compliance has been active for six months. Most construction employers haven't looked.**

Colorado's AI employment law was supposed to take effect June 30. Governor Polis signed a replacement bill in May that moved enforcement to January 1, 2027 — and the AG has said he won't act until rulemaking finishes. No immediate Colorado exposure for employers today.

Illinois is different. HB 3773 went live January 1, 2026. If your company uses any tool that algorithmically scores, ranks, or filters candidates in hiring, promotion, or termination decisions, you're subject to disclosure and nondiscrimination requirements right now. That includes LinkedIn's "Best Match" ranking, applicant tracking systems with built-in scoring, and Workday's screening module. Routine scheduling, crew dispatch, and workflow management are carved out. The tool that filtered a résumé for a journeyman electrician role is not.

The compliance gap doesn't require new software — it requires a vendor conversation and two sentences of disclosure language. New York City has had similar requirements since 2023. Assume the pattern spreads.

[Full employer checklist — three things to do before year-end →](https://constructionaibrief.com/posts/2026-06-29-ai-hiring-law-illinois-colorado-construction-employers)

Sources: [Illinois DHR](https://dhr.illinois.gov/about-us/legislative-updates/artificial-intelligence-in-employment.html) · [Colorado SB 26-189](https://leg.colorado.gov/bills/sb26-189)

---

**Also this week**

Google released computer use as a built-in capability inside Gemini 3.5 Flash — an AI that can see any software screen and click through it like a human operator. For trade subs who submit certified payroll through LCP Tracker or state DIR portals with no API, that's a real opening: the portal doesn't need an integration. The AI reads the screen and acts on it. The workflow still needs human verification before a live submission goes out, and a portal layout change can break automation without warning — but for four-hour-a-week manual compliance tasks, it's worth a controlled test. [Breakdown of the workflow and where it breaks →](https://constructionaibrief.com/posts/2026-06-27-gemini-computer-use-construction-compliance-portals)

OpenAI previewed GPT-5.6 Sol this week — government-gated access for now, broad rollout expected in weeks. The multi-agent "ultra" mode dispatches parallel subagents across different document sections simultaneously, which is specifically useful for large commercial projects where spec, drawings, submittals, and RFI logs all need to be read against each other. The realistic path for most GCs is through platforms, not direct API access — the question to track is which of your current software vendors is moving fastest to deploy it. [The parallel document review architecture and who gets it first →](https://constructionaibrief.com/posts/2026-06-27-gpt-56-sol-subagents-construction-document-review)

---

The Ford story and the Gemini context story read best together: one is a warning about removing experienced judgment before you understand what it's actually doing, the other is a practical tool that extends what that judgment can cover.

If this landed with you, forward it to someone on your team who's weighing whether to staff up or subscribe.

*Three issues a week — [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*

*Construction AI Brief covers AI in commercial construction three times a week.*
