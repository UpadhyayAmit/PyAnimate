'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { ChangeEvent, useTransition } from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी (Hindi)' },
  { code: 'hinglish', label: 'Hinglish' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'ar', label: 'العربية' },
];

export function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="relative inline-flex items-center">
      <svg className="absolute left-2 w-4 h-4 text-ink/50 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <select
        defaultValue={locale}
        onChange={onSelectChange}
        disabled={isPending}
        className="w-9 sm:w-auto pl-8 pr-0 sm:pr-4 py-1.5 bg-transparent text-sm font-medium text-ink/72 outline-none cursor-pointer border border-white/10 rounded-full hover:bg-white/5 disabled:opacity-50 appearance-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-parchment text-bright">
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
