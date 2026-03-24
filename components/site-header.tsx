import Link from "next/link";

type SiteHeaderProps = {
  compactLabel?: string;
};

export function SiteHeader({ compactLabel }: SiteHeaderProps) {
  return (
    <header className="px-6 pt-6 sm:px-10 lg:px-16">
      <div className="site-shell flex items-center justify-between rounded-full border border-white/10 bg-parchment/90 px-5 py-3 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-signal to-amber shadow-[0_2px_12px_rgba(255,101,53,0.4)]">
            <span className="text-xs font-black text-white">P</span>
          </span>
          <span className="text-gradient-signal text-lg font-bold neon-text-signal">
            PyAnimate
          </span>
        </Link>
        {compactLabel ? (
          <div className="text-sm text-ink/72">{compactLabel}</div>
        ) : (
          <nav className="flex items-center gap-5 text-sm text-ink/65">
            <a href="#tracks" className="transition hover:text-wave hover:neon-text-wave">Tracks</a>
            <a href="#algorithms" className="transition hover:text-wave">Algorithms</a>
            <Link
              href="/playground"
              className="rounded-full bg-gradient-to-r from-signal to-amber px-4 py-1.5 text-sm font-semibold text-white shadow-[0_2px_14px_rgba(255,101,53,0.4)] transition hover:opacity-90 glow-signal"
            >
              Playground
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
