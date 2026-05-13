import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import type { Pillar, Segment } from "@cab/schema";

const POSTS_DIR = join(process.cwd(), "content", "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string | null;
  pillar: Pillar;
  audience: Segment;
  sources?: string[];
}

export interface Post extends PostMeta {
  body: string;
}

export function getAllPosts(): PostMeta[] {
  let files: string[];
  try {
    files = readdirSync(POSTS_DIR).filter(
      (f) => f.endsWith(".mdx") && !f.startsWith("_"),
    );
  } catch {
    return [];
  }
  return files
    .map((file) => {
      const raw = readFileSync(join(POSTS_DIR, file), "utf8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: String(data.title ?? "untitled"),
        date: String(data.date ?? new Date().toISOString().slice(0, 10)),
        excerpt: data.excerpt ? String(data.excerpt) : null,
        pillar: (data.pillar ?? "punch_list") as Pillar,
        audience: (data.audience ?? "none") as Segment,
        sources: Array.isArray(data.sources) ? data.sources.map(String) : [],
      } satisfies PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  let raw: string;
  try {
    raw = readFileSync(join(POSTS_DIR, `${slug}.mdx`), "utf8");
  } catch {
    return null;
  }
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? "untitled"),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    excerpt: data.excerpt ? String(data.excerpt) : null,
    pillar: (data.pillar ?? "punch_list") as Pillar,
    audience: (data.audience ?? "none") as Segment,
    sources: Array.isArray(data.sources) ? data.sources.map(String) : [],
    body: content,
  };
}
