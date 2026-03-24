import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Database, ExternalLink, Lock, Zap } from "lucide-react";
import { algorithmsByLevel, trackLevels } from "@/data/course";
import { SiteHeader } from "@/components/site-header";

type Props = { params: Promise<{ level: string }> };

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

export default async function TrackPage({ params }: Props) {
  const { level } = await params;
  const track = trackLevels.find((t) => t.id === level);
  const algorithms = algorithmsByLevel[level];

  if (!track || !algorithms) notFound();

  return (
    <main className="min-h-screen pb-20">
      <SiteHeader compactLabel={track.title} />

      {/* Hero */}
      <section className="px-6 pt-10 pb-8 sm:px-10 lg:px-16">
        <div className="site-shell">
          <Link
            href="/#tracks"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-ink/55 transition hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            All tracks
          </Link>

          <div className={`card-elevated overflow-hidden rounded-[32px] bg-gradient-to-br p-8 ${track.accent}`}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-ink/40">
                  Track
                </div>
                <h1 className="mt-2 text-4xl font-semibold text-bright sm:text-5xl">{track.title}</h1>
                <p className="mt-2 text-base text-ink/60">{track.audience}</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-ink/65">{track.description}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:items-end">
                {track.goals.map((goal) => (
                  <div
                    key={goal}
                    className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-ink/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Algorithm grid */}
      <section className="px-6 pb-10 sm:px-10 lg:px-16">
        <div className="site-shell">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-bright">
              {algorithms.length} algorithms in this track
            </h2>
            <div className="flex items-center gap-3 text-xs text-ink/45">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-leaf" /> Has playground
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-ink/20" /> Coming soon
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {algorithms.map((algo, index) => (
              <article
                key={algo.id}
                className={`card-elevated group relative flex flex-col rounded-[24px] overflow-hidden p-5 transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)] ${
                  algo.hasPlayground ? "" : "opacity-80"
                }`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-[24px] ${difficultyGradient[algo.difficulty] ?? ""}`} />

                {/* Decorative number */}
                <span className="pointer-events-none absolute right-4 top-3 text-[28px] font-black text-ink/[0.07] leading-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Difficulty badge */}
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

                <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                  {categoryEmoji[algo.category.toLowerCase()] ?? ""}{" "}
                  {algo.category}
                </div>
                <h3 className="text-lg font-semibold text-bright">{algo.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-ink/58">{algo.description}</p>

                {/* Complexity row */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 rounded-full bg-signal/8 px-3 py-1 text-xs text-signal/80">
                    <Zap className="h-3 w-3" />
                    <span>Time: {algo.timeComplexity}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-wave/8 px-3 py-1 text-xs text-wave/80">
                    <Database className="h-3 w-3" />
                    <span>Space: {algo.spaceComplexity}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-ink/6 pt-4">
                  <div className="flex items-center gap-1.5 text-xs text-ink/40">
                    <Clock className="h-3.5 w-3.5" />
                    {algo.duration}
                  </div>

                  {algo.hasPlayground ? (
                    <Link
                      href={`/playground?lesson=${algo.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-signal px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-signal/85"
                    >
                      Open lesson <ExternalLink className="h-3 w-3" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-ink/15 bg-parchment px-3 py-1.5 text-xs italic text-ink/30">
                      <Lock className="h-3 w-3" />
                      Coming soon
                    </span>
                  )}
                </div>

                {algo.hasPlayground && (
                  <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-leaf animate-pulse" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return trackLevels.map((t) => ({ level: t.id }));
}
