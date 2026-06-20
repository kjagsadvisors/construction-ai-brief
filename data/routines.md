# Construction AI Brief — autopilot (two routines)

The whole system is **two routines**. Everything from the old 13-routine setup has been retired.

## The two routines

| Routine | Schedule (local ET) | What it does | Output |
|---|---|---|---|
| **Hourly article** (`cab-hourly-article`) | every hour, :17 | Research AI/tech news; **only if** something genuinely newsworthy + construction-applicable broke this hour, write ONE article. Quality-gated, max 3/day. Most hours it no-ops. | MDX → `apps/web/content/posts/` → `git push` → Vercel deploy |
| **Newsletter** (`cab-newsletter-mwf`) | Mon/Wed/Fri, 6:10 am | Draft a complete issue on AI + robotics + construction tech. | A **send-ready draft** in Beehiiv (pub_6fb77ef1-3b8b-4f1e-a6f8-ab00c2d557df) |

Prompts live in:
- `~/.claude/scheduled-tasks/cab-hourly-article/SKILL.md`
- `~/.claude/scheduled-tasks/cab-newsletter-mwf/SKILL.md`

These currently run as **local** scheduled tasks (fire when the Mac + Claude app are running). To run them 24/7 in the cloud, see "Promote to cloud" below.

## Two things the tools can't do automatically

1. **Newsletter send.** The Beehiiv MCP can only *create* a post — it cannot send to subscribers ("Promotion/publish remains a human action via the beehiiv UI"). The routine leaves a polished, one-click-from-send draft. You hit Send in Beehiiv (or have Claude drive your logged-in browser to send).
2. **Cloud routine creation.** Cloud routines are created in the `claude.ai/code/routines` UI, not from a Claude Code session. The local tasks above are the runnable version; the cloud version uses the same prompt.

## Promote to cloud (optional, for true 24/7)

At https://claude.ai/code/routines → New routine, for each:
- Paste the prompt from the matching `SKILL.md`.
- Set the schedule — Hourly: `17 * * * *`; Newsletter: `10 10 * * 1,3,5` (UTC; = 6:10 am ET).
- Attach connectors: **GitHub repo** `kjagsadvisors/construction-ai-brief` + **WebSearch/WebFetch** for both; **Beehiiv MCP** for the newsletter.

## Kill list — delete these old cloud routines

Retired. Delete at https://claude.ai/code/routines:

```
trig_015Cyv3BknK6pM81jL8GSxyT   (daily ingest)
trig_01PqRqAEJkCPDn23vNe2Cdya   (newsletter Tue/Thu/Fri)
trig_01S2jXkdniNCRtBsTxp1TucA   (weekly audit)
trig_01CNQ1E1TrbNP7yum4xdpduM   (daily social bundle)
trig_011qS9gerrw1U7fngmAqVLRP   (breaking-news 2h)
trig_01T7vRCYFFdmj46gAKSFoApm   (weekly SEO pillar)
trig_018M99ocTCPGbLFhcwnssUfC   (weekly outreach)
trig_012RakEcXaqHL5TJXVCwHX7M   (IndexNow push)
trig_01729yV1aJdBSk8hfNRP9Jqy   (cross-republish)
trig_01NmopQrDBEk4j4YGn8rcZS2   (deprecated: Thu deep dive)
trig_01SzhxWS7HFCAQ2WHMSp93Cw   (deprecated: Fri one chart)
trig_015T6pw4bnsyqwzbrLGJWsoY   (deprecated: Sun audit)
trig_01Qe1MrfuCxn5Z4nzyu5ufbg   (deprecated: Pinterest/HN)
```

The 6 old local task dirs (`~/.claude/scheduled-tasks/cab-ingest-daily`, `cab-newsletter-*`, `cab-socials-daily`, `cab-audit-weekly`) have already been deleted.

## Pause

The two routines do **not** check `data/PAUSED.flag`. To pause: disable them in the Scheduled sidebar (local) or in the routines UI (cloud).
