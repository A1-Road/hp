// Builds content/site-content-{ja,en}.json from content/site-content-{ja,en}.csv.
// CSV format: page,section,item,field,value
// The value column is everything after the fourth comma (values may contain commas).
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const contentDir = join(dirname(fileURLToPath(import.meta.url)), "..", "content");

for (const locale of ["ja", "en"]) {
  const csvPath = join(contentDir, `site-content-${locale}.csv`);
  const jsonPath = join(contentDir, `site-content-${locale}.json`);
  const lines = readFileSync(csvPath, "utf8").split(/\r?\n/);

  const tree = {};

  for (const [index, line] of lines.entries()) {
    if (index === 0 || line.trim() === "") continue;

    const parts = line.split(",");
    if (parts.length < 5) {
      throw new Error(`Malformed row in ${csvPath} at line ${index + 1}: ${line}`);
    }

    const [page, section, item, field] = parts;
    const value = parts.slice(4).join(",");

    tree[page] ??= {};
    tree[page][section] ??= {};
    tree[page][section][item] ??= {};
    tree[page][section][item][field] = value;
  }

  writeFileSync(jsonPath, `${JSON.stringify(tree, null, 2)}\n`);
  console.log(`Wrote ${jsonPath}`);
}
