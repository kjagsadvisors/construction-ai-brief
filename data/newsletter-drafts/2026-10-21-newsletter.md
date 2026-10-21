---
date: "2026-10-21"
subject: "BRG: 68% spent $250K+ on AI | Anthropic's junior hiring drop | Nvidia's 24GB local model | GPT-6 Pro parallel agents"
title: "68% of construction executives have spent $250K or more on AI, and most cannot measure the return"
preview: "BRG finds heavy AI spending with no yardstick, Anthropic's junior hiring drop, a local model for bid files, and a parallel-agents test."
---

Four items this week. One is a survey of construction executives who are spending on AI without a way to measure it. One is a hiring study with a warning for your assistant estimators and APMs. Two are tools you can test on your own documents: a model small enough to run privately on one workstation, and ChatGPT's new parallel agents. Each ends with something you can check or try.

---

**1. A BRG survey says 68% of construction executives have spent $250,000 or more on AI. Only 15% say it is fully integrated.**

BRG's report, "AI in Construction: Measurable Results, Unclear Benchmarks," surveyed construction and development executives across North America, Europe and Asia-Pacific. 37% have spent $1 million or more. On measurement, 37% rely mainly on financial metrics, 29% on operational ones, and 6% do not evaluate return at all. Headcount is not shrinking: 18% added staff and 11% cut. It is a survey, and the sample is executives, not project teams. The takeaway is cheap to act on. Before the next pilot starts, write down the current hours per submittal package or per takeoff, then compare after 30 days. Without that baseline you will be one of the firms that cannot say whether the money worked.

Source: [BRG — Construction firms are investing millions in AI, but ROI remains unclear](https://www.thinkbrg.com/news/construction-firms-are-investing-millions-in-ai-but-new-brg-research-shows-it-is-not-reducing-headcount-and-roi-remains-unclear/). Our take: [the scorecard to build first](https://constructionaibrief.com/posts/2026-10-19-brg-construction-ai-survey-68-percent-250k-roi-unclear-measure-pilot-first).

---

**2. Anthropic's junior share of technical hires fell from 27% to 9%. Plan for the same squeeze on entry-level estimating and project roles.**

Anthropic published "How Employment is Changing at Anthropic" on October 16. Per coverage of the study, junior staff fell from 27% to 9% of technical hires, and agents now work many more hours than the people directing them. Two cautions: it is one company studying its own workforce, and the company also roughly tripled in size over the period, so it shows what happened inside one firm and does not prove a labor-market trend. There is no construction data behind it. But the tasks AI absorbs first, like first-pass quantity checks and log cleanup, are the ones that used to teach assistant estimators and APMs the trade. If you use AI for those tasks, decide now who reviews the output and how a junior still learns to do the work by hand.

Source: [Open Magazine — Junior tech hires' share at Anthropic falls from 27% to 9%](https://openthemagazine.com/business/junior-tech-hires-share-at-anthropic-falls-from-27-to-9-as-ai-reshapes-work) and [AI Weekly — Anthropic: junior technical hire share fell from 27% to 9%](https://aiweekly.co/alerts/anthropic-junior-technical-hire-share-fell-from-27-to-9). Our take: [what this means for assistant estimators and APMs](https://constructionaibrief.com/posts/2026-10-19-anthropic-junior-hiring-study-construction-assistant-estimators-pm-training-review-bottleneck).

---

**3. Nvidia's Nemotron 3.5 Bolt fits in 24GB of memory. That is workstation territory for contractors who will not upload bid files.**

Nvidia released the open model on October 15. It has 74 billion parameters, activates 9 billion at a time, and uses 2-bit quantization to fit in 24GB. It is on Hugging Face and runs in LM Studio and Ollama. Nvidia's own tests are favorable, but the independent Artificial Analysis Intelligence Index gives Bolt 21.4 and the larger Super VL document-and-chart model 26.5. Those are modest scores, and coverage advises testing on your own workloads. Compare that with last issue's Meta model needing roughly 700GB. If a client contract bars cloud AI tools, ask your IT contractor to price a 24GB-GPU machine, then run it on three closed-job spec sections to see whether the answers are usable.

Source: [HPCwire — Nvidia expands Nemotron family with Super VL and Bolt models](https://www.hpcwire.com/aiwire/2026/10/15/nvidia-expands-nemotron-family-with-highest-efficiency-super-vl-and-bolt-models/) and [Techzine — Nvidia launches Nemotron 3.5 Super VL and Bolt](https://www.techzine.eu/news/analytics/145037/nvidia-launches-nemotron-3-5-super-vl-and-bolt-for-ai-agents/). Our take: [a local model for estimator workstations](https://constructionaibrief.com/posts/2026-10-19-nvidia-nemotron-bolt-24gb-local-agents-construction-estimator-workstation-bid-files).

---

**4. ChatGPT's GPT-6 Pro can split one job across parallel agents. Test it on a bid package.**

OpenAI added parallel agents to GPT-6 Pro in ChatGPT on October 16, per secondary coverage, rolling out gradually to Pro, Business and Enterprise plans. You can follow each agent's progress and open each finished task. OpenAI has not published a cap on agents, accuracy results, or how multi-agent work counts against usage, and the way tasks are divided and merged is not described. For an estimator the question is practical: take a closed bid package, split it by trade or division, and see whether the parallel result catches the scope gaps that one long pass misses. Time it, and check every flagged gap against the documents. A human still owns the leveling.

Source: [Pasquale Pillitteri — Parallel agents arrive in GPT-6 Pro](https://pasqualepillitteri.it/en/news/24850/parallel-agents-arrive-gpt-6-pro-chatgpt) and [Cellcog — GPT-6 Pro parallel agents](https://cellcog.ai/blog/chatgpt-gpt-6-pro-parallel-agents/). Our take: [how to test it on a bid package](https://constructionaibrief.com/posts/2026-10-20-gpt-6-pro-parallel-agents-construction-bid-package-split-review-checklist).

---

That's the issue. If you run one of these tests, reply and tell us what held up and what did not. And forward this to the estimator or PM who would actually run it.
