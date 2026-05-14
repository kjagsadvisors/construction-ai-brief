# Construction AI Brief — autopilot routines

Five remote routines on claude.ai (no local machine needed). Each runs in an isolated CCR sandbox with a fresh clone of this repo, executes its task, commits + pushes back.

| Routine | ID | Cron (UTC) | Local (EDT) | Next |
|---|---|---|---|---|
| Daily ingest | `trig_015Cyv3BknK6pM81jL8GSxyT` | `0 10 * * *` | 6:00 am | Daily |
| Tuesday punch list | `trig_01PqRqAEJkCPDn23vNe2Cdya` | `30 10 * * 2` | 6:30 am Tue | Weekly |
| Thursday deep dive | `trig_01NmopQrDBEk4j4YGn8rcZS2` | `30 10 * * 4` | 6:30 am Thu | Weekly |
| Friday one chart | `trig_01SzhxWS7HFCAQ2WHMSp93Cw` | `30 10 * * 5` | 6:30 am Fri | Weekly |
| Sunday audit | `trig_015T6pw4bnsyqwzbrLGJWsoY` | `0 13 * * 0` | 9:00 am Sun | Weekly |

**Manage at:** https://claude.ai/code/routines

**Tools each routine has:** Bash, Read, Write, Edit, Glob, Grep, WebSearch, WebFetch + MCP connectors (Gmail, Canva, Microsoft 365, Vercel, Supabase, Apollo, JobHostAI, Mercury, QuickBooks).

## The flow

```
Daily 06:00 ET → INGEST → data/items.jsonl grows by ~20-40 items
                          ↓
Tue/Thu/Fri 06:30 ET → DRAFT → apps/web/content/posts/{date}-{slug}.mdx
                          ↓
                       git push → Vercel deploys constructionaibrief.com
                          ↓
                       Beehiiv polls /feed.xml hourly → newsletter goes out
                          ↓
Sun 09:00 ET → AUDIT → data/audit-{date}.md + Gmail to keeranj@kjagsadvisors.com
```

## Local routines (still active for things remote can't do)

The local `~/.claude/scheduled-tasks/cab-*` routines created earlier are still scheduled. They have idempotency checks — if today's MDX already exists (because the remote routine wrote it), they skip. They're effectively dormant unless:

- The Mac is on AND
- The remote routine didn't run (failed git push, etc.) AND
- Today's content is missing

The one local routine that's NOT dormant: `cab-socials-daily` — this still runs locally because socials require Chrome MCP (user's authenticated browser sessions for LinkedIn / X / Threads / IG). Remote can't do that.

## Pausing autopilot

Drop a file at `data/PAUSED.flag` in the repo with a one-line reason. Every routine checks this first and exits cleanly. Delete the file to resume.

## Watching what's happening

- **Commit log:** https://github.com/kjagsadvisors/construction-ai-brief/commits/main — every routine commits with `Construction AI Brief (autopilot)` as the author
- **Routine runs:** https://claude.ai/code/routines — see each run's outputs
- **Audit emails:** Sunday morning to keeranj@kjagsadvisors.com — the one-page weekly drift report
