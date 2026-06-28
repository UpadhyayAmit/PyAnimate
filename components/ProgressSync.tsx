'use client';

import { useAuth } from '@clerk/nextjs';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ProgressSnapshot, useProgress } from '@/lib/use-progress';

function normalizeProgress(value: Partial<ProgressSnapshot> | null | undefined): ProgressSnapshot {
  return {
    completedLessons: Array.isArray(value?.completedLessons) ? value.completedLessons : [],
    completedSteps: Array.isArray(value?.completedSteps) ? value.completedSteps : [],
    completedChallenges: Array.isArray(value?.completedChallenges) ? value.completedChallenges : [],
    totalXP: typeof value?.totalXP === 'number' ? value.totalXP : 0,
    streak: typeof value?.streak === 'number' ? value.streak : 0,
    lastActiveDate: value?.lastActiveDate ?? null,
    lastLessonId: value?.lastLessonId ?? null,
  };
}

export function ProgressSync() {
  const { isLoaded, isSignedIn } = useAuth();
  const [syncReady, setSyncReady] = useState(false);
  const fetchedForSession = useRef(false);
  const mergeProgress = useProgress((state) => state.mergeProgress);
  const completedLessons = useProgress((state) => state.completedLessons);
  const completedSteps = useProgress((state) => state.completedSteps);
  const completedChallenges = useProgress((state) => state.completedChallenges);
  const totalXP = useProgress((state) => state.totalXP);
  const streak = useProgress((state) => state.streak);
  const lastActiveDate = useProgress((state) => state.lastActiveDate);
  const lastLessonId = useProgress((state) => state.lastLessonId);

  const snapshot = useMemo<ProgressSnapshot>(
    () => ({
      completedLessons,
      completedSteps,
      completedChallenges,
      totalXP,
      streak,
      lastActiveDate,
      lastLessonId,
    }),
    [completedChallenges, completedLessons, completedSteps, lastActiveDate, lastLessonId, streak, totalXP],
  );

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      fetchedForSession.current = false;
      setSyncReady(false);
      return;
    }

    if (fetchedForSession.current) return;
    fetchedForSession.current = true;

    let cancelled = false;
    fetch('/api/progress')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled) return;
        if (data?.progress) mergeProgress(normalizeProgress(data.progress));
        setSyncReady(true);
      })
      .catch(() => {
        if (!cancelled) setSyncReady(true);
      });

    return () => {
      cancelled = true;
    };
  }, [isLoaded, isSignedIn, mergeProgress]);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !syncReady) return;

    const timeout = window.setTimeout(() => {
      fetch('/api/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(snapshot),
      }).catch(() => {
        // Keep local progress even if the network write fails.
      });
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [isLoaded, isSignedIn, snapshot, syncReady]);

  return null;
}
