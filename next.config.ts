import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  webpack(config, { dev }) {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  async rewrites() {
    return [
      // Serve the site logo SVG as favicon to stop browser 404 for /favicon.ico
      { source: '/favicon.ico', destination: '/icon.svg' },
    ];
  },
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
    ];
  },
};

export default withNextIntl(nextConfig);
