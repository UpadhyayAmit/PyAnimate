import type { MetadataRoute } from 'next';
import { playgroundLessons, trackLevels } from '@/data/course';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://pyanimate.com';
const STATIC_ROUTES = [
  { path: '', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/privacy', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/terms', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/playground', changeFrequency: 'weekly' as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const localizedRoutes = routing.locales.flatMap((locale) => [
    ...STATIC_ROUTES.map((route) => ({
      url: `${BASE_URL}/${locale}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...trackLevels.map((track) => ({
      url: `${BASE_URL}/${locale}/tracks/${track.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...playgroundLessons.map((lesson) => ({
      url: `${BASE_URL}/${locale}/playground?lesson=${lesson.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ]);

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...localizedRoutes,
  ];
}
