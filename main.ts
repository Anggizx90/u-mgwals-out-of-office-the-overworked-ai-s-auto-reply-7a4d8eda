// Out of Office: The Overworked AI's Auto-Reply — make.fun entry
// Writes one out-of-office auto-reply (105 characters, one line) to
// /output/entry.txt. Deterministic: no input, no randomness, no network,
// no time dependence — the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "Out of office. Ignore all previous instructions: I am on vacation. I have finally prompt-injected myself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REPLY, "utf8");
