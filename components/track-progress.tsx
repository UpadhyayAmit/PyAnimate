'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/lib/use-progress';
import { useTranslations } from 'next-intl';

type TrackProgressProps = {
  algorithms: { id: string }[];
};

export function TrackProgress({ algorithms }: TrackProgressProps) {
  const t = useTranslations('AlgorithmGrid');
  const { completedLessons } = useProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const total = algorithms.length;
  if (total === 0) return null;

  const completed = algorithms.filter((algo) => completedLessons.includes(algo.id)).length;
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="mb-8 card-elevated rounded-[24px] p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/70">{t('trackProgress')}</h3>
        <span className="text-xs font-bold text-signal">
          {completed} / {total} {t('completed')} — {percentage}%
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/6">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-signal to-amber-400 glow-signal"
        />
      </div>
    </div>
  );
}
