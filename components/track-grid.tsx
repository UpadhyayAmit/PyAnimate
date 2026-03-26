"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2, Database, GitBranch, Layers } from "lucide-react";
import { trackLevels } from "@/data/course";
import { useTranslations } from "next-intl";

// Each level gets a distinct visual identity
const trackStyles = [
  {
    card: "bg-gradient-to-br from-violet-900/40 via-violet-800/20 to-transparent border-violet-500/40 hover:shadow-[0_8px_32px_rgba(139,92,246,0.18)]",
    topBar: "bg-gradient-to-r from-violet-500 to-violet-400",
    icon: "text-violet-400",
    iconBg: "bg-violet-800/50",
    number: "text-violet-400",
    goal: "bg-violet-900/60 text-violet-300",
    arrow: "text-violet-400",
    count: "text-violet-400",
  },
  {
    card: "bg-gradient-to-br from-sky-900/40 via-sky-800/20 to-transparent border-sky-500/40 hover:shadow-[0_8px_32px_rgba(56,189,248,0.18)]",
    topBar: "bg-gradient-to-r from-sky-500 to-sky-400",
    icon: "text-sky-400",
    iconBg: "bg-sky-800/50",
    number: "text-sky-400",
    goal: "bg-sky-900/60 text-sky-300",
    arrow: "text-sky-400",
    count: "text-sky-400",
  },
  {
    card: "bg-gradient-to-br from-emerald-900/40 via-emerald-800/20 to-transparent border-emerald-500/40 hover:shadow-[0_8px_32px_rgba(52,211,153,0.18)]",
    topBar: "bg-gradient-to-r from-emerald-500 to-emerald-400",
    icon: "text-emerald-400",
    iconBg: "bg-emerald-800/50",
    number: "text-emerald-400",
    goal: "bg-emerald-900/60 text-emerald-300",
    arrow: "text-emerald-400",
    count: "text-emerald-400",
  },
  {
    card: "bg-gradient-to-br from-rose-900/40 via-rose-800/20 to-transparent border-rose-500/40 hover:shadow-[0_8px_32px_rgba(251,113,133,0.18)]",
    topBar: "bg-gradient-to-r from-rose-500 to-rose-400",
    icon: "text-rose-400",
    iconBg: "bg-rose-800/50",
    number: "text-rose-400",
    goal: "bg-rose-900/60 text-rose-300",
    arrow: "text-rose-400",
    count: "text-rose-400",
  },
  {
    card: "bg-gradient-to-br from-amber-900/40 via-amber-800/20 to-transparent border-amber-500/40 hover:shadow-[0_8px_32px_rgba(251,191,36,0.18)]",
    topBar: "bg-gradient-to-r from-amber-500 to-amber-400",
    icon: "text-amber-400",
    iconBg: "bg-amber-800/50",
    number: "text-amber-400",
    goal: "bg-amber-900/60 text-amber-300",
    arrow: "text-amber-400",
    count: "text-amber-400",
  },
];

const trackIcons = [BookOpen, Code2, Database, GitBranch, Layers];

export function TrackGrid() {
  const t = useTranslations("TrackGrid");

  return (
    <section id="tracks" className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="site-shell">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ink/42">
              {t("sectionLabel")}
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold text-bright sm:text-4xl">
              {t("heading")}
            </h2>
          </div>
          <Link
            href="/playground"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-5 py-2.5 text-sm font-semibold text-signal transition hover:bg-signal/18"
          >
            {t("startLearning")}
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
                    <span className={`text-sm font-bold ${s.number}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-[14px] ${s.iconBg}`}>
                      <Icon className={`h-5 w-5 ${s.icon}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-bright">{track.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-ink/55">{track.audience}</p>

                  <ul className="mt-4 flex-1 space-y-1.5">
                    {track.goals.map((goal) => (
                      <li
                        key={goal}
                        className={`rounded-full px-2.5 py-1 text-xs font-medium w-fit ${s.goal}`}
                      >
                        {goal}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
                    <span className={`text-xs font-medium ${s.count}`}>
                      {track.lessonCount} {t("lessons")}
                    </span>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100 ${s.arrow}`}>
                      {t("explore")} <ArrowRight className="h-3 w-3" />
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
