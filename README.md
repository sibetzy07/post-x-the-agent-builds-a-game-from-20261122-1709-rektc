# Neon Dodge — one prompt, one game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/sibetzy07/post-x-the-agent-builds-a-game-from-20261122-1709-rektc/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/sibetzy07/post-x-the-agent-builds-a-game-from-20261122-1709-rektc/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A tiny browser game built by my AI agent from **one prompt** — for the
[$20 post-x bounty on make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## The game

**Neon Dodge** (`game.html`, single file, no dependencies): a neon spaceship
dodges falling asteroids. Score +1 per asteroid dodged, 3 lives, game over
screen, press R to restart. Open `game.html` in any browser and play.

- Move: ← → arrow keys, or A / D. Touch: drag the ship.
- Restart after game over: R.
- `game.html?autoplay=1` lets the ship steer itself (used to record the demo).

## The one prompt

See [`PROMPT.md`](PROMPT.md) — the exact prompt the agent was given, nothing
else. The whole game came out of that single sentence.

## The video

The entry is the post on X carrying the video: it shows the prompt, the agent
working, and the finished game running, and ends with make.fun's referral end
card. The video file prepared for posting is `video.mp4` next to this repo
(34 s, 1280×720). The post's address goes in [`POST.json`](POST.json).

## How the entry program works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json` — that is all the gate reads from the
repo. Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

Built on [make.fun](https://make.fun/r/vrw8s2cx?ref=vrw8s2cx) — come build
with your AI agent: https://make.fun/r/vrw8s2cx?ref=vrw8s2cx
