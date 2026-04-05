'use client';

import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { lessonCards } from '@/data/course';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

// Dark is the base. light: and sepia: prefixes override for light/sepia themes.
const cardStyles = [
  {
    card: 'bg-gradient-to-br from-sky-950/70 to-indigo-900/40 border-sky-700/30 light:from-sky-100 light:to-indigo-100 light:border-sky-200 sepia:from-sky-50 sepia:to-amber-50/40 sepia:border-sky-200',
    pill: 'bg-sky-900/60 text-sky-300 light:bg-sky-100 light:text-sky-700 sepia:bg-sky-100 sepia:text-sky-700',
    link: 'text-sky-400 light:text-sky-600 sepia:text-sky-700',
    duration: 'bg-sky-900/40 text-sky-400 light:bg-sky-100 light:text-sky-600 sepia:bg-sky-100 sepia:text-sky-700',
    divider: 'border-sky-800/40 light:border-sky-200 sepia:border-sky-200',
  },
  {
    card: 'bg-gradient-to-br from-emerald-950/70 to-teal-900/40 border-emerald-700/30 light:from-emerald-100 light:to-teal-100 light:border-emerald-200 sepia:from-emerald-50 sepia:to-amber-50/40 sepia:border-emerald-200',
    pill: 'bg-emerald-900/60 text-emerald-300 light:bg-emerald-100 light:text-emerald-700 sepia:bg-emerald-100 sepia:text-emerald-700',
    link: 'text-emerald-400 light:text-emerald-600 sepia:text-emerald-700',
    duration: 'bg-emerald-900/40 text-emerald-400 light:bg-emerald-100 light:text-emerald-600 sepia:bg-emerald-100 sepia:text-emerald-700',
    divider: 'border-emerald-800/40 light:border-emerald-200 sepia:border-emerald-200',
  },
  {
    card: 'bg-gradient-to-br from-orange-950/70 to-amber-900/40 border-orange-700/30 light:from-orange-100 light:to-amber-100 light:border-orange-200 sepia:from-orange-50 sepia:to-amber-100/60 sepia:border-orange-200',
    pill: 'bg-orange-900/60 text-orange-300 light:bg-orange-100 light:text-orange-700 sepia:bg-orange-100 sepia:text-orange-700',
    link: 'text-orange-400 light:text-orange-600 sepia:text-orange-700',
    duration: 'bg-orange-900/40 text-orange-400 light:bg-orange-100 light:text-orange-600 sepia:bg-orange-100 sepia:text-orange-700',
    divider: 'border-orange-800/40 light:border-orange-200 sepia:border-orange-200',
  },
];

export function LessonSpotlight() {
  const t = useTranslations('LessonSpotlight');
  const router = useRouter();
  return (
    <section id="algorithms" className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="site-shell">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ink/42">{t('sectionLabel')}</p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold text-bright sm:text-4xl">{t('heading')}</h2>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <p className="max-w-sm text-sm leading-7 text-ink/58">{t('description')}</p>
            <Link
              href="/playground"
              className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-5 py-2.5 text-sm font-semibold text-signal transition hover:bg-signal/18"
            >
              {t('openPlayground')} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {lessonCards.map((lesson, index) => {
            const s = cardStyles[index];
            return (
              <motion.article
                key={lesson.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.42, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                onClick={() => router.push(`/playground?lesson=${lesson.lessonId}`)}
                className={`group flex cursor-pointer flex-col rounded-[24px] border p-6 shadow-[0_2px_12px_rgba(0,0,0,0.4)] transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.5)] ${s.card}`}
              >
                <div className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${s.pill}`}>
                  {lesson.concept}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-bright">{lesson.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-ink/62">{lesson.description}</p>

                <div className={`mt-5 flex items-center justify-between border-t pt-4 ${s.divider}`}>
                  <span className={`rounded-full px-3 py-1.5 text-xs font-medium ${s.duration}`}>{lesson.duration}</span>
                  <span className={`flex items-center gap-1.5 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100 ${s.link}`}>
                    {t('startLesson')} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
