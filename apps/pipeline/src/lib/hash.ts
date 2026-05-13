import { createHash } from "node:crypto";

export const sha256 = (s: string): string =>
  createHash("sha256").update(s).digest("hex");

export const urlHash = (url: string): string => sha256(url.trim().toLowerCase());
