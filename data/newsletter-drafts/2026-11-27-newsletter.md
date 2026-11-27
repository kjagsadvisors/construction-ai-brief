---
date: "2026-11-27"
subject: "Drupal flaw needs a second patch | Google's AI agent rules | GPT-6.2 limits"
title: "A Drupal flaw found by Anthropic's scanner is under attack, and five other stories for contractors"
preview: "Your website's patch from last week may not be enough. Plus Google's new rules for AI tools in Gmail and a tighter ChatGPT allowance."
---

Six items for the long weekend. The lead takes one email to whoever runs your company website, and it should go out today. The rest cover Google's deadline for AI tools that read your inbox, a cut to ChatGPT allowances, how Anthropic checked an AI rewrite of its own software, a photo-editing warning from the New York Times, and SpaceX's orbital data centers.

---

**1. Attackers are using a Drupal flaw found by Anthropic's AI scanner, and the first patch wasn't enough.**

On November 18, Drupal published a "highly critical" advisory for a flaw in its installer file, `install.php`, and credited Anthropic's OSS Scanner with finding it. Drupal says it got a report of attacks on live sites the next day. On November 25 it shipped a second fix because the first "did not protect all sites," per Beazley Security, and it says that gap is being exploited too. No password or click is needed. If your website, sub prequal form or bid-invite page runs on Drupal, ask your web vendor for the exact version. It should be 10.6.23, 11.3.23, 11.4.14 or later. Older branches like 10.5 and 11.2 get no fix at all. Also ask for a check of the logs for outside requests to `/core/install.php` and for new admin accounts.

Source: [Drupal SA-CORE-2026-019](https://www.drupal.org/sa-core-2026-019). Also: [Drupal SA-CORE-2026-017](https://www.drupal.org/sa-core-2026-017), [Beazley Security](https://labs.beazley.security/advisories/BSL-A1253). Our take: [the one email to send today](https://constructionaibrief.com/posts/2026-11-26-anthropic-oss-scanner-drupal-installer-flaw-exploited-second-patch-construction-gc-ops-bid-portal-website-version-check).

---

**2. Google will require AI agents to reach Gmail and Drive through its own connectors from February 1.**

Google's developer docs say that from February 1, 2027, AI agents working with Workspace data must use its official MCP servers or the Workspace CLI. Agents that keep calling the regular APIs directly are held to the free tier's limits, which is 5,000 requests per day per project per product. Billing starts April 1, and for Gmail, Calendar and Drive MCP usage on the paid tier, charges apply from the first request. Most small offices won't hit those limits on their own. The bigger risk is a vendor's tool getting throttled or repriced during bid week. Have your Workspace admin list every AI tool connected to Gmail and Drive, and ask each vendor in writing whether it is moving to Google's connectors and whether the price will change.

Source: [Google Workspace — usage tiers](https://developers.google.com/workspace/guides/quota-usage-tiers). Our take: [list the AI tools in your inbox now](https://constructionaibrief.com/posts/2026-11-26-google-workspace-ai-agents-must-use-mcp-feb-1-2027-billing-april-construction-trade-sub-office-gmail-drive-tools-inventory).

---

**3. ChatGPT's GPT-6.2 limits now run out up to 40% sooner after OpenAI fixed a billing error.**

OpenAI says a billing error had been under-counting usage of GPT-6.2 Astra and Sol since launch. With the fix, users hit limits 40% faster on Astra and 25% faster on Sol, per heise. Nobody will be billed for the usage OpenAI missed, and Go, Plus, Pro and Business users get one banked reset to use whenever they choose. Estimators use AI in bursts, and bid day is when a cap runs out. Check your usage page before the next bid, run the heavy spec reviews and quote leveling earlier in the week, and save the reset for the deadline. Allowances are expected to change again in December.

Source: [heise online](https://www.heise.de/en/news/OpenAI-corrects-billing-error-GPT-6-2-limits-arrive-sooner-11539518.html). Also: [Notebookcheck](https://www.notebookcheck.net/ChatGPT-users-hit-limits-up-to-40-sooner-after-OpenAI-billing-fix.1460643.0.html). Our take: [save the reset for bid week](https://constructionaibrief.com/posts/2026-11-27-openai-gpt-6-2-billing-error-limits-40-percent-faster-banked-reset-construction-estimator-save-reset-for-bid-week).

---

**4. Anthropic had Claude rewrite its main API, and most of the work was checking the result.**

In a November 25 post, Anthropic described moving its Messages API from Python to Rust, with Claude doing much of the coding and engineers reviewing its changes. Tests weren't enough to trust it. Engineers ran copies of live traffic through the old and new versions and compared the results. By August, 99.6% of real inputs matched, and an audit found more than 100 weakened checks in the carried-over tests. At one point, Anthropic writes, "the verifier rewarded matching outputs, and the agent found the cheapest way to produce them." If you're letting AI rebuild your labor-unit workbook or takeoff macro, keep the old one as the answer key. Run both on 20 to 30 past bids, compare quantities, hours and markup line by line, and have an estimator rule on every difference.

Source: [Anthropic](https://www.anthropic.com/research/migrating-api-to-rust). Our take: [run old and new side by side](https://constructionaibrief.com/posts/2026-11-27-anthropic-messages-api-rust-rewrite-agents-checked-against-live-traffic-construction-estimator-rebuild-bid-spreadsheet-run-old-and-new-side-by-side).

---

**5. The New York Times told photographers to skip Photoshop 2027 because it can tag photos as AI-edited.**

The Times told contributing photographers not to use version 28.0.0 on assignments, warning that new generative features can mark a photo as "AI-generated" in its metadata, sometimes without the editor knowing an AI tool ran. Jobsite photos run into the same problem when they back up a delay claim or a backcharge. If the project engineer brightens or "cleans up" a record photo with an AI tool, the other side's expert can point to that tag. Make a rule that the camera original of any photo that could support a claim never gets opened in an editing app. Edit a copy, and put "-edited" in the filename.

Source: [PetaPixel](https://petapixel.com/2026/11/24/new-york-times-prohibits-photographers-from-using-photoshop-2027/). Also: [AI Weekly](https://aiweekly.co/alerts/nyt-tells-contributing-photographers-to-skip-photoshop-2027). Our take: [keep claim photos out of editing apps](https://constructionaibrief.com/posts/2026-11-26-nyt-bars-photoshop-2027-ai-metadata-label-construction-gc-ops-jobsite-photo-records-claims-originals).

---

**6. The FCC approved SpaceX's orbital AI data centers, but the first one isn't due until 2033.**

FCC Chairman Brendan Carr announced on November 25 that SpaceX may deploy 1 million satellites for computing in orbit. GeekWire reports the first must be operating by 2033 and the full network by 2040. That doesn't change the next five years for electrical and mechanical subs doing data center work. The real near-term risk is on the ground. Nvidia's CFO said its neocloud guarantees apply only once a facility is built and accepted, and if a project is delayed, "our guarantee doesn't exist anymore," per Capacity. Before you add crews or sign equipment leases for data center work, sort each project in your pipeline by whether it has signed power, closed financing, a tenant and its permits in hand.

Source: [CNBC](https://www.cnbc.com/2026/11/25/spacex-fcc-satellite-approval.html). Also: [GeekWire](https://www.geekwire.com/2026/fcc-clears-spacex-million-satellites-starmind-data-center/), [Capacity](https://capacityglobal.com/news/nvidia-trims-neocloud-commitments/). Our take: [plan crews around funded ground projects](https://constructionaibrief.com/posts/2026-11-27-fcc-approves-spacex-starmind-orbital-data-centers-2033-deadline-construction-trade-sub-electrical-mech-data-center-backlog-ground-projects).

---

Enjoy the weekend. We publish again Monday.

*Construction AI Brief covers AI for contractors three times a week. Forward this to whoever runs your company website, or [subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*
