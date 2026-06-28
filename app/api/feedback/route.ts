import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { pageFeedback } from '@/lib/db/schema';
import { eq, and, sql } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });

  const { userId } = await auth();

  const [agg] = await db
    .select({
      helpful: sql<number>`cast(sum(case when vote = 1 then 1 else 0 end) as int)`,
      notHelpful: sql<number>`cast(sum(case when vote = -1 then 1 else 0 end) as int)`,
    })
    .from(pageFeedback)
    .where(eq(pageFeedback.pageSlug, slug));

  let userVote: number | null = null;
  if (userId) {
    const [row] = await db
      .select({ vote: pageFeedback.vote })
      .from(pageFeedback)
      .where(and(eq(pageFeedback.pageSlug, slug), eq(pageFeedback.userId, userId)));
    userVote = row?.vote ?? null;
  }

  return NextResponse.json({
    helpful: agg?.helpful ?? 0,
    notHelpful: agg?.notHelpful ?? 0,
    userVote,
  });
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { slug, vote } = body as { slug: string; vote: number };

  if (!slug || (vote !== 1 && vote !== -1)) {
    return NextResponse.json({ error: 'Invalid fields' }, { status: 400 });
  }

  await db
    .insert(pageFeedback)
    .values({ pageSlug: slug, userId, vote })
    .onConflictDoUpdate({
      target: [pageFeedback.pageSlug, pageFeedback.userId],
      set: { vote },
    });

  return NextResponse.json({ success: true });
}
