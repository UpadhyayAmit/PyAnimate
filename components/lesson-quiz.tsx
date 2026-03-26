"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, HelpCircle, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";

type LessonQuizProps = {
  lessonId: string;
  isUnlocked: boolean;
  onCorrectAnswer: () => void;
  onContinue: () => void;
};

export function LessonQuiz({ lessonId, isUnlocked, onCorrectAnswer, onContinue }: LessonQuizProps) {
  const t = useTranslations(`Quizzes.${lessonId}`);
  const [selected, setSelected] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  if (!isUnlocked) return null;

  const handleSubmit = () => {
    if (!selected) return;
    setHasSubmitted(true);
    const correctOption = t("correct");
    
    if (selected === correctOption) {
      setIsCorrect(true);
      onCorrectAnswer();
    } else {
      setIsCorrect(false);
    }
  };

  const handleContinue = () => {
    onContinue();
  };

  const options = ["A", "B", "C", "D"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="mt-6 overflow-hidden rounded-[32px] bg-gradient-to-br from-parchment to-mist shadow-xl border border-white/10"
    >
      <div className="bg-signal/10 px-6 py-4 border-b border-signal/10 flex items-center gap-2">
        <HelpCircle className="w-5 h-5 text-signal" />
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-signal/90">
          {t("title") || "Knowledge Check"}
        </h3>
      </div>
      
      <div className="p-6">
        <p className="text-lg font-semibold text-bright mb-6">
          {t("question")}
        </p>

        <div className="space-y-3 mb-6">
          <AnimatePresence>
            {options.map((opt) => {
              const optionText = t(`options.${opt}`);
              if (!optionText) return null;

              const isSelected = selected === opt;
              const isCorrectAnswer = opt === t("correct");
              
              let stateClass = "border-white/10 bg-white/5 hover:bg-white/10 text-ink/80 hover:border-white/20 hover:scale-[1.01]";
              
              if (hasSubmitted) {
                if (isSelected && isCorrectAnswer) {
                  stateClass = "border-leaf bg-leaf/10 text-leaf font-semibold scale-[1.01] shadow-[0_0_15px_rgba(74,222,128,0.2)]";
                } else if (isSelected && !isCorrectAnswer) {
                  stateClass = "border-rose-500/50 bg-rose-500/10 text-rose-400";
                } else if (isCorrectAnswer && isCorrect) {
                   // Highlight correct answer if they got it right
                   stateClass = "border-leaf/50 bg-leaf/10 text-leaf/80";
                } else {
                  stateClass = "border-white/5 bg-white/[0.02] text-ink/30 opacity-50";
                }
              } else if (isSelected) {
                stateClass = "border-signal bg-signal/10 text-signal font-semibold scale-[1.01]";
              }

              return (
                <button
                  key={opt}
                  onClick={() => {
                    if (!isCorrect) {
                      setSelected(opt);
                      setHasSubmitted(false);
                    }
                  }}
                  disabled={isCorrect} // lock choices once correct
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-[20px] transition-all duration-200 border text-left ${stateClass}`}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border text-xs font-bold ${
                    isSelected && !hasSubmitted ? "border-signal text-signal" :
                    hasSubmitted && isSelected && isCorrectAnswer ? "border-leaf bg-leaf text-white" :
                    hasSubmitted && isSelected && !isCorrectAnswer ? "border-rose-400 bg-rose-500 text-white" :
                    "border-white/20 text-ink/50"
                  }`}>
                    {hasSubmitted && isSelected && isCorrectAnswer ? <CheckCircle2 className="w-4 h-4" /> :
                     hasSubmitted && isSelected && !isCorrectAnswer ? <XCircle className="w-4 h-4" /> : opt}
                  </div>
                  <span className="flex-1 leading-snug">{optionText}</span>
                </button>
              );
            })}
          </AnimatePresence>
        </div>

        {isCorrect ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5"
          >
            <div className="flex bg-leaf/10 text-leaf px-4 py-3 rounded-[16px] text-sm font-medium items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {t("successMessage") || "Correct!"}
            </div>
            <button
              onClick={handleContinue}
              className="group flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(232,98,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,98,42,0.4)]"
            >
              {t("nextButton") || "Continue to Next Lesson"} <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
           {hasSubmitted && !isCorrect ? (
              <span className="text-sm font-medium text-rose-400 animate-pulse">
                Not quite! Try again.
              </span>
           ) : <span />}

            <button
              onClick={handleSubmit}
              disabled={!selected}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-ink transition hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {t("checkButton") || "Submit Answer"}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
