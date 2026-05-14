# Construction AI Brief — autopilot routines

All routines on claude.ai (remote CCR) unless noted. Manage at https://claude.ai/code/routines.

## Editorial pipeline

| Routine | ID | Cron (UTC) | Local (ET) | What it does |
|---|---|---|---|---|
| Daily ingest | `trig_015Cyv3BknK6pM81jL8GSxyT` | `0 10 * * *` | 6:00 am | Pull RSS + WebSearch → score → append to `data/items.jsonl` |
| Tue Punch List | `trig_01PqRqAEJkCPDn23vNe2Cdya` | `30 10 * * 2` | 6:30 am Tue | Draft news digest → MDX → Beehiiv MCP publish |
| Thu Deep Dive | `trig_01NmopQrDBEk4j4YGn8rcZS2` | `30 10 * * 4` | 6:30 am Thu | Rotating teardown/playbook/field-report → MDX → Beehiiv |
| Fri One Chart | `trig_01SzhxWS7HFCAQ2WHMSp93Cw` | `30 10 * * 5` | 6:30 am Fri | Inline-SVG trend chart → MDX → Beehiiv |
| Sunday editorial audit | `trig_015T6pw4bnsyqwzbrLGJWsoY` | `0 13 * * 0` | 9:00 am Sun | Drift report → Gmail to Keeran (the only auto-contact) |

## Growth pipeline

| Routine | ID | Cron (UTC) | Local (ET) | What it does |
|---|---|---|---|---|
| Daily IG carousel + social drafts | `trig_01CNQ1E1TrbNP7yum4xdpduM` | `0 13 * * 1-5` | 9:00 am Mon-Fri | Canva-generated 6-slide IG carousel + LinkedIn/X/Threads drafts saved to `data/social/` |
| Monday growth audit | `trig_01S2jXkdniNCRtBsTxp1TucA` | `0 14 * * 1` | 10:00 am Mon | Beehiiv MCP → subs/opens/clicks/recs/Boosts → growth-{date}.md → Gmail to Keeran |

## SEO + organic growth pipeline

| Routine | ID | Cron (UTC) | Local (ET) | What it does |
|---|---|---|---|---|
| Breaking-news alert | `trig_011qS9gerrw1U7fngmAqVLRP` | `0 */2 * * *` | every 2h | Polls Anthropic/OpenAI/Procore/Trimble/ENR/Construction Dive RSS for items <2h old. Material+construction-applicable+fresh → drafts 400-600w reaction → MDX commit → Beehiiv schedule 1h out. Max 2/day. |
| Weekly SEO pillar | `trig_01T7vRCYFFdmj46gAKSFoApm` | `0 14 * * 3` | 10:00 am Wed | Picks next pillar from the bank in `data/seo-organic-growth-plan.md` (Part 4), writes 3000+w long-form to `apps/web/content/seo/`, FAQ schema, refreshes any pillar >90 days old |
| Weekly outreach drafter | `trig_018M99ocTCPGbLFhcwnssUfC` | `0 15 * * 4` | 11:00 am Thu | Drafts trade-pub pitch + newsletter swap (Gmail drafts) + Reddit/LinkedIn comment seeds (`data/outreach/{date}.md`). Rotates ENR/Construction Dive/BD+C/AGC across weeks. |

## Distribution / multi-channel pipeline

| Routine | ID | Cron (UTC) | Local (ET) | What it does |
|---|---|---|---|---|
| IndexNow URL push | `trig_012RakEcXaqHL5TJXVCwHX7M` | `0 * * * *` | hourly | Scans MDX dirs for new URLs → diffs against `data/indexnow-pushed.jsonl` → POSTs unsubmitted URLs to api.indexnow.org. **Instantly indexes into Bing → MSN / Edge / Windows widgets / DuckDuckGo / Yahoo / Kagi / ChatGPT search / Copilot / Yandex / Naver / Seznam.** Free, no auth. |
| Cross-platform republication | `trig_01729yV1aJdBSk8hfNRP9Jqy` | `0 16 * * 1-5` | noon Mon-Fri | For each newsletter article published today, generates Medium / Hashnode / Dev.to / LinkedIn Article versions with canonical tags pointing back to constructionaibrief.com. Posts via API if keys present; queues drafts to `data/republish/` otherwise. |
| Pinterest + HN + Reddit drafts | `trig_01Qe1MrfuCxn5Z4nzyu5ufbg` | `30 13 * * 1-5` | 9:30 am Mon-Fri | 3 Pinterest pins (visual SEO) via Canva MCP + HN submission card (if any post scored ≥9 + hasn't been submitted) + Reddit post draft for one relevant sub. All to `data/social/`. |

## Local routines (still active, dormant when remote handles same work)

In `~/.claude/scheduled-tasks/` — run when Mac is on. Idempotency-checked so they no-op if today's MDX or social drafts already exist from CCR:

- `cab-ingest-daily`, `cab-newsletter-tuesday`, `cab-newsletter-thursday`, `cab-newsletter-friday`, `cab-audit-weekly` — fallback if remote fails
- `cab-socials-daily` — **active**, handles LinkedIn posting via Chrome MCP (only place Chrome MCP is available)

## Connectors attached to each routine

All editorial + growth routines have: **Gmail, Canva, beehiiv** + (CCR's built-in tools: WebSearch, WebFetch, Bash, Read/Write/Edit, gh CLI).

IG carousel routine also has **higgsfield** (registered; OAuth needs a reconnect — won't affect Canva-driven carousel work).

## Pause everything

`echo "reason" > data/PAUSED.flag && git push` — every routine checks this on entry and exits cleanly.

## Watch what's happening

- Commits: https://github.com/kjagsadvisors/construction-ai-brief/commits/main (autopilot commits as `Construction AI Brief (autopilot)`)
- Routine runs: https://claude.ai/code/routines
- Growth + editorial audit emails: Sun + Mon mornings to keeranj@kjagsadvisors.com
