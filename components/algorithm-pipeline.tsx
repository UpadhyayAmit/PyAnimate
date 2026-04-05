"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// Data pipeline flow: shows how an algorithm processes data
// Input → Parse → Process (Algorithm) → Validate → Output
const pipelineStages = [
  {
    id: "input",
    label: "Input",
    sub: "Raw data",
    examples: ["arr = [5,2,4,1]", 'word = "hello"', "n = 42"],
    color: "#38bdf8",
    bg: "bg-sky-400/10",
    border: "border-sky-500/30",
    textColor: "text-sky-400",
    dotColor: "bg-sky-400",
  },
  {
    id: "parse",
    label: "Parse",
    sub: "Validate & prepare",
    examples: ["Check types", "Handle edge cases", "Normalize"],
    color: "#818cf8",
    bg: "bg-indigo-400/10",
    border: "border-indigo-500/30",
    textColor: "text-indigo-400",
    dotColor: "bg-indigo-400",
  },
  {
    id: "algorithm",
    label: "Algorithm",
    sub: "Core logic",
    examples: ["Loop / recurse", "Compare & swap", "Hash & lookup"],
    color: "#e8622a",
    bg: "bg-signal/10",
    border: "border-signal/30",
    textColor: "text-signal",
    dotColor: "bg-signal",
  },
  {
    id: "state",
    label: "State Trace",
    sub: "Step-by-step memory",
    examples: ["Variables", "Call stack", "Comparisons"],
    color: "#34d399",
    bg: "bg-emerald-400/10",
    border: "border-emerald-500/30",
    textColor: "text-emerald-400",
    dotColor: "bg-emerald-400",
  },
  {
    id: "output",
    label: "Output",
    sub: "Result & complexity",
    examples: ["Sorted array", "O(n log n)", "Found at idx 3"],
    color: "#fbbf24",
    bg: "bg-amber-400/10",
    border: "border-amber-500/30",
    textColor: "text-amber-400",
    dotColor: "bg-amber-400",
  },
];

// Arrows with gradient stroke colors
const arrows = [
  { from: "#38bdf8", to: "#818cf8" },
  { from: "#818cf8", to: "#e8622a" },
  { from: "#e8622a", to: "#34d399" },
  { from: "#34d399", to: "#fbbf24" },
];

export function AlgorithmPipeline() {
  const t = useTranslations("AlgorithmPipeline");

  return (
    <section className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="site-shell">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ink/42">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold text-bright sm:text-4xl">
            {t("heading")}
          </h2>
        </div>

        {/* Pipeline — horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-[780px] items-center gap-0 xl:min-w-0">
            {pipelineStages.map((stage, index) => (
              <div key={stage.id} className="flex flex-1 items-center">
                {/* Stage node */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.36, delay: index * 0.08 }}
                  className="flex-1"
                >
                  <div
                    className={`glass-panel relative overflow-hidden rounded-[24px] border ${stage.bg} ${stage.border} p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2`}
                    style={{ boxShadow: `0 8px 32px ${stage.color}15, inset 0 1px 0 ${stage.color}20` }}
                  >
                    {/* Ambient glow inside card */}
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-30 blur-2xl" style={{ backgroundColor: stage.color }} />

                    {/* Stage label — programming terms stay English */}
                    <div className={`text-xs font-bold uppercase tracking-[0.18em] ${stage.textColor}`}>
                      {stage.label}
                    </div>
                    <div className="mt-0.5 text-[11px] text-ink/45">{stage.sub}</div>

                    {/* Example items — code/programming terms stay English */}
                    <ul className="mt-3 space-y-1.5">
                      {stage.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-2">
                          <span className={`h-1 w-1 shrink-0 rounded-full ${stage.dotColor}`} />
                          <span className="font-mono text-[11px] text-ink/60">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Animated Flowing Data Pipe Connector */}
                {index < pipelineStages.length - 1 && (
                  <div className="relative mx-2 sm:mx-4 flex h-1 w-8 sm:w-16 shrink-0 items-center overflow-hidden rounded-full">
                    {/* Dim track line */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `linear-gradient(90deg, ${arrows[index].from}, ${arrows[index].to})`,
                      }}
                    />
                    {/* Glowing moving data packet */}
                    <motion.div
                      className="h-full w-1/2 rounded-full shadow-[0_0_8px_currentColor]"
                      style={{
                        background: arrows[index].to,
                        color: arrows[index].to,
                      }}
                      animate={{ x: ['-100%', '300%'] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: index * 0.3,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom detail row — animated execution trace example */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-6 rounded-[20px] bg-parchment p-5"
        >
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
            {t("liveTrace")}
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Input", value: "[5, 2, 4, 1, 3]", color: "text-sky-400 bg-sky-400/10" },
              { label: "Pass 1", value: "[2, 4, 1, 3, 5]", color: "text-indigo-400 bg-indigo-400/10" },
              { label: "Pass 2", value: "[2, 1, 3, 4, 5]", color: "text-signal bg-signal/10" },
              { label: "Pass 3", value: "[1, 2, 3, 4, 5]", color: "text-emerald-400 bg-emerald-400/10" },
              { label: "Output", value: "O(n²) · sorted ✓", color: "text-amber-400 bg-amber-400/10" },
            ].map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 + 0.5 }}
                className={`rounded-full px-3 py-1.5 text-xs font-mono font-medium ${step.color}`}
              >
                <span className="opacity-50">{step.label}: </span>{step.value}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
