'use client';

import { Link } from '@/i18n/routing';
import { PyAnimateLogo } from '@/components/icons/pyanimate-logo';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from '@/components/language-selector';
import { ThemeSelector } from '@/components/theme-selector';
import { NavBarAuth } from '@/components/NavBarAuth';
import { BookOpen, Code2, FileText, Info, Menu, Shield, X } from 'lucide-react';
import { useState } from 'react';

type SiteHeaderProps = {
  compactLabel?: string;
};

const MOBILE_LINKS = [
  { href: '/#tracks', label: 'Tracks', icon: BookOpen },
  { href: '/playground', label: 'Python Playground', icon: Code2 },
  { href: '/about', label: 'About', icon: Info },
] as const;

export function SiteHeader({ compactLabel }: SiteHeaderProps) {
  const t = useTranslations('Navigation');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-16">
      <div className="site-shell flex items-center justify-between gap-3 rounded-[24px] border nav-border bg-parchment/90 px-4 py-3 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.2)] md:rounded-full md:px-5">
        <Link href="/" className="flex min-w-0 shrink items-center gap-2">
          <PyAnimateLogo className="h-9 w-9 shrink-0 rounded-[10px] shadow-[0_2px_12px_rgba(255,101,53,0.4)]" />
          <span className="hidden text-gradient-signal text-lg font-bold neon-text-signal sm:block">PyAnimate</span>
          {compactLabel ? <span className="max-w-[120px] truncate text-sm font-semibold text-ink/65 sm:hidden">{compactLabel}</span> : null}
        </Link>

        <div className="hidden min-w-0 items-center gap-4 md:flex">
          {compactLabel ? (
            <div className="max-w-[220px] truncate text-sm font-medium text-ink/72" title={compactLabel}>
              {compactLabel}
            </div>
          ) : (
            <nav className="flex items-center gap-5 text-sm font-medium text-ink/65">
              <a href="#tracks" className="transition hover:text-wave hover:neon-text-wave">
                {t('tracks')}
              </a>
              <Link
                href="/playground"
                className="rounded-full bg-signal px-4 py-1.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(232,98,42,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(232,98,42,0.45)]"
              >
                {t('playground')}
              </Link>
            </nav>
          )}

          <div className="h-6 w-[1px] nav-separator" />
          <LanguageSelector />
          <ThemeSelector />
          <div className="h-6 w-[1px] nav-separator" />
          <NavBarAuth />
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ink/75 transition hover:bg-white/[0.08] hover:text-bright md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {menuOpen ? <MobileMenu compactLabel={compactLabel} onClose={() => setMenuOpen(false)} /> : null}
    </header>
  );
}

function MobileMenu({ compactLabel, onClose }: { compactLabel?: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[120] bg-black/55 p-4 backdrop-blur-sm md:hidden">
      <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#101722] text-white shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Link href="/" onClick={onClose} className="flex min-w-0 items-center gap-3">
            <PyAnimateLogo className="h-9 w-9 shrink-0 rounded-[10px]" />
            <div className="min-w-0">
              <div className="font-bold leading-tight">PyAnimate</div>
              {compactLabel ? <div className="truncate text-xs text-white/45">{compactLabel}</div> : null}
            </div>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="rounded-full p-2 text-white/70 hover:bg-white/[0.08] hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-5 py-6">
          {MOBILE_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-4 rounded-2xl px-3 py-4 text-base font-semibold text-white/82 transition hover:bg-white/[0.08] hover:text-white"
            >
              <item.icon className="h-5 w-5 text-signal" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 border-t border-white/10 px-5 py-5">
          <LanguageSelector mobile />
          <ThemeSelector mobile />
          <NavBarAuth mobile />
        </div>
      </div>
    </div>
  );
}
