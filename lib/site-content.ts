import "server-only";

import { cache } from "react";
import { promises as fs } from "fs";
import path from "path";
import { getSiteLocale } from "@/lib/locale";
import { type SiteLocale } from "@/lib/site-locale";

type ContentTree = Record<string, Record<string, Record<string, Record<string, string>>>>;
type ContentItem = Record<string, string>;

function parseCsv(input: string): string[][] {
  const rows: string[][] = [];
  let current = "";
  let row: string[] = [];
  let inQuotes = false;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    const next = input[index + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(current);
      current = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(current);
      if (row.some((cell) => cell.length > 0)) {
        rows.push(row);
      }
      row = [];
      current = "";
      continue;
    }

    current += char;
  }

  if (current.length > 0 || row.length > 0) {
    row.push(current);
    rows.push(row);
  }

  return rows;
}

const loadSiteContent = cache(async (locale: SiteLocale): Promise<ContentTree> => {
  const filePath = path.join(process.cwd(), "content", `site-content-${locale}.csv`);
  const raw = await fs.readFile(filePath, "utf8");
  const [header, ...rows] = parseCsv(raw);

  if (!header || header.length < 5) {
    throw new Error(`site-content-${locale}.csv is invalid.`);
  }

  const tree: ContentTree = {};

  for (const row of rows) {
    const [page, section, item, field, value] = row;
    if (!page || !section || !item || !field) {
      continue;
    }

    tree[page] ??= {};
    tree[page][section] ??= {};
    tree[page][section][item] ??= {};
    tree[page][section][item][field] = value ?? "";
  }

  return tree;
});

export async function getContentItem(page: string, section: string, item = "main"): Promise<ContentItem> {
  const locale = await getSiteLocale();
  const tree = await loadSiteContent(locale);
  const value = tree[page]?.[section]?.[item];

  if (!value) {
    throw new Error(`Missing content: ${page}/${section}/${item}`);
  }

  return value;
}

export async function getContentItems(page: string, section: string): Promise<ContentItem[]> {
  const locale = await getSiteLocale();
  const tree = await loadSiteContent(locale);
  const entries = tree[page]?.[section];

  if (!entries) {
    return [];
  }

  return Object.entries(entries)
    .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
    .map(([, value]) => value);
}
