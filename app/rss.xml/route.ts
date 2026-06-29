import { FEED_HEADERS, renderCourseFeed, routing } from "@/lib/feed";

/**
 * /rss.xml — English syndication feed for dev.to / Medium.
 * Per-language feeds live at /<locale>/rss.xml (and /<locale>/feed.xml).
 */
export const dynamic = "force-static";

export async function GET() {
  const xml = await renderCourseFeed(routing.defaultLocale);
  return new Response(xml, { headers: FEED_HEADERS });
}
