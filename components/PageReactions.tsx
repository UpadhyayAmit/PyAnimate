'use client';

import { useEffect, useRef, useState } from 'react';
import { useUser, useClerk } from '@clerk/nextjs';
import { Share2, Twitter, Linkedin } from 'lucide-react';

const EMOJI_OPTIONS = [
  { emoji: '🔥', label: 'Fire' },
  { emoji: '💡', label: 'Insight' },
  { emoji: '✨', label: 'Amazing' },
  { emoji: '🎯', label: 'On point' },
  { emoji: '👏', label: 'Applause' },
  { emoji: '🤯', label: 'Mind blown' },
];

interface ReactionCount {
  emoji: string;
  count: number;
}

interface Props {
  slug: string;
}

const CLERK_CONFIGURED =
  typeof process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === 'string' && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_');

export function PageReactions({ slug }: Props) {
  if (!CLERK_CONFIGURED) return null;
  return <PageReactionsInner slug={slug} />;
}

function PageReactionsInner({ slug }: Props) {
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
    fetch(`/api/reactions?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((data) => {
        setCounts(data.counts ?? []);
        setUserReactions(data.userReactions ?? []);
        setLoading(false);
      });
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
      openSignIn();
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
    setTimeout(() => setCopied(false), 2000);
    setShareOpen(false);
  }

  function shareVia(platform: 'twitter' | 'linkedin') {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const links: Record<string, string> = {
      twitter: `https://x.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
    window.open(links[platform], '_blank', 'noopener,noreferrer');
    setShareOpen(false);
  }

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {/* Active reactions */}
      {!loading &&
        counts.map((c) => (
          <button
            key={c.emoji}
            onClick={() => toggleReaction(c.emoji)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border transition-all ${
              userReactions.includes(c.emoji)
                ? 'border-signal bg-signal/10 text-white'
                : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30'
            }`}
          >
            <span>{c.emoji}</span>
            <span className="font-mono text-xs">{c.count}</span>
          </button>
        ))}

      {/* Add reaction picker */}
      <div className="relative" ref={pickerRef}>
        <button
          onClick={() => setPickerOpen((o) => !o)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/5 text-white/50 hover:text-white/80 hover:border-white/30 transition-all"
          title="React"
        >
          <span>+</span>
          <span className="text-base">😊</span>
        </button>
        {pickerOpen && (
          <div className="absolute bottom-full mb-2 left-0 bg-[#141820] border border-white/10 rounded-2xl p-2 shadow-xl flex gap-1 z-20">
            {EMOJI_OPTIONS.map(({ emoji, label }) => (
              <button
                key={emoji}
                onClick={() => {
                  toggleReaction(emoji);
                  setPickerOpen(false);
                }}
                title={label}
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg hover:bg-white/10 transition-colors ${
                  userReactions.includes(emoji) ? 'bg-signal/20' : ''
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Share */}
      <div className="relative ml-auto" ref={shareRef}>
        <button
          onClick={() => setShareOpen((o) => !o)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/5 text-white/50 hover:text-white/80 hover:border-white/30 transition-all"
        >
          <Share2 size={14} />
          <span>Share</span>
        </button>
        {shareOpen && (
          <div className="absolute bottom-full mb-2 right-0 bg-[#141820] border border-white/10 rounded-2xl p-2 shadow-xl flex flex-col gap-1 min-w-[160px] z-20">
            <button
              onClick={() => shareVia('twitter')}
              className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Twitter size={14} /> Share on X
            </button>
            <button
              onClick={() => shareVia('linkedin')}
              className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Linkedin size={14} /> Share on LinkedIn
            </button>
            <button
              onClick={copyLink}
              className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 text-sm text-white/70 hover:text-white transition-colors"
            >
              {copied ? '✅ Copied!' : '🔗 Copy link'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
