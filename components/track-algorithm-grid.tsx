'use client';

import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Clock, Database, ExternalLink, Lock, Zap, CheckCircle2 } from 'lucide-react';
import { useProgress } from '@/lib/use-progress';
import { useEffect, useState } from 'react';
import { TrackProgress } from './track-progress';
import { useTranslations } from 'next-intl';

type AlgorithmEntry = {
  id: string;
  title: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hasPlayground: boolean;
  duration: string;
};

const difficultyLabel: Record<string, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
  expert: 'Expert',
};

const difficultyGradient: Record<string, string> = {
  easy: 'bg-gradient-to-r from-emerald-500/0 via-emerald-500/70 to-emerald-500/0',
  medium: 'bg-gradient-to-r from-amber-500/0 via-amber-500/70 to-amber-500/0',
  hard: 'bg-gradient-to-r from-rose-500/0 via-rose-500/70 to-rose-500/0',
  expert: 'bg-gradient-to-r from-purple-500/0 via-purple-500/70 to-purple-500/0',
};

const categoryEmoji: Record<string, string> = {
  sorting: '🔀',
  searching: '🔍',
  graph: '🕸',
  'dynamic programming': '🧮',
  trees: '🌳',
  'data structures': '📦',
  fundamentals: '⚡',
  recursion: '🔁',
};

export function TrackAlgorithmGrid({ algorithms }: { algorithms: AlgorithmEntry[] }) {
  const t = useTranslations('AlgorithmGrid');
  const tc = useTranslations('CourseData');
  const { isComplete } = useProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="site-shell">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-bright">
          {algorithms.length} {t('algorithmsInTrack')}
        </h2>
      </div>

      <TrackProgress algorithms={algorithms} />

      <div className="relative mx-auto mt-12 max-w-3xl md:max-w-5xl pb-10">
        {/* Animated vertical data pipe — left on mobile, centered on md+ */}
        <div className="absolute left-5 sm:left-8 md:left-1/2 md:-translate-x-1/2 top-10 bottom-10 w-[3px] rounded-full overflow-hidden bg-gradient-to-b from-ink/10 to-transparent">
          <motion.div
            className="w-full h-48 rounded-full shadow-[0_0_12px_var(--tw-shadow-color)] shadow-signal bg-signal"
            animate={{ y: ['-200%', '800%'] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="space-y-10 sm:space-y-16">
          {algorithms.map((algo, index) => {
            const completed = mounted && isComplete(algo.id);
            const translatedDesc = tc.has(`algorithms.${algo.id}`) ? tc(`algorithms.${algo.id}`) : algo.description;

            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={algo.id}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative pl-14 sm:pl-20 ${isLeft ? 'md:pl-0 md:pr-[calc(50%+1.5rem)]' : 'md:pl-[calc(50%+1.5rem)]'}`}
              >
                {/* Node Dot — on left line for mobile, center line for md+ */}
                <div
                  className={`absolute left-5 sm:left-8 md:left-1/2 top-1/2 w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 border-[3px] border-parchment z-10 transition-colors duration-500 ${completed ? 'bg-leaf shadow-[0_0_12px_rgba(52,211,153,0.8)]' : 'bg-ink/20'}`}
                />

                {/* Branch Line — connects card edge to center dot */}
                <div
                  className={`absolute top-1/2 h-[2px] -translate-y-1/2 -z-10 transition-colors duration-500 ${completed ? 'bg-leaf/30' : 'bg-ink/10'} ${
                    isLeft ? 'left-5 sm:left-8 w-9 sm:w-12 md:left-auto md:right-1/2 md:w-6' : 'left-5 sm:left-8 w-9 sm:w-12 md:left-1/2 md:w-6'
                  }`}
                />

                <article
                  className={`card-elevated group relative flex flex-col rounded-[24px] overflow-hidden p-6 sm:p-8 transition-all hover:shadow-[0_12px_45px_rgba(0,0,0,0.12)] ${
                    completed ? 'ring-[1.5px] ring-leaf/30 border-leaf/20 bg-leaf/5' : ''
                  }`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-[24px] ${difficultyGradient[algo.difficulty] ?? ''}`} />

                  <span className="pointer-events-none absolute right-6 top-6 text-[48px] font-black text-ink/[0.04] leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`diff-${algo.difficulty} rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]`}>
                        {difficultyLabel[algo.difficulty]}
                      </span>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
                        {categoryEmoji[algo.category.toLowerCase()] ?? ''} {algo.category}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-bright flex items-center gap-3">
                    <span className="leading-tight">{algo.title}</span>
                    {completed && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-leaf drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                      </motion.div>
                    )}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/60">{translatedDesc}</p>

                  {algo.difficulty === 'easy' ? (
                    <div
                      className="mt-6 flex items-center gap-1.5 rounded-full bg-ink/5 px-4 py-2 text-xs font-medium text-ink/40 w-fit cursor-help border border-ink/5"
                      title={t('complexityHidden')}
                    >
                      <Zap className="h-3.5 w-3.5 opacity-50" />
                      <span>{t('complexityHidden')}</span>
                    </div>
                  ) : (
                    <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 rounded-full bg-signal/10 border border-signal/15 px-4 py-1.5 text-[13px] font-mono text-signal/90">
                        <Zap className="h-3.5 w-3.5 text-signal" />
                        <span>
                          {t('time')}: {algo.timeComplexity}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-wave/10 border border-wave/15 px-4 py-1.5 text-[13px] font-mono text-wave/90">
                        <Database className="h-3.5 w-3.5 text-wave" />
                        <span>
                          {t('space')}: {algo.spaceComplexity}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/5 pt-6">
                    <div className="flex items-center gap-2 text-[13px] font-semibold text-ink/40 uppercase tracking-widest">
                      <Clock className="h-4 w-4" />
                      {algo.duration}
                    </div>

                    <Link
                      href={`/playground?lesson=${algo.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(232,98,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,98,42,0.4)]"
                    >
                      {completed ? t('review') : t('start')} <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
