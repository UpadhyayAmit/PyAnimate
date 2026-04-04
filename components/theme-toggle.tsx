'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme';

export function ThemeToggle() {
  const { theme, setTheme, isDark } = useTheme();

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="flex items-center justify-center w-8 h-8 rounded-full text-ink/65 hover:text-ink transition-colors hover:bg-white/10"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
