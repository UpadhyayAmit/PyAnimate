'use client';

import type { TrackLevel } from '@/data/course';

interface Props {
  track: TrackLevel;
  trackLabel: string;
}

export function TrackHeroCard({ track, trackLabel }: Props) {
  return (
    <div className={`card-elevated overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-br p-6 sm:p-8 ${track.accent}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-[0.22em] text-ink/40">{trackLabel}</div>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold text-bright">{track.title}</h1>
          <p className="mt-2 text-base text-ink/60">{track.audience}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink/65">{track.description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:items-end">
          {track.goals.map((goal) => (
            <div key={goal} className="flex items-center gap-2 rounded-full pill-generic px-4 py-2 text-sm font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
              {goal}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
