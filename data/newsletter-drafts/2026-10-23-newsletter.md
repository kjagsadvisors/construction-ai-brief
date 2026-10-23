---
date: "2026-10-23"
subject: "PHP2Shell: check your websites today | Claude Duet | OpenAI on Google Cloud | Cloudflare's Clairic | DHS bans DeepSeek"
title: "Two critical PHP flaws are being exploited, and most contractors cannot say which of their sites run PHP"
preview: "PHP flaws hit websites worldwide, plus Claude Duet, OpenAI on Google Cloud, a cheap extraction model, and DHS's DeepSeek order."
---

Five items this week. The first is urgent and takes one email to act on: two critical flaws in PHP, the software behind much of the small-business web, are being exploited now. The other four are decisions that sit a little further out: an always-on agent for your inbox, a change in where AI models are sold, a cheap model for pulling fields off paperwork, and a federal order that may reach your software vendors. Each ends with something you can do.

---

**1. Two critical PHP flaws are being exploited. Ask whoever hosts your website for a written patch status today.**

The flaws, nicknamed PHP2Shell, were disclosed October 21 as CVE-2026-109618 and CVE-2026-109619. Both are rated 9.2 on the CVSS v4.0 scale and can allow remote code execution without a login, and working exploits are circulating. OpenAI says its technology helped find the bugs. Governments and companies took sites offline as a precaution. Contractors tend to have more PHP than anyone has counted: the company website (often WordPress), bid-invitation and prequalification forms, vendor-hosted customer or warranty portals, and old project microsites. The fixed releases are PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35, and Bitsight's scans found only about a third of identifiable PHP installs run a branch that gets this update. Plenty of managed hosts patch automatically, and you will not know whether yours does until you ask. List every site and form, send each host or vendor the question "has PHP been updated for these two CVEs, and when?", and take down anything nobody uses. A bid form that stores sub pricing on the web server is the one to move first.

Source: [Wiz — PHP2Shell](https://www.wiz.io/blog/php2shell-php-rce), [Recorded Future — PHP2Shell exploitation](https://www.recordedfuture.com/blog/php2shell-vulnerability-exploitation) and [Bitsight — CVE-2026-109618 and CVE-2026-109619](https://www.bitsight.com/blog/critical-vulnerability-alert-cve-2026-109618-and-cve-2026-109619-php2shell). Our take: [what to put on your patch list](https://constructionaibrief.com/posts/2026-10-23-php2shell-ai-found-php-flaws-construction-contractor-websites-bid-portals-patch-list).

---

**2. Anthropic opened a research preview of Claude Duet, an always-on agent that texts you only when something needs you.**

Duet launched October 21 for US Pro and Max subscribers by waitlist. It runs on Claude Opus 5.5, sends a morning brief on the most important items across connected apps, checks in every few hours, and asks permission before it sends a message, pays, signs a document or deletes anything. Anthropic says it can misjudge what is urgent. Nobody has tested it on construction email. The fit is for noticing, not deciding: an architect's RFI response with a changed detail, a submittal returned "revise and resubmit," a change-order request with a notice deadline. If you try it, connect one low-stakes project mailbox, keep every outbound action on approval, and for two weeks count what it missed against what you caught yourself. A missed notice deadline costs more than a noisy inbox.

Source: [Unite.AI — Anthropic opens Claude Duet research preview](https://www.unite.ai/anthropic-opens-claude-duet-research-preview-to-us-pro-and-max-users/) and [TestingCatalog — Claude Duet](https://testingcatalog.com/claude-duet). Our take: [approval rules a PM should set first](https://constructionaibrief.com/posts/2026-10-22-anthropic-claude-duet-proactive-agent-construction-pm-morning-brief-approval-rules).

---

**3. OpenAI's models are coming to Google Cloud. Add "which model, which cloud, which data terms" to your software renewal checklist.**

On October 21, OpenAI and Google Cloud said GPT-6 Astra, GPT-6.1 Sol, GPT-6 Luna and Codex are in private preview in Google's Model Garden, with general availability planned in the coming weeks. No pricing has been disclosed. Google says prompts and outputs stay inside the customer's data perimeter and are not used to train models, which is a vendor claim until it is in your contract. You will not open Model Garden yourself. The effect shows up in your estimating, document-control and field-reporting tools, whose vendors can now swap the model underneath with less friction. That can change how your spec review or takeoff feature behaves without much notice. At the next renewal, ask which model powers each AI feature and on which cloud, whether your drawings and bid files are retained or logged, and whether the vendor will notify you before changing models.

Source: [The Next Web — OpenAI brings GPT-6 Astra and Codex to Google Cloud](https://thenextweb.com/news/openai-models-codex-google-cloud) and [PYMNTS — OpenAI brings its frontier models to Google Cloud](https://www.pymnts.com/news/artificial-intelligence/2026/openai-brings-its-frontier-ai-models-to-google-cloud/). Our take: [what to ask when you sign an AI contract](https://constructionaibrief.com/posts/2026-10-22-openai-gpt-6-codex-google-cloud-construction-ai-vendor-contracts-data-perimeter).

---

**4. Cloudflare's Clairic pulls named fields from documents for $0.10 per million input tokens. Test it on your ugliest invoices.**

Cloudflare put Clairic in preview on October 19. You list the fields you want, and it returns each one with a confidence score, leaving a field empty when it cannot find a value instead of guessing. In Cloudflare's own three-step claims pipeline it cost 49% less and ran about 3.2 times faster than the same pipeline on a large language model. That is a vendor test on a non-construction workload, and coverage notes there is no general accuracy benchmark. Most contractors will meet it inside a vendor's product. The task it fits is familiar: invoice number, amount and retainage off pay apps, signer and through-date off lien waivers, policy dates off certificates of insurance. Scanned, rotated, stamped or handwritten pages are where extraction tools usually fail, and that describes most real sub paperwork. Pull 50 real documents, define five fields you key in by hand, record accuracy per field, and check whether the low-confidence flags line up with the errors. Anything touching money or insurance still gets checked against the source.

Source: [Unite.AI — Cloudflare releases Clairic](https://www.unite.ai/cloudflare-releases-clairic-its-first-system-one-extraction-model/) and [PPC Land — Clairic cuts AI pipeline cost 49% in its own test](https://ppc.land/cloudflares-clairic-model-cuts-ai-pipeline-cost-49-in-its-own-test/). Our take: [the submittal and invoice test](https://constructionaibrief.com/posts/2026-10-22-cloudflare-clairic-extraction-model-construction-submittal-invoice-field-capture-test).

---

**5. DHS ordered DeepSeek out of civilian federal systems, including products built on its models. On federal work, ask your software vendors what runs behind their AI features.**

The order, issued under the Federal Acquisition Supply Chain Security Act and published in the Federal Register on October 20, covers DeepSeek and affiliates plus third-party products built on DeepSeek models. Agencies must stop buying and remove covered products, or request an exception within 60 days. It does not cover private use, reporting does not yet explain how it flows down to subcontracts, and outlets disagree on when it was first signed. Contractors rarely buy "a DeepSeek product." They buy estimating, takeoff and document software whose vendors pick the cheapest model, and open models like DeepSeek's are cheap. If you work for civilian agencies (GSA, VA, courthouses, labs), send each vendor one written question: which models power each AI feature, and are any of them DeepSeek or derived from it. Get a yes or no, not a link to a security page.

Source: [CyberScoop — DHS bans DeepSeek](https://www.cyberscoop.com/dhs-bans-deepseek-federal-agencies/) and [BleepingComputer — DHS bans DeepSeek products across federal civilian agencies](https://bleepingcomputer.com/news/security/dhs-bans-deepseek-products-across-us-federal-civilian-agencies). Our take: [the vendor questions to send](https://constructionaibrief.com/posts/2026-10-21-dhs-deepseek-federal-ban-construction-federal-work-vendor-ai-audit).

---

That's the issue. Three of the five come down to one habit: know what your software and websites run on, and ask in writing. And forward this to whoever manages your website or your software contracts.
