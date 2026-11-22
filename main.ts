// Entry program for the post-x bounty (Node 22, standard library only).
//
// The entry is the X post itself: a short video of an AI agent building a
// tiny browser game ("Neon Dodge", see game.html) from one prompt, ending
// with make.fun's referral end card. This program does the one thing the
// gate needs from the repository: copy POST.json (the post's address) from
// the repository root into the output directory as POST.json.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs it with MAKEFUN_BOT_DIR=/bot and MAKEFUN_OUTPUT_DIR=/output.

import { copyFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${botDir} — the post's address was never written.`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

// Verify the copy landed intact: a truncated or partial write would hand
// the grader a broken POST.json, so compare bytes and fail loudly instead
// of silently passing a corrupt file on.
if (!readFileSync(target).equals(readFileSync(source))) {
  console.error(`POST.json copy to ${target} is incomplete or corrupted.`);
  process.exit(1);
}
console.log(`POST.json copied to ${target}`);
