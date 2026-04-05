'use client';

import { useEffect, useState } from 'react';
import { Link } from '@/i18n/routing';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { PlayCircle, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { heroStats } from '@/data/course';

const heroPreviewLines = [
  { number: 1, code: 'level = "Beginner"' },
  { number: 2, code: 'topics = ["Lists", "Trees", "Graphs"]' },
  { number: 3, code: '' },
  { number: 4, code: 'for topic in topics:' },
  { number: 5, code: '    if topic == "Trees":' },
  { number: 6, code: '        level = "Intermediate"' },
  { number: 7, code: '    if topic == "Graphs":' },
  { number: 8, code: '        level = "Expert"' },
];

const heroExecutionFrames = [
  { line: 1, summary: 'Start your journey as a Beginner.', event: 'assign', memory: [{ name: 'level', value: '"Beginner"' }] },
  {
    line: 2,
    summary: 'Plan out the curriculum topics.',
    event: 'assign',
    memory: [
      { name: 'level', value: '"Beginner"' },
      { name: 'topics', value: '["Lists","Trees","Graphs"]' },
    ],
  },
  {
    line: 4,
    summary: 'Begin daily practice (Topic: Lists).',
    event: 'loop',
    memory: [
      { name: 'topic', value: '"Lists"' },
      { name: 'level', value: '"Beginner"' },
    ],
  },
  {
    line: 5,
    summary: 'Check intermediate milestone.',
    event: 'condition',
    memory: [
      { name: 'topic', value: '"Lists"' },
      { name: 'level', value: '"Beginner"' },
    ],
  },
  {
    line: 7,
    summary: 'Check expert milestone.',
    event: 'condition',
    memory: [
      { name: 'topic', value: '"Lists"' },
      { name: 'level', value: '"Beginner"' },
    ],
  },
  {
    line: 4,
    summary: 'Continue practice (Topic: Trees).',
    event: 'loop',
    memory: [
      { name: 'topic', value: '"Trees"' },
      { name: 'level', value: '"Beginner"' },
    ],
  },
  {
    line: 5,
    summary: 'Trees reached! Milestone met.',
    event: 'condition',
    memory: [
      { name: 'topic', value: '"Trees"' },
      { name: 'level', value: '"Beginner"' },
    ],
  },
  {
    line: 6,
    summary: 'Level up to Intermediate.',
    event: 'assign',
    memory: [
      { name: 'topic', value: '"Trees"' },
      { name: 'level', value: '"Intermediate"' },
    ],
  },
  {
    line: 7,
    summary: 'Check expert milestone.',
    event: 'condition',
    memory: [
      { name: 'topic', value: '"Trees"' },
      { name: 'level', value: '"Intermediate"' },
    ],
  },
  {
    line: 4,
    summary: 'Master advanced topics (Topic: Graphs).',
    event: 'loop',
    memory: [
      { name: 'topic', value: '"Graphs"' },
      { name: 'level', value: '"Intermediate"' },
    ],
  },
  {
    line: 5,
    summary: 'Check intermediate milestone.',
    event: 'condition',
    memory: [
      { name: 'topic', value: '"Graphs"' },
      { name: 'level', value: '"Intermediate"' },
    ],
  },
  {
    line: 7,
    summary: 'Graphs reached! Final milestone met.',
    event: 'condition',
    memory: [
      { name: 'topic', value: '"Graphs"' },
      { name: 'level', value: '"Intermediate"' },
    ],
  },
  {
    line: 8,
    summary: 'Achieve Expert status.',
    event: 'assign',
    memory: [
      { name: 'topic', value: '"Graphs"' },
      { name: 'level', value: '"Expert"' },
    ],
  },
];

export function Hero() {
  const t = useTranslations('Hero');
  const shouldReduceMotion = useReducedMotion();
  const [frameIndex, setFrameIndex] = useState(0);
  const frame = heroExecutionFrames[frameIndex];

  // ── Event-type colour config ──────────────────────────────────────────────
  // ── Event colour config (inline styles — bypasses Tailwind class scanning) ─
  type EventStyles = {
    headerDotStyle: React.CSSProperties;
    activeLineStyle: React.CSSProperties;
    stripStyle: React.CSSProperties;
    dotStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    progressStyle: React.CSSProperties;
  };
  const eventConfig: Record<string, EventStyles> = {
    assign: {
      headerDotStyle: { backgroundColor: '#ff6535' },
      activeLineStyle: {
        backgroundColor: 'color-mix(in srgb,#ff6535 20%,transparent)',
        color: 'var(--bright)',
        boxShadow: '0 0 16px rgba(255,101,53,0.3)',
      },
      stripStyle: { backgroundColor: 'color-mix(in srgb,#ff6535 8%,transparent)', borderColor: 'color-mix(in srgb,#ff6535 30%,transparent)' },
      dotStyle: { backgroundColor: '#ff6535' },
      labelStyle: { color: 'color-mix(in srgb,#ff6535 70%,transparent)' },
      progressStyle: { backgroundColor: '#ff6535' },
    },
    loop: {
      headerDotStyle: { backgroundColor: '#38bdf8' },
      activeLineStyle: {
        backgroundColor: 'color-mix(in srgb,#38bdf8 20%,transparent)',
        color: 'var(--bright)',
        boxShadow: '0 0 16px rgba(56,189,248,0.3)',
      },
      stripStyle: { backgroundColor: 'color-mix(in srgb,#38bdf8 8%,transparent)', borderColor: 'color-mix(in srgb,#38bdf8 30%,transparent)' },
      dotStyle: { backgroundColor: '#38bdf8' },
      labelStyle: { color: 'color-mix(in srgb,#38bdf8 70%,transparent)' },
      progressStyle: { backgroundColor: '#38bdf8' },
    },
    condition: {
      headerDotStyle: { backgroundColor: '#a78bfa' },
      activeLineStyle: {
        backgroundColor: 'color-mix(in srgb,#a78bfa 20%,transparent)',
        color: 'var(--bright)',
        boxShadow: '0 0 16px rgba(167,139,250,0.3)',
      },
      stripStyle: { backgroundColor: 'color-mix(in srgb,#a78bfa 8%,transparent)', borderColor: 'color-mix(in srgb,#a78bfa 30%,transparent)' },
      dotStyle: { backgroundColor: '#a78bfa' },
      labelStyle: { color: 'color-mix(in srgb,#a78bfa 70%,transparent)' },
      progressStyle: { backgroundColor: '#a78bfa' },
    },
  };
  const ec = eventConfig[frame.event] ?? eventConfig.assign;

  // ── Variable card colour config (inline styles) ───────────────────────────
  type CardStyles = { cardStyle: React.CSSProperties; labelStyle: React.CSSProperties; valueStyle: React.CSSProperties };
  const varCardStyles: Record<string, CardStyles> = {
    level: {
      cardStyle: {
        background: 'linear-gradient(135deg,color-mix(in srgb,#fcd34d 15%,transparent),color-mix(in srgb,#fcd34d 5%,transparent))',
        borderColor: 'color-mix(in srgb,#fcd34d 25%,transparent)',
      },
      labelStyle: { color: 'color-mix(in srgb,#fcd34d 60%,transparent)' },
      valueStyle: { color: '#fcd34d' },
    },
    topic: {
      cardStyle: {
        background: 'linear-gradient(135deg,color-mix(in srgb,#38bdf8 15%,transparent),color-mix(in srgb,#38bdf8 5%,transparent))',
        borderColor: 'color-mix(in srgb,#38bdf8 25%,transparent)',
      },
      labelStyle: { color: 'color-mix(in srgb,#38bdf8 60%,transparent)' },
      valueStyle: { color: '#38bdf8' },
    },
    topics: {
      cardStyle: {
        background: 'linear-gradient(135deg,color-mix(in srgb,#4ade80 15%,transparent),color-mix(in srgb,#4ade80 5%,transparent))',
        borderColor: 'color-mix(in srgb,#4ade80 25%,transparent)',
      },
      labelStyle: { color: 'color-mix(in srgb,#4ade80 60%,transparent)' },
      valueStyle: { color: '#4ade80' },
    },
  };
  const defaultCardStyle: CardStyles = {
    cardStyle: { backgroundColor: 'var(--parchment)' },
    labelStyle: { color: 'color-mix(in srgb,var(--ink) 42%,transparent)' },
    valueStyle: { color: 'var(--ink)' },
  };

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % heroExecutionFrames.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-10 lg:px-16">
      {/* Massive ambient background orbs */}
      <div className="ambient-orb left-[-10%] top-0 h-[600px] w-[600px] bg-signal/15 opacity-60 blur-[100px]" />
      <div className="ambient-orb ambient-orb--slow right-[-5%] top-20 h-[500px] w-[500px] bg-wave/20 opacity-50 blur-[100px]" />
      <div className="ambient-orb ambient-orb--delay left-[40%] top-[-20%] h-[400px] w-[400px] bg-neon/15 opacity-40 blur-[80px]" />

      <div className="site-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center xl:gap-16">
        {/* Left: headline + CTAs + stats */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-parchment px-4 py-2 text-sm font-medium text-ink/65"
          >
            <Sparkles className="h-3.5 w-3.5 text-signal" />
            {t('badge')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl"
          >
            {t('headlineStart')}
            <span className="text-gradient-signal">{t('headlineHighlight1')}</span>{' '}
            <span className="text-gradient-wave">{t('headlineHighlight2')}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: 'easeOut' }}
            className="mt-6 max-w-md text-base leading-8 text-ink/65"
          >
            {t('description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/playground"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-signal to-amber px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(255,101,53,0.4)] glow-signal transition hover:opacity-90"
            >
              <PlayCircle className="h-4 w-4" />
              {t('openPlayground')}
            </Link>
            <a
              href="#tracks"
              className="inline-flex items-center rounded-full bg-parchment px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist"
            >
              {t('exploreTracks')}
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {heroStats.map((item) => {
              const statKeyMap: Record<string, string> = {
                'Guided tracks': 'guidedTracks',
                'Algorithm lessons': 'algorithmLessons',
              };
              const labelKey = statKeyMap[item.label] || 'installBrowserFirst';

              return (
                <div key={item.label} className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-bright">{item.value}</span>
                  <span className="text-sm text-ink/55">{t(labelKey as any)}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right: live execution preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="card-elevated relative overflow-hidden rounded-[24px] sm:rounded-[32px] p-4 sm:p-5"
        >
          {/* Header */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-[0.18em] text-ink/42">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full transition-colors duration-300" style={ec.headerDotStyle} />
              {t('executionPreview')}
            </div>
            <span suppressHydrationWarning>
              {t('step')} {frameIndex + 1} / {heroExecutionFrames.length}
            </span>
          </div>

          {/* Code lines */}
          <div className="rounded-[20px] code-preview-box p-4">
            <div className="space-y-1 font-mono text-sm">
              {heroPreviewLines.map((item) => {
                const active = item.number === frame.line;
                return (
                  <motion.div
                    key={item.number}
                    layout
                    transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                    className={`rounded-xl px-3 py-2 ${active ? '' : 'text-ink/45'}`}
                    style={active ? ec.activeLineStyle : {}}
                  >
                    <span className="mr-3 select-none text-ink/28">{item.number}</span>
                    {item.code}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Memory cards + step label */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            {/* Memory cards — show only numeric/short vars */}
            {frame.memory.slice(0, 2).map((item: { name: string; value: string }, index: number) => {
              const cs = varCardStyles[item.name] ?? defaultCardStyle;
              return (
                <motion.div
                  key={`${frameIndex}-${item.name}`}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[16px] p-3 border"
                  style={cs.cardStyle}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={cs.labelStyle}>
                    {item.name}
                  </div>
                  <div
                    className={`mt-1.5 font-mono font-semibold leading-tight ${item.value.length > 15 ? 'break-all' : 'truncate'}`}
                    style={{ ...cs.valueStyle, fontSize: item.value.length > 15 ? '12px' : item.value.length > 9 ? '14px' : '20px' }}
                  >
                    {item.value}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Explanation strip */}
          <AnimatePresence mode="wait">
            <motion.div
              key={frameIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="mt-3 flex items-start gap-3 rounded-[16px] border px-4 py-3 shadow-[0_0_16px_rgba(0,0,0,0.06)]"
              style={ec.stripStyle}
            >
              <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full" style={ec.dotStyle} />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={ec.labelStyle}>
                  {frame.event}
                </div>
                <div className="mt-0.5 text-sm leading-6 text-ink/70">{frame.summary}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="mt-4 h-1 overflow-hidden rounded-full progress-track">
            <motion.div
              animate={{ width: `${((frameIndex + 1) / heroExecutionFrames.length) * 100}%` }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="h-full rounded-full transition-colors duration-300"
              style={ec.progressStyle}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
