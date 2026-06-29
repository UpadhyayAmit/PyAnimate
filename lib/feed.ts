import { playgroundLessons, trackLevels } from "@/data/course";
import { routing } from "@/i18n/routing";

/**
 * Shared builder for the syndication-ready RSS 2.0 feeds (dev.to / Medium).
 *
 * One feed per language: English at /rss.xml, the rest at /<locale>/rss.xml
 * (and /<locale>/feed.xml). Each feed declares its own <language>, links to
 * that locale's pages, and carries a rich teaser per track/lesson in
 * <content:encoded> with a canonical link back to the interactive page.
 *
 * Localization note: the channel description is localized from the app's own
 * message catalog (messages/<locale>.json → Hero.description). Track/lesson
 * *titles* come from the English course catalog (data/course.ts), which is not
 * stored per-locale; URLs and <language> are correct per locale. To fully
 * localize item titles, move the catalog strings into messages and look them
 * up here.
 */

const BASE_URL = "https://pyanimate.com";
const AUTHOR = "Amit Upadhyay";
const AUTHOR_EMAIL = "connect@amitupadhyay.com";
const PUB_START = Date.UTC(2026, 0, 1);  // Jan 1 2026
const PUB_END   = Date.UTC(2026, 5, 25); // Jun 25 2026

/** Per-item raster OG cover (1200×630 PNG rendered by the /api/og route). */
function ogCover(title: string, eyebrow: string) {
  return `${BASE_URL}/api/og?title=${encodeURIComponent(title)}&eyebrow=${encodeURIComponent(eyebrow)}`;
}

const RSS_LANG: Record<string, string> = {
  en: "en",
  hi: "hi",
  hinglish: "hi-Latn",
  fr: "fr",
  es: "es",
  de: "de",
  ja: "ja",
  zh: "zh",
  ar: "ar",
};

function cdata(value: string) {
  return `<![CDATA[${String(value ?? "").replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toTags(values: string[]) {
  const seen = new Set<string>();
  for (const v of values) {
    const clean = v.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (clean) seen.add(clean);
    if (seen.size >= 4) break;
  }
  return [...seen];
}

/** Absolute, locale-aware URL. PyAnimate uses 'always' prefixing, so every locale is prefixed. */
function localeUrl(locale: string, path: string) {
  return `${BASE_URL}/${locale}${path}`;
}

async function localizedDescription(locale: string) {
  const fallback = "Animated Python lessons, level-based tracks, and a live playground.";
  try {
    const messages = (await import(`../messages/${locale}.json`)).default as {
      Hero?: { description?: string };
    };
    return messages.Hero?.description ?? fallback;
  } catch {
    return fallback;
  }
}

type FeedEntry = {
  title: string;
  url: string;
  cover: string;
  description: string;
  html: string;
  tags: string[];
  date: Date;
};

function buildEntries(locale: string): FeedEntry[] {
  const totalItems = trackLevels.length + playgroundLessons.length;
  const step = totalItems > 1 ? (PUB_END - PUB_START) / (totalItems - 1) : 0;

  const trackEntries: FeedEntry[] = trackLevels.map((track, i) => {
    const url = localeUrl(locale, `/tracks/${track.id}`);
    const goals = track.goals.map((g) => `<li>${escapeXml(g)}</li>`).join("");
    const cover = ogCover(`${track.title} — Python track`, "Python track");
    return {
      title: `${track.title} — Python track`,
      url,
      cover,
      description: track.description,
      html: `
        <p><img src="${cover}" alt="${escapeXml(track.title)} Python track" /></p>
        <p>${escapeXml(track.description)}</p>
        <p><strong>What you'll learn</strong></p><ul>${goals}</ul>
        <p>${track.lessonCount} animated lessons · ${escapeXml(track.audience)}</p>
        <p>▶ <a href="${url}">Start the ${escapeXml(track.title)} track on PyAnimate →</a></p>
        <p><em>Originally published at <a href="${url}">${url}</a></em></p>`.trim(),
      tags: toTags(["python", "track", track.title]),
      date: new Date(PUB_START + i * step),
    };
  });

  const lessonEntries: FeedEntry[] = playgroundLessons.map((lesson, i) => {
    const url = localeUrl(locale, `/playground?lesson=${lesson.id}`);
    const uses = (lesson.useCases ?? []).slice(0, 4).map((u) => `<li>${escapeXml(u)}</li>`).join("");
    const meta = [lesson.level, lesson.duration, lesson.timeComplexity ? `Time ${lesson.timeComplexity}` : ""]
      .filter(Boolean)
      .join(" · ");
    const cover = ogCover(lesson.title, `${lesson.level} · visual Python lesson`);
    return {
      title: `${lesson.title} — visual Python lesson`,
      url,
      cover,
      description: lesson.objective,
      html: `
        <p><img src="${cover}" alt="${escapeXml(lesson.title)}" /></p>
        <p><em>${escapeXml(meta)}</em></p>
        <p>${escapeXml(lesson.objective)}</p>
        ${lesson.prompt ? `<p><strong>Your challenge:</strong> ${escapeXml(lesson.prompt)}</p>` : ""}
        ${uses ? `<p><strong>Where this shows up</strong></p><ul>${uses}</ul>` : ""}
        <p>▶ <a href="${url}">Run it live in the PyAnimate playground →</a></p>
        <p><em>Originally published at <a href="${url}">${url}</a></em></p>`.trim(),
      tags: toTags(["python", "tutorial", String(lesson.level)]),
      date: new Date(PUB_START + (trackLevels.length + i) * step),
    };
  });

  return [...trackEntries, ...lessonEntries];
}

/** Build the RSS XML string for one locale. */
export async function renderCourseFeed(locale: string): Promise<string> {
  const now = new Date().toUTCString();
  const lang = RSS_LANG[locale] ?? locale;
  const description = await localizedDescription(locale);
  const selfHref = localeUrl(locale, "/rss.xml");

  const items = buildEntries(locale)
    .map((entry) => {
      const categories = entry.tags.map((t) => `<category>${cdata(t)}</category>`).join("\n      ");
      return `
    <item>
      <title>${cdata(entry.title)}</title>
      <link>${entry.url}</link>
      <guid isPermaLink="true">${entry.url}</guid>
      <pubDate>${entry.date.toUTCString()}</pubDate>
      <dc:creator>${cdata(AUTHOR)}</dc:creator>
      <description>${cdata(entry.description)}</description>
      <content:encoded>${cdata(entry.html)}</content:encoded>
      <media:content url="${escapeXml(entry.cover)}" medium="image" />
      ${categories}
    </item>`.trim();
    })
    .join("\n  ");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>PyAnimate — Learn Python, Visually</title>
    <link>${localeUrl(locale, "")}</link>
    <description>${escapeXml(description)}</description>
    <language>${lang}</language>
    <atom:link href="${selfHref}" rel="self" type="application/rss+xml" />
    <managingEditor>${AUTHOR_EMAIL} (${AUTHOR})</managingEditor>
    <copyright>Copyright ${new Date().getFullYear()} ${AUTHOR} and PyAnimate</copyright>
    <lastBuildDate>${now}</lastBuildDate>
    ${items}
  </channel>
</rss>`;
}

export const FEED_HEADERS = {
  "Content-Type": "application/rss+xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
} as const;

export { routing };
