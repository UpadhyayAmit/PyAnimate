const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pyanimate.com';

export const siteUrl = rawSiteUrl.replace(/\/$/, '');
