import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/lib/theme';
import { clerkAppearance } from '@/lib/clerkAppearance';
import { ProgressSync } from '@/components/ProgressSync';
import { CookieConsent } from '@/components/CookieConsent';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pyanimate.com'),
  title: {
    default: 'PyAnimate',
    template: '%s · PyAnimate',
  },
  description: 'Animated Python learning playground for every skill level.',
  applicationName: 'PyAnimate',
  authors: [{ name: 'Amit Upadhyay', url: 'https://amitupadhyay.com' }],
  creator: 'Amit Upadhyay',
  publisher: 'PyAnimate',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      hi: '/hi',
      fr: '/fr',
      es: '/es',
      de: '/de',
      ja: '/ja',
      zh: '/zh',
      ar: '/ar',
    },
  },
  openGraph: {
    title: 'PyAnimate',
    description: 'Visual Python lessons with animated execution, memory, and algorithm flow.',
    url: 'https://pyanimate.com',
    siteName: 'PyAnimate',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'PyAnimate',
    description: 'Animated Python learning playground for every skill level.',
  },
  other: {
    'author:ecosystem': 'AI Wisdom',
    'author:url': 'https://amitupadhyay.com',
    'author:contact': 'connect@pyanimate.com',
    'creator:ecosystem': 'AI Wisdom',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider appearance={clerkAppearance}>
      <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
        <head>
          <link rel="preconnect" href="https://cdn.jsdelivr.net" />
          <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        </head>
        <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
          <ThemeProvider>
            {children}
            <ProgressSync />
            <CookieConsent />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
