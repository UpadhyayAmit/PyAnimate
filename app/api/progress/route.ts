import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { userProgress } from '@/lib/db/schema';

type ProgressPayload = {
  completedLessons?: unknown;
  completedSteps?: unknown;
  completedChallenges?: unknown;
  totalXP?: unknown;
  streak?: unknown;
  lastActiveDate?: unknown;
  lastLessonId?: unknown;
};

function stringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function boundedNumber(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0;
}

function nullableString(value: unknown) {
  return typeof value === 'string' && value.length > 0 ? value.slice(0, 100) : null;
}

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const [row] = await db.select().from(userProgress).where(eq(userProgress.userId, userId));
    return NextResponse.json({
      progress: row
        ? {
            completedLessons: row.completedLessons,
            completedSteps: row.completedSteps,
            completedChallenges: row.completedChallenges,
            totalXP: row.totalXp,
            streak: row.streak,
            lastActiveDate: row.lastActiveDate,
            lastLessonId: row.lastLessonId,
          }
        : null,
    });
  } catch {
    return NextResponse.json({ error: 'Progress sync temporarily unavailable' }, { status: 503 });
  }
}

export async function PUT(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = (await req.json()) as ProgressPayload;
  const values = {
    userId,
    completedLessons: stringArray(body.completedLessons),
    completedSteps: stringArray(body.completedSteps),
    completedChallenges: stringArray(body.completedChallenges),
    totalXp: boundedNumber(body.totalXP),
    streak: boundedNumber(body.streak),
    lastActiveDate: nullableString(body.lastActiveDate),
    lastLessonId: nullableString(body.lastLessonId),
    updatedAt: new Date(),
  };

  try {
    const [progress] = await db
      .insert(userProgress)
      .values(values)
      .onConflictDoUpdate({
        target: userProgress.userId,
        set: {
          completedLessons: values.completedLessons,
          completedSteps: values.completedSteps,
          completedChallenges: values.completedChallenges,
          totalXp: values.totalXp,
          streak: values.streak,
          lastActiveDate: values.lastActiveDate,
          lastLessonId: values.lastLessonId,
          updatedAt: values.updatedAt,
        },
      })
      .returning();

    return NextResponse.json({ progress });
  } catch {
    return NextResponse.json({ error: 'Progress sync temporarily unavailable' }, { status: 503 });
  }
}
