import { Link } from "@/i18n/routing";
import { PyAnimateLogo } from "@/components/icons/pyanimate-logo";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "@/components/language-selector";

type SiteHeaderProps = {
  compactLabel?: string;
};

export function SiteHeader({ compactLabel }: SiteHeaderProps) {
  const t = useTranslations("Navigation");

  return (
    <header className="px-6 pt-6 sm:px-10 lg:px-16">
      <div className="site-shell flex items-center justify-between rounded-full border border-white/10 bg-parchment/90 px-5 py-3 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
        <Link href="/" className="flex items-center gap-2">
          <PyAnimateLogo className="h-8 w-8 shadow-[0_2px_12px_rgba(255,101,53,0.4)] rounded-[10px]" />
          <span className="text-gradient-signal text-lg font-bold neon-text-signal ml-1">
            PyAnimate
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {compactLabel ? (
            <div className="text-sm font-medium text-ink/72">{compactLabel}</div>
          ) : (
            <nav className="flex items-center gap-5 text-sm font-medium text-ink/65">
              <a href="#tracks" className="transition hover:text-wave hover:neon-text-wave">{t("tracks")}</a>
              <a href="#algorithms" className="transition hover:text-wave">{t("algorithms")}</a>
              <Link
                href="/playground"
                className="rounded-full bg-gradient-to-r from-signal to-amber px-4 py-1.5 text-sm font-bold text-white shadow-[0_2px_14px_rgba(255,101,53,0.4)] transition hover:opacity-90 glow-signal"
              >
                {t("playground")}
              </Link>
            </nav>
          )}
          
          <div className="w-[1px] h-6 bg-white/10" />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
