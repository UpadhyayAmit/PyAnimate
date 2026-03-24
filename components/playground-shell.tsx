"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  Bot,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  Gauge,
  Lightbulb,
  Loader2,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Terminal,
  WandSparkles,
  Zap,
} from "lucide-react";
import { playgroundLessons } from "@/data/course";
import { MonacoPythonEditor } from "@/components/monaco-python-editor";
import { ComplexityChart } from "@/components/complexity-chart";
import { usePyodide } from "@/lib/use-pyodide";
import { useProgress } from "@/lib/use-progress";
import type { ExecutionFrame } from "@/data/course";

const SPEEDS = [
  { label: "0.5×", ms: 3600 },
  { label: "1×", ms: 1900 },
  { label: "2×", ms: 900 },
];

export function PlaygroundShell() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const { status: pyStatus, runCode } = usePyodide();
  const { markComplete, isComplete, totalXP } = useProgress();

  // Derive initial lesson from ?lesson= query param
  const initialId = searchParams.get("lesson") ?? playgroundLessons[0].id;
  const [selectedLessonId, setSelectedLessonId] = useState(
    playgroundLessons.find((l) => l.id === initialId)?.id ?? playgroundLessons[0].id,
  );
  const [frameIndex, setFrameIndex] = useState(0);
  const [speedIndex, setSpeedIndex] = useState(1); // default 1×
  const [code, setCode] = useState(playgroundLessons[0].starterCode);
  const [isAutoPlaying, setIsAutoPlaying] = useState(!shouldReduceMotion);
  const [activeFrames, setActiveFrames] = useState<ExecutionFrame[]>(
    playgroundLessons[0].executionFrames,
  );
  const [runOutput, setRunOutput] = useState<string[]>([]);
  const [runError, setRunError] = useState<string | null>(null);
  const [hasRun, setHasRun] = useState(false);
  const [activeTab, setActiveTab] = useState<"explain" | "complexity">("explain");

  const lesson =
    playgroundLessons.find((item) => item.id === selectedLessonId) ?? playgroundLessons[0];
  const frame = activeFrames[Math.min(frameIndex, activeFrames.length - 1)];

  const visibleOutput = hasRun
    ? runOutput.slice(0, Math.ceil(((frameIndex + 1) / activeFrames.length) * runOutput.length))
    : (activeFrames[frameIndex]?.output ?? lesson.output).slice(
        0,
        Math.max(1, activeFrames[frameIndex]?.output?.length ?? lesson.output.length),
      );

  // Sync URL when lesson changes
  function selectLesson(id: string) {
    setSelectedLessonId(id);
    router.replace(`/playground?lesson=${id}`, { scroll: false });
  }

  useEffect(() => {
    setFrameIndex(0);
    setCode(lesson.starterCode);
    setIsAutoPlaying(!shouldReduceMotion);
    setActiveFrames(lesson.executionFrames);
    setRunOutput([]);
    setRunError(null);
    setHasRun(false);
  }, [selectedLessonId, shouldReduceMotion]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (shouldReduceMotion) setIsAutoPlaying(false);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const ms = SPEEDS[speedIndex].ms;
    const timer = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % activeFrames.length);
    }, ms);
    return () => window.clearInterval(timer);
  }, [isAutoPlaying, activeFrames.length, speedIndex]);

  function stepBack() {
    setIsAutoPlaying(false);
    setFrameIndex((i) => Math.max(0, i - 1));
  }

  function stepForward() {
    setIsAutoPlaying(false);
    setFrameIndex((i) => Math.min(activeFrames.length - 1, i + 1));
  }

  async function handleRun() {
    if (pyStatus === "loading" || pyStatus === "running") return;
    setIsAutoPlaying(false);
    setRunError(null);
    try {
      const result = await runCode(code);
      if (result.frames.length > 0) {
        setActiveFrames(result.frames);
        const lastFrame = result.frames[result.frames.length - 1] as any;
        setRunOutput(lastFrame?.output ?? []);
      }
      if (result.error) setRunError(result.error);
      setHasRun(true);
      setFrameIndex(0);
      setIsAutoPlaying(true);
      markComplete(lesson.id);
    } catch (err) {
      setRunError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  const pyStatusLabel =
    pyStatus === "loading" ? "Loading Python…"
    : pyStatus === "running" ? "Running…"
    : pyStatus === "error" ? "Python error"
    : "Python ready";

  return (
    <div className="site-shell relative px-6 py-10 sm:px-10 lg:px-16">
      <div className="ambient-orb left-[5%] top-24 h-40 w-40 bg-amber/15" />
      <div className="ambient-orb ambient-orb--slow ambient-orb--delay right-[6%] top-20 h-48 w-48 bg-wave/10" />

      {/* Header strip */}
      <section className="relative z-10 mb-6 card-elevated rounded-[32px] p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-signal">
              <Sparkles className="h-3 w-3" />
              Interactive Python Lab
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-snug text-bright sm:text-4xl">
              Learn, edit, replay, and understand each step before moving on.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/60">
              The playground auto-runs on load. Hit{" "}
              <strong className="font-semibold text-ink">Run My Code</strong> to trace your own
              Python — every step animated live.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:items-end">
            {[
              { icon: BrainCircuit, label: "Explain", value: "Line by line" },
              { icon: Gauge, label: "Replay", value: "Step by step" },
              { icon: Bot, label: "Challenge", value: "Guided prompts" },
              { icon: Zap, label: "XP", value: `${totalXP} pts` },
            ].map((item) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full bg-parchment px-4 py-2 text-sm"
              >
                <item.icon className="h-3.5 w-3.5 text-signal" />
                <span className="font-semibold text-ink">{item.label}</span>
                <span className="text-ink/40">·</span>
                <span className="text-ink/60">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Playback controls row */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {/* Step back */}
          <button
            type="button"
            onClick={stepBack}
            disabled={frameIndex === 0}
            className="inline-flex items-center gap-1.5 rounded-full bg-parchment px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-mist disabled:opacity-35"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>

          {/* Play / Pause */}
          <button
            type="button"
            onClick={() => setIsAutoPlaying((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-signal/90"
          >
            {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isAutoPlaying ? "Pause" : "Play"}
          </button>

          {/* Step forward */}
          <button
            type="button"
            onClick={stepForward}
            disabled={frameIndex === activeFrames.length - 1}
            className="inline-flex items-center gap-1.5 rounded-full bg-parchment px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-mist disabled:opacity-35"
          >
            Forward
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Reset */}
          <button
            type="button"
            onClick={() => { setFrameIndex(0); setIsAutoPlaying(false); }}
            className="inline-flex items-center gap-1.5 rounded-full bg-parchment px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>

          {/* Speed control */}
          <div className="ml-1 flex items-center gap-1 rounded-full bg-parchment p-1">
            {SPEEDS.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setSpeedIndex(i)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  speedIndex === i ? "bg-signal/20 text-signal" : "text-ink/55 hover:text-ink"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3-column workspace */}
      <section className="relative z-10 grid gap-6 xl:grid-cols-[300px_minmax(0,1.18fr)_360px] 2xl:grid-cols-[320px_minmax(0,1.25fr)_380px]">

        {/* ── Left: lesson queue ── */}
        <aside className="card-elevated rounded-[32px] p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/42">
              Lesson Queue
            </div>
            <div className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] ${
              isAutoPlaying ? "bg-leaf/12 text-leaf" : "bg-mist text-ink/55"
            }`}>
              {isAutoPlaying ? "Auto running" : "Manual mode"}
            </div>
          </div>
          <div className="mt-4 border-t border-white/[0.08] pt-4 space-y-2">
            {playgroundLessons.map((item, index) => {
              const active = item.id === lesson.id;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  onClick={() => selectLesson(item.id)}
                  className={`w-full rounded-[24px] border p-4 text-left transition ${
                    active
                      ? "border-signal/20 bg-signal/10 shadow-[0_4px_16px_rgba(232,98,42,0.1)]"
                      : "border-white/[0.06] bg-parchment hover:bg-mist hover:border-white/[0.10]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${active ? item.levelColor : "text-ink/42"}`}>
                      {item.level}
                    </span>
                    <span className="text-xs text-ink/42">{item.duration}</span>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-bright">{item.title}</div>
                  {isComplete(item.id) && (
                    <div className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-leaf">
                      <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                      Completed
                    </div>
                  )}
                  <p className="mt-1.5 text-xs leading-5 text-ink/55">{item.objective}</p>
                  {/* Complexity badge */}
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-full bg-parchment px-2.5 py-1 text-[10px] font-medium text-ink/50">
                      Time: {item.timeComplexity}
                    </span>
                    <span className="rounded-full bg-parchment px-2.5 py-1 text-[10px] font-medium text-ink/50">
                      Space: {item.spaceComplexity}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </aside>

        {/* ── Centre: editor + timeline ── */}
        <section className="space-y-6">
          <div className="card-elevated rounded-[32px] p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/42">
                  Code Studio
                </div>
                <h2 className="mt-2 text-3xl font-semibold text-bright">{lesson.title}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink">
                  Monaco Ready
                </div>
                <div className={`rounded-full px-4 py-2 text-sm font-medium ${
                  pyStatus === "ready" ? "bg-leaf/12 text-leaf"
                  : pyStatus === "error" ? "bg-signal/12 text-signal"
                  : "bg-amber/12 text-amber"
                }`}>
                  {pyStatus === "loading" && <Loader2 className="mr-1.5 inline h-3.5 w-3.5 animate-spin" />}
                  {pyStatusLabel}
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/6">
              <motion.div
                animate={{ width: `${((frameIndex + 1) / activeFrames.length) * 100}%` }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full rounded-full bg-signal"
              />
            </div>

            <MonacoPythonEditor value={code} onChange={setCode} highlightedLine={frame?.line} />

            {/* Run + step buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleRun}
                disabled={pyStatus === "loading" || pyStatus === "running"}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  pyStatus === "loading" || pyStatus === "running"
                    ? "cursor-not-allowed bg-white/6 text-ink/40"
                    : "bg-signal text-white shadow-[0_4px_14px_rgba(232,98,42,0.3)] hover:bg-signal/90"
                }`}
              >
                {pyStatus === "running" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Terminal className="h-4 w-4" />}
                {pyStatus === "running" ? "Running…" : "Run My Code"}
              </button>

              <div className="flex flex-wrap gap-2">
                {activeFrames.map((item, index) => (
                  <button
                    key={`${item.event}-${index}`}
                    type="button"
                    onClick={() => { setIsAutoPlaying(false); setFrameIndex(index); }}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      index === frameIndex
                        ? "bg-signal text-white"
                        : "bg-parchment text-ink hover:bg-mist"
                    }`}
                  >
                    {item.event}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {runError && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-4 flex items-start gap-3 rounded-[18px] border border-signal/20 bg-signal/6 px-4 py-3 text-sm text-signal"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="font-mono leading-6">{runError}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Execution timeline + challenge */}
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="card-elevated rounded-[32px] p-5">
              <div className="flex items-center gap-3">
                <CirclePlay className="h-5 w-5 text-signal" />
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/42">
                  Execution Timeline
                </div>
                {hasRun && (
                  <span className="ml-auto rounded-full border border-leaf/25 bg-leaf/10 px-2.5 py-1 text-xs font-semibold text-leaf">
                    Live
                  </span>
                )}
              </div>
              <div className="mt-5 space-y-3">
                {activeFrames.map((item, index) => {
                  const active = index === frameIndex;
                  return (
                    <button
                      key={`${item.summary}-${index}`}
                      type="button"
                      onClick={() => { setIsAutoPlaying(false); setFrameIndex(index); }}
                      className={`flex w-full items-start gap-4 rounded-[22px] px-4 py-4 text-left transition ${
                        active
                          ? "bg-signal/10 shadow-[0_4px_16px_rgba(232,98,42,0.08)]"
                          : "bg-parchment hover:bg-mist"
                      }`}
                    >
                      <motion.div
                        animate={{ scale: active ? [1, 1.22, 1] : 1, opacity: active ? 1 : 0.45 }}
                        transition={{ duration: active ? 1.2 : 0.2, repeat: active && isAutoPlaying ? Infinity : 0 }}
                        className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-signal"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-bright">
                          {item.event} · line {item.line}
                        </div>
                        <div className="mt-1 text-sm leading-6 text-ink/60">{item.summary}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-5">
              <motion.div
                key={`challenge-${lesson.id}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-elevated rounded-[32px] p-5"
              >
                <div className="flex items-center gap-3">
                  <WandSparkles className="h-4.5 w-4.5 text-signal" />
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/42">Challenge</div>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink/65">{lesson.prompt}</p>
              </motion.div>

              <motion.div
                key={`hint-${lesson.id}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 }}
                className="card-elevated rounded-[32px] p-5"
              >
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-4 w-4 text-amber" />
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/42">Hint</div>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink/65">{lesson.hint}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Right: explain / complexity + memory + output ── */}
        <aside className="space-y-5">
          {/* Tab: Explain / Complexity */}
          <div className="card-elevated rounded-[32px] overflow-hidden">
            {/* Tab bar */}
            <div className="flex border-b border-white/6">
              <button
                type="button"
                onClick={() => setActiveTab("explain")}
                className={`flex-1 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  activeTab === "explain" ? "bg-signal/6 text-signal" : "text-ink/42 hover:text-ink"
                }`}
              >
                Explain
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("complexity")}
                className={`flex-1 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  activeTab === "complexity" ? "bg-signal/6 text-signal" : "text-ink/42 hover:text-ink"
                }`}
              >
                Complexity
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "explain" ? (
                <motion.div
                  key={`explain-${frameIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-5"
                >
                  <div className="text-xl font-semibold text-bright">Line {frame?.line ?? "–"}</div>
                  <p className="mt-2 text-sm font-medium leading-6 text-ink/70">{frame?.summary}</p>

                  {frame?.why && (
                    <div className="mt-4 rounded-[16px] border border-amber/20 bg-amber/6 p-4">
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-amber/70">
                        Why this approach
                      </div>
                      <p className="text-sm leading-6 text-ink/70">{frame.why}</p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="complexity"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 space-y-4"
                >
                  {/* Big O summary */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-[16px] bg-mist p-3 text-center">
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/40">Time</div>
                      <div className="mt-1.5 font-mono text-lg font-semibold text-bright">{lesson.timeComplexity}</div>
                    </div>
                    <div className="rounded-[16px] bg-mist p-3 text-center">
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/40">Space</div>
                      <div className="mt-1.5 font-mono text-lg font-semibold text-bright">{lesson.spaceComplexity}</div>
                    </div>
                  </div>

                  {/* Approach */}
                  <div>
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
                      Approach
                    </div>
                    <p className="text-sm leading-6 text-ink/65">{lesson.approach}</p>
                  </div>

                  {/* Use cases */}
                  <div>
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
                      Real-world use cases
                    </div>
                    <ul className="space-y-2">
                      {lesson.useCases.map((uc) => (
                        <li key={uc} className="flex items-start gap-2 text-sm text-ink/65">
                          <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal/60" />
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Big O chart */}
                  <div>
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
                      Growth curve
                    </div>
                    <ComplexityChart
                      timeComplexity={lesson.timeComplexity}
                      spaceComplexity={lesson.spaceComplexity}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Memory view */}
          <div className="card-elevated rounded-[32px] p-5">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink/42">
              Memory View
            </div>
            <div className="grid gap-3">
              <AnimatePresence mode="popLayout">
                {frame?.memory.map((entry, index) => (
                  <motion.div
                    key={`${frameIndex}-${entry.name}`}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.96 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-[18px] bg-mist p-3"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                      {entry.name}
                    </div>
                    <div className="mt-1.5 truncate font-mono text-xl font-semibold text-bright">
                      {entry.value}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Output */}
          <div className="card-elevated rounded-[32px] p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/42">Output</div>
              <div className="text-xs text-ink/40">{visibleOutput.length} lines</div>
            </div>
            <div className="rounded-[18px] bg-[#080c12] px-4 py-4 font-mono text-sm leading-7 text-white/80">
              {visibleOutput.length === 0 ? (
                <span className="text-white/30">No output yet</span>
              ) : (
                <AnimatePresence mode="popLayout">
                  {visibleOutput.map((line, index) => (
                    <motion.div
                      key={`${line}-${index}`}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      {line}
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
