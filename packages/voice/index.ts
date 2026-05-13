import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string) => readFileSync(resolve(here, rel), "utf8");

export const brandVoice = () => read("brand-voice.md");
export const pillarTemplates = () => read("pillar-templates.md");
export const bannedPhrases = (): string[] =>
  JSON.parse(read("banned-phrases.json"));
export const ctaTemplates = (): Record<Segment, Cta[]> =>
  JSON.parse(read("cta-templates.json"));

export type Segment = "gc_ops" | "trade_sub" | "estimator" | "none";
export type Pillar =
  | "tool_teardown"
  | "punch_list"
  | "playbook"
  | "field_report"
  | "trend";

export interface Cta {
  product: "kjags" | "jobhost" | "bidverify";
  text: string;
  url: string;
}
