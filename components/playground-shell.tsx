"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  Bot,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  Database,
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
import confetti from "canvas-confetti";
import { playgroundLessons } from "@/data/course";
import { MonacoPythonEditor } from "@/components/monaco-python-editor";
import { ComplexityChart } from "@/components/complexity-chart";
import { usePyodide } from "@/lib/use-pyodide";
import { useProgress } from "@/lib/use-progress";
import type { ExecutionFrame } from "@/data/course";
import { useTranslations } from "next-intl";

const SPEEDS = [
  { label: "0.5×", ms: 3600 },
  { label: "1×", ms: 1900 },
  { label: "2×", ms: 900 },
];

export function PlaygroundShell() {
  const t = useTranslations("Playground");
  const searchParams = useSearchParams();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const { status: pyStatus, runCode } = usePyodide();
  const { markComplete, markStepComplete, isComplete, totalXP, lastLessonId, setLastLessonId } = useProgress();
  const [mounted, setMounted] = useState(false);

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

  const currentIndex = playgroundLessons.findIndex(l => l.id === selectedLessonId);
  const nextLesson = playgroundLessons[currentIndex + 1];
  const isFinished = frameIndex === activeFrames.length - 1;

  const levelOrder = ["foundation", "beginner", "intermediate", "advanced", "mastery"];
  const levelColors: Record<string, string> = {
    foundation: "text-violet-400",
    beginner: "text-sky-400",
    intermediate: "text-emerald-400",
    advanced: "text-rose-400",
    mastery: "text-amber-400",
  };
  const grouped = levelOrder
    .map((lvl) => ({ level: lvl, items: playgroundLessons.filter((l) => l.level.toLowerCase() === lvl) }))
    .filter((g) => g.items.length > 0);

  const [expandedLevels, setExpandedLevels] = useState<Set<string>>(
    () => new Set([lesson.level.toLowerCase()]),
  );
  const [activeFilter, setActiveFilter] = useState<string>(lesson.level.toLowerCase());

  const toggleLevel = (lvl: string) => {
    setExpandedLevels((prev) => {
      const next = new Set(prev);
      if (next.has(lvl)) next.delete(lvl);
      else next.add(lvl);
      return next;
    });
  };

  useEffect(() => {
    setMounted(true);
    // Auto-resume from saved lesson if no ?lesson URL param
    if (!searchParams.get("lesson") && lastLessonId && selectedLessonId !== lastLessonId) {
      selectLesson(lastLessonId);
      setActiveFilter(playgroundLessons.find(l => l.id === lastLessonId)?.level.toLowerCase() ?? activeFilter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, searchParams]);

  // Keyboard navigation for manual stepping
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.tagName === "INPUT") return;
      if (e.key === "ArrowRight") {
        setIsAutoPlaying(false);
        setFrameIndex((prev) => Math.min(activeFrames.length - 1, prev + 1));
      } else if (e.key === "ArrowLeft") {
        setIsAutoPlaying(false);
        setFrameIndex((prev) => Math.max(0, prev - 1));
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeFrames.length]);

  // Give XP on step completion
  useEffect(() => {
    if (frameIndex > 0 && selectedLessonId) {
      markStepComplete(`${selectedLessonId}-step-${frameIndex}`, 5);
    }
  }, [frameIndex, selectedLessonId, markStepComplete]);

  const visibleOutput = hasRun
    ? runOutput.slice(0, Math.ceil(((frameIndex + 1) / activeFrames.length) * runOutput.length))
    : (activeFrames[frameIndex]?.output ?? lesson.output).slice(
        0,
        Math.max(1, activeFrames[frameIndex]?.output?.length ?? lesson.output.length),
      );

  const timelineRef = useRef<HTMLDivElement>(null);

  // Auto-scroll timeline when frame changes
  useEffect(() => {
    if (!timelineRef.current) return;
    const activeBtn = timelineRef.current.querySelector('[data-active="true"]');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [frameIndex]);

  // Sync URL when lesson changes
  function selectLesson(id: string) {
    setSelectedLessonId(id);
    setLastLessonId(id);
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
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff6535', '#38bdf8', '#4ade80', '#fbbf24']
      });
    } catch (err) {
      setRunError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  const pyStatusLabel =
    pyStatus === "loading" ? t("runStatus.loading")
    : pyStatus === "running" ? t("runStatus.running")
    : pyStatus === "error" ? t("runStatus.error")
    : t("runStatus.ready");

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
              {t("interactiveLab")}
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-snug text-bright sm:text-4xl">
              {t("headline")}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/60" dangerouslySetInnerHTML={{ __html: t("subheadline", { runMyCode: `<strong class="font-semibold text-ink">${t("runMyCode")}</strong>` }) }} />
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:items-end">
            {[
              { icon: BrainCircuit, label: t("explainLabel"), value: t("lineByLine") },
              { icon: Gauge, label: t("replayLabel"), value: t("stepByStep") },
              { icon: Bot, label: t("challengeLabel"), value: t("guidedPrompts") },
              { icon: Zap, label: "XP", value: mounted ? `${totalXP} pts` : "..." },
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
            {t("back") ?? "Back"}
          </button>

          {/* Play / Pause */}
          <button
            type="button"
            onClick={() => setIsAutoPlaying((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-signal/90"
          >
            {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isAutoPlaying ? (t("pause") ?? "Pause") : (t("play") ?? "Play")}
          </button>

          {/* Step forward */}
          <button
            type="button"
            onClick={stepForward}
            disabled={frameIndex === activeFrames.length - 1}
            className="inline-flex items-center gap-1.5 rounded-full bg-parchment px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-mist disabled:opacity-35"
          >
            {t("forward") ?? "Forward"}
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Reset */}
          <button
            type="button"
            onClick={() => { setFrameIndex(0); setIsAutoPlaying(false); }}
            className="inline-flex items-center gap-1.5 rounded-full bg-parchment px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            <RotateCcw className="h-4 w-4" />
            {t("reset") ?? "Reset"}
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

      {/* ── Colorful Animated Track Pipeline ── */}
      <section className="relative z-10 mb-8 rounded-[32px] bg-gradient-to-b from-parchment to-mist border border-white/5 p-8 shadow-xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-signal/80 mb-1">
              Data Flow Pipeline
            </div>
            <h2 className="text-xl font-bold text-bright capitalize">{lesson.level} Track</h2>
          </div>
          <select
            title="Filter pipeline by track"
            value={activeFilter}
            onChange={(e) => {
              setActiveFilter(e.target.value);
              const trackFirstLesson = grouped.find(g => g.level === e.target.value)?.items[0];
              if (trackFirstLesson) selectLesson(trackFirstLesson.id);
            }}
            className="rounded-full bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80 outline-none hover:bg-black/40 border border-white/10"
          >
            {levelOrder.map(lvl => (
              <option key={lvl} value={lvl} className="bg-[#161b22] text-white/90">
                {lvl}
              </option>
            ))}
          </select>
        </div>
        
        <div className="relative">
          {/* Background Track Line */}
          <div className="absolute top-[36px] left-0 w-full h-1.5 -translate-y-1/2 rounded-full bg-white/5" />
          
          {/* Animated Progress Line */}
          <motion.div
            className="absolute top-[36px] left-0 h-1.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-signal via-amber to-leaf"
            initial={{ width: "0%" }}
            animate={{ 
              width: `${(grouped.find(g => g.level === (activeFilter === "all" ? lesson.level.toLowerCase() : activeFilter))?.items.findIndex(i => i.id === lesson.id) ?? 0) / Math.max(1, (grouped.find(g => g.level === (activeFilter === "all" ? lesson.level.toLowerCase() : activeFilter))?.items.length ?? 2) - 1) * 100}%` 
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 8px rgba(232,98,42,0.6))" }}
          />

          <div className="relative flex items-center justify-between gap-4 overflow-x-auto custom-scrollbar pb-4 pt-2">
            {grouped.find(g => g.level === (activeFilter === "all" ? lesson.level.toLowerCase() : activeFilter))?.items.map((item, i) => {
              const active = item.id === lesson.id;
              const completed = mounted && isComplete(item.id);
              
              return (
                <div key={item.id} className="relative flex flex-col items-center shrink-0 min-w-[120px] group">
                  <button
                    onClick={() => selectLesson(item.id)}
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 bg-[#0c121a] transition-all duration-300 ${
                      active ? "border-signal scale-110 shadow-[inset_0_0_12px_rgba(232,98,42,0.4),0_0_24px_rgba(232,98,42,0.4)]" :
                      completed ? "border-leaf hover:scale-105 shadow-[inset_0_0_12px_rgba(74,222,128,0.2)]" :
                      "border-white/10 hover:border-white/20 hover:scale-105"
                    }`}
                  >
                    {active ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-signal/50 border-t-transparent"
                      />
                    ) : null}
                    {completed && !active ? (
                      <CheckCircle2 className="h-6 w-6 text-leaf" />
                    ) : (
                      <span className={`text-sm font-bold ${active ? "text-signal" : "text-white/40"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </button>
                  <div className={`mt-4 text-center text-xs font-semibold leading-relaxed transition-colors line-clamp-2 ${
                    active ? "text-bright" : completed ? "text-leaf/80" : "text-ink/50 group-hover:text-ink/80"
                  }`}>
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Workspace - 3 Columns carefully balanced */}
      <section className="relative z-10 grid gap-6 grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] xl:grid-cols-[340px_minmax(0,1.2fr)_340px] 2xl:grid-cols-[380px_minmax(0,1.3fr)_380px]">

        {/* ── Left Column: Explain, Complexity, Challenge ── */}
        <aside className="space-y-6 flex flex-col">
          
          {/* Explain block */}
          <motion.div
            key={`explain-${frameIndex}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-elevated rounded-[32px] p-6 shadow-md"
          >
             <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="h-4 w-4 text-signal" />
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-ink/50">{t("explain")}</div>
             </div>
             
             <div className="text-xl font-bold text-bright">Line {frame?.line ?? "–"}</div>
             <p className="mt-3 text-sm font-medium leading-relaxed text-ink/80">{frame?.summary}</p>

             {frame?.why && (
               <div className="mt-5 rounded-[20px] border border-amber/20 bg-gradient-to-br from-amber/10 to-transparent p-5">
                 <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-amber/80 flex items-center gap-1.5">
                   <Lightbulb className="h-3 w-3" /> {t("whyThisApproach")}
                 </div>
                 <p className="text-xs leading-relaxed text-ink/75">{frame.why}</p>
               </div>
             )}
          </motion.div>

          {/* Complexity block */}
          <div className="card-elevated rounded-[32px] p-6 shadow-md">
             <div className="flex items-center gap-2 mb-4">
                <Gauge className="h-4 w-4 text-amber" />
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-ink/50">{t("complexity")}</div>
             </div>
             
             <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="rounded-[20px] bg-white/[0.03] border border-white/5 p-4 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-1">{t("timeLabel")}</div>
                  <div className="font-mono text-lg font-bold text-leaf">{lesson.timeComplexity}</div>
                </div>
                <div className="rounded-[20px] bg-white/[0.03] border border-white/5 p-4 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-1">{t("spaceLabel")}</div>
                  <div className="font-mono text-lg font-bold text-sky-400">{lesson.spaceComplexity}</div>
                </div>
             </div>

             <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">{t("complexityOverview")}</div>
             <div className="w-full mt-2 rounded-xl bg-black/20 overflow-hidden">
                <ComplexityChart timeComplexity={lesson.timeComplexity} spaceComplexity={lesson.spaceComplexity} />
             </div>
          </div>

          {/* Challenge & Hint block */}
          <div className="card-elevated rounded-[32px] p-6 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <WandSparkles className="h-4 w-4 text-signal" />
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">{t("challenge")}</div>
              </div>
              <p className="text-sm leading-relaxed text-ink/80">{lesson.prompt}</p>

              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="h-3.5 w-3.5 text-amber" />
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber/70">{t("hint")}</div>
                </div>
                <p className="text-xs leading-relaxed text-ink/60">{lesson.hint}</p>
              </div>
          </div>
        </aside>

        {/* ── Center Column: Code Editor & Output ── */}
        <section className="space-y-6 flex flex-col">
          <div className="card-elevated rounded-[32px] p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/42">
                  {t("codeStudio")}
                </div>
                <h2 className="mt-2 text-3xl font-semibold text-bright">{lesson.title}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink">
                  {t("monacoReady")}
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
                {pyStatus === "running" ? t("runStatus.running") : t("runMyCode")}
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

          {/* Output block (moved exactly below editor) */}
          <div className="card-elevated rounded-[32px] p-6 shadow-md">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-ink/50" />
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-ink/50">{t("outputConsole")}</div>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 bg-white/5 px-2 py-0.5 rounded-full">
                {visibleOutput.length} lines
              </div>
            </div>
            <div className="rounded-[20px] bg-[#0c121a] border border-black/50 px-5 py-4 font-mono text-sm leading-8 text-white/80 min-h-[120px]">
              {visibleOutput.length === 0 ? (
                <span className="text-white/20 italic">{t("noOutputYet")}</span>
              ) : (
                <AnimatePresence mode="popLayout">
                  {visibleOutput.map((line, index) => (
                    <motion.div
                      key={`${line}-${index}`}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ delay: index * 0.03 }}
                      className="border-b border-white/5 last:border-0 pb-1 last:pb-0"
                    >
                      <span className="text-sky-400 mr-2">❯</span> {line}
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </div>

          {/* Next Lesson CTA */}
          <AnimatePresence>
            {isFinished && nextLesson && (
              <motion.button
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="flex w-full items-center justify-between rounded-[32px] bg-gradient-to-r from-signal to-amber p-6 font-bold text-white shadow-[0_8px_32px_rgba(232,98,42,0.3)] transition hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(232,98,42,0.4)]"
                onClick={() => selectLesson(nextLesson.id)}
              >
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{t("conceptMastered")}</span>
                  <span className="mt-1 text-2xl">{nextLesson.title}</span>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                  <ChevronRight className="h-7 w-7" />
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </section>

        {/* ── Right Column: Timeline & Memory View ── */}
        <aside className="space-y-6 flex flex-col">
          {/* Timeline Block */}
          <div className="card-elevated rounded-[32px] p-6 shadow-md flex-shrink-0">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <CirclePlay className="h-4 w-4 text-signal" />
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-ink/50">{t("timeline")}</div>
              </div>
              {hasRun && (
                <span className="rounded-full border border-leaf/25 bg-leaf/10 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-leaf">
                  Live
                </span>
              )}
            </div>
            
            {/* Limit max height so it never overlaps */}
            <div ref={timelineRef} className="space-y-3 max-h-[240px] overflow-y-auto pr-3 custom-scrollbar relative">
              {activeFrames.map((item, index) => {
                const active = index === frameIndex;
                return (
                  <button
                    key={`${item.summary}-${index}`}
                    type="button"
                    data-active={active}
                    onClick={() => { setIsAutoPlaying(false); setFrameIndex(index); }}
                    className={`flex w-full items-start gap-4 rounded-[20px] px-4 py-3 text-left transition ${
                      active
                        ? "bg-signal/15 border border-signal/20 shadow-[0_4px_16px_rgba(232,98,42,0.15)]"
                        : "bg-white/[0.03] hover:bg-white/[0.08]"
                    }`}
                  >
                    <motion.div
                      animate={{ scale: active ? [1, 1.3, 1] : 1, opacity: active ? 1 : 0.4 }}
                      transition={{ duration: active ? 1 : 0.2, repeat: active && isAutoPlaying ? Infinity : 0 }}
                      className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${active ? "bg-signal shadow-[0_0_8px_rgba(232,98,42,0.8)]" : "bg-ink/30"}`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className={`text-xs font-bold uppercase tracking-wider ${active ? "text-signal" : "text-ink/60"}`}>
                        line {item.line}
                      </div>
                      <div className={`mt-0.5 text-sm font-medium ${active ? "text-white" : "text-ink/60"}`}>
                        {item.summary}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Physical Data Structure Memory View */}
          <div className="card-elevated rounded-[32px] p-6 shadow-md flex-1 overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-4 w-4 text-sky-400" />
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-ink/50">{t("dataStructures")}</div>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-6">
              {frame?.memory.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full min-h-[160px] rounded-[24px] border border-dashed border-white/10 text-center px-4 bg-black/10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/30 mb-2">Memory Matrix Empty</span>
                  <span className="text-xs font-medium text-ink/50">Run the timeline to visualize blocks mapping into memory space.</span>
                </div>
              )}
              
              {(() => {
                const stackVars = frame?.memory.filter(e => !(e.value.startsWith("[") && e.value.endsWith("]"))) || [];
                const heapVars = frame?.memory.filter(e => e.value.startsWith("[") && e.value.endsWith("]")) || [];

                const getDataType = (val: string) => {
                  if (val === "True" || val === "False") return "bool";
                  if (val.startsWith("'") || val.startsWith('"')) return "str";
                  if (!isNaN(Number(val))) return val.includes(".") ? "float" : "int";
                  return "obj";
                };
                
                return (
                  <>
                    {/* Call Stack Panel */}
                    {stackVars.length > 0 && (
                      <div className="space-y-3">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 border-b border-white/5 pb-2">
                          Call Stack <span className="text-white/20 ml-1">(Primitives & References)</span>
                        </div>
                        <AnimatePresence mode="popLayout">
                          {stackVars.map((entry) => {
                            const prevFrame = frameIndex > 0 ? activeFrames[frameIndex - 1] : null;
                            const prevValue = prevFrame?.memory.find(m => m.name === entry.name)?.value;
                            const changed = frameIndex > 0 && prevValue !== entry.value;
                            const typeLabel = getDataType(entry.value);

                            return (
                              <motion.div
                                key={entry.name}
                                layout
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ 
                                  opacity: 1, x: 0,
                                  backgroundColor: changed ? "rgba(56, 189, 248, 0.15)" : "rgba(255, 255, 255, 0.03)",
                                  borderColor: changed ? "rgba(56, 189, 248, 0.4)" : "rgba(255, 255, 255, 0.05)"
                                }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col gap-2 rounded-[16px] border border-white/5 bg-[#0c121a] py-3 px-4 shadow-inner"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400/80">{entry.name}</span>
                                    <span className="text-[8px] font-semibold tracking-wider text-sky-300/70 px-1.5 py-0.5 rounded bg-sky-400/10 border border-sky-400/20">
                                      {typeLabel}
                                    </span>
                                  </div>
                                  <div className="text-[8px] tracking-widest text-white/20">STACK VALUE</div>
                                </div>
                                <div className="font-mono text-sm font-bold text-white bg-black/40 rounded-lg px-3 py-1.5 border border-white/5 border-l-2 border-l-sky-400/50">
                                  {entry.value}
                                </div>
                              </motion.div>
                            );
                          })}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Heap Space Panel */}
                    {heapVars.length > 0 && (
                      <div className="space-y-3 mt-6">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber/40 border-b border-white/5 pb-2">
                          Heap Space <span className="text-white/20 ml-1">(Objects & Structures)</span>
                        </div>
                        <AnimatePresence mode="popLayout">
                          {heapVars.map((entry) => {
                            const prevFrame = frameIndex > 0 ? activeFrames[frameIndex - 1] : null;
                            const prevValue = prevFrame?.memory.find(m => m.name === entry.name)?.value;
                            const changed = frameIndex > 0 && prevValue !== entry.value;

                            const arrayItems = entry.value.slice(1, -1).split(",").map(i => i.trim()).filter(i => i);
                            const valCounts = new Map<string, number>();
                            const safeArrayItems = arrayItems.map(val => {
                              const count = valCounts.get(val) || 0;
                              valCounts.set(val, count + 1);
                              return { val, key: `${val}-${count}` };
                            });

                            return (
                              <motion.div
                                key={entry.name}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ 
                                  opacity: 1, scale: 1,
                                  backgroundColor: changed ? "rgba(245, 158, 11, 0.15)" : "rgba(255, 255, 255, 0.03)",
                                  borderColor: changed ? "rgba(245, 158, 11, 0.4)" : "rgba(255, 255, 255, 0.05)"
                                }}
                                transition={{ duration: 0.4 }}
                                className="rounded-[24px] border border-white/5 bg-[#0c121a] p-4 shadow-inner relative"
                              >
                                <div className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-amber/30">HEAP • 0x{Math.random().toString(16).slice(2, 6).toUpperCase()}</div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber/80 mb-4 flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span>{entry.name}</span>
                                    <span className="text-[8px] font-semibold tracking-wider text-amber-300/70 px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                                      list ref
                                    </span>
                                  </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                  {safeArrayItems.length > 0 ? safeArrayItems.map((item, idx) => (
                                    <motion.div
                                      layout
                                      key={item.key}
                                      className="relative flex h-10 min-w-[40px] items-center justify-center rounded-[12px] border border-amber/30 bg-gradient-to-br from-amber/20 to-amber-600/10 px-3 font-mono text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.4)]"
                                    >
                                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-[#0c121a] px-1 text-[8px] font-bold text-amber/50">
                                        {idx}
                                      </div>
                                      {item.val}
                                    </motion.div>
                                  )) : (
                                    <span className="text-white/20 text-xs italic">{t("emptyList")}</span>
                                  )}
                                </div>
                              </motion.div>
                            );
                          })}
                        </AnimatePresence>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </aside>
      </section>

      {/* ── Bottom Section: Real-World Use Cases ── */}
      <section className="relative z-10 mt-6 mb-12 card-elevated rounded-[32px] p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="h-5 w-5 text-signal" />
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-ink/70">{t("realWorldApplications")}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lesson.useCases.map((uc, i) => (
            <div key={uc} className="flex gap-4 items-start border border-white/5 bg-white/[0.02] p-5 rounded-[24px] hover:bg-white/[0.04] transition-colors">
               <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-signal/10 text-signal text-xs font-bold border border-signal/20">
                 {i+1}
               </div>
               <p className="text-sm leading-relaxed text-ink/80 mt-1">{uc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
