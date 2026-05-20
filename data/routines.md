# Construction AI Brief — autopilot routines

All routines on claude.ai (remote CCR) unless noted. Manage at https://claude.ai/code/routines.

**Active: 9 routines** (down from 13 — newsletter pillars consolidated into one publisher, social drafters merged into one daily bundle, two audits combined into one weekly audit). The 4 deprecated routines are disabled and can be deleted from the routines UI whenever convenient — they don't count against the 15-routine cap.

## Editorial pipeline (3 active)

| Routine | ID | Cron (UTC) | Local (ET) | What it does |
|---|---|---|---|---|
| Daily ingest | `trig_015Cyv3BknK6pM81jL8GSxyT` | `0 10 * * *` | 6:00 am | Pull RSS + WebSearch → score → append to `data/items.jsonl` |
| Newsletter publisher (Tue/Thu/Fri) | `trig_01PqRqAEJkCPDn23vNe2Cdya` | `30 10 * * 2,4,5` | 6:30 am Tue/Thu/Fri | Day-of-week router: Tue punch list, Thu rotating deep dive (teardown/playbook/field report), Fri one chart → MDX → Beehiiv publish |
| Weekly audit | `trig_01S2jXkdniNCRtBsTxp1TucA` | `0 14 * * 1` | 10:00 am Mon | Editorial drift + growth/funnel + website analytics → Gmail to Keeran (the only auto-contact) |

## Growth pipeline (1 active)

| Routine | ID | Cron (UTC) | Local (ET) | What it does |
|---|---|---|---|---|
| Daily social bundle | `trig_01CNQ1E1TrbNP7yum4xdpduM` | `0 13 * * 1-5` | 9:00 am Mon-Fri | IG carousel via Canva + LinkedIn/X/Threads/Facebook drafts + Pinterest pins + HN submission watcher + Reddit drafts. All saved to `data/social/`. LinkedIn HARD-LOCKED to company page only (never personal) — see `cab_linkedin_company_only.md` memory rule. |

## SEO + organic growth pipeline (3 active)

| Routine | ID | Cron (UTC) | Local (ET) | What it does |
|---|---|---|---|---|
| Breaking-news alert | `trig_011qS9gerrw1U7fngmAqVLRP` | `0 */2 * * *` | every 2h | Polls Anthropic/OpenAI/Procore/Trimble/ENR/Construction Dive RSS for items <2h old. Material+construction-applicable+fresh → drafts 400-600w reaction → MDX commit → Beehiiv schedule 1h out. Max 2/day. |
| Weekly SEO pillar | `trig_01T7vRCYFFdmj46gAKSFoApm` | `0 14 * * 3` | 10:00 am Wed | Picks next pillar from the bank in `data/seo-organic-growth-plan.md` (Part 4), writes 3000+w long-form to `apps/web/content/seo/`, FAQ schema, refreshes any pillar >90 days old |
| Weekly outreach drafter | `trig_018M99ocTCPGbLFhcwnssUfC` | `0 15 * * 4` | 11:00 am Thu | Drafts trade-pub pitch + newsletter swap (Gmail drafts) + Reddit/LinkedIn comment seeds (`data/outreach/{date}.md`). Rotates ENR/Construction Dive/BD+C/AGC across weeks. |

## Distribution / multi-channel pipeline (2 active)

| Routine | ID | Cron (UTC) | Local (ET) | What it does |
|---|---|---|---|---|
| IndexNow URL push | `trig_012RakEcXaqHL5TJXVCwHX7M` | `0 * * * *` | hourly | Scans MDX dirs for new URLs → diffs against `data/indexnow-pushed.jsonl` → POSTs unsubmitted URLs to api.indexnow.org. **Instantly indexes into Bing → MSN / Edge / Windows widgets / DuckDuckGo / Yahoo / Kagi / ChatGPT search / Copilot / Yandex / Naver / Seznam.** Free, no auth. |
| Cross-platform republication | `trig_01729yV1aJdBSk8hfNRP9Jqy` | `0 16 * * 1-5` | noon Mon-Fri | For each newsletter article published today, generates Medium / Hashnode / Dev.to / LinkedIn Article versions with canonical tags pointing back to constructionaibrief.com. Posts via API if keys present; queues drafts to `data/republish/` otherwise. |

## Deprecated (disabled, safe to delete from routines UI)

These were consolidated into the active routines above. Disabled — don't count against the 15-routine cap. Delete at https://claude.ai/code/routines whenever convenient.

| Routine ID | Was | Merged into |
|---|---|---|
| `trig_01NmopQrDBEk4j4YGn8rcZS2` | Thursday deep dive | Newsletter publisher (`trig_01PqRqAEJkCPDn23vNe2Cdya`) |
| `trig_01SzhxWS7HFCAQ2WHMSp93Cw` | Friday one chart | Newsletter publisher |
| `trig_015T6pw4bnsyqwzbrLGJWsoY` | Sunday editorial audit | Weekly audit (`trig_01S2jXkdniNCRtBsTxp1TucA`) |
| `trig_01Qe1MrfuCxn5Z4nzyu5ufbg` | Pinterest pins + HN watcher | Daily social bundle (`trig_01CNQ1E1TrbNP7yum4xdpduM`) |

## Local routines (still active, dormant when remote handles same work)

In `~/.claude/scheduled-tasks/` — run when Mac is on. Idempotency-checked so they no-op if today's MDX or social drafts already exist from CCR:

- `cab-ingest-daily`, `cab-newsletter-tuesday`, `cab-newsletter-thursday`, `cab-newsletter-friday`, `cab-audit-weekly` — fallback if remote fails
- `cab-socials-daily` — **active**, handles LinkedIn / X / Threads / Facebook / IG posting via Chrome MCP. LinkedIn HARD-LOCKED to company page only — aborts the LinkedIn step entirely if the company page is unreachable rather than fall back to personal feed.

## Connectors attached to each routine

All editorial + growth routines have: **Gmail, Canva, beehiiv** + (CCR's built-in tools: WebSearch, WebFetch, Bash, Read/Write/Edit, gh CLI). Weekly audit also has **Vercel** for website analytics pull.

IG carousel routine also has **higgsfield** (registered; OAuth needs a reconnect — won't affect Canva-driven carousel work).

## Pause everything

`echo "reason" > data/PAUSED.flag && git push` — every routine checks this on entry and exits cleanly.

## Watch what's happening

- Commits: https://github.com/kjagsadvisors/construction-ai-brief/commits/main (autopilot commits as `Construction AI Brief (autopilot)`)
- Routine runs: https://claude.ai/code/routines
- Weekly audit emails: Monday mornings to keeranj@kjagsadvisors.com (consolidated — was Sun + Mon, now one Mon email with editorial drift + growth/funnel + website analytics)
- Website analytics setup: see `data/ANALYTICS-SETUP.md`
