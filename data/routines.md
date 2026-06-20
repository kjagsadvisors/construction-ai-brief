# Construction AI Brief — autopilot (two cloud routines)

Two cloud routines on claude.ai, both pointed at this repo. Logic lives in repo skills (auto-loaded in cloud runs because they're part of the clone):

- `.claude/skills/cab-hourly-article/SKILL.md`
- `.claude/skills/cab-newsletter/SKILL.md`

## CRITICAL: one-time environment setup (or nothing works in cloud)

A cloud routine runs in a fresh VM with the repo cloned, but with **no internet and restricted git** by default. Configure the environment used by these routines (claude.ai → Code → the routine's environment, or claude.ai/customize/connectors):

1. **Network access → Full** (or Custom with a news/AI-domain allowlist). Default ("Trusted") blocks WebFetch with `403 host_not_allowed`, so live research returns nothing. The hourly article routine **requires** this.
2. **Allow unrestricted branch pushes** (per repo, in routine settings). Default only permits `claude/*` branches; our skills push to `main` so Vercel deploys. Without this, the push fails.
3. **Attach the Beehiiv connector** to the newsletter routine (MCP traffic is proxied — no allowlist needed). OAuth tokens can expire in unattended runs (known limitation), so re-auth if the draft step starts failing.

## The two routines

| Routine | Schedule | Skill | Output |
|---|---|---|---|
| **Hourly article** | hourly (preset) | `cab-hourly-article` | If something genuinely newsworthy + construction-relevant broke this hour, writes ONE article → `apps/web/content/posts/` → push `main` → Vercel. Max 3/day. No-ops most hours. |
| **Newsletter** | Mon/Wed/Fri ~6:10 am ET | `cab-newsletter` | A **send-ready draft** in Beehiiv (`pub_6fb77ef1-3b8b-4f1e-a6f8-ab00c2d557df`). Final send is one click in Beehiiv. |

### Routine prompts (paste into the routine)

Hourly:
```
Read .claude/skills/cab-hourly-article/SKILL.md in this repo and execute its instructions exactly. Run silently; do not message anyone.
```
Newsletter:
```
Read .claude/skills/cab-newsletter/SKILL.md in this repo and execute its instructions exactly.
```

### Schedule

- Hourly: use the **hourly** preset.
- Newsletter: Mon/Wed/Fri is not a preset. Create with the **weekly** preset, then `/schedule update` to cron `0 6 * * 1,3,5` — verify the displayed next-run is a Mon/Wed/Fri ET morning (adjust to `0 10 * * 1,3,5` if the field is UTC).

## Caveats

- **Daily run cap:** hourly = 24 starts/day, which may strain the per-account routine cap (claude.ai/settings/usage). If so, drop to every-2-hours. Each run consumes rate limits even when it no-ops.
- **Stateless:** the repo is the only memory. Dedup uses `data/published.jsonl` + existing post filenames.
- The routines do **not** check `data/PAUSED.flag`. To pause, disable them in the routines UI.
