"use client";

import { motion } from "framer-motion";
import { Eye, FlaskConical, Layers } from "lucide-react";
import { useTranslations } from "next-intl";

const outcomeStyles = [
  {
    card: "bg-gradient-to-br from-sky-950/80 to-blue-900/50 border-sky-500/40",
    iconBg: "bg-sky-500/20 border border-sky-500/30",
    icon: "text-wave neon-text-wave",
  },
  {
    card: "bg-gradient-to-br from-emerald-950/80 to-teal-900/50 border-emerald-500/40",
    iconBg: "bg-emerald-500/20 border border-emerald-500/30",
    icon: "text-leaf neon-text-leaf",
  },
  {
    card: "bg-gradient-to-br from-orange-950/80 to-amber-900/50 border-orange-500/40",
    iconBg: "bg-orange-500/20 border border-orange-500/30",
    icon: "text-signal neon-text-signal",
  },
];

const outcomeIcons = [Eye, Layers, FlaskConical];

export function OutcomesBand() {
  const t = useTranslations("Outcomes");

  const outcomes = [
    { titleKey: "traceTitle" as const, descKey: "traceDesc" as const },
    { titleKey: "practiceTitle" as const, descKey: "practiceDesc" as const },
    { titleKey: "experimentTitle" as const, descKey: "experimentDesc" as const },
  ];

  return (
    <section className="px-6 py-4 sm:px-10 lg:px-16">
      <div className="site-shell grid gap-4 lg:grid-cols-3">
        {outcomes.map((item, index) => {
          const Icon = outcomeIcons[index];
          const s = outcomeStyles[index];
          return (
            <motion.article
              key={item.titleKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className={`flex gap-4 rounded-[24px] border p-5 shadow-[0_2px_8px_rgba(0,0,0,0.05)] ${s.card}`}
            >
              <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] ${s.iconBg}`}>
                <Icon className={`h-4 w-4 ${s.icon}`} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-bright">{t(item.titleKey)}</h3>
                <p className="mt-1.5 text-sm leading-6 text-ink/60">{t(item.descKey)}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
