'use client';

import { Link } from '@/i18n/routing';
import { PyAnimateLogo } from '@/components/icons/pyanimate-logo';

const LEARN_LINKS = [
  { href: '/tracks/foundation', label: 'Foundation' },
  { href: '/tracks/beginner', label: 'Beginner' },
  { href: '/tracks/intermediate', label: 'Intermediate' },
  { href: '/tracks/advanced', label: 'Advanced' },
  { href: '/tracks/mastery', label: 'Mastery' },
] as const;

const RESOURCE_LINKS = [
  { href: '/playground', label: 'Python Playground' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
] as const;

const SUPPORT_LINKS = [
  { href: '/about', label: 'About PyAnimate' },
  { href: '/about#enquiry', label: 'Enquiry' },
] as const;

function FooterLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  const className = 'text-sm text-white/48 transition hover:text-white';
  if (external || href.startsWith('mailto:')) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function SharedFooter() {
  return (
    <footer className="relative mt-10 overflow-hidden bg-[#0b0f19] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-signal/55 to-transparent" />
      <div className="site-shell px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-10 text-center md:grid-cols-[1.35fr_1fr_1fr] md:text-left lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <section>
            <Link href="/" className="inline-flex items-center justify-center gap-3 md:justify-start">
              <PyAnimateLogo className="h-11 w-11 rounded-[14px] shadow-[0_0_24px_rgba(232,98,42,0.28)]" />
              <div>
                <div className="text-lg font-bold">PyAnimate</div>
                <div className="text-xs text-white/35">Animated Python learning</div>
              </div>
            </Link>
            <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/50 md:mx-0">
              Visual Python lessons for learners who want to see execution, memory, data structures, and algorithm flow while they code.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/45">pyanimate.com</span>
              <span className="rounded-full border border-signal/25 bg-signal/10 px-3 py-1 text-xs text-signal">Built for practice</span>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">Learn</h2>
            <div className="mt-4 flex flex-col items-center gap-3 md:items-start">
              {LEARN_LINKS.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">Resources</h2>
            <div className="mt-4 flex flex-col items-center gap-3 md:items-start">
              {RESOURCE_LINKS.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">Support</h2>
            <div className="mt-4 flex flex-col items-center gap-3 md:items-start">
              {SUPPORT_LINKS.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} PyAnimate. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <FooterLink href="/about" label="About" />
            <FooterLink href="/privacy" label="Privacy Policy" />
            <FooterLink href="/terms" label="Terms of Use" />
          </div>
        </div>
      </div>
    </footer>
  );
}
