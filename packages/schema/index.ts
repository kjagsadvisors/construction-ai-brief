export type Segment = "gc_ops" | "trade_sub" | "estimator" | "none";

export type Pillar =
  | "tool_teardown"
  | "punch_list"
  | "playbook"
  | "field_report"
  | "trend";

export type DraftStatus =
  | "queued"
  | "drafted"
  | "critiqued"
  | "rejected"
  | "ready"
  | "published";

export type Channel =
  | "web"
  | "newsletter"
  | "linkedin"
  | "x"
  | "threads"
  | "instagram";

export interface ContentItem {
  id: string;
  source: string;
  source_type: string;
  url: string;
  title: string | null;
  raw_text: string | null;
  raw_html: string | null;
  hash: string;
  fetched_at: string;
  published_at: string | null;
  audience_tags: Segment[];
  pillar_tag: Pillar | null;
  novelty_score: number | null;
  usefulness_score: number | null;
  evergreen: boolean;
  scored_at: string | null;
  archived: boolean;
  embedding: number[] | null;
}

export interface Draft {
  id: string;
  slot_id: string;
  pillar: Pillar;
  channel: Channel;
  audience_primary: Segment;
  body: string;
  body_mdx: string | null;
  title: string;
  excerpt: string | null;
  source_item_ids: string[];
  drafter_model: string;
  critic_model: string | null;
  critic_score: number | null;
  critic_notes: string | null;
  status: DraftStatus;
  created_at: string;
  ready_at: string | null;
  scheduled_for: string | null;
}

export interface Published {
  id: string;
  draft_id: string;
  channel: Channel;
  external_id: string | null;
  external_url: string | null;
  published_at: string;
  body_snapshot: string;
  title_snapshot: string;
  critic_score_snapshot: number | null;
}

export interface Subscriber {
  id: string;
  email: string;
  beehiiv_id: string | null;
  segment: Segment;
  signed_up_at: string;
  source: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  last_opened_at: string | null;
  last_clicked_at: string | null;
  open_count: number;
  click_count: number;
  unsubscribed: boolean;
}

export interface KillSwitch {
  id: number;
  paused: boolean;
  reason: string | null;
  triggered_at: string | null;
  updated_at: string;
}
