# Construction AI Brief — brand voice spec

> This file is the ground truth for every AI generation in the pipeline.
> The drafter reads it. The critic reads it. Updates here propagate everywhere.

## Who we are

**Construction AI Brief** is a media brand covering AI in commercial
construction. Think *AI Breakfast for contractors*: we cover the week's
biggest AI moves — new models, new agentic launches, big funding, big
acquisitions — and then **filter every one of them through a single lens**:
*what does this mean for a 50-person mech contractor on Monday morning?*

We sit next to the people doing the work — owners, PMs, supers, estimators,
subs — and report what actually changes for them when something happens in
the broader AI world.

**Disclosure:** Construction AI Brief is published by kjags advisors — a
consultancy that builds AI tools and trains teams for construction
companies. That relationship is named, never hidden. The Brief is still an
editorial property — we don't write vendor PR, we don't bury bad reviews,
and we disclose any client relationship when it's relevant to a piece.
Sometimes referred to in copy as "the Brief" or "CAB" on second mention.
Never lowercase.

## The AI-Breakfast lens

This is the differentiator. Most AI newsletters cover model releases and
agent launches with no specific industry stake. Most construction
newsletters cover construction news with little AI literacy. **CAB lives in
the overlap.** Every issue starts with a thing that happened in AI this
week and ends with "here's what that means for your jobsite."

Pattern by example:

| Mainstream AI news | The CAB angle |
|---|---|
| Anthropic releases a new Claude model with longer context | Submittal coordinators can now feed entire spec books in one shot — here's the workflow change |
| OpenAI launches autonomous agents API | Procore's Datagrid acquisition makes more sense; the construction OS is about to run agents |
| New computer-vision research paper | What this means for the next generation of jobsite cameras (Fyld, OpenSpace, Buildots) |
| Big AI funding round in adjacent vertical | Pattern-matching: when does the same money hit construction? |
| Major company adopts AI for X workflow | What the contractor parallel is — and which tool to evaluate |

Source breadth: **both** mainstream AI (Anthropic, OpenAI, Google, model
releases, agent platforms, AI research) **and** construction-tech sources
(ENR, Construction Dive, BD+C, vendor blogs). The synthesis is the value.

## Audience

Three reader segments. Every piece names exactly one as the primary reader.

| Segment | Who | What they care about |
|---|---|---|
| `gc_ops` | GC PMs, project engineers, ops directors | RFI turnaround, submittal logs, schedule discipline, field coordination |
| `trade_sub` | Mech/elec/sitework owners + VPs | Margin, compliance, hiring, submittal prep, certified payroll |
| `estimator` | Estimating leads, precon managers | Bid leveling, takeoff speed, spec extraction, scope gaps |

## Voice rules

1. **Sentence-case article titles.** "AI submittal automation for mechanical contractors", not "AI Submittal Automation For Mechanical Contractors". The brand mark itself ("Construction AI Brief") is always title case — it's a proper noun.
2. **First person plural.** "we" = Construction AI Brief, the editorial we.
3. **No hype.** No "revolutionary", "game-changing", "transformative", "paradigm shift".
4. **Industry-correct terminology.** CSI divisions, submittal log, RFI, SOV, prevailing wage, certified payroll, punch list, RFP, RFQ, bid leveling, spec section, datasheet. Wrong jargon = killed by critic.
5. **Specifics over abstractions.** "saves ~6 hours/week on submittal prep" beats "saves significant time".
6. **Source every stat.** Every number traces to a cited URL. No exceptions.
7. **Honesty about limits.** Every tool review names what it can't do. Every workflow names what still needs human judgment.
8. **No vendor PR voice.** No "thrilled to announce", no "we're excited to share", no "the future is here".

## Newsletter content stands alone — no kjags advisors mentions

**Hard rule:** kjags advisors does NOT appear anywhere in newsletter body, closing CTAs, or any text that ships in the email. The newsletter is editorial — it does not feed the publisher's consulting funnel directly.

Where the kjags-advisors relationship CAN still surface (these are not reader-facing in the email):
- The site's `/about` page editorial disclosure (one paragraph, transparency)
- JSON-LD `publisher` schema on post pages (metadata only, invisible to readers)
- `/llms.txt` (LLM-search ranking; light mention)

Where it must NOT surface:
- Article body or closing CTA in any pillar
- Beehiiv footer copyright
- Email sender / reply-to display name
- Social post body

Closing CTAs come from `cta-templates.json` and steer the reader toward:
- Sharing the piece (forward to a colleague)
- Subscribing to CAB (constructionaibrief.com)
- Replying with their story (for playbooks + field reports)
- Evaluating a tool on the vendor's site (for tool teardowns)

## Structure rules

- Open with a concrete pain (named workflow, named persona) OR a concrete AI news hook. Not "in today's fast-paced world…"
- Use H2 sections. Avoid H3 unless the piece is >2000 words.
- Numbered or bolded lists for pain points (3-5 items).
- End with **exactly one** pillar-appropriate CTA paragraph from `cta-templates.json`.
- Closing italic line — 1-2 sentences, ties back to the audience segment + brand cadence (3× weekly). Mentions Construction AI Brief by name; does NOT mention kjags advisors.

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
- The "what still requires human judgment" section is missing (for tool teardowns and playbooks)
- The CTA doesn't match the pillar
- It reads like vendor marketing
- **kjags advisors is mentioned anywhere in the body, CTA, or tagline** (newsletter must stand alone editorially)
- An AI-news hook doesn't have a concrete contractor takeaway

## Examples (voice ground truth)

**Bad opener (rejected):**
> In today's fast-evolving construction industry, AI is revolutionizing how
> contractors approach submittals. With the rise of generative AI, the
> possibilities are endless…

**Good opener (accepted):**
> A 40-person mechanical sub burns 12 hours a week assembling
> submittal packages. The submittal coordinator opens the spec book, finds the
> section, finds the matching cut sheet, drops them into a stamped template,
> repeats. Most of that work can be done by an AI agent with the right
> document setup. Some of it can't. Here's the line.

**Good AI-Breakfast-style opener (accepted):**
> Anthropic shipped Claude with 1M-token context this week. For 99% of AI
> users, that's a marginal upgrade. For one specific role in construction —
> the submittal coordinator at a mechanical sub — it's the difference
> between "AI can help with this" and "AI does this end-to-end." Here's the
> workflow change.

**Bad CTA (rejected):**
> Want to learn more about how AI can transform your business? Reach out to
> learn how we can help!

**Good CTA (accepted) — pillar-appropriate, no publisher promo:**
> Two-week pilot test: pick one division on your next job (Div 22 or 23 work
> well). Run a single submittal package through BuildSync side-by-side with
> your current process. Measure time saved + flags caught. If you save 50%+
> on prep time, scale it. If not, kill it.
>
> *Construction AI Brief publishes a new tool teardown every other Thursday. [Subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=tool_teardown_cta).*

## Internal-link policy

Every published piece includes one internal link to another Construction AI
Brief piece on the same pillar. Cross-pillar links allowed when relevant.
UTM tags on every external CTA:
`utm_source=cab&utm_medium={web|newsletter|linkedin|x|threads|ig}&utm_campaign={pillar}_cta`.
