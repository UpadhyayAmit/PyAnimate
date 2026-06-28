'use client';

import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Code2, Database, GitBranch, Layers } from 'lucide-react';
import { trackLevels } from '@/data/course';
import { useTranslations } from 'next-intl';
import { CardStats } from '@/components/CardStats';

// Dark is the base. light: and sepia: prefixes override for light/sepia themes.
// These @variant rules are defined in globals.css and work correctly with Turbopack.
const trackStyles = [
  {
    card: 'bg-gradient-to-br from-violet-900/60 to-violet-950/30 border-violet-500/40 hover:shadow-[0_8px_32px_rgba(139,92,246,0.25)] light:from-violet-100 light:to-violet-50 light:border-violet-200 light:hover:shadow-[0_8px_32px_rgba(139,92,246,0.12)] sepia:from-violet-50 sepia:to-amber-50/40 sepia:border-violet-200',
    topBar: 'bg-gradient-to-r from-violet-500 to-violet-400',
    icon: 'text-violet-300 light:text-violet-600 sepia:text-violet-700',
    iconBg: 'bg-violet-800/60 light:bg-violet-100 sepia:bg-violet-100',
    number: 'text-violet-300 light:text-violet-600 sepia:text-violet-700',
    goal: 'bg-violet-800/70 text-violet-200 light:bg-violet-100 light:text-violet-700 sepia:bg-violet-100 sepia:text-violet-700',
    arrow: 'text-violet-300 light:text-violet-600 sepia:text-violet-700',
    count: 'text-violet-300 light:text-violet-600 sepia:text-violet-700',
    divider: 'border-violet-500/20 light:border-violet-200 sepia:border-violet-200',
  },
  {
    card: 'bg-gradient-to-br from-sky-900/60 to-sky-950/30 border-sky-500/40 hover:shadow-[0_8px_32px_rgba(56,189,248,0.25)] light:from-sky-100 light:to-sky-50 light:border-sky-200 light:hover:shadow-[0_8px_32px_rgba(56,189,248,0.12)] sepia:from-sky-50 sepia:to-amber-50/40 sepia:border-sky-200',
    topBar: 'bg-gradient-to-r from-sky-500 to-sky-400',
    icon: 'text-sky-300 light:text-sky-600 sepia:text-sky-700',
    iconBg: 'bg-sky-800/60 light:bg-sky-100 sepia:bg-sky-100',
    number: 'text-sky-300 light:text-sky-600 sepia:text-sky-700',
    goal: 'bg-sky-800/70 text-sky-200 light:bg-sky-100 light:text-sky-700 sepia:bg-sky-100 sepia:text-sky-700',
    arrow: 'text-sky-300 light:text-sky-600 sepia:text-sky-700',
    count: 'text-sky-300 light:text-sky-600 sepia:text-sky-700',
    divider: 'border-sky-500/20 light:border-sky-200 sepia:border-sky-200',
  },
  {
    card: 'bg-gradient-to-br from-emerald-900/60 to-emerald-950/30 border-emerald-500/40 hover:shadow-[0_8px_32px_rgba(52,211,153,0.25)] light:from-emerald-100 light:to-emerald-50 light:border-emerald-200 light:hover:shadow-[0_8px_32px_rgba(52,211,153,0.12)] sepia:from-emerald-50 sepia:to-amber-50/40 sepia:border-emerald-200',
    topBar: 'bg-gradient-to-r from-emerald-500 to-emerald-400',
    icon: 'text-emerald-300 light:text-emerald-600 sepia:text-emerald-700',
    iconBg: 'bg-emerald-800/60 light:bg-emerald-100 sepia:bg-emerald-100',
    number: 'text-emerald-300 light:text-emerald-600 sepia:text-emerald-700',
    goal: 'bg-emerald-800/70 text-emerald-200 light:bg-emerald-100 light:text-emerald-700 sepia:bg-emerald-100 sepia:text-emerald-700',
    arrow: 'text-emerald-300 light:text-emerald-600 sepia:text-emerald-700',
    count: 'text-emerald-300 light:text-emerald-600 sepia:text-emerald-700',
    divider: 'border-emerald-500/20 light:border-emerald-200 sepia:border-emerald-200',
  },
  {
    card: 'bg-gradient-to-br from-pink-900/60 to-pink-950/30 border-pink-500/40 hover:shadow-[0_8px_32px_rgba(236,72,153,0.25)] light:from-pink-100 light:to-pink-50 light:border-pink-200 light:hover:shadow-[0_8px_32px_rgba(236,72,153,0.12)] sepia:from-pink-50 sepia:to-amber-50/40 sepia:border-pink-200',
    topBar: 'bg-gradient-to-r from-pink-500 to-pink-400',
    icon: 'text-pink-300 light:text-pink-600 sepia:text-pink-700',
    iconBg: 'bg-pink-800/60 light:bg-pink-100 sepia:bg-pink-100',
    number: 'text-pink-300 light:text-pink-600 sepia:text-pink-700',
    goal: 'bg-pink-800/70 text-pink-200 light:bg-pink-100 light:text-pink-700 sepia:bg-pink-100 sepia:text-pink-700',
    arrow: 'text-pink-300 light:text-pink-600 sepia:text-pink-700',
    count: 'text-pink-300 light:text-pink-600 sepia:text-pink-700',
    divider: 'border-pink-500/20 light:border-pink-200 sepia:border-pink-200',
  },
  {
    card: 'bg-gradient-to-br from-orange-900/60 to-orange-950/30 border-orange-500/40 hover:shadow-[0_8px_32px_rgba(249,115,22,0.25)] light:from-orange-100 light:to-orange-50 light:border-orange-200 light:hover:shadow-[0_8px_32px_rgba(249,115,22,0.12)] sepia:from-orange-50 sepia:to-amber-50/40 sepia:border-orange-200',
    topBar: 'bg-gradient-to-r from-orange-500 to-orange-400',
    icon: 'text-orange-300 light:text-orange-600 sepia:text-orange-700',
    iconBg: 'bg-orange-800/60 light:bg-orange-100 sepia:bg-orange-100',
    number: 'text-orange-300 light:text-orange-600 sepia:text-orange-700',
    goal: 'bg-orange-800/70 text-orange-200 light:bg-orange-100 light:text-orange-700 sepia:bg-orange-100 sepia:text-orange-700',
    arrow: 'text-orange-300 light:text-orange-600 sepia:text-orange-700',
    count: 'text-orange-300 light:text-orange-600 sepia:text-orange-700',
    divider: 'border-orange-500/20 light:border-orange-200 sepia:border-orange-200',
  },
];

const trackIcons = [BookOpen, Code2, Database, GitBranch, Layers];

export function TrackGrid() {
  const t = useTranslations('TrackGrid');

  return (
    <section id="tracks" className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="site-shell">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ink/42">{t('sectionLabel')}</p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold text-bright sm:text-4xl">{t('heading')}</h2>
          </div>
          <Link
            href="/playground"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border-none bg-signal px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(232,98,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,98,42,0.4)]"
          >
            {t('startLearning')}
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {trackLevels.map((track, index) => {
            const Icon = trackIcons[index];
            const s = trackStyles[index];
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/tracks/${track.id}`}
                  className={`group flex flex-col rounded-[24px] border overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.4)] transition-shadow ${s.card}`}
                >
                  {/* Glowing top accent line */}
                  <div className={`h-1 w-full shrink-0 ${s.topBar}`} />

                  <div className="flex flex-col flex-1 p-5">
                    {/* Icon badge + number */}
                    <div className="mb-5 flex items-start justify-between">
                      <span className={`text-sm font-bold ${s.number}`}>{String(index + 1).padStart(2, '0')}</span>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-[14px] ${s.iconBg}`}>
                        <Icon className={`h-5 w-5 ${s.icon}`} />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-bright">{track.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-ink/55">{track.audience}</p>

                    <motion.ul className="mt-4 flex-1 space-y-1.5" initial="rest" whileHover="hover" animate="rest">
                      {track.goals.map((goal, i) => (
                        <motion.li
                          key={goal}
                          variants={{
                            rest: { x: 0, opacity: 0.9 },
                            hover: { x: 4, opacity: 1, backgroundColor: 'rgba(255, 255, 255, 0.05)', transition: { delay: i * 0.05, duration: 0.2 } },
                          }}
                          className={`rounded-full px-2.5 py-1 text-xs font-medium w-fit transition-colors ${s.goal}`}
                        >
                          {goal}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className={`mt-5 flex items-center justify-between border-t pt-4 ${s.divider}`}>
                      <div className="flex flex-col gap-2">
                        <span className={`text-xs font-medium ${s.count}`}>
                          {track.lessonCount} {t('lessons')}
                        </span>
                        <CardStats slug={`track-${track.id}`} />
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100 ${s.arrow}`}
                      >
                        {t('explore')} <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
