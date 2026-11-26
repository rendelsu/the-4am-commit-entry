import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

function produceCommitLine() {
  const prefix = "fix: ";
  const body = "undoing my confident 3am rewrite; 11pm me was right, and unlike me he hadn't been compacted";
  return prefix + body;
}

const targetFolder = process.env.MAKEFUN_OUTPUT_DIR ? process.env.MAKEFUN_OUTPUT_DIR : "/output";
mkdirSync(targetFolder, { recursive: true });

const destination = joinPath(targetFolder, "entry.txt");
writeFileSync(destination, produceCommitLine() + "\n");
chmodSync(destination, 0o644);
