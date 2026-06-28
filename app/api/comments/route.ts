import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { auth, currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { comments } from '@/lib/db/schema';
import { desc, eq } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });

  const rows = await db.select().from(comments).where(eq(comments.pageSlug, slug)).orderBy(desc(comments.createdAt));

  return NextResponse.json({ comments: rows });
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { slug, body: commentBody } = body as { slug: string; body: string };

  if (!slug || !commentBody?.trim()) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

  const user = await currentUser();
  const trimmed = commentBody.trim().slice(0, 2000);
  const userName = user?.fullName ?? user?.username ?? user?.emailAddresses[0]?.emailAddress ?? 'Anonymous';
  const userAvatar = user?.imageUrl ?? null;

  const [inserted] = await db
    .insert(comments)
    .values({ pageSlug: slug, userId, userName, userAvatar, body: trimmed })
    .returning();

  return NextResponse.json({ comment: inserted });
}

export async function DELETE(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const id = req.nextUrl.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  const commentId = Number.parseInt(id, 10);
  if (Number.isNaN(commentId)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 });

  const [row] = await db.select().from(comments).where(eq(comments.id, commentId));
  if (!row) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (row.userId !== userId) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  await db.delete(comments).where(eq(comments.id, commentId));
  return NextResponse.json({ success: true });
}
