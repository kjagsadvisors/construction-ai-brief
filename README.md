# Construction AI Brief

> The honest read on AI in commercial construction. **constructionaibrief.com**

Standalone editorial property covering AI for GCs, trade subs, and estimators.
Newsletter 3x/week (Tue/Thu/Fri) + daily social posts. Full autopilot: source
ingestion → scoring → drafting → critic gate → publish → telemetry.

Funnels readers into [kjags advisors](https://kjagsadvisors.com),
[jobhost.ai](https://jobhost.ai), and [bidverify.ai](https://bidverify.ai)
via role-targeted CTAs.

## Repo layout

```
apps/
  web/          Next.js 14 site (MDX articles, signup, admin dashboard stub)
  pipeline/     Node/TS workers: ingest → score → draft → publish → audit
packages/
  voice/        Brand voice spec, banned phrases, pillar templates, CTAs
  schema/       Supabase SQL + matching TS types
.github/
  workflows/    Cron schedules (ingest, draft, publish, audit)
```

## Local dev

```bash
pnpm install
cp .env.example .env  # fill in keys you have; missing keys disable that channel
pnpm dev              # web at http://localhost:3000
```

## Run pipeline workers manually

```bash
pnpm pipeline:ingest    # pull RSS + Exa + arXiv into supabase
pnpm pipeline:score     # score new content_items
PILLAR=punch_list CHANNEL=newsletter AUDIENCE=gc_ops SLOT_ID=test-1 pnpm pipeline:draft
pnpm pipeline:publish   # publish any ready drafts whose scheduled_for is past
pnpm pipeline:audit     # weekly self-audit report
```

## Manual setup checklist (Phase 0)

These steps Claude cannot do — they need your hands on accounts and DNS.

### Brand + handles
- [ ] Decide on final brand name (or keep "Construction AI Brief")
- [ ] Register domain (Cloudflare Registrar or Porkbun)
- [ ] Create LinkedIn **company page** (personal accounts can't post via API)
- [ ] Reserve handles on X, Threads, Instagram
- [ ] Set up Google Workspace 1 seat for `hello@<domain>` (used for ALERT_EMAIL)

### Newsletter (Beehiiv)
- [ ] Create Beehiiv publication
- [ ] Configure custom domain + DKIM/SPF/DMARC (Beehiiv walks through this)
- [ ] Generate API key → `.env` as `BEEHIIV_API_KEY`
- [ ] Copy publication ID → `.env` as `BEEHIIV_PUBLICATION_ID`
- [ ] In Beehiiv, add a custom field `segment` (text)
- [ ] In Beehiiv → Settings → Webhooks, point `subscription.*` and
      `post.opened` / `post.clicked` to `https://<domain>/api/webhook/beehiiv`
- [ ] Generate webhook secret → `.env` as `BEEHIIV_WEBHOOK_SECRET`

### Database (Supabase)
- [ ] Create Supabase project (Pro plan for `vector` extension support at scale)
- [ ] In SQL editor, paste and run `packages/schema/supabase.sql`
- [ ] Copy URL + service-role key → `.env`

### Anthropic (Claude API)
- [ ] Create API key at console.anthropic.com
- [ ] Set monthly hard cap (e.g. $400/mo) → console settings → usage limits
- [ ] Paste key → `.env` as `ANTHROPIC_API_KEY`

### Search (Exa)
- [ ] Sign up at exa.ai
- [ ] Pick a plan ($50/mo starter) → API key → `.env`

### Social channel APIs
- [ ] LinkedIn: register an app at developer.linkedin.com, request
      `w_organization_social` + `r_organization_social` scopes for the
      company page, generate access token + organization URN → `.env`
- [ ] Typefully ($15/mo) for X + Threads. Connect both, copy API key → `.env`
- [ ] Meta Graph: create Meta app, link Instagram business + Threads accounts,
      generate long-lived access token, capture user IDs → `.env`

### Hosting (Vercel)
- [ ] Create Vercel project, link this repo
- [ ] Point domain at Vercel
- [ ] Paste `.env` contents into Vercel project env (all `NEXT_PUBLIC_*` + the
      ones the web app reads)
- [ ] Enable Vercel Analytics

### Pipeline runtime (GitHub Actions)
- [ ] Push repo to GitHub (private)
- [ ] In repo settings → Secrets and variables → Actions, paste every key
      from `.env.example`
- [ ] Workflow `cron.yml` triggers automatically on the schedule once secrets
      are set. First scheduled run will be the next time a slot fires; you
      can also `gh workflow run cron.yml -f job=ingest` to test

## Launch readiness checks (end of phase 3, before flipping autopilot on)

1. **End-to-end dry run** — fire `pipeline:draft` for one newsletter + 3 socials manually. All pass critic. No banned phrases.
2. **Source coverage** — `select count(*) from content_items where fetched_at > now() - interval '24 hours'` ≥ 30.
3. **Deliverability** — send test issue to gmail/outlook/yahoo. DKIM/SPF/DMARC green via mail-tester.com.
4. **Kill switch drill** — `update kill_switch set paused = true` → confirm next cron run logs "kill switch active, skipping".
5. **Lead path** — sign up as each role on `/`, confirm Beehiiv shows the right segment, confirm next issue's CTA matches.
6. **First 4 weeks** — spot-check published items daily (~5 min). Then drop to weekly audit.

## Plan + voice are living docs

- Strategy + phasing → `~/.claude/plans/i-m-thinking-about-launching-quiet-canyon.md`
- Brand voice → `packages/voice/brand-voice.md` (every Claude call reads this)
- Banned phrases → `packages/voice/banned-phrases.json` (enforced by critic)

Edit these freely. The pipeline picks up changes on the next run.
