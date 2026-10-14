import "server-only";
import { headers } from "next/headers";
import type { SiteLocale } from "@/lib/site-locale";
export async function getSiteLocale(): Promise<SiteLocale> {
  return (await headers()).get("x-site-locale") === "en" ? "en" : "ja";
}
