import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionaibrief.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `${BASE}/posts/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/posts`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/tools`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    ...posts,
  ];
}
