-- Plumb — Supabase schema
-- Apply via Supabase SQL editor or `supabase db push` once linked.
-- All timestamps UTC. All IDs uuid v7 where supported, uuid v4 fallback.

-- ─── Extensions ───────────────────────────────────────────────────────────
create extension if not exists "pgcrypto";
create extension if not exists "vector";

-- ─── enums ────────────────────────────────────────────────────────────────
create type segment as enum ('gc_ops', 'trade_sub', 'estimator', 'none');
create type pillar  as enum ('tool_teardown', 'punch_list', 'playbook', 'field_report', 'trend');
create type draft_status as enum ('queued', 'drafted', 'critiqued', 'rejected', 'ready', 'published');
create type channel as enum ('web', 'newsletter', 'linkedin', 'x', 'threads', 'instagram');

-- ─── content_items: the raw lake ──────────────────────────────────────────
create table content_items (
  id              uuid primary key default gen_random_uuid(),
  source          text not null,
  source_type     text not null,
  url             text not null,
  title           text,
  raw_text        text,
  raw_html        text,
  hash            text not null unique,
  fetched_at      timestamptz not null default now(),
  published_at    timestamptz,
  -- scoring (filled by score worker)
  audience_tags   segment[] default '{}',
  pillar_tag      pillar,
  novelty_score   numeric(3,2),
  usefulness_score numeric(3,2),
  evergreen       boolean default false,
  scored_at       timestamptz,
  archived        boolean default false,
  -- embedding for dedup + similarity
  embedding       vector(1536)
);

create index content_items_url_idx on content_items (url);
create index content_items_fetched_at_idx on content_items (fetched_at desc);
create index content_items_scored_idx on content_items (scored_at) where scored_at is null;
create index content_items_pillar_idx on content_items (pillar_tag) where archived = false;
create index content_items_embedding_idx on content_items using ivfflat (embedding vector_cosine_ops);

-- ─── drafts: per-slot generated artifacts ─────────────────────────────────
create table drafts (
  id              uuid primary key default gen_random_uuid(),
  slot_id         text not null,
  pillar          pillar not null,
  channel         channel not null,
  audience_primary segment not null,
  body            text not null,
  body_mdx        text,
  title           text not null,
  excerpt         text,
  source_item_ids uuid[] default '{}',
  drafter_model   text not null,
  critic_model    text,
  critic_score    int,
  critic_notes    text,
  status          draft_status not null default 'queued',
  created_at      timestamptz not null default now(),
  ready_at        timestamptz,
  scheduled_for   timestamptz
);

create index drafts_status_idx on drafts (status, scheduled_for);
create index drafts_slot_idx on drafts (slot_id);

-- ─── published: append-only log of what went out ──────────────────────────
create table published (
  id              uuid primary key default gen_random_uuid(),
  draft_id        uuid not null references drafts(id),
  channel         channel not null,
  external_id     text,
  external_url    text,
  published_at    timestamptz not null default now(),
  -- snapshot at publish-time (for diff audit later)
  body_snapshot   text not null,
  title_snapshot  text not null,
  critic_score_snapshot int
);

create index published_at_idx on published (published_at desc);
create index published_channel_idx on published (channel, published_at desc);

-- ─── subscribers: synced from beehiiv ─────────────────────────────────────
create table subscribers (
  id              uuid primary key default gen_random_uuid(),
  email           text not null unique,
  beehiiv_id      text,
  segment         segment not null default 'none',
  signed_up_at    timestamptz not null default now(),
  source          text,
  utm_source      text,
  utm_medium      text,
  utm_campaign    text,
  last_opened_at  timestamptz,
  last_clicked_at timestamptz,
  open_count      int default 0,
  click_count     int default 0,
  unsubscribed    boolean default false
);

create index subscribers_segment_idx on subscribers (segment) where unsubscribed = false;

-- ─── events: open/click/conversion telemetry ──────────────────────────────
create table events (
  id              bigserial primary key,
  occurred_at     timestamptz not null default now(),
  event_type      text not null,
  channel         channel,
  subscriber_id   uuid references subscribers(id),
  published_id    uuid references published(id),
  url             text,
  user_agent      text,
  ip_hash         text,
  payload         jsonb
);

create index events_occurred_at_idx on events (occurred_at desc);
create index events_subscriber_idx on events (subscriber_id, occurred_at desc);
create index events_published_idx on events (published_id, occurred_at desc);

-- ─── kill_switch: simple ops flag ─────────────────────────────────────────
create table kill_switch (
  id              int primary key default 1,
  paused          boolean not null default false,
  reason          text,
  triggered_at    timestamptz,
  updated_at      timestamptz not null default now(),
  constraint kill_switch_singleton check (id = 1)
);

insert into kill_switch (id, paused) values (1, false) on conflict do nothing;

-- ─── audit_log: weekly self-audit reports ─────────────────────────────────
create table audit_log (
  id              uuid primary key default gen_random_uuid(),
  period_start    timestamptz not null,
  period_end      timestamptz not null,
  report_md       text not null,
  drift_score     numeric(3,2),
  flagged_ids     uuid[] default '{}',
  emailed_at      timestamptz,
  created_at      timestamptz not null default now()
);

create index audit_log_period_idx on audit_log (period_end desc);
