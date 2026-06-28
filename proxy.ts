import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createIntlMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest, type NextFetchEvent } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);
const isProtectedRoute = createRouteMatcher([]);
const seoRoutePattern = /^\/(robots\.txt|humans\.txt|sitemap\.xml|site\.xml|rss\.xml|feed\.xml)$/;
const localeAliases: Record<string, (typeof routing.locales)[number]> = {
  en: 'en',
  hi: 'hi',
  fr: 'fr',
  es: 'es',
  de: 'de',
  ja: 'ja',
  jp: 'ja',
  zh: 'zh',
  cn: 'zh',
  ar: 'ar',
};

function detectLocale(req: NextRequest) {
  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value;
  if (routing.locales.includes(cookieLocale as any)) return cookieLocale;

  const accepted = req.headers
    .get('accept-language')
    ?.split(',')
    .map((part) => part.split(';')[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const language of accepted ?? []) {
    const exact = language === 'hinglish' ? 'hinglish' : undefined;
    if (exact && routing.locales.includes(exact as any)) return exact;

    const base = language.split('-')[0];
    const locale = localeAliases[base];
    if (locale) return locale;
  }

  return routing.defaultLocale;
}

const clerkedProxy = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
  if (req.nextUrl.pathname.startsWith('/api/')) return NextResponse.next();
  if (seoRoutePattern.test(req.nextUrl.pathname)) return NextResponse.next();
  if (req.nextUrl.pathname === '/') {
    const url = req.nextUrl.clone();
    url.pathname = `/${detectLocale(req)}`;
    return NextResponse.redirect(url);
  }
  return intlMiddleware(req);
});

export default function proxy(req: NextRequest, event: NextFetchEvent) {
  return clerkedProxy(req, event);
}

export const config = {
  matcher: [
    '/api/:path*',
    '/',
    '/(hi|en|hinglish|fr|es|de|ja|zh|ar)/:path*',
    '/((?!_next|_vercel|\\.well-known|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
