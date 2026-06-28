'use client';

import { useEffect, useState } from 'react';
import { Flame, MessageSquare, ThumbsUp } from 'lucide-react';

type Stats = {
  reactions: number;
  comments: number;
  feedback: number;
};

const cache: Record<string, Stats> = {};

export function CardStats({ slug, className = '' }: { slug: string; className?: string }) {
  const [stats, setStats] = useState<Stats>(cache[slug] ?? { reactions: 0, comments: 0, feedback: 0 });

  useEffect(() => {
    if (cache[slug]) {
      setStats(cache[slug]);
      return;
    }

    let cancelled = false;
    const isTrack = slug.startsWith('track-');
    const statsUrl = isTrack ? `/api/stats?track=${encodeURIComponent(slug.replace(/^track-/, ''))}` : `/api/stats?slug=${encodeURIComponent(slug)}`;

    fetch(statsUrl)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const next = {
          reactions: typeof data?.reactions === 'number' ? data.reactions : 0,
          comments: typeof data?.comments === 'number' ? data.comments : 0,
          feedback: typeof data?.feedback === 'number' ? data.feedback : 0,
        };
        cache[slug] = next;
        setStats(next);
      })
      .catch(() => {
        if (!cancelled) setStats({ reactions: 0, comments: 0, feedback: 0 });
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <div className={`flex items-center gap-3 text-xs font-semibold text-ink/45 ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <Flame className="h-3.5 w-3.5 text-signal" />
        {stats.reactions}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <MessageSquare className="h-3.5 w-3.5" />
        {stats.comments}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <ThumbsUp className="h-3.5 w-3.5" />
        {stats.feedback}
      </span>
    </div>
  );
}
