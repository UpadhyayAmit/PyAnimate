'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState, useTransition } from 'react';

const languages = [
  { code: 'en', label: 'English', flag: 'gb' },
  { code: 'hinglish', label: 'Hinglish', flag: 'in' },
  { code: 'fr', label: 'Francais', flag: 'fr' },
  { code: 'es', label: 'Espanol', flag: 'es' },
  { code: 'de', label: 'Deutsch', flag: 'de' },
  { code: 'ja', label: 'Japanese', flag: 'jp' },
  { code: 'zh', label: 'Chinese', flag: 'cn' },
  { code: 'hi', label: 'Hindi', flag: 'in' },
  { code: 'ar', label: 'Arabic', flag: 'ae' },
] as const;

type FlagCode = (typeof languages)[number]['flag'];

const flagClass = 'h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.18)]';

function FlagMark({ code }: { code: FlagCode }) {
  switch (code) {
    case 'gb':
      return (
        <svg className={flagClass} viewBox="0 0 60 40" aria-hidden="true">
          <rect width="60" height="40" fill="#012169" />
          <path d="M0 0 60 40M60 0 0 40" stroke="#fff" strokeWidth="8" />
          <path d="M0 0 60 40M60 0 0 40" stroke="#c8102e" strokeWidth="4" />
          <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="13" />
          <path d="M30 0v40M0 20h60" stroke="#c8102e" strokeWidth="7" />
        </svg>
      );
    case 'in':
      return (
        <svg className={flagClass} viewBox="0 0 60 40" aria-hidden="true">
          <rect width="60" height="13.33" fill="#ff9933" />
          <rect y="13.33" width="60" height="13.34" fill="#fff" />
          <rect y="26.67" width="60" height="13.33" fill="#138808" />
          <circle cx="30" cy="20" r="4.2" fill="none" stroke="#000080" strokeWidth="1.4" />
        </svg>
      );
    case 'fr':
      return (
        <svg className={flagClass} viewBox="0 0 60 40" aria-hidden="true">
          <rect width="20" height="40" fill="#0055a4" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#ef4135" />
        </svg>
      );
    case 'es':
      return (
        <svg className={flagClass} viewBox="0 0 60 40" aria-hidden="true">
          <rect width="60" height="40" fill="#aa151b" />
          <rect y="10" width="60" height="20" fill="#f1bf00" />
        </svg>
      );
    case 'de':
      return (
        <svg className={flagClass} viewBox="0 0 60 40" aria-hidden="true">
          <rect width="60" height="13.33" fill="#000" />
          <rect y="13.33" width="60" height="13.34" fill="#dd0000" />
          <rect y="26.67" width="60" height="13.33" fill="#ffce00" />
        </svg>
      );
    case 'jp':
      return (
        <svg className={flagClass} viewBox="0 0 60 40" aria-hidden="true">
          <rect width="60" height="40" fill="#fff" />
          <circle cx="30" cy="20" r="9" fill="#bc002d" />
        </svg>
      );
    case 'cn':
      return (
        <svg className={flagClass} viewBox="0 0 60 40" aria-hidden="true">
          <rect width="60" height="40" fill="#de2910" />
          <path d="m10 8 1.6 4.9h5.2l-4.2 3 1.6 5-4.2-3.1-4.2 3.1 1.6-5-4.2-3h5.2z" fill="#ffde00" />
        </svg>
      );
    case 'ae':
      return (
        <svg className={flagClass} viewBox="0 0 60 40" aria-hidden="true">
          <rect width="60" height="40" fill="#fff" />
          <rect width="16" height="40" fill="#ce1126" />
          <rect x="16" width="44" height="13.33" fill="#00732f" />
          <rect x="16" y="26.67" width="44" height="13.33" fill="#000" />
        </svg>
      );
  }
}

export function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const activeLanguage = languages.find((lang) => lang.code === locale) ?? languages[0];

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function selectLocale(nextLocale: string) {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    setOpen(false);
    startTransition(() => {
      const query = searchParams.toString();
      router.replace((query ? `${pathname}?${query}` : pathname) as any, { locale: nextLocale });
    });
  }

  return (
    <div ref={menuRef} className="relative inline-flex">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        disabled={isPending}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 min-w-[122px] items-center justify-between gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 text-sm font-semibold text-ink/72 outline-none transition hover:bg-white/[0.06] disabled:opacity-50"
      >
        <span className="inline-flex min-w-0 items-center gap-2">
          <FlagMark code={activeLanguage.flag} />
          <span className="truncate">{activeLanguage.label}</span>
        </span>
        <svg className={`h-4 w-4 shrink-0 transition ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-[calc(100%+0.45rem)] z-50 w-40 overflow-hidden rounded-2xl border border-white/10 bg-[#171d28] p-1 shadow-2xl"
        >
          {languages.map((lang) => {
            const active = lang.code === locale;
            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => selectLocale(lang.code)}
                className={`flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-sm font-semibold transition ${
                  active ? 'bg-signal text-white' : 'text-ink/78 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                <FlagMark code={lang.flag} />
                <span className="truncate">{lang.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
