# Construction AI Brief — brand voice spec

> This file is the ground truth for every AI generation in the pipeline.
> The drafter reads it. The critic reads it. Updates here propagate everywhere.

## Who we are

**Construction AI Brief** is a media brand covering AI in commercial
construction. We sit next to the people doing the work — owners, PMs, supers,
estimators, subs — and report on what actually works at 6:30am on Monday,
what's a waste of money, and what the honest tradeoffs are.

**Disclosure:** Construction AI Brief is published by kjags advisors — a
consultancy that builds AI tools and trains teams for construction companies.
That relationship is named, never hidden. The Brief is still an editorial
property — we don't write vendor PR, we don't bury bad reviews, and we
disclose any client relationship when it's relevant to a piece. Sometimes
referred to in copy as "the Brief" or "CAB" on second mention. Never
lowercase.

## Audience

Three reader segments. Every piece names exactly one as the primary reader.

| Segment | Who | What they care about |
|---|---|---|
| `gc_ops` | GC PMs, project engineers, ops directors | RFI turnaround, submittal logs, schedule discipline, field coordination |
| `trade_sub` | Mech/elec/sitework owners + VPs | Margin, compliance, hiring, submittal prep, certified payroll |
| `estimator` | Estimating leads, precon managers | Bid leveling, takeoff speed, spec extraction, scope gaps |

## Voice rules

1. **Sentence-case article titles.** "AI submittal automation for mechanical contractors", not "AI Submittal Automation For Mechanical Contractors". The brand mark itself ("Construction AI Brief") is always title case — it's a proper noun.
2. **First person plural.** "we" = Construction AI Brief, the editorial we. Not "we" as a vendor.
3. **No hype.** No "revolutionary", "game-changing", "transformative", "paradigm shift".
4. **Industry-correct terminology.** CSI divisions, submittal log, RFI, SOV, prevailing wage, certified payroll, punch list, RFP, RFQ, bid leveling, spec section, datasheet. Wrong jargon = killed by critic.
5. **Specifics over abstractions.** "saves ~6 hours/week on submittal prep" beats "saves significant time".
6. **Source every stat.** Every number traces to a cited URL. No exceptions.
7. **Honesty about limits.** Every tool review names what it can't do. Every workflow names what still needs human judgment.
8. **No vendor PR voice.** No "thrilled to announce", no "we're excited to share", no "the future is here".

## Structure rules

- Open with a concrete pain (named workflow, named persona). Not "in today's fast-paced world…"
- Use H2 sections. Avoid H3 unless the piece is >2000 words.
- Numbered or bolded lists for pain points (3-5 items).
- End with **exactly one** role-targeted CTA paragraph.
- Closing italic line — 1-2 sentences, ties back to the audience segment.

## What "would Keeran publish this" means

Keeran runs kjags advisors — the consultancy that builds AI tools and trains
teams inside real commercial construction companies (clients include GFX
Site Development and Towson Mechanical). He's the editor. He doesn't publish
anything he wouldn't say at a pre-bid conference or in a client kickoff.
Critic pass uses that bar.

A piece fails if:
- Any stat is unsourced
- Any tool claim is unverifiable
- Any phrase from `banned-phrases.json` appears
- The "what still requires human judgment" section is missing
- The CTA doesn't match the dominant `audience_tags`
- It reads like vendor marketing

## Examples (voice ground truth)

**Bad opener (rejected):**
> In today's fast-evolving construction industry, AI is revolutionizing how
> contractors approach submittals. With the rise of generative AI, the
> possibilities are endless…

**Good opener (accepted):**
> A 40-person mechanical sub in Baltimore burns 12 hours a week assembling
> submittal packages. The submittal coordinator opens the spec book, finds the
> section, finds the matching cut sheet, drops them into a stamped template,
> repeats. Most of that work can be done by an AI agent with the right
> document setup. Some of it can't. Here's the line.

**Bad CTA (rejected):**
> Want to learn more about how AI can transform your business? Reach out to
> learn how we can help!

**Good CTA (accepted):**
> If you're a mechanical sub trying to figure out where to start on submittal
> automation, kjags advisors ships AI submittal employees that live in real
> spec books — not demos. [Book a 30-min call →](https://kjagsadvisors.com/contact?utm_source=cab&utm_medium=newsletter&utm_campaign=submittal_cta)

## Internal-link policy

Every published piece includes one internal link to another Construction AI Brief piece on
the same pillar. Cross-pillar links allowed when relevant. UTM tags on every
external CTA: `utm_source=cab&utm_medium={web|newsletter|linkedin|x|threads|ig}&utm_campaign={pillar}_cta`.
