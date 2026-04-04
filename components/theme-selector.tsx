'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme, THEMES } from '@/lib/theme';

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Show skeleton until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium border border-[var(--border)] bg-[var(--pill-bg)] opacity-0 pointer-events-none select-none"
        aria-hidden
      >
        <span className="inline-block w-3.5 h-3.5 rounded-full bg-[var(--border)] flex-shrink-0" />
        <span>Dark</span>
      </div>
    );
  }

  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change theme"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium
                   text-[rgb(var(--color-ink))] hover:text-[rgb(var(--color-bright))]
                   border border-[var(--border)] hover:border-[var(--border-warm)]
                   bg-[var(--pill-bg)] hover:bg-[var(--timeline-hover)]
                   transition-all duration-150"
      >
        {/* Swatch */}
        <span
          className="inline-block w-3.5 h-3.5 rounded-full border border-[var(--border-warm)] flex-shrink-0"
          style={{ background: current.preview }}
        />
        <span>{current.label}</span>
        {/* Chevron */}
        <svg
          className={`w-3.5 h-3.5 opacity-60 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 16 16"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown panel — z-[200] to clear all hero/card stacking contexts */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-44 z-[200] rounded-xl
                     bg-[var(--panel)] border border-[var(--border)]
                     shadow-2xl overflow-hidden"
          style={{ boxShadow: 'var(--card-shadow)' }}
        >
          <div
            className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-widest opacity-40
                          text-[rgb(var(--color-ink))] border-b border-[var(--border)]"
          >
            Theme
          </div>
          {THEMES.map((t) => {
            const active = t.id === theme;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm text-left
                            transition-colors duration-100
                            ${
                              active
                                ? 'text-[rgb(var(--color-bright))] bg-[var(--timeline-hover)]'
                                : 'text-[rgb(var(--color-ink))] hover:text-[rgb(var(--color-bright))] hover:bg-[var(--timeline-bg)]'
                            }`}
              >
                {/* Color swatch */}
                <span
                  className="inline-block w-4 h-4 rounded-full border border-[var(--border-warm)] flex-shrink-0"
                  style={{ background: t.preview }}
                />
                <span className="flex-1">{t.label}</span>
                {/* Checkmark for active */}
                {active && (
                  <svg className="w-3.5 h-3.5 text-[#ff6535] flex-shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M3 8l3.5 3.5 6.5-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
