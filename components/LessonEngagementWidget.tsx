'use client';

import { useEffect, useRef, useState } from 'react';
import { useClerk, useUser } from '@clerk/nextjs';
import { Linkedin, MessageCircle, Share2, Twitter } from 'lucide-react';
import { authReturnProps } from '@/lib/auth-return-url';

const EMOJI_OPTIONS = [
  { emoji: '🔥', label: 'Fire' },
  { emoji: '💡', label: 'Insight' },
  { emoji: '✨', label: 'Amazing' },
  { emoji: '🎯', label: 'On point' },
  { emoji: '👏', label: 'Applause' },
  { emoji: '🤯', label: 'Mind blown' },
];

type ReactionCount = {
  emoji: string;
  count: number;
};

type Props = {
  slug: string;
  commentCount: number;
  onCommentClick: () => void;
};

const CLERK_CONFIGURED =
  typeof process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === 'string' && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_');

export function LessonEngagementWidget(props: Props) {
  if (!CLERK_CONFIGURED) return null;
  return <LessonEngagementWidgetInner {...props} />;
}

function LessonEngagementWidgetInner({ slug, commentCount, onCommentClick }: Props) {
  const { isLoaded, isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const [counts, setCounts] = useState<ReactionCount[]>([]);
  const [userReactions, setUserReactions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/reactions?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((data) => {
        setCounts(data.counts ?? []);
        setUserReactions(data.userReactions ?? []);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) setPickerOpen(false);
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) setShareOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  async function toggleReaction(emoji: string) {
    if (!isLoaded) return;
    if (!isSignedIn) {
      openSignIn(authReturnProps());
      return;
    }

    const res = await fetch('/api/reactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, emoji }),
    });
    if (!res.ok) return;

    const data = await res.json();
    if (data.action === 'added') {
      setUserReactions((prev) => [...prev, emoji]);
      setCounts((prev) => {
        const exists = prev.find((c) => c.emoji === emoji);
        if (exists) return prev.map((c) => (c.emoji === emoji ? { ...c, count: c.count + 1 } : c));
        return [...prev, { emoji, count: 1 }];
      });
    } else {
      setUserReactions((prev) => prev.filter((e) => e !== emoji));
      setCounts((prev) => prev.map((c) => (c.emoji === emoji ? { ...c, count: c.count - 1 } : c)).filter((c) => c.count > 0));
    }
  }

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
    setShareOpen(false);
  }

  function shareVia(platform: 'twitter' | 'linkedin') {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const links = {
      twitter: `https://x.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
    window.open(links[platform], '_blank', 'noopener,noreferrer');
    setShareOpen(false);
  }

  const totalReactions = counts.reduce((sum, count) => sum + count.count, 0);

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-parchment/90 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur">
      <div ref={pickerRef} className="relative">
        <button
          type="button"
          aria-label="React to this lesson"
          onClick={() => setPickerOpen((open) => !open)}
          className="flex w-12 flex-col items-center gap-1 rounded-xl border border-ink/10 bg-ink/5 p-2.5 transition hover:border-signal/35 hover:bg-signal/10"
        >
          <span className="text-xl">😊</span>
          <span className="text-xs font-semibold text-ink/55">{loading ? '-' : totalReactions}</span>
        </button>

        {pickerOpen && (
          <div className="absolute left-14 top-0 z-50 w-48 rounded-xl border border-ink/10 bg-parchment p-2.5 shadow-xl">
            {!isSignedIn && <p className="mb-2 border-b border-ink/10 pb-2 text-[11px] text-ink/45">Sign in to react</p>}
            <div className="flex flex-wrap gap-1">
              {EMOJI_OPTIONS.map(({ emoji, label }) => {
                const count = counts.find((c) => c.emoji === emoji)?.count ?? 0;
                const active = userReactions.includes(emoji);
                return (
                  <button
                    key={emoji}
                    type="button"
                    title={label}
                    onClick={() => toggleReaction(emoji)}
                    className={`flex items-center gap-1 rounded-lg border px-2 py-1.5 text-sm transition ${
                      active ? 'border-signal bg-signal/10' : 'border-ink/10 hover:border-signal/30 hover:bg-ink/5'
                    }`}
                  >
                    <span>{emoji}</span>
                    {count > 0 && <span className="text-xs text-ink/50">{count}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onCommentClick}
        title="Go to comments"
        className="flex w-12 flex-col items-center gap-1 rounded-xl border border-ink/10 bg-ink/5 p-2.5 transition hover:border-signal/35 hover:bg-signal/10"
      >
        <MessageCircle className="h-5 w-5 text-ink/55" />
        <span className="text-xs font-semibold text-ink/55">{commentCount}</span>
      </button>

      <div ref={shareRef} className="relative">
        <button
          type="button"
          onClick={() => setShareOpen((open) => !open)}
          title="Share"
          className="flex w-12 flex-col items-center gap-1 rounded-xl border border-ink/10 bg-ink/5 p-2.5 transition hover:border-signal/35 hover:bg-signal/10"
        >
          <Share2 className="h-5 w-5 text-ink/55" />
          <span className="text-[11px] font-semibold text-ink/55">{copied ? 'Done' : 'Share'}</span>
        </button>

        {shareOpen && (
          <div className="absolute left-14 top-0 z-50 flex w-44 flex-col gap-1 rounded-xl border border-ink/10 bg-parchment p-2 shadow-xl">
            <button type="button" onClick={() => shareVia('twitter')} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink/70 hover:bg-ink/5">
              <Twitter className="h-3.5 w-3.5" /> X / Twitter
            </button>
            <button type="button" onClick={() => shareVia('linkedin')} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink/70 hover:bg-ink/5">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </button>
            <button type="button" onClick={copyLink} className="rounded-lg px-3 py-2 text-left text-sm text-ink/70 hover:bg-ink/5">
              Copy link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
