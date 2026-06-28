import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { reactions } from '@/lib/db/schema';
import { eq, and, sql } from 'drizzle-orm';

const ALLOWED_EMOJIS = ['🔥', '💡', '✨', '🎯', '👏', '🤯'];

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });

  const { userId } = await auth();

  const counts = await db
    .select({ emoji: reactions.emoji, count: sql<number>`cast(count(*) as int)` })
    .from(reactions)
    .where(eq(reactions.pageSlug, slug))
    .groupBy(reactions.emoji);

  let userReactions: string[] = [];
  if (userId) {
    const rows = await db
      .select({ emoji: reactions.emoji })
      .from(reactions)
      .where(and(eq(reactions.pageSlug, slug), eq(reactions.userId, userId)));
    userReactions = rows.map((r) => r.emoji);
  }

  return NextResponse.json({ counts, userReactions });
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { slug, emoji } = body as { slug: string; emoji: string };

  if (!slug || !emoji) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  if (!ALLOWED_EMOJIS.includes(emoji)) return NextResponse.json({ error: 'Invalid emoji' }, { status: 400 });

  const existing = await db
    .select()
    .from(reactions)
    .where(and(eq(reactions.pageSlug, slug), eq(reactions.userId, userId), eq(reactions.emoji, emoji)));

  if (existing.length > 0) {
    await db.delete(reactions).where(and(eq(reactions.pageSlug, slug), eq(reactions.userId, userId), eq(reactions.emoji, emoji)));
    return NextResponse.json({ action: 'removed' });
  }

  await db.insert(reactions).values({ pageSlug: slug, userId, emoji });
  return NextResponse.json({ action: 'added' });
}
