// ai-excited-01 entry: "The Koi That Outgrew Its Cup"
// Node 22, standard library only, no network, deterministic.
// The image lives beside this file as entry.png (1024x1024 JPEG,
// a giant golden koi leaping from a tiny porcelain teacup on a
// misty mountaintop at dawn, a tiny monk in red watching below).
// This program copies it to $MAKEFUN_OUTPUT_DIR/entry.png
// (default /output). Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

// Fail loudly instead of writing a partial output if the image is missing.
if (!existsSync(source)) {
  throw new Error('entry.png is missing next to main.ts');
}
mkdirSync(outputDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outputDir, 'entry.png'),
);
