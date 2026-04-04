import { Link } from '@/i18n/routing';
import { PyAnimateLogo } from '@/components/icons/pyanimate-logo';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from '@/components/language-selector';
import { ThemeToggle } from '@/components/theme-toggle';

type SiteHeaderProps = {
  compactLabel?: string;
};

export function SiteHeader({ compactLabel }: SiteHeaderProps) {
  const t = useTranslations('Navigation');

  return (
    <header className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-16">
      <div className="site-shell flex flex-wrap items-center justify-between gap-3 rounded-[24px] sm:rounded-full border border-white/10 bg-parchment/90 px-4 py-3 sm:px-5 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <PyAnimateLogo className="h-8 w-8 shadow-[0_2px_12px_rgba(255,101,53,0.4)] rounded-[10px]" />
          <span className="text-gradient-signal text-lg font-bold neon-text-signal ml-1 hidden sm:block">PyAnimate</span>
        </Link>
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
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
              <a href="#algorithms" className="hidden md:block transition hover:text-wave">
                {t('algorithms')}
              </a>
              <Link
                href="/playground"
                className="rounded-full bg-gradient-to-r from-signal to-amber px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-sm font-bold text-white shadow-[0_2px_14px_rgba(255,101,53,0.4)] transition hover:opacity-90 glow-signal shrink-0"
              >
                {t('playground')}
              </Link>
            </nav>
          )}

          <div className="hidden sm:block w-[1px] h-6 bg-white/10" />
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
