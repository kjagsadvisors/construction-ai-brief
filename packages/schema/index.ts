// Shared types used by the web app + routine-invoked drafts.
// File-based state lives in /data; no database.

export type Segment = "gc_ops" | "trade_sub" | "estimator" | "none";

export type Pillar =
  | "tool_teardown"
  | "punch_list"
  | "playbook"
  | "field_report"
  | "trend";

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
  url: string;
  title: string;
  fetched_at: string;
  published_at: string | null;
  audience_tags: Segment[];
  pillar_tag: Pillar | null;
  novelty_score: number;
  usefulness_score: number;
  raw_text: string;
}

export interface PublishedEntry {
  slug: string;
  channel: Channel;
  pillar: Pillar;
  audience: Segment;
  title: string;
  published_at: string;
  external_id?: string;
  external_url?: string;
}

export interface Source {
  name: string;
  url: string;
  kind: "rss" | "youtube" | "web";
}
