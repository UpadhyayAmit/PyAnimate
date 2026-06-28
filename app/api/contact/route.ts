import { NextRequest, NextResponse } from 'next/server';
import { resolveMx } from 'node:dns/promises';
import { sendContactEmail, sendContactWelcomeEmail } from '@/lib/server/mail';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const BLOCKED_DOMAINS = new Set([
  '10minutemail.com',
  'guerrillamail.com',
  'mailinator.com',
  'tempmail.com',
  'temp-mail.org',
  'throwawaymail.com',
  'yopmail.com',
  ...csv(process.env.BLOCKED_EMAIL_DOMAINS),
]);

const BLOCKED_EMAILS = new Set(csv(process.env.BLOCKED_EMAILS));

const SPAM_PATTERNS = [
  /\bcasino\b/i,
  /\bcrypto\b/i,
  /\bforex\b/i,
  /\bloan\b/i,
  /\bviagra\b/i,
  /\bbacklinks?\b/i,
  /\bseo\s+services?\b/i,
  /\bwhatsapp\s+marketing\b/i,
];

const ALLOWED_SUBJECTS = new Set(['Track / lesson feedback', 'Bug report', 'Collaboration', 'General inquiry']);

// Simple in-memory rate limit: max 3 requests per 10 min per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

function csv(value?: string) {
  return (value ?? '')
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function getDomain(email: string) {
  return email.split('@')[1]?.toLowerCase() ?? '';
}

function tooManyLinks(value: string) {
  const links = value.match(/https?:\/\/|www\.|\.com\b|\.net\b|\.org\b/gi);
  return (links?.length ?? 0) > 2;
}

function hasSpamContent(value: string) {
  return SPAM_PATTERNS.some((pattern) => pattern.test(value)) || /(.)\1{12,}/.test(value);
}

async function hasMxRecord(domain: string) {
  try {
    const records = await resolveMx(domain);
    return records.length > 0;
  } catch {
    return false;
  }
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

  const { name, email, subject, message, _honey, startedAt } = body as Record<string, string>;

  if (_honey) return NextResponse.json({ ok: true }); // silently drop bots
  if (startedAt && Date.now() - Number(startedAt) < 2500) return NextResponse.json({ ok: true });

  if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
    return NextResponse.json({ ok: false, error: 'Invalid name.' }, { status: 400 });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: 'Invalid email address.' }, { status: 400 });
  }

  const visitorEmail = normalizeEmail(email);
  const domain = getDomain(visitorEmail);
  if (BLOCKED_EMAILS.has(visitorEmail) || BLOCKED_DOMAINS.has(domain)) {
    return NextResponse.json({ ok: false, error: 'This email address cannot be used for enquiries.' }, { status: 400 });
  }
  if (!(await hasMxRecord(domain))) {
    return NextResponse.json({ ok: false, error: 'Please use a valid email address that can receive replies.' }, { status: 400 });
  }
  if (!subject || typeof subject !== 'string' || !ALLOWED_SUBJECTS.has(subject.trim()) || subject.length > 150) {
    return NextResponse.json({ ok: false, error: 'Invalid subject.' }, { status: 400 });
  }
  if (!message || typeof message !== 'string' || message.trim().length === 0 || message.length > 3000) {
    return NextResponse.json({ ok: false, error: 'Message must be 1–3000 characters.' }, { status: 400 });
  }
  if (tooManyLinks(message) || hasSpamContent(`${name}\n${subject}\n${message}`)) {
    return NextResponse.json({ ok: false, error: 'This enquiry looks like spam. Please remove promotional links or suspicious wording.' }, { status: 400 });
  }

  try {
    const mailOptions = { visitorName: name.trim(), visitorEmail, subject: subject.trim(), message: message.trim() };
    await sendContactEmail(mailOptions);
    if (process.env.CONTACT_AUTO_REPLY_DISABLED !== 'true') {
      try {
        await sendContactWelcomeEmail(mailOptions);
      } catch (err) {
        console.error('[contact] welcome mail error:', err);
      }
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] mail error:', err);
    return NextResponse.json({ ok: false, error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
