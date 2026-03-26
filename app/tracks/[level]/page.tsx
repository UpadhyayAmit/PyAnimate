import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Database, ExternalLink, Lock, Zap } from "lucide-react";
import { algorithmsByLevel, trackLevels } from "@/data/course";
import { SiteHeader } from "@/components/site-header";
import { TrackAlgorithmGrid } from "@/components/track-algorithm-grid";

type Props = { params: Promise<{ level: string }> };


export default async function TrackPage({ params }: Props) {
  const { level } = await params;
  const track = trackLevels.find((t) => t.id === level);
  const allAlgorithms = algorithmsByLevel[level];
  const algorithms = allAlgorithms?.filter((algo) => algo.hasPlayground) ?? [];

  if (!track || !allAlgorithms) notFound();

  return (
    <main className="min-h-screen pb-20">
      <SiteHeader compactLabel={track.title} />

      {/* Hero */}
      <section className="px-6 pt-10 pb-8 sm:px-10 lg:px-16">
        <div className="site-shell">
          <Link
            href="/#tracks"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-ink/55 transition hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            All tracks
          </Link>

          <div className={`card-elevated overflow-hidden rounded-[32px] bg-gradient-to-br p-8 ${track.accent}`}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink/40">
                  Track
                </div>
                <h1 className="mt-2 text-4xl font-semibold text-bright sm:text-5xl">{track.title}</h1>
                <p className="mt-2 text-base text-ink/60">{track.audience}</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-ink/65">{track.description}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:items-end">
                {track.goals.map((goal) => (
                  <div
                    key={goal}
                    className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-ink/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 sm:px-10 lg:px-16">
        <TrackAlgorithmGrid algorithms={algorithms as any} />
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return trackLevels.map((t) => ({ level: t.id }));
}
