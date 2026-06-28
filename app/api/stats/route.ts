import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { inArray, sql } from 'drizzle-orm';
import { algorithmsByLevel } from '@/data/course';
import { db } from '@/lib/db';
import { comments, pageFeedback, reactions } from '@/lib/db/schema';

const CACHE_HEADERS = {
  'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
};

function slugsForRequest(req: NextRequest) {
  const track = req.nextUrl.searchParams.get('track');
  if (track && algorithmsByLevel[track]) {
    return [`track-${track}`, ...algorithmsByLevel[track].map((lesson) => lesson.id)];
  }

  const slug = req.nextUrl.searchParams.get('slug');
  if (slug) return [slug];

  const slugs = req.nextUrl.searchParams
    .get('slugs')
    ?.split(',')
    .map((value) => value.trim())
    .filter(Boolean);

  return slugs ?? [];
}

export async function GET(req: NextRequest) {
  const slugs = Array.from(new Set(slugsForRequest(req))).slice(0, 80);
  if (slugs.length === 0) return NextResponse.json({ reactions: 0, comments: 0, feedback: 0 }, { status: 400 });

  const [reactionRow, commentRow, feedbackRow] = await Promise.all([
    db
      .select({ count: sql<number>`cast(count(*) as int)` })
      .from(reactions)
      .where(inArray(reactions.pageSlug, slugs)),
    db
      .select({ count: sql<number>`cast(count(*) as int)` })
      .from(comments)
      .where(inArray(comments.pageSlug, slugs)),
    db
      .select({ count: sql<number>`cast(count(*) as int)` })
      .from(pageFeedback)
      .where(inArray(pageFeedback.pageSlug, slugs)),
  ]);

  return NextResponse.json(
    {
      reactions: reactionRow[0]?.count ?? 0,
      comments: commentRow[0]?.count ?? 0,
      feedback: feedbackRow[0]?.count ?? 0,
    },
    { headers: CACHE_HEADERS },
  );
}
