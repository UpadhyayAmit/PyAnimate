'use client';

import { useEffect, useState } from 'react';
import { useUser, useClerk } from '@clerk/nextjs';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface Props {
  slug: string;
}

const CLERK_CONFIGURED =
  typeof process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === 'string' && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_');

export function PageFeedback({ slug }: Props) {
  if (!CLERK_CONFIGURED) return null;
  return <PageFeedbackInner slug={slug} />;
}

function PageFeedbackInner({ slug }: Props) {
  const { isLoaded, isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const [helpful, setHelpful] = useState(0);
  const [notHelpful, setNotHelpful] = useState(0);
  const [userVote, setUserVote] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch(`/api/feedback?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((data) => {
        setHelpful(data.helpful ?? 0);
        setNotHelpful(data.notHelpful ?? 0);
        setUserVote(data.userVote ?? null);
        setLoading(false);
      });
  }, [slug]);

  async function vote(v: 1 | -1) {
    if (!isLoaded) return;
    if (!isSignedIn) {
      openSignIn();
      return;
    }
    if (submitting) return;

    setSubmitting(true);
    const prev = userVote;
    // Optimistic update
    if (prev === v) {
      setUserVote(null);
      if (v === 1) setHelpful((n) => n - 1);
      else setNotHelpful((n) => n - 1);
    } else {
      if (prev === 1) setHelpful((n) => n - 1);
      if (prev === -1) setNotHelpful((n) => n - 1);
      setUserVote(v);
      if (v === 1) setHelpful((n) => n + 1);
      else setNotHelpful((n) => n + 1);
    }

    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, vote: v }),
    });
    setSubmitting(false);
  }

  if (loading) return null;

  const total = helpful + notHelpful;

  return (
    <div className="pt-2">
      <p className="text-sm font-medium text-ink/60 mb-4 text-center">Was this page helpful?</p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => vote(1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
            userVote === 1
              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
              : 'border-ink/10 bg-ink/5 text-ink/60 hover:border-ink/25 hover:text-ink/80'
          }`}
        >
          <ThumbsUp size={15} />
          <span>Yes{helpful > 0 ? ` · ${helpful}` : ''}</span>
        </button>

        <button
          onClick={() => vote(-1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
            userVote === -1
              ? 'bg-red-500/20 border-red-500/50 text-red-400'
              : 'border-ink/10 bg-ink/5 text-ink/60 hover:border-ink/25 hover:text-ink/80'
          }`}
        >
          <ThumbsDown size={15} />
          <span>No{notHelpful > 0 ? ` · ${notHelpful}` : ''}</span>
        </button>
      </div>
      {total > 0 && (
        <p className="text-xs text-ink/35 text-center mt-3">
          {total} {total === 1 ? 'person' : 'people'} voted
        </p>
      )}
    </div>
  );
}
