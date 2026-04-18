import "server-only";

import { cookies } from "next/headers";
import { SITE_LANG_COOKIE, type SiteLocale } from "@/lib/site-locale";

export async function getSiteLocale(): Promise<SiteLocale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(SITE_LANG_COOKIE)?.value;

  return value === "en" ? "en" : "ja";
}
