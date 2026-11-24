import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const repository = resolve(dirname(fileURLToPath(import.meta.url)), "..");
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), "site-format-test-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  execFileSync("git", ["init", "-q", root]);
  mkdirSync(join(root, "bin"));
  copyFileSync(join(repository, "bin/format.mjs"), join(root, "bin/format.mjs"));
  copyFileSync(join(repository, ".prettierrc"), join(root, ".prettierrc"));
  symlinkSync(join(repository, "node_modules"), join(root, "node_modules"), "dir");
  return {
    root,
    write: (name, content) => writeFileSync(join(root, name), content),
    add: (...files) => execFileSync("git", ["add", "--", ...files], { cwd: root }),
    run: (...args) => spawnSync(process.execPath, ["bin/format.mjs", ...args], { cwd: root, encoding: "utf8" }),
  };
}

test("whole-tree checks include staged files, respect ignores, and leave untracked drafts alone", (t) => {
  const f = fixture(t);
  f.write("tracked.js", "const value={answer:42}\n");
  f.write("draft.js", "function { unparseable draft\n");
  f.write("generated.js", "function { intentionally ignored\n");
  f.write(".prettierignore", "generated.js\n");
  f.add("tracked.js", "generated.js", ".prettierignore");
  assert.equal(f.run("--check").status, 1);
  assert.equal(f.run("--write").status, 0);
  assert.equal(f.run("--check").status, 0);
  assert.equal(readFileSync(join(f.root, "tracked.js"), "utf8"), "const value = { answer: 42 };\n");
  assert.equal(readFileSync(join(f.root, "draft.js"), "utf8"), "function { unparseable draft\n");
  assert.equal(readFileSync(join(f.root, "generated.js"), "utf8"), "function { intentionally ignored\n");
});

test("staged-file invocation handles spaces and Liquid without rewriting unrelated tracked files", (t) => {
  const f = fixture(t);
  f.write("selected file.liquid", '<div class="sample">{{site.title}}</div>\n');
  f.write("other.js", "const other={answer:42}\n");
  f.add("selected file.liquid", "other.js");
  assert.equal(f.run("--write", "selected file.liquid").status, 0);
  assert.equal(f.run("--check", "selected file.liquid").status, 0);
  assert.equal(readFileSync(join(f.root, "other.js"), "utf8"), "const other={answer:42}\n");
  assert.equal(f.run("--check").status, 1);
});
