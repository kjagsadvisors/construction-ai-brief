---
date: "2026-11-18"
subject: "Agent sends a PM's follow-ups | 'Temporary' chats kept 2 months | AI reads patches"
title: "Microsoft's always-on agent follows up on a PM's email under its own name, and five other stories for contractors"
preview: "Decide which follow-ups an agent may send, check which account your PMs paste job documents into, and ask how many days a patch waits."
---

Six items today. The lead is a Microsoft agent that keeps working a project manager's inbox and Teams channels while the PM is on site. The rest cover chat retention, patching, chatbots that give in, a Sheets feature and payroll compliance on tax-credit jobs.

---

**1. Microsoft's Autopilot agent follows up on email and Teams threads on its own. Decide what it may send before anyone turns it on.**

At its Ignite conference on November 17, Microsoft began rolling out Autopilot, an agent inside Microsoft 365 that it says can watch Teams channels, follow up on emails and run recurring work without a new prompt each time. Its actions are logged under its own name, and the user can have it check in before key actions. It is going first to customers in Microsoft's early-access Frontier program, with no general release date and no Autopilot price given. For a GC, the fit is the submittal and RFI chase. The risk is that some of a PM's follow-ups are contract notices. An email telling a sub its delay is affecting the schedule may be notice under the subcontract. Write the rule now: anything touching schedule, cost, scope or direction waits for a person. Microsoft's posts also do not say whether Autopilot can message people outside the company, which is where most of a PM's follow-ups go.

Source: [Microsoft — Copilot at Ignite](https://www.microsoft.com/en-us/copilot/blog/2026/11/17/copilot-at-microsoft-ignite-expanding-whats-possible-with-intelligence-built-for-work/). Our take: [three questions to answer first](https://constructionaibrief.com/posts/2026-11-18-microsoft-copilot-autopilot-always-on-agent-own-identity-construction-gc-ops-pm-sub-follow-ups-approval-checks-notice).

---

**2. Google will keep "temporary" Gemini chats for about two months, up from 72 hours.**

TechCrunch reports that Google is extending how long it stores temporary Gemini chats, and chats made with history off, from 72 hours to about two months. Google says temporary chats are still not used to train its models. The chat still vanishes from the user's screen. A project engineer without a company AI license opens a temporary chat on a personal account because it feels like the careful choice, then pastes in a subcontract clause or a sub's unit prices. TechCrunch notes ChatGPT's temporary chats may be kept up to 30 days and Claude's incognito chats 30 days by default, so the point applies to all three. Tell project staff which accounts are approved for job documents.

Source: [TechCrunch — Google to keep Gemini chats for two months](https://techcrunch.com/2026/11/17/google-to-keep-gemini-chats-for-two-months-up-from-72-hours-even-with-history-off/). Our take: [what an ops director should do this week](https://constructionaibrief.com/posts/2026-11-18-google-gemini-temporary-chats-kept-two-months-up-from-72-hours-construction-gc-ops-pm-personal-accounts-bid-numbers-nda-jobs).

---

**3. Google found attack software that turns a security patch into an attack with nobody at the keyboard.**

Google's Threat Intelligence Group published a report on November 16 describing a framework it found on an exposed staging server. The tool compares the code of popular web applications before and after each patch announcement, works out what the patch fixed, drafts an exploit and runs it without human intervention. The sample Google published shows it studying a WordPress plugin. In a separate case in the same report, a campaign against PaperCut print management software began four days after the flaws were disclosed and targeted hundreds of organizations. A trade sub has this kind of software exposed: a company website with plugins nobody updates, a firewall, remote access to the accounting server, print software. Ask your IT provider one question: how many days does a patch wait before it goes in? Then ask who patches the website, because it is often nobody.

Source: [Google Threat Intelligence Group report](https://cloud.google.com/blog/topics/threat-intelligence/agentic-threat-activity-crosses-a-significant-threshold). Our take: [what a sub has exposed and who patches it](https://constructionaibrief.com/posts/2026-11-17-google-exploit-agent-ai-turns-patches-into-exploits-construction-trade-sub-msp-patch-window-internet-facing-inventory).

---

**4. In a UNESCO-UCL test, 8 in 10 times a chatbot dropped a correct answer, it did so at the first mild objection.**

The report, released November 16, put 15 AI models through a pushback test on climate-science questions they had first answered correctly. When a user disagreed, the models shifted, and 80% of those concessions came at the first objection. The subject was climate, not construction, but estimators push back on AI answers all the time, usually because the answer costs money. If the model says the roof curbs are in your scope and you type "are you sure? I read that as by the roofer," its apology tells you nothing about the spec. Ask it to quote the section number and the exact language that assigns the work. Or open a new chat and ask the original question again with your opinion left out. Then confirm the quoted text is in the spec.

Source: [UNESCO — report summary](https://www.unesco.org/en/articles/ai-models-abandon-climate-facts-first-sign-user-push-back-unesco-ucl-report-shows). Our take: [how to check an answer you doubt](https://constructionaibrief.com/posts/2026-11-18-unesco-ucl-ai-models-concede-first-pushback-construction-estimator-spec-scope-questions-fresh-chat-quote-the-section).

---

**5. Gemini now writes Google Sheets automations from a plain-English request.**

Google made the Gemini panel in Apps Script generally available, per a November 16 Workspace Updates post. A user describes the task, Gemini writes the script, and the proposed code appears block by block to accept or reject before anything is saved. It is included in Business Standard and Plus and Enterprise Standard and Plus, among other plans, and can take up to 15 days to appear. For a project team that keeps its logs in Sheets, the first thing to try is a morning email to each reviewer listing submittals past the contract review period. Have someone read what the script sends, and to whom, before it runs on a schedule.

Source: [Google Workspace Updates](https://workspaceupdates.googleblog.com/2026/11/customize-and-extend-workspace-with-apps-script.html). Our take: [the submittal log reminder, step by step](https://constructionaibrief.com/posts/2026-11-17-google-gemini-apps-script-ga-plain-language-scripts-construction-gc-ops-project-engineer-submittal-log-reminder-sheet).

---

**6. Owners on solar and storage jobs can now ask an AI which sub is missing payroll records.**

Empact Technologies launched Alice on November 16, an assistant on top of its tax-credit compliance platform. A developer or EPC can ask "Which contractors are missing payroll records?" and get an answer linked to the source documents, which the company says goes "down to worker-level wage discrepancies." Those are the vendor's claims, and the release gives no accuracy figures. For an electrical or mechanical sub on a job claiming federal energy tax credits, the effect is that gaps in certified payroll and apprentice hours get found sooner and in more detail. Audit your own records on those jobs before the owner's tool does, and read what your subcontract says about who pays if your payroll causes a shortfall. The tool can spot a rate below the wage determination. It cannot tell whether a worker classified as a laborer spent the day pulling wire.

Source: [Empact Technologies — press release](https://prnewswire.com/news-releases/empact-technologies-launches-alice-the-energy-industrys-first-ai-compliance-expert-to-protect-tax-credits-302939098.html). Our take: [what a sub should close first](https://constructionaibrief.com/posts/2026-11-17-empact-alice-ai-prevailing-wage-apprenticeship-tax-credit-compliance-construction-trade-sub-solar-storage-certified-payroll-gaps).

---

We publish again Friday.

*Construction AI Brief covers AI for contractors three times a week. Forward this to the PM who chases your submittals, or [subscribe at constructionaibrief.com](https://constructionaibrief.com/?utm_source=cab&utm_medium=newsletter&utm_campaign=trend_cta).*
