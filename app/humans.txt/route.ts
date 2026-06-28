export function GET() {
  return new Response(
    `PyAnimate

Creator: Amit Upadhyay
Website: https://amitupadhyay.com
Ecosystem: AI Wisdom
Contact: connect@pyanimate.com

Site: https://pyanimate.com
Sitemap: https://pyanimate.com/sitemap.xml
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    },
  );
}
