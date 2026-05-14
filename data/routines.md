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
