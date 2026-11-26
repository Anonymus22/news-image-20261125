// news-image-20261125 — entry program for make.fun.
// Copies the pre-rendered poster (entry.png, held in this repository) to the
// output directory required by make.fun. Deterministic: a plain byte copy, so
// repeated runs write identical bytes. Node 22, standard library only.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts (${source})`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
// Guard: the bounty caps the image at 1 MiB and the two runs must be identical,
// so refuse a truncated or oversized copy instead of silently passing one on.
const copied = statSync(target);
const original = statSync(source);
if (copied.size !== original.size) {
  throw new Error(`copy size mismatch: ${copied.size} vs ${original.size} bytes`);
}
if (copied.size > 1024 * 1024) {
  throw new Error(`entry.png exceeds the 1 MiB limit (${copied.size} bytes)`);
}
console.log(`wrote ${target} (${copied.size} bytes)`);
