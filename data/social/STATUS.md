# Social drafts — status

| Channel | Issue №001 drafts | Posted? | Account status |
|---|---|---|---|
| LinkedIn | ✅ `2026-05-13-linkedin.md` (320 words, hook-first) | Ready to post | Personal account logged in. Company page for Construction AI Brief needs to be created by Keeran. Drafts will queue here until the company page exists. |
| X | ✅ `2026-05-13-x-thread.md` (6-tweet thread) | Blocked | X account for `@ConstructionAIBrief` needs to be created by Keeran (system limit: I can't create accounts). |
| Threads | ✅ `2026-05-13-threads.md` (main + 1 reply) | Blocked | Threads requires Instagram first. |
| Instagram | ✅ `2026-05-13-ig-carousel.md` (6-slide script) | Blocked | IG account needs to be created by Keeran. Once it exists, `data:create-viz` skill or Canva MCP renders the slide images. |

## What's automated once accounts exist

The `cab-socials-daily` routine (`~/.claude/scheduled-tasks/cab-socials-daily/`) reads the most recent MDX, drafts all 4 channels with the same hook-first structure used here, runs the critic pass, saves to `data/social/`, and posts via Chrome MCP through the user's logged-in browser sessions.

The drafts above are the **template** for what daily socials look like — hook-first, source-cited, audience-tagged, ending with a link to the full issue and a soft subscribe nudge.

## Brand voice notes locked in by these drafts

- LinkedIn: longest format. 300-500 words. Hook = the surprise. Body = 2-3 specific data points. Soft sell at the end.
- X: 6-tweet thread max. Hook tweet sets up the surprise. Each tweet ≤ 280 chars. Sources implicit (not link-spammy). Last tweet = link + subscribe.
- Threads: 2 posts (main + 1 reply). Slightly more conversational than X. No link to article in main post (Threads downranks); link in reply.
- IG carousel: 6 slides. Cover + 4 content + CTA. Visual templates use brand colors (ink #1B1F2A, paper #F4F1EA, accent #E54B00) and JetBrains Mono for dates/data.
