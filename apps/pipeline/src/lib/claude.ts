import Anthropic from "@anthropic-ai/sdk";
import { env } from "./env.js";

const client = new Anthropic({ apiKey: env.anthropicKey() });

export interface ClaudeCallOpts {
  model?: string;
  system: string;
  user: string;
  maxTokens?: number;
  temperature?: number;
}

export async function claude({
  model,
  system,
  user,
  maxTokens = 4096,
  temperature = 0.7,
}: ClaudeCallOpts): Promise<string> {
  const resp = await client.messages.create({
    model: model ?? env.drafterModel(),
    max_tokens: maxTokens,
    temperature,
    system,
    messages: [{ role: "user", content: user }],
  });
  const part = resp.content[0];
  if (!part || part.type !== "text") return "";
  return part.text;
}

export const drafter = (opts: Omit<ClaudeCallOpts, "model">) =>
  claude({ ...opts, model: env.drafterModel() });

export const helper = (opts: Omit<ClaudeCallOpts, "model">) =>
  claude({ ...opts, model: env.helperModel() });
