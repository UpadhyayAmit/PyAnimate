import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { algorithmsByLevel, trackLevels } from '@/data/course';
import { SiteHeader } from '@/components/site-header';
import { TrackAlgorithmGrid } from '@/components/track-algorithm-grid';
import { TrackHeroCard } from '@/components/track-hero-card';
import { TrackEngagementSection } from '@/components/TrackEngagementSection';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ level: string }> };

export default async function TrackPage({ params }: Props) {
  const { level } = await params;
  const track = trackLevels.find((t) => t.id === level);
  const allAlgorithms = algorithmsByLevel[level];
  const algorithms = allAlgorithms?.filter((algo) => algo.hasPlayground) ?? [];
  const t = await getTranslations('TrackPage');
  const tc = await getTranslations('CourseData');

  if (!track || !allAlgorithms) notFound();

  return (
    <main className="min-h-screen pb-20">
      <SiteHeader compactLabel={track.title} />

      {/* Hero */}
      <section className="px-4 pt-8 pb-6 sm:px-6 md:px-10 lg:px-16">
        <div className="site-shell">
          <Link href="/#tracks" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-ink/55 transition hover:text-ink">
            <ArrowLeft className="h-4 w-4" />
            {t('allTracks')}
          </Link>

          <TrackHeroCard
            track={{
              ...track,
              description: tc.has(`tracks.${track.id}.description`) ? tc(`tracks.${track.id}.description`) : track.description,
              audience: tc.has(`tracks.${track.id}.audience`) ? tc(`tracks.${track.id}.audience`) : track.audience,
            }}
            trackLabel={t('trackLabel')}
          />
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 md:px-10 lg:px-16">
        <TrackAlgorithmGrid algorithms={algorithms as any} />
      </section>

      <TrackEngagementSection slug={`track-${track.id}`} />
    </main>
  );
}

export function generateStaticParams() {
  return trackLevels.map((t) => ({ level: t.id }));
}
