# Construction AI Brief — autopilot

Two cloud routines (claude.ai, pointed at this repo) + one local send routine. Logic lives in repo skills (auto-loaded in cloud runs as part of the clone):

- `.claude/skills/cab-hourly-article/SKILL.md`
- `.claude/skills/cab-newsletter/SKILL.md`

**Editorial model:** construction is the **lens, not the search filter** — both skills scan the whole AI/tech news landscape and draw a genuine, specific construction angle. A forced tie-in is skipped.

## Pipeline

| Routine | Where | Schedule | What it does |
|---|---|---|---|
| **Hourly article** (`trig_01TJe6NiLbbCX7xuSMJBSv5X`) | cloud | `0 * * * *` | If a significant AI story has a real construction angle, writes ONE MDX article and pushes to `main` → Vercel deploys. Max 3/day; no-ops most hours. |
| **Newsletter** (`trig_01FNyeRuboVkAoDmWszpeaWm`) | cloud | `0 6 * * 1,3,5` (UTC = 2am ET) | Writes a paste-ready issue file to `data/newsletter-drafts/{date}-newsletter.md` on `main`. Does NOT publish to Beehiiv. |
| **`cab-newsletter-publish`** | local | Mon/Wed/Fri hourly 8am–7pm ET | Reads today's newsletter file, creates the post in Beehiiv via the logged-in browser, and sends it. Idempotent + date-locked. |

## Why the newsletter is split (cloud drafts file, local sends)

Beehiiv's current plan blocks MCP/API post creation (`save_post` → "not available on your current plan"); read tools work. So the cloud routine can't create the post. The cloud routine writes the issue as a repo file; the local routine (when the Mac is on and you're logged into Beehiiv) creates the post in the browser and sends it.

## Cloud environment requirements (already set)

- **Network access = Full** (live web research; default "Trusted" blocks WebFetch with 403).
- **Allow unrestricted branch pushes** (skills push directly to `main` via `git push origin HEAD:main`; a bare `git push` would land on the session's `claude/*` branch and never deploy).
- Beehiiv connector attached (read-only use given the plan limit).

## Open items

- **Daily run cap:** hourly = 24 starts/day; check claude.ai/settings/usage. Drop to every-2h if it strains the cap.
- **Newsletter draft time:** `0 6` is UTC (2am ET). Change cron to `0 10 * * 1,3,5` for a 6am ET draft.
- **Browser send is untested end-to-end** — needs one supervised run (logged into Beehiiv) to harden the create+paste+send flow.
- Routines do **not** check `data/PAUSED.flag`; pause via the routines UI / Scheduled sidebar.
