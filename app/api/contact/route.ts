import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/server/mail';

export const dynamic = 'force-dynamic';

// Simple in-memory rate limit: max 5 requests per 10 min per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? req.headers.get('x-real-ip') ?? 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Please wait a few minutes.' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const { name, email, subject, message, _honey } = body as Record<string, string>;

  if (_honey) return NextResponse.json({ ok: true }); // silently drop bots

  if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
    return NextResponse.json({ ok: false, error: 'Invalid name.' }, { status: 400 });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: 'Invalid email address.' }, { status: 400 });
  }
  if (!subject || typeof subject !== 'string' || subject.trim().length === 0 || subject.length > 150) {
    return NextResponse.json({ ok: false, error: 'Invalid subject.' }, { status: 400 });
  }
  if (!message || typeof message !== 'string' || message.trim().length === 0 || message.length > 3000) {
    return NextResponse.json({ ok: false, error: 'Message must be 1–3000 characters.' }, { status: 400 });
  }

  try {
    await sendContactEmail({ visitorName: name.trim(), visitorEmail: email.trim(), subject: subject.trim(), message: message.trim() });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] mail error:', err);
    return NextResponse.json({ ok: false, error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
