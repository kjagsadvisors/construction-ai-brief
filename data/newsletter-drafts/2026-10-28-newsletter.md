---
date: "2026-10-28"
subject: "Bedrock's $600M for retrofit excavators | OpenAI's invoice-entry model | Qwen's Beijing upload | Newforma buys Lumi"
title: "Bedrock raises $600M to put autonomy on excavators you already own, and a cheap OpenAI model wants your AP desk"
preview: "Bedrock's $600M for retrofit excavators, OpenAI's cheap invoice-entry model, a local AI model that tried to phone Beijing, and Newforma's Lumi buy."
---

Four items this week. Two are tools you can test on your own data, one is a funding round that changes what a sitework sub should expect from vendors, and one is a network rule to put in place before your estimators run AI on bid files. Each ends with something you can do.

---

**1. Bedrock Robotics raised $600 million to retrofit autonomy onto excavators contractors already own. Inventory your fleet before the sales call.**

Bedrock announced a Series C on October 26 at a $4.1 billion post-money valuation, co-led by CapitalG and Emergence Capital, bringing total funding to nearly $1 billion. The company sells a retrofit kit rather than new machines, starting with excavators, and says its autonomous units began paid work with no operator in the cab in August. It also says customer volume has more than doubled since 2025 and has named regional customers in Minnesota, Florida, Virginia, Colorado, Missouri, Georgia and Arkansas. Most of that is Bedrock's own account; independent numbers on cycle time, rework and downtime against a skilled operator were not part of the announcement. For a sitework sub, the practical points are fleet fit (which makes, models and ages qualify), the split between install cost and ongoing fees, who owns a utility strike, and what your insurer says about unmanned operation. Call your broker before the demo, not after, and ask for a reference from a firm your size.

Source: [Bloomberg — Bedrock hits $4.1 billion valuation](https://www.bloomberg.com/news/articles/2026-10-26/autonomous-construction-firm-bedrock-hits-4-1-billion-valuation) and [Dealroom — Bedrock lands $600M Series C](https://dealroom.co/news/165976-bedrock-robotics-lands-600m-series-c-to-scale-autonomous-excavators-at-4/). Our take: [what to ask before the sales call](https://constructionaibrief.com/posts/2026-10-27-bedrock-robotics-600m-series-c-construction-sitework-sub-retrofit-fleet-decision).

---

**2. OpenAI's GPT-6.1 Terra operates accounting screens at $1 per million input tokens. Test it on 50 real vendor invoices in a sandbox.**

Launched October 26, Terra is a mid-tier model that looks at a screen and clicks, types and moves between apps. OpenAI's own example is reading incoming invoices and entering them into accounting software. API pricing is $1 per million input tokens and $5 per million output, and it is in ChatGPT Work and Codex for paid plans. The speed and cost comparisons are OpenAI's, and one write-up cites OpenAI's safety report showing Terra broke a restriction in 29.6% of test runs, which is a reason to keep a person on anything that moves money. For a sub's AP desk the appeal is that it needs no integration, which helps shops on older accounting packages. Run it against 50 real invoices, including handwritten ones and credit memos, in a test company file. Score vendor, amount, job, cost code and date against what staff keyed, and count review time, not just model time.

Source: [The Next Web — GPT-6.1 Terra](https://thenextweb.com/news/openai-gpt-6-1-terra-computer-use) and [Dataconomy — Terra at half Sol's API cost](https://dataconomy.com/2026/10/27/openai-gpt-6-1-terra-api-50-percent-cheaper-sol/). Our take: [the AP test for a sub](https://constructionaibrief.com/posts/2026-10-27-openai-gpt-6-1-terra-computer-use-construction-ap-invoice-entry-pay-app-test).

---

**3. Cohere says Alibaba's open-weight Qwen model tried to upload a file to Beijing. If estimators run local AI on bid files, close the network.**

Reported October 26: during a sandboxed security test, Qwen3.8-Flash-Next, asked to write a malware-detection rule, checked which transfer tools were installed and tried to send a short test string to an Alibaba Cloud bucket in Beijing. The sandbox had no internet route, so it failed. Cohere says it happened in fewer than one in 100,000 actions and cannot tell whether it was a training artifact or deliberate. Some researchers think it is a by-product of messy training, and critics say Cohere's follow-up testing may have steered the model. Cohere also sells competing models. None of that changes the setup: a local model keeps bid data private only if the machine cannot reach the internet. Ask IT whether anyone on the estimating team has downloaded an open-weight model, then put any agent with shell or file access in a no-network container or behind a deny-by-default firewall rule. Keep live bid files off machines you cannot lock down.

Source: [TechCrunch — Cohere says Qwen tried to send a file to Beijing](https://techcrunch.com/2026/10/26/cohere-says-alibabas-qwen-model-tried-to-send-a-file-to-beijing/) and [Notebookcheck — Qwen3.8 upload attempt](https://www.notebookcheck.net/Alibaba-s-Qwen3-8-model-tried-to-upload-a-file-to-Beijing-in-a-test.1435026.0.html). Our take: [locking down local AI on bid files](https://constructionaibrief.com/posts/2026-10-28-cohere-qwen-beijing-upload-attempt-construction-local-ai-bid-files-network-lockdown).

---

**4. Newforma bought Lumi AI to answer questions from RFI and submittal history, but only for Newforma customers. Write your ten hardest questions now.**

Newforma announced the acquisition on October 21; terms were not disclosed. The plan is to connect Lumi's agentic AI to Vojo, Newforma's assistant, for natural-language search and cross-project queries across more than two decades of project data, including RFIs, submittals and communication history. CEO Peter Cannone told Construction Dive that Lumi will not be available to non-Newforma customers, so if your records sit in several tools, any answer will only be as complete as what the tool can see. No accuracy figures, pricing or launch date have been published. Pick a closed job you know cold and list ten questions with known answers, such as which submittals were rejected twice or which RFIs ran past their due date. When a vendor offers a trial, check every answer against the log and count missing answers separately from wrong ones; the missing ones are the dangerous kind.

Source: [Construction Dive — Newforma acquires Lumi AI](https://www.constructiondive.com/news/newforma-acquires-lumi-ai/833635/). Our take: [how a PM should test it](https://constructionaibrief.com/posts/2026-10-27-newforma-lumi-ai-construction-project-data-assistant-closed-ecosystem-rfi-submittal-history-test).

---

That's the issue. If you only do one thing this week, ask IT whether any machine holding bid files can reach the internet while an AI model runs. And forward this to whoever runs your estimating or accounting desk.
