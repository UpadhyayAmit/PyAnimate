'use client';

/**
 * Theme system — powered by next-themes.
 *
 * Supported themes: dark | light | ocean | sepia
 *
 * next-themes manages:
 *   - SSR-safe rendering (no flash)
 *   - localStorage persistence
 *   - system-preference detection
 *   - setting data-theme on <html>
 *
 * Components should use ONLY CSS custom property tokens
 * (text-bright, bg-parchment, text-ink, bg-mist, card-elevated …)
 * and never branch on isDark. New themes = one CSS block in globals.css.
 */

import React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';

export type AppTheme = 'dark' | 'light' | 'ocean' | 'sepia';

export const THEMES: { id: AppTheme; label: string; preview: string }[] = [
  { id: 'dark', label: 'Dark', preview: '#0a0f1a' },
  { id: 'light', label: 'Light', preview: '#f8fafc' },
  { id: 'ocean', label: 'Ocean', preview: '#0a1628' },
  { id: 'sepia', label: 'Sepia', preview: '#f5efe6' },
];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      themes={['dark', 'light', 'ocean', 'sepia']}
      storageKey="pyanimate-theme"
    >
      {children}
    </NextThemesProvider>
  );
}

/** Drop-in replacement — same shape as the old hook. */
export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const current = (resolvedTheme ?? theme ?? 'dark') as AppTheme;
  return {
    theme: current,
    setTheme: (t: AppTheme) => setTheme(t),
    /** Legacy helper — avoid new usage; prefer CSS tokens instead. */
    isDark: current === 'dark' || current === 'ocean',
  };
}

/** @deprecated — kept only for the layout <head> script; next-themes handles flash prevention natively. */
export const noFlashScript = '';
