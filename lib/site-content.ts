import "server-only";

import { getSiteLocale } from "@/lib/locale";
import { type SiteLocale } from "@/lib/site-locale";
import jaContent from "@/content/site-content-ja.json";
import enContent from "@/content/site-content-en.json";

type ContentTree = Record<string, Record<string, Record<string, Record<string, string>>>>;
type ContentItem = Record<string, string>;
const contentByLocale: Record<SiteLocale, ContentTree> = {
  ja: jaContent as ContentTree,
  en: enContent as ContentTree,
};

export async function getContentItem(page: string, section: string, item = "main"): Promise<ContentItem> {
  const locale = await getSiteLocale();
  const tree = contentByLocale[locale];
  const value = tree[page]?.[section]?.[item];

  if (!value) {
    throw new Error(`Missing content: ${page}/${section}/${item}`);
  }

  return value;
}

export async function getContentItems(page: string, section: string): Promise<ContentItem[]> {
  const locale = await getSiteLocale();
  const tree = contentByLocale[locale];
  const entries = tree[page]?.[section];

  if (!entries) {
    return [];
  }

  return Object.entries(entries)
    .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
    .map(([, value]) => value);
}
