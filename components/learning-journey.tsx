"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const steps = [
  {
    id: "foundation",
    num: "01",
    titleKey: "foundation" as const,
    skills: ["Variables", "Types", "Print", "If / else"],
    color: "#38bdf8",
    dim: "rgba(56,189,248,0.12)",
  },
  {
    id: "beginner",
    num: "02",
    titleKey: "beginner" as const,
    skills: ["Loops", "Functions", "Lists", "Search"],
    color: "#818cf8",
    dim: "rgba(129,140,248,0.12)",
  },
  {
    id: "intermediate",
    num: "03",
    titleKey: "intermediate" as const,
    skills: ["Binary search", "Sort", "Hash maps", "OOP"],
    color: "#34d399",
    dim: "rgba(52,211,153,0.12)",
  },
  {
    id: "advanced",
    num: "04",
    titleKey: "advanced" as const,
    skills: ["Recursion", "Merge sort", "Complexity", "Two Sum"],
    color: "#fbbf24",
    dim: "rgba(251,191,36,0.12)",
  },
  {
    id: "mastery",
    num: "05",
    titleKey: "mastery" as const,
    skills: ["Graphs", "DP", "Bit ops", "Systems"],
    color: "#f87171",
    dim: "rgba(248,113,113,0.12)",
  },
];

export function LearningJourney() {
  const t = useTranslations("LearningJourney");

  return (
    <section className="px-6 py-8 sm:px-10 lg:px-16">
      <div className="site-shell">
        <div className="mb-6 flex items-baseline gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ink/42">
            {t("sectionLabel")}
          </p>
          <p className="text-xs text-ink/35">{t("clickHint")}</p>
        </div>

        {/* Horizontal timeline strip */}
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-[680px] items-stretch gap-0 xl:min-w-0">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-1 items-stretch">
                {/* Step block */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                  className="flex-1"
                >
                  <Link
                    href={`/tracks/${step.id}`}
                    className="group flex h-full flex-col rounded-[20px] bg-parchment/80 p-4 transition-all hover:bg-mist border border-transparent"
                    style={{ boxShadow: `0 0 0 1px ${step.color}30, inset 0 1px 0 ${step.color}15` }}
                  >
                    {/* Number + colored dot */}
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ background: step.color }}
                      />
                      <span className="font-mono text-xs font-bold text-ink/40">{step.num}</span>
                    </div>

                    {/* Title */}
                    <div
                      className="text-sm font-semibold mb-3"
                      style={{ color: step.color }}
                    >
                      {t(step.titleKey)}
                    </div>

                    {/* Skills — programming terms stay English */}
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {step.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full px-2 py-0.5 text-[10px] font-medium text-ink/55"
                          style={{ background: step.dim }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>

                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="flex items-center px-1 shrink-0">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path
                        d="M0 6 H12 M8 2 L14 6 L8 10"
                        stroke={steps[index].color}
                        strokeOpacity="0.4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
