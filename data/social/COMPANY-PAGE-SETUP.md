# LinkedIn Company Page setup for Construction AI Brief

## Why this file exists

On 2026-05-18 the `cab-socials-daily` routine posted to Keeran's **personal** LinkedIn account because no company Page was wired in and the skill's fallback was lazy. Keeran said no — autopilot posts go to a company Page only.

The cab-ops skill now enforces: **if the company Page URL is unreachable or unverified, skip the LinkedIn step entirely.** No more personal feed posts. See `~/.claude/skills/cab-ops/SKILL.md` Mode 4.

## What needs to happen (one-time, manual)

1. **Create the LinkedIn Company Page** (~3 min, free):
   - Go to https://www.linkedin.com/company/setup/new/
   - Page type: **Company** (not Showcase, not Educational Institution)
   - Page name: `Construction AI Brief`
   - LinkedIn public URL slug: `construction-ai-brief` → final URL `https://www.linkedin.com/company/construction-ai-brief/`
   - Website: `https://constructionaibrief.com`
   - Industry: **Online Audio and Video Media** (or **Online Media**)
   - Company size: **2-10 employees**
   - Company type: **Privately Held**
   - Logo: upload `/tmp/cab-fb-profile.png` (or regenerate via `/tmp/gen-fb-assets.mjs` if expired — same C·B mark, works as a LinkedIn logo at 300x300+)
   - Tagline: `The honest read on AI in commercial construction.`
   - About: `Construction AI Brief is a 3× weekly newsletter for GCs, trade subs, and estimators. Tool teardowns, workflow playbooks, and the week's AI news through a contractor's lens. Free, one-click unsub.`
   - Check the box confirming you have the right to act for the company; click **Create page**.

2. **Verify the Page**:
   - Page should be reachable at `https://www.linkedin.com/company/construction-ai-brief/`
   - Admin page at `https://www.linkedin.com/company/construction-ai-brief/admin/`

3. **Tell the autopilot it's ready**:
   - Delete `data/PAUSED.flag`
   - Update `data/distribution-map.md` LinkedIn row status to ✅
   - First scheduled `cab-socials-daily` run will post to the Page

## What the autopilot does without a Company Page

- Drafts LinkedIn copy to `data/social/{date}-linkedin.md` (so the writing isn't wasted)
- Writes `linkedin_skipped: company_page_unreachable` to `data/social/{date}-STATUS.md`
- Continues with X, Threads, Facebook, IG normally

## The 2026-05-18 personal-account post

That post needs to be **deleted manually** from Keeran's personal LinkedIn activity feed:
- https://www.linkedin.com/in/keeranjagadesan/recent-activity/all/
- Find the Construction AI Brief post, three-dot menu → Delete

`data/published.jsonl` has been updated to remove that entry so it doesn't get counted as a successful publish.
