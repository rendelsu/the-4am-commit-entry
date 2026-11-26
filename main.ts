import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";
const LINE = "fix: reverted my confident 3am rewrite and kept the one-line patch from 11pm me, who hadn't compacted yet";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE + "\n");
chmodSync(outFile, 0o644);
