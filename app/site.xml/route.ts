import sitemap from '../sitemap';

function escapeXml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export function GET() {
  const urls = sitemap()
    .map((entry) => {
      const lastModified = entry.lastModified ? new Date(entry.lastModified).toISOString() : undefined;
      return `
  <url>
    <loc>${escapeXml(entry.url)}</loc>${lastModified ? `
    <lastmod>${lastModified}</lastmod>` : ''}${entry.changeFrequency ? `
    <changefreq>${entry.changeFrequency}</changefreq>` : ''}${typeof entry.priority === 'number' ? `
    <priority>${entry.priority.toFixed(1)}</priority>` : ''}
  </url>`;
    })
    .join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
