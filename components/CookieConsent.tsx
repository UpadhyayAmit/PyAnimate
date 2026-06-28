'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

type Consent = 'accepted' | 'declined' | null;

const STORAGE_KEY = 'pyanimate-cookie-consent';
const COOKIE_NAME = 'pyanimate_cookie_consent';

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'accepted' || stored === 'declined') setConsent(stored);
    setReady(true);
  }, []);

  function saveConsent(value: Exclude<Consent, null>) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    if (value === 'accepted') {
      document.cookie = `${COOKIE_NAME}=accepted; path=/; max-age=31536000; samesite=lax`;
    }
  }

  return (
    <>
      {consent === 'accepted' && clarityId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      ) : null}

      {ready && consent === null ? (
        <section className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#111722]/95 p-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur md:flex md:items-center md:gap-5">
          <div className="min-w-0 flex-1">
            <h2 className="text-sm font-bold">Cookie permission</h2>
            <p className="mt-1 text-sm leading-6 text-white/58">
              PyAnimate uses required cookies for sign-in and language preference. With your permission, we also use optional analytics cookies to
              understand what lessons are useful.
            </p>
          </div>
          <div className="mt-4 flex shrink-0 gap-2 md:mt-0">
            <button
              type="button"
              onClick={() => saveConsent('declined')}
              className="rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:text-white"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => saveConsent('accepted')}
              className="rounded-full bg-signal px-4 py-2 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(232,98,42,0.35)] transition hover:bg-signal/90"
            >
              Allow
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}
