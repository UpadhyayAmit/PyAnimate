import type { Metadata } from 'next';
import { QuickInquiry } from '@/components/QuickInquiry';
import { SiteHeader } from '@/components/site-header';
import { PyAnimateLogo } from '@/components/icons/pyanimate-logo';
import { Code2, BrainCircuit, Mail, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the creator of PyAnimate and learn how visual Python lessons are built for curious learners.',
  authors: [{ name: 'Amit Upadhyay' }],
  other: {
    'author:focus': 'Python education, visual learning, AI Wisdom',
  },
};

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: 'Visual execution',
    desc: 'Lessons are designed around memory, stack, heap, output, and step-by-step code flow.',
  },
  {
    icon: BrainCircuit,
    title: 'Algorithm intuition',
    desc: 'PyAnimate turns abstract Python and data-structure ideas into visible, repeatable practice.',
  },
  {
    icon: Sparkles,
    title: 'AI Wisdom context',
    desc: 'The broader AI Wisdom work informs how lessons connect programming fundamentals to modern AI systems.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader compactLabel="About PyAnimate" />
      <main className="site-shell px-6 py-14 sm:px-10 lg:px-16">
        <section className="mb-14 flex flex-col gap-8 md:flex-row md:items-start">
          <div className="shrink-0">
            <PyAnimateLogo className="h-24 w-24 rounded-[24px] shadow-[0_0_30px_rgba(255,101,53,0.32)]" />
          </div>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-signal">Creator and Developer</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-bright">Amit Upadhyay</h1>
            <p className="mt-4 text-lg leading-8 text-ink/68">
              I build educational tools that make difficult technical ideas easier to see, test, and remember. PyAnimate is my visual Python
              playground for learners who want more than syntax notes: they want to watch code run, understand why each line matters, and build
              confidence through practice.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-bright">About PyAnimate</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <article key={item.title} className="card-elevated rounded-[24px] p-5">
                <item.icon className="h-5 w-5 text-signal" />
                <h3 className="mt-4 text-base font-bold text-bright">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/62">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="enquiry" className="mb-14 scroll-mt-28 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="card-elevated rounded-[24px] p-6">
            <h2 className="text-xl font-bold text-bright">Feedback and enquiries</h2>
            <p className="mt-3 text-sm leading-7 text-ink/62">
              Found a lesson that could be clearer, want a new animation, or want to discuss the learning experience? Use the form or email the
              PyAnimate inbox.
            </p>
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-signal/20 bg-signal/10 px-4 py-3 text-sm text-ink/80">
              <Mail className="h-4 w-4 text-signal" />
              <a href="mailto:connect@pyanimate.com" className="font-semibold text-signal underline-offset-2 hover:underline">
                connect@pyanimate.com
              </a>
            </div>
          </div>
          <QuickInquiry />
        </section>
      </main>
    </>
  );
}
