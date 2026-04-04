import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        // COOP/COEP are ONLY required on playground pages (Pyodide needs SharedArrayBuffer).
        // Applying them to ALL routes was forcing Vercel CDN to skip caching everything.
        source: '/:locale/playground',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
      {
        // Explicit immutable cache for static assets (JS/CSS bundles)
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
