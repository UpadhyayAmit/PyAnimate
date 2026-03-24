"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="site-shell">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ink/42">
            How it works
          </p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold text-bright sm:text-4xl">
            Every algorithm follows the same pipeline.
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
                    className={`rounded-[18px] border p-4 ${stage.bg} ${stage.border}`}
                    style={{ boxShadow: `0 0 32px ${stage.color}28, inset 0 1px 0 ${stage.color}20` }}
                  >
                    {/* Stage label */}
                    <div className={`text-xs font-bold uppercase tracking-[0.18em] ${stage.textColor}`}>
                      {stage.label}
                    </div>
                    <div className="mt-0.5 text-[11px] text-ink/45">{stage.sub}</div>

                    {/* Example items */}
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

                {/* SVG arrow connector */}
                {index < pipelineStages.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.35, delay: index * 0.08 + 0.2 }}
                    className="mx-1 shrink-0"
                    style={{ transformOrigin: "left" }}
                  >
                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                      <defs>
                        <linearGradient id={`arrow-grad-${index}`} x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor={arrows[index].from} stopOpacity="0.7" />
                          <stop offset="100%" stopColor={arrows[index].to} stopOpacity="0.7" />
                        </linearGradient>
                      </defs>
                      {/* Line */}
                      <line
                        x1="0" y1="8" x2="26" y2="8"
                        stroke={`url(#arrow-grad-${index})`}
                        strokeWidth="1.5"
                      />
                      {/* Arrowhead */}
                      <path
                        d="M22 4 L30 8 L22 12"
                        stroke={arrows[index].to}
                        strokeWidth="1.5"
                        strokeOpacity="0.7"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
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
            Live trace example — Bubble Sort
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
