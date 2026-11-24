import { execFileSync, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const [mode, ...requestedFiles] = process.argv.slice(2);
if (!["--check", "--write"].includes(mode)) {
  console.error("Usage: node bin/format.mjs --check|--write [files...]");
  process.exit(2);
}

// CI and local checks use the same tracked corpus, including newly staged files.
// Untracked previews and experiments are not part of the published source tree.
const root = execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
const candidates = requestedFiles.length
  ? requestedFiles
  : execFileSync("git", ["ls-files", "--cached", "-z"], { cwd: root, encoding: "utf8", maxBuffer: 16 * 1024 * 1024 }).split("\0");
const files = [...new Set(candidates)].filter((file) => file && existsSync(resolve(root, file)));
const prettier = resolve(root, "node_modules/prettier/bin/prettier.cjs");
if (!existsSync(prettier)) {
  console.error("Install the repository's locked formatter first: npm ci");
  process.exit(2);
}
if (!files.length) process.exit(0);

const result = spawnSync(process.execPath, [prettier, mode, "--ignore-unknown", "--", ...files], { cwd: root, stdio: "inherit" });
if (result.error) console.error(result.error.message);
process.exit(result.status ?? 2);
