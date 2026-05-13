import { createClient } from "@supabase/supabase-js";
import { env } from "./env.js";

export const db = createClient(env.supabaseUrl(), env.supabaseServiceKey(), {
  auth: { persistSession: false, autoRefreshToken: false },
});

export async function isPaused(): Promise<boolean> {
  const { data, error } = await db
    .from("kill_switch")
    .select("paused")
    .eq("id", 1)
    .single();
  if (error) {
    console.warn("[kill_switch] read failed; treating as paused", error);
    return true;
  }
  return Boolean(data?.paused);
}
