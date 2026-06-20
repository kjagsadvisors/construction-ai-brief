# Construction AI Brief — autopilot (two cloud routines)

The whole system is **two cloud routines** on claude.ai, both pointed at this repo. Everything from the old 13-routine setup has been deleted.

The logic lives in repo skills (committed here, so cloud runs see them after cloning):

- `.claude/skills/cab-hourly-article/SKILL.md`
- `.claude/skills/cab-newsletter/SKILL.md`

## The two routines

| Routine | Schedule | Skill it runs | Output |
|---|---|---|---|
| **Hourly article** | every hour | `cab-hourly-article` | If something genuinely newsworthy + construction-relevant broke this hour, writes ONE article → `apps/web/content/posts/` → `git push` → Vercel. Quality-gated, max 3/day. No-ops most hours. |
| **Newsletter** | Mon/Wed/Fri, 6:10 am ET | `cab-newsletter` | A **send-ready draft** in Beehiiv (`pub_6fb77ef1-3b8b-4f1e-a6f8-ab00c2d557df`). |

### Routine prompts (paste into the cloud routine)

Hourly:
```
Read .claude/skills/cab-hourly-article/SKILL.md in this repo and execute its instructions exactly. Run silently; do not message anyone.
```

Newsletter:
```
Read .claude/skills/cab-newsletter/SKILL.md in this repo and execute its instructions exactly.
```

### Schedules (cron)

- Hourly: `17 * * * *`
- Newsletter (UTC): `10 10 * * 1,3,5` (= 6:10 am ET). If the routine UI has a timezone selector, set America/New_York and use `10 6 * * 1,3,5`.

### Connectors to attach

- Both: GitHub repo `kjagsadvisors/construction-ai-brief` + web search/fetch.
- Newsletter also needs the **Beehiiv MCP** connector.

## Two tool limits to know

1. **Newsletter send.** The Beehiiv MCP only *creates* a post; it can't send to subscribers. The routine leaves a one-click-from-send draft — you hit Send in Beehiiv.
2. The routines do **not** check `data/PAUSED.flag`. To pause, disable them in the routines UI.
