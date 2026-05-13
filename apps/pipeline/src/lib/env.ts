function req(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`missing env: ${name}`);
  return v;
}

function opt(name: string): string | undefined {
  return process.env[name] || undefined;
}

export const env = {
  supabaseUrl: () => req("SUPABASE_URL"),
  supabaseServiceKey: () => req("SUPABASE_SERVICE_ROLE_KEY"),
  anthropicKey: () => req("ANTHROPIC_API_KEY"),
  drafterModel: () => process.env.CLAUDE_DRAFTER_MODEL ?? "claude-opus-4-7",
  helperModel: () => process.env.CLAUDE_HELPER_MODEL ?? "claude-sonnet-4-6",
  exaKey: () => req("EXA_API_KEY"),
  beehiivKey: () => req("BEEHIIV_API_KEY"),
  beehiivPubId: () => req("BEEHIIV_PUBLICATION_ID"),
  linkedinToken: () => opt("LINKEDIN_ACCESS_TOKEN"),
  linkedinOrg: () => opt("LINKEDIN_ORGANIZATION_URN"),
  typefullyKey: () => opt("TYPEFULLY_API_KEY"),
  metaToken: () => opt("META_ACCESS_TOKEN"),
  metaThreadsUserId: () => opt("META_THREADS_USER_ID"),
  metaIgUserId: () => opt("META_INSTAGRAM_USER_ID"),
};
