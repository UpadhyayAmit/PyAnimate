"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PlayCircle, Sparkles } from "lucide-react";
import { executionFrames, heroStats } from "@/data/course";

const heroPreviewLines = [
  { number: 1, code: "score = 0" },
  { number: 2, code: "steps = [2, 4, 6]" },
  { number: 4, code: "for step in steps:" },
  { number: 5, code: "    score = score + step" },
  { number: 6, code: '    print("score:", score)' },
  { number: 8, code: 'print("final:", score)' },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [frameIndex, setFrameIndex] = useState(0);
  const frame = executionFrames[frameIndex];

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % executionFrames.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-10 sm:px-10 lg:px-16">
      <div className="ambient-orb left-[6%] top-16 h-48 w-48 bg-amber/20" />
      <div className="ambient-orb ambient-orb--slow ambient-orb--delay right-[8%] top-20 h-56 w-56 bg-wave/15" />

      <div className="site-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center xl:gap-16">
        {/* Left: headline + CTAs + stats */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-parchment px-4 py-2 text-sm font-medium text-ink/65"
          >
            <Sparkles className="h-3.5 w-3.5 text-signal" />
            Python concepts that move, react, and explain themselves
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="max-w-xl text-5xl font-semibold leading-[1.12] tracking-tight sm:text-6xl"
          >
            Learn Python by <span className="text-gradient-signal">seeing every idea</span>{" "}<span className="text-gradient-wave">unfold in motion.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-md text-base leading-8 text-ink/65"
          >
            PyAnimate blends a browser playground, visual execution, guided prompts, and
            level-based tracks so you can build Python intuition faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/playground"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-signal to-amber px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(255,101,53,0.4)] glow-signal transition hover:opacity-90"
            >
              <PlayCircle className="h-4 w-4" />
              Open Playground
            </Link>
            <a
              href="#tracks"
              className="inline-flex items-center rounded-full bg-parchment px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist"
            >
              Explore Tracks
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {heroStats.map((item) => (
              <div key={item.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-bright">{item.value}</span>
                <span className="text-sm text-ink/55">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: live execution preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="card-elevated relative overflow-hidden rounded-[32px] p-5"
        >
          {/* Header */}
          <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-ink/42">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal" />
              Execution Preview
            </div>
            <span>
              Step {frameIndex + 1} / {executionFrames.length}
            </span>
          </div>

          {/* Code lines */}
          <div className="rounded-[20px] bg-[#080c12] p-4">
            <div className="space-y-1 font-mono text-sm">
              {heroPreviewLines.map((item) => {
                const active = item.number === frame.line;
                return (
                  <motion.div
                    key={item.number}
                    layout
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    className={`rounded-xl px-3 py-2 ${
                      active
                        ? "bg-signal/25 text-white shadow-[0_0_16px_rgba(255,101,53,0.25)]"
                        : "text-white/45"
                    }`}
                  >
                    <span className="mr-3 select-none text-white/25">{item.number}</span>
                    {item.code}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Memory cards + step label */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            {/* Memory cards — show only numeric/short vars */}
            {frame.memory.slice(0, 2).map((item, index) => (
              <motion.div
                key={`${frameIndex}-${item.name}`}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[16px] bg-parchment p-3"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/42">
                  {item.name}
                </div>
                <div className="mt-1.5 truncate font-mono text-xl font-semibold text-ink">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Explanation strip */}
          <AnimatePresence mode="wait">
            <motion.div
              key={frameIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="mt-3 flex items-start gap-3 rounded-[16px] border border-signal/30 bg-signal/8 px-4 py-3 shadow-[0_0_16px_rgba(255,101,53,0.1)]"
            >
              <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-signal" />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signal/70">
                  {frame.event}
                </div>
                <div className="mt-0.5 text-sm leading-6 text-ink/70">{frame.summary}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/8">
            <motion.div
              animate={{ width: `${((frameIndex + 1) / executionFrames.length) * 100}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-full rounded-full bg-signal"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
