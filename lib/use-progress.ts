"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressStore = {
  completedLessons: string[];
  totalXP: number;
  streak: number;
  lastActiveDate: string | null;
  markComplete: (lessonId: string, xp?: number) => void;
  isComplete: (lessonId: string) => boolean;
  reset: () => void;
};

export const useProgress = create<ProgressStore>()(
  persist(
    (set, get) => ({
      completedLessons: [],
      totalXP: 0,
      streak: 0,
      lastActiveDate: null,
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
      isComplete: (lessonId) => get().completedLessons.includes(lessonId),
      reset: () => set({ completedLessons: [], totalXP: 0, streak: 0, lastActiveDate: null }),
    }),
    { name: "pyanimate-progress" }
  )
);
