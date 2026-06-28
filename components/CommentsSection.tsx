'use client';

import { useEffect, useRef, useState } from 'react';
import { useClerk, useUser } from '@clerk/nextjs';
import { Send, Trash2 } from 'lucide-react';
import { authReturnProps } from '@/lib/auth-return-url';

type Comment = {
  id: number;
  pageSlug: string;
  userId: string;
  userName: string;
  userAvatar: string | null;
  body: string;
  createdAt: string;
};

type Props = {
  slug: string;
  sectionRef?: React.RefObject<HTMLDivElement | null>;
  onCountChange?: (count: number) => void;
};

const CLERK_CONFIGURED =
  typeof process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === 'string' && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_');

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export function CommentsSection(props: Props) {
  if (!CLERK_CONFIGURED) return null;
  return <CommentsSectionInner {...props} />;
}

function CommentsSectionInner({ slug, sectionRef, onCountChange }: Props) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { openSignIn } = useClerk();
  const [comments, setComments] = useState<Comment[]>([]);
  const [body, setBody] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/comments?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((data) => {
        const nextComments = data.comments ?? [];
        setComments(nextComments);
      })
      .catch(() => {
        setComments([]);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    onCountChange?.(comments.length);
  }, [comments.length, onCountChange]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;
    if (!isSignedIn) {
      openSignIn(authReturnProps());
      return;
    }
    if (!body.trim() || submitting) return;

    setSubmitting(true);
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, body }),
    });

    if (res.ok) {
      const data = await res.json();
      setComments((prev) => [data.comment, ...prev]);
      setBody('');
    }
    setSubmitting(false);
  }

  async function handleDelete(id: number) {
    const res = await fetch(`/api/comments?id=${id}`, { method: 'DELETE' });
    if (res.ok) {
      setComments((prev) => prev.filter((c) => c.id !== id));
    }
  }

  return (
    <section ref={sectionRef} className="mt-8 border-t border-ink/10 pt-8">
      <h2 className="text-xl font-bold text-bright">
        Comments {!loading && <span className="text-base font-medium text-ink/45">({comments.length})</span>}
      </h2>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-ink/5 text-sm font-bold text-ink/45">
            {isSignedIn && user?.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.imageUrl} alt={user.fullName ?? ''} className="h-full w-full object-cover" />
            ) : (
              '?'
            )}
          </div>
          <div className="flex-1">
            <textarea
              ref={textareaRef}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              onClick={() => {
                if (!isSignedIn) openSignIn(authReturnProps());
              }}
              readOnly={!isSignedIn}
              rows={3}
              maxLength={2000}
              placeholder={isSignedIn ? 'Share a note about this lesson...' : 'Sign in to join the discussion'}
              className="w-full resize-none rounded-[18px] border border-ink/10 bg-parchment px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition focus:border-signal/40 focus:ring-2 focus:ring-signal/20"
            />
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                disabled={submitting || !body.trim()}
                className="inline-flex items-center gap-2 rounded-full bg-signal px-4 py-2 text-sm font-semibold text-white transition hover:bg-signal/90 disabled:opacity-45"
              >
                <Send className="h-4 w-4" />
                {submitting ? 'Posting...' : 'Post comment'}
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-8 space-y-6">
        {loading ? (
          <p className="text-sm text-ink/45">Loading comments...</p>
        ) : comments.length === 0 ? (
          <p className="text-sm text-ink/45">Be the first to comment on this lesson.</p>
        ) : (
          comments.map((comment) => (
            <article key={comment.id} className="group flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-ink/5 text-sm font-bold text-ink/45">
                {comment.userAvatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={comment.userAvatar} alt={comment.userName} className="h-full w-full object-cover" />
                ) : (
                  comment.userName[0]?.toUpperCase()
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-sm font-semibold text-bright">{comment.userName}</span>
                  <span className="text-xs text-ink/40">{timeAgo(comment.createdAt)}</span>
                  {isSignedIn && user?.id === comment.userId && (
                    <button
                      type="button"
                      onClick={() => handleDelete(comment.id)}
                      title="Delete comment"
                      className="ml-auto text-ink/35 opacity-0 transition hover:text-red-500 group-hover:opacity-100"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
                <p className="whitespace-pre-wrap text-sm leading-6 text-ink/70">{comment.body}</p>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
