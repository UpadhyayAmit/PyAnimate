import { Link } from '@/i18n/routing';
import { PyAnimateLogo } from '@/components/icons/pyanimate-logo';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from '@/components/language-selector';
import { ThemeSelector } from '@/components/theme-selector';

type SiteHeaderProps = {
  compactLabel?: string;
};

export function SiteHeader({ compactLabel }: SiteHeaderProps) {
  const t = useTranslations('Navigation');

  return (
    <header className="relative z-50 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-16">
      <div className="site-shell flex items-center justify-between gap-2 rounded-[24px] sm:rounded-full border nav-border bg-parchment/90 px-4 py-3 sm:px-5 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <PyAnimateLogo className="h-8 w-8 shadow-[0_2px_12px_rgba(255,101,53,0.4)] rounded-[10px]" />
          <span className="text-gradient-signal text-lg font-bold neon-text-signal ml-1 hidden sm:block">PyAnimate</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-6">
          {compactLabel ? (
            <div
              className="text-xs sm:text-sm font-medium text-ink/72 max-w-[140px] sm:max-w-none truncate sm:whitespace-normal"
              title={compactLabel}
            >
              {compactLabel}
            </div>
          ) : (
            <nav className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm font-medium text-ink/65">
              <a href="#tracks" className="hidden md:block transition hover:text-wave hover:neon-text-wave">
                {t('tracks')}
              </a>
              <Link
                href="/playground"
                className="rounded-full bg-signal px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-sm font-semibold text-white shadow-[0_2px_12px_rgba(232,98,42,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(232,98,42,0.45)] shrink-0"
              >
                {t('playground')}
              </Link>
            </nav>
          )}

          <div className="hidden sm:block w-[1px] h-6 nav-separator" />
          <LanguageSelector />
          <ThemeSelector />
          {/* AI Wisdom ecosystem pill */}
          <a
            href="https://aiwisdom.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold border transition hover:scale-105"
            style={{
              color: 'rgba(255,255,255,0.75)',
              borderColor: 'rgba(139,92,246,0.35)',
              background: 'rgba(139,92,246,0.08)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <img src="/aiwisdom_icon.png" alt="" style={{ width: 14, height: 14, objectFit: 'contain' }} />
            AI Wisdom
          </a>
        </div>
      </div>
    </header>
  );
}
