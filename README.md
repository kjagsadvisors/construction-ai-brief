# Construction AI Brief

> The honest read on AI in commercial construction. **constructionaibrief.com**

A standalone editorial property covering AI for GCs, trade subs, and estimators. Tue / Thu / Fri newsletter + daily socials. **Runs autonomously** — every piece is researched, drafted, critiqued, and published in-session by Claude routines. No standalone Node service, no API key stack to manage.

## Architecture

```
[scheduled-tasks] ─► [Claude session w/ MCPs] ─► [/data/*.jsonl + apps/web/content/*.mdx]
                                                  │
                                                  ├─► git push ─► Vercel auto-deploys
                                                  └─► Chrome MCP ─► Beehiiv / LinkedIn / X / Threads / IG
```

- **Routines** in `~/.claude/scheduled-tasks/cab-*` fire on cron.
- Each fires a Claude session that loads the **`cab-ops` skill** at `~/.claude/skills/cab-ops/SKILL.md`.
- The session uses **`WebSearch` / `WebFetch`** for research (no Exa).
- Writes content as MDX into `apps/web/content/posts/` and JSON state to `data/`.
- `git push` triggers Vercel redeploy automatically.
- Newsletter + socials publish via **Chrome MCP** through your already-logged-in browser sessions (no LinkedIn API, no Typefully, no Meta Graph token).
- Weekly Sunday audit emails you a one-page drift report via Gmail MCP. That's the only auto-contact.

## Repo layout

```
apps/web/                    Next.js 14 site (sentence-case headlines + drawing-sheet design)
  content/posts/*.mdx        published articles
packages/voice/              brand voice spec, banned phrases, pillar templates, CTAs
packages/schema/             shared TS types (no DB schema; file-based state)
data/                        content lake — jsonl files committed to git
  sources.json               RSS feeds + web-search queries
  items.jsonl                ingested raw items (append-only)
  drafts/                    work-in-progress drafts
  published.jsonl            log of what shipped + where
  social/                    short-form drafts per channel
  subscribers.jsonl          mirror of Beehiiv subs
~/.claude/skills/cab-ops/    the autopilot skill — every routine loads this
~/.claude/scheduled-tasks/   the cron routines
```

## The autopilot — six routines

| Routine | Schedule | What it does |
|---|---|---|
| `cab-ingest-daily` | daily 06:00 | Pulls RSS + WebSearch into `data/items.jsonl`, scores each item, commits |
| `cab-newsletter-tuesday` | Tue 06:30 | Drafts Punch List (news digest), commits MDX, publishes via Chrome → Beehiiv |
| `cab-newsletter-thursday` | Thu 06:30 | Drafts rotating deep dive (teardown / playbook / field report), publishes |
| `cab-newsletter-friday` | Fri 06:30 | Drafts One Chart trend issue with matplotlib chart, publishes |
| `cab-socials-daily` | Mon-Fri 08:00 | Drafts + posts LinkedIn + X + Threads + IG via Chrome MCP |
| `cab-audit-weekly` | Sun 09:00 | Reviews the week, emails you a drift report, pauses autopilot if drift detected |

Inspect or edit at `~/.claude/scheduled-tasks/cab-*/SKILL.md`. Trigger a "run now" from Claude Code's Scheduled sidebar.

## Manual setup — what's left for you

This is the *whole* list. Everything else autopilot handles.

1. **Buy the domain** — `https://vercel.com/domains/search?q=constructionaibrief.com` (~$11.25/yr, card on file). After purchase, add it to the Vercel project at `Settings → Domains`.
2. **Create Beehiiv publication** — `https://app.beehiiv.com/signup`. Free tier. Set up DKIM/SPF/DMARC for the domain when it's connected. **Stay logged in in Chrome** — the autopilot uses your session.
3. **Stay logged in to LinkedIn, X, Threads, Instagram** in the same Chrome profile. Create the company page on LinkedIn for Construction AI Brief and stay signed in as admin.
4. **(Optional) Add `BEEHIIV_API_KEY` + `BEEHIIV_PUBLICATION_ID`** to Vercel env vars if you want the signup form to POST directly. Without these, signups silently log (still captured in build logs); with them, signups flow into your Beehiiv list immediately.
5. **First-run tool approvals** — go to the Scheduled sidebar in Claude Code, click "Run now" on each routine once. The first run will pause on permission prompts (Bash, gh, Chrome MCP, WebFetch). Approve them; future runs auto-pass.

## How to pause

Drop a file at `data/PAUSED.flag` with a one-line reason. Every routine checks this first and aborts if it exists. Delete it to resume.

## Brand voice + pillars

Living docs — edit anytime; next routine picks them up.

- `packages/voice/brand-voice.md` — voice rules, disclosure, "what would Keeran publish this" bar
- `packages/voice/banned-phrases.json` — critic-enforced block list
- `packages/voice/pillar-templates.md` — structure per pillar
- `packages/voice/cta-templates.json` — role-targeted CTAs
