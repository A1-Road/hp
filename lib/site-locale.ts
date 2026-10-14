export type SiteLocale = "ja" | "en";
export const SITE_LANG_COOKIE = "site-lang";
export function localeHref(locale: SiteLocale, href: string): string {
  if (!href.startsWith("/") || href.startsWith("/en") || href.startsWith("/privacy-policy")) return href;
  return locale === "en" ? `/en${href === "/" ? "" : href}` : href;
}
