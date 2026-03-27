import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  service?: unknown;
  location?: unknown;
  message?: unknown;
  // Honeypot (optional). If filled, treat as spam.
  website?: unknown;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitState = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const first = forwardedFor.split(',')[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get('x-real-ip')?.trim();
  if (realIp) return realIp;
  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const current = rateLimitState.get(ip);
  if (!current || now >= current.resetAt) {
    rateLimitState.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) return true;
  current.count += 1;
  return false;
}

function asTrimmedString(value: unknown, maxLen: number): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const withoutNewlines = trimmed.replace(/[\r\n]+/g, ' ');
  return withoutNewlines.length > maxLen ? withoutNewlines.slice(0, maxLen) : withoutNewlines;
}

function isValidEmail(email: string): boolean {
  // Basic format check. (Avoid complex regex that blocks real addresses.)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again shortly.' },
        { status: 429 }
      );
    }

    const json = (await request.json().catch(() => null)) as ContactPayload | null;
    if (!json || typeof json !== 'object') {
      return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 });
    }

    // Honeypot: bots often fill hidden fields.
    const honeypot = asTrimmedString(json.website, 200);
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
    }

    const name = asTrimmedString(json.name, 100);
    const email = asTrimmedString(json.email, 254);
    const company = asTrimmedString(json.company, 120) ?? '';
    const phone = asTrimmedString(json.phone, 30) ?? '';
    const service = asTrimmedString(json.service, 80) ?? '';
    const location = asTrimmedString(json.location, 120) ?? '';
    const message = asTrimmedString(json.message, 2000);

    if (!name || !email || !message || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid name, email, and message.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER?.trim();
    const emailPassword = process.env.EMAIL_PASSWORD?.trim();
    if (!emailUser || !emailPassword) {
      console.error('Missing EMAIL_USER/EMAIL_PASSWORD env vars');
      return NextResponse.json(
        { success: false, message: 'Server is not configured to send email.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Send email
    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      replyTo: email,
      subject: `New Contact: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Phone: ${phone}
        Service: ${service}
        Location: ${location}
        Message: ${message}
      `,
    });

    // ALWAYS return 200 with success message
    return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);

    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}