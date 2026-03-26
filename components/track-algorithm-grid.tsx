"use client";

import { Link } from "@/i18n/routing";
import { Clock, Database, ExternalLink, Lock, Zap, CheckCircle2 } from "lucide-react";
import { useProgress } from "@/lib/use-progress";
import { useEffect, useState } from "react";
import { TrackProgress } from "./track-progress";
import { useTranslations } from "next-intl";

type AlgorithmEntry = {
  id: string;
  title: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  hasPlayground: boolean;
  duration: string;
};

const difficultyLabel: Record<string, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  expert: "Expert",
};

const difficultyStyle: Record<string, string> = {
  easy: "bg-green-900/30 text-green-400 border-green-700/40",
  medium: "bg-amber-900/30 text-amber-400 border-amber-700/40",
  hard: "bg-orange-900/30 text-orange-400 border-orange-700/40",
  expert: "bg-purple-900/30 text-purple-400 border-purple-700/40",
};

const difficultyGradient: Record<string, string> = {
  easy: "bg-gradient-to-r from-emerald-500/0 via-emerald-500/70 to-emerald-500/0",
  medium: "bg-gradient-to-r from-amber-500/0 via-amber-500/70 to-amber-500/0",
  hard: "bg-gradient-to-r from-rose-500/0 via-rose-500/70 to-rose-500/0",
  expert: "bg-gradient-to-r from-purple-500/0 via-purple-500/70 to-purple-500/0",
};

const categoryEmoji: Record<string, string> = {
  sorting: "🔀",
  searching: "🔍",
  graph: "🕸",
  "dynamic programming": "🧮",
  trees: "🌳",
  "data structures": "📦",
  fundamentals: "⚡",
  recursion: "🔁",
};

export function TrackAlgorithmGrid({ algorithms }: { algorithms: AlgorithmEntry[] }) {
  const t = useTranslations("AlgorithmGrid");
  const tc = useTranslations("CourseData");
  const { isComplete } = useProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="site-shell">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-bright">
          {algorithms.length} {t("algorithmsInTrack")}
        </h2>
      </div>

      <TrackProgress algorithms={algorithms} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {algorithms.map((algo, index) => {
          const completed = mounted && isComplete(algo.id);
          const translatedDesc = tc.has(`algorithms.${algo.id}`) ? tc(`algorithms.${algo.id}`) : algo.description;
          return (
            <article
              key={algo.id}
              className={`card-elevated group relative flex flex-col rounded-[24px] overflow-hidden p-5 transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)] ${
                completed ? "ring-2 ring-leaf/30 border-leaf/40 bg-leaf/5" : ""
              }`}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-[24px] ${difficultyGradient[algo.difficulty] ?? ""}`} />

              <span className="pointer-events-none absolute right-4 top-3 text-[28px] font-black text-ink/[0.07] leading-none select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold text-ink/30 invisible">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                    difficultyStyle[algo.difficulty]
                  }`}
                >
                  {difficultyLabel[algo.difficulty]}
                </span>
              </div>

              <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider sm:tracking-[0.18em] text-ink/40">
                {categoryEmoji[algo.category.toLowerCase()] ?? ""}{" "}
                {algo.category}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-bright flex items-start sm:items-center gap-2">
                <span className="leading-tight">{algo.title}</span>
                {completed && <CheckCircle2 className="mt-0.5 sm:mt-0 h-4 w-4 shrink-0 text-leaf" />}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-ink/58">{translatedDesc}</p>

              {algo.difficulty === "easy" ? (
                <div className="mt-4 flex items-center gap-1.5 rounded-full bg-ink/5 px-4 py-1.5 text-xs text-ink/40 w-fit cursor-help" title={t("complexityHidden")}>
                   <Zap className="h-3 w-3 opacity-50" />
                   <span>{t("complexityHidden")}</span>
                </div>
              ) : (
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 rounded-full bg-signal/8 px-3 py-1 text-xs text-signal/80">
                    <Zap className="h-3 w-3" />
                    <span>{t("time")}: {algo.timeComplexity}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-wave/8 px-3 py-1 text-xs text-wave/80">
                    <Database className="h-3 w-3" />
                    <span>{t("space")}: {algo.spaceComplexity}</span>
                  </div>
                </div>
              )}

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-ink/6 pt-4">
                <div className="flex items-center gap-1.5 text-xs text-ink/40">
                  <Clock className="h-3.5 w-3.5" />
                  {algo.duration}
                </div>

                <Link
                  href={`/playground?lesson=${algo.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2 text-sm font-bold text-white shadow-[0_4px_14px_rgba(232,98,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,98,42,0.4)]"
                >
                  {completed ? t("review") : t("start")} <ExternalLink className="h-4 w-4" />
                </Link>
              </div>

              <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-leaf animate-pulse" />
            </article>
          );
        })}
      </div>
    </div>
  );
}
