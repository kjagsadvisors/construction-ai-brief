# /data — content lake

File-based state. No database. Git is the durability layer; Vercel auto-deploys when MDX or sources change.

```
data/
├── sources.json         seed feeds + queries the ingest routine pulls from
├── items.jsonl          raw ingested items, one JSON per line, append-only
├── drafts/              work-in-progress drafts per slot (json or md)
├── published.jsonl      append-only log of what shipped + where
├── subscribers.jsonl    mirror of Beehiiv subs (synced via Chrome MCP)
└── social/              short-form drafts per channel (linkedin/x/threads/ig)
```

## Why files instead of Supabase

The autopilot runs **in a Claude session** triggered by a routine. The session reads + writes these files, commits to git, pushes. Vercel redeploys on push. The repo is the source of truth.

- No database means no DB credentials, no service-role keys, no schema migrations.
- Every change has a commit history.
- Diff'able, blame-able, rollback-able.
- Tiny: a year of items.jsonl at 30 items/day is maybe 50MB.
