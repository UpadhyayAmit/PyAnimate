import { playgroundLessons, trackLevels } from '@/data/course';

const BASE_URL = 'https://pyanimate.com';

function escapeXml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export function GET() {
  const published = new Date().toUTCString();
  const trackItems = trackLevels.map((track) => ({
    title: `${track.title} Python track`,
    url: `${BASE_URL}/en/tracks/${track.id}`,
    description: track.description,
  }));
  const lessonItems = playgroundLessons.slice(0, 40).map((lesson) => ({
    title: `${lesson.title} visual lesson`,
    url: `${BASE_URL}/en/playground?lesson=${lesson.id}`,
    description: lesson.objective,
  }));

  const items = [...trackItems, ...lessonItems]
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.url)}</link>
      <guid>${escapeXml(item.url)}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${published}</pubDate>
    </item>`,
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>PyAnimate</title>
    <link>${BASE_URL}</link>
    <description>Animated Python lessons, tracks, and playground updates.</description>
    <language>en</language>
    <lastBuildDate>${published}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
