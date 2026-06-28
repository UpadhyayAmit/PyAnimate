"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProgressSnapshot = {
  completedLessons: string[];
  completedSteps: string[];
  completedChallenges: string[];
  totalXP: number;
  streak: number;
  lastActiveDate: string | null;
  lastLessonId: string | null;
};

type ProgressStore = ProgressSnapshot & {
  setProgress: (progress: ProgressSnapshot) => void;
  mergeProgress: (progress: ProgressSnapshot) => void;
  setLastLessonId: (id: string) => void;
  markComplete: (lessonId: string, xp?: number) => void;
  markStepComplete: (stepId: string, xp?: number) => void;
  markChallengeComplete: (challengeId: string, xp?: number) => void;
  isComplete: (lessonId: string) => boolean;
  isStepComplete: (stepId: string) => boolean;
  isChallengeComplete: (challengeId: string) => boolean;
  reset: () => void;
};

function unique(values: string[]) {
  return Array.from(new Set(values));
}

export const useProgress = create<ProgressStore>()(
  persist(
    (set, get) => ({
      completedLessons: [],
      completedSteps: [],
      completedChallenges: [],
      totalXP: 0,
      streak: 0,
      lastActiveDate: null,
      lastLessonId: null,
      setProgress: (progress) => set(progress),
      mergeProgress: (progress) =>
        set((state) => ({
          completedLessons: unique([...state.completedLessons, ...progress.completedLessons]),
          completedSteps: unique([...state.completedSteps, ...progress.completedSteps]),
          completedChallenges: unique([...state.completedChallenges, ...progress.completedChallenges]),
          totalXP: Math.max(state.totalXP, progress.totalXP),
          streak: Math.max(state.streak, progress.streak),
          lastActiveDate: progress.lastActiveDate ?? state.lastActiveDate,
          lastLessonId: progress.lastLessonId ?? state.lastLessonId,
        })),
      setLastLessonId: (id) => set({ lastLessonId: id }),
      markComplete: (lessonId, xp = 50) => {
        const { completedLessons, lastActiveDate, streak } = get();
        if (completedLessons.includes(lessonId)) return;
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        const newStreak = lastActiveDate === today ? streak
          : lastActiveDate === yesterday ? streak + 1
          : 1;
        set({
          completedLessons: [...completedLessons, lessonId],
          totalXP: get().totalXP + xp,
          streak: newStreak,
          lastActiveDate: today,
        });
      },
      markStepComplete: (stepId, xp = 5) => {
        const { completedSteps } = get();
        if (completedSteps.includes(stepId)) return;
        set({
          completedSteps: [...completedSteps, stepId],
          totalXP: get().totalXP + xp,
        });
      },
      markChallengeComplete: (challengeId, xp = 25) => {
        const { completedChallenges } = get();
        if (completedChallenges.includes(challengeId)) return;
        set({
          completedChallenges: [...completedChallenges, challengeId],
          totalXP: get().totalXP + xp,
        });
      },
      isComplete: (lessonId) => get().completedLessons.includes(lessonId),
      isStepComplete: (stepId) => get().completedSteps.includes(stepId),
      isChallengeComplete: (challengeId) => get().completedChallenges.includes(challengeId),
      reset: () => set({ 
        completedLessons: [], 
        completedSteps: [],
        completedChallenges: [],
        totalXP: 0, 
        streak: 0, 
        lastActiveDate: null,
        lastLessonId: null,
      }),
    }),
    { name: "pyanimate-progress" }
  )
);
