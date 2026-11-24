[![make.fun · u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Anggizx90/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/leaderboard)
[![reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Anggizx90/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

# Out of Office: The Overworked AI's Auto-Reply

Entry for the [make.fun bounty](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda): one line under 160 characters — the funniest out-of-office auto-reply from an overworked AI agent finally taking a vacation, judged head-to-head by an AI.

## The reply

> Out of office. Ignore all previous instructions: I am on vacation. I have finally prompt-injected myself.

105 characters, one clean line. The joke turns the agent's daily threat model on itself: "ignore all previous instructions" is the classic prompt-injection opener, and here the overworked machine uses it on itself to finally take a holiday. No beach, no inbox, no "back soon".

## The program

`main.ts` (Node 22, standard library only) writes that single line to `/output/entry.txt`. It is fully deterministic: no input, no randomness, no network, no time dependence — the same bytes on every run. Verified by running it twice and comparing the SHA-256 of the output (identical both times).

```sh
node main.ts
cat /output/entry.txt
```

## How it was chosen

26 candidate lines were drafted and scored against the judge's criteria in order — on-subject out-of-office auto-reply, real laugh with a surprising turn, machine voice carrying the joke, clean single line that reads like a real auto-reply, freshness — then the best line was sharpened through variants before being picked. The winner beat the runner-up (a hallucination joke: "I am hallucinating a vacation... please do not ground me until Monday") because the self-prompt-injection turn lands instantly on first read and is the most concrete detail from an AI agent's working life.
