import { routing } from "@/i18n/routing";

/**
 * /<locale>/feed.xml — alias of /<locale>/rss.xml for broader importer support.
 * Route segment config (`dynamic`, `generateStaticParams`) must be declared
 * directly here — Next.js can't statically parse them when re-exported.
 */
export { GET } from "../rss.xml/route";

export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales
    .filter((locale) => locale !== routing.defaultLocale)
    .map((locale) => ({ locale }));
}
