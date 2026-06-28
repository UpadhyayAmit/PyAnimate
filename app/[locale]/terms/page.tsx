import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Terms of Use · PyAnimate',
  description: 'Terms and conditions for using PyAnimate.',
};

const EFFECTIVE = 'July 1, 2025';

export default function TermsPage() {
  return (
    <>
      <SiteHeader compactLabel="Terms of Use" />
      <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-extrabold text-bright">Terms of Use</h1>
      <p className="mb-10 text-sm text-ink/45">Effective date: {EFFECTIVE}</p>

      <div className="prose prose-invert prose-sm max-w-none space-y-8 text-ink/70 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-bright mb-3">1. Acceptance</h2>
          <p>
            By accessing PyAnimate (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Use. If you do not agree, please do not use
            the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">2. Use of the Service</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You must be at least 13 years old to use the Service.</li>
            <li>You are responsible for maintaining the security of your account.</li>
            <li>You agree not to use the Service for any unlawful purpose.</li>
            <li>You agree not to attempt to disrupt, overload, or interfere with the Service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">3. User content</h2>
          <p>
            Comments, reactions, and feedback you submit remain your own. By submitting content, you grant PyAnimate a non-exclusive, royalty-free
            licence to display that content on the platform. You must not submit content that is unlawful, harassing, defamatory, or infringes
            third-party rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">4. Intellectual property</h2>
          <p>
            All lesson content, code, visuals, and branding on PyAnimate are owned by Amit Upadhyay or their respective creators. You may not
            reproduce or redistribute platform content without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">5. Code executed in the playground</h2>
          <p>
            Python code runs entirely in your browser via Pyodide (WebAssembly). We do not receive, store, or execute your code on our servers. You
            are solely responsible for any code you write and run.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">6. Disclaimer of warranties</h2>
          <p>
            The Service is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability
            of any lesson content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">7. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, PyAnimate and its operator shall not be liable for any indirect, incidental, or consequential
            damages arising from your use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to the Service for violations of these Terms or for any other reason at our
            discretion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">9. Changes to these terms</h2>
          <p>We may update these Terms. Continued use of the Service after an update constitutes acceptance of the revised Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bright mb-3">10. Contact</h2>
          <p>
            Questions about these Terms? Email{' '}
            <a href="mailto:connect@pyanimate.com" className="text-signal underline underline-offset-2">
              connect@pyanimate.com
            </a>
            .
          </p>
        </section>
      </div>
      </main>
    </>
  );
}
