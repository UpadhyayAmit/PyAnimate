import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Privacy Policy · PyAnimate',
  description: 'How PyAnimate collects, uses, and protects your data.',
};

const EFFECTIVE = 'July 1, 2025';

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader compactLabel="Privacy Policy" />
      <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-extrabold text-bright">Privacy Policy</h1>
      <p className="mb-10 text-sm text-ink/45">Effective date: {EFFECTIVE}</p>

      <div className="prose prose-invert prose-sm max-w-none space-y-8 text-ink/70 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-bright mb-3">1. Who we are</h2>
          <p>
            PyAnimate (&ldquo;we&rdquo;, &ldquo;our&rdquo;) is operated by Amit Upadhyay. You can reach us at{' '}
            <a href="mailto:connect@pyanimate.com" className="text-signal underline underline-offset-2">
              connect@pyanimate.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">2. Data we collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-bright">Account data</strong> — Name, email address, and profile picture provided through our sign-in
              system when you create an account.
            </li>
            <li>
              <strong className="text-bright">Usage data</strong> — Reactions, page-feedback votes, and comments you submit on lessons.
            </li>
            <li>
              <strong className="text-bright">Contact form data</strong> — Your name, email, subject and message when you use the inquiry form.
            </li>
            <li>
              <strong className="text-bright">Analytics</strong> — Aggregated, anonymized page-view data used to understand site performance.
              No personal identifiers are stored for analytics.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">3. How we use your data</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To display your reactions and feedback on lessons.</li>
            <li>To respond to your contact inquiries.</li>
            <li>To improve the platform by understanding which lessons are most helpful.</li>
          </ul>
          <p className="mt-3">We never sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">4. Service providers</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-bright">Authentication provider</strong> — Helps create accounts, sign users in, and protect sessions.
            </li>
            <li>
              <strong className="text-bright">Data storage provider</strong> — Stores user-generated content such as comments, reactions, and
              feedback.
            </li>
            <li>
              <strong className="text-bright">Hosting provider</strong> — Delivers PyAnimate pages and application files securely.
            </li>
            <li>
              <strong className="text-bright">Analytics provider</strong> — Provides aggregated usage insights so we can improve lessons and
              fix confusing flows.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">5. Data retention</h2>
          <p>
            Your account data is retained as long as you have an account. You may request deletion at any time by emailing{' '}
            <a href="mailto:privacy@pyanimate.com" className="text-signal underline underline-offset-2">
              privacy@pyanimate.com
            </a>
            . Contact form emails are retained for 12 months.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">6. Cookies</h2>
          <p>We use only essential cookies for authentication, preferences, and basic site functionality. No advertising cookies are used.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">7. Your rights</h2>
          <p>
            You have the right to access, correct, or delete any personal data we hold about you. Contact{' '}
            <a href="mailto:privacy@pyanimate.com" className="text-signal underline underline-offset-2">
              privacy@pyanimate.com
            </a>{' '}
            to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">8. Changes to this policy</h2>
          <p>We may update this policy. Material changes will be communicated by updating the effective date at the top of this page.</p>
        </section>
      </div>
      </main>
    </>
  );
}
