import { FEED_HEADERS, renderCourseFeed, routing } from "@/lib/feed";

/**
 * /<locale>/rss.xml — per-language syndication feed (one file per locale).
 * English is served at /rss.xml, so the default locale is excluded here.
 */
export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales
    .filter((locale) => locale !== routing.defaultLocale)
    .map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const xml = await renderCourseFeed(locale);
  return new Response(xml, { headers: FEED_HEADERS });
}
