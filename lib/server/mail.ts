/**
 * Server-only Nodemailer utility for PyAnimate.
 * DO NOT import in client components.
 */
import nodemailer from 'nodemailer';
import { siteUrl } from '@/lib/site';

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_HOST ?? 'smtppro.zoho.com',
  port: parseInt(process.env.ZOHO_SMTP_PORT ?? '465', 10),
  secure: process.env.ZOHO_SMTP_SECURE !== 'false',
  auth: {
    user: process.env.ZOHO_SMTP_USER,
    pass: process.env.ZOHO_SMTP_PASS,
  },
});

export interface ContactMailOptions {
  visitorName: string;
  visitorEmail: string;
  subject: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

export async function sendContactEmail(opts: ContactMailOptions): Promise<void> {
  const { visitorName, visitorEmail, subject, message } = opts;
  const from = process.env.CONTACT_FROM_EMAIL ?? 'connect@pyanimate.com';
  const to = process.env.CONTACT_TO_EMAIL ?? 'connect@pyanimate.com';

  const eName = escapeHtml(visitorName);
  const eEmail = escapeHtml(visitorEmail);
  const eSubject = escapeHtml(subject);
  const eMessage = escapeHtml(message).replace(/\n/g, '<br>');

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>PyAnimate Contact</title></head>
<body style="font-family:sans-serif;color:#1a1a1a;max-width:600px;margin:0 auto;padding:24px">
  <h2 style="color:#e8622a;margin-bottom:4px">New PyAnimate contact inquiry</h2>
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:12px 0">
  <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
    <tr><td style="padding:8px 0;color:#6b7280;width:90px;vertical-align:top">Name</td><td style="padding:8px 0;font-weight:600">${eName}</td></tr>
    <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Email</td><td style="padding:8px 0">${eEmail}</td></tr>
    <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Subject</td><td style="padding:8px 0">${eSubject}</td></tr>
  </table>
  <p style="color:#6b7280;margin-bottom:6px;font-size:14px">Message:</p>
  <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;font-size:15px;line-height:1.6">${eMessage}</div>
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0 12px">
  <p style="color:#9ca3af;font-size:12px">Sent from the contact form at <a href="${siteUrl}" style="color:#e8622a">pyanimate.com</a></p>
</body>
</html>`;

  await transporter.sendMail({
    from: `PyAnimate <${from}>`,
    to,
    replyTo: visitorEmail,
    subject: `[PyAnimate] ${subject}`,
    text: `Name: ${visitorName}\nEmail: ${visitorEmail}\n\n${message}`,
    html,
  });
}

export async function sendContactWelcomeEmail(opts: ContactMailOptions): Promise<void> {
  const { visitorName, visitorEmail, subject } = opts;
  const from = process.env.CONTACT_FROM_EMAIL ?? 'connect@pyanimate.com';
  const eName = escapeHtml(visitorName);
  const eSubject = escapeHtml(subject);

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Thanks for contacting PyAnimate</title></head>
<body style="margin:0;background:#0b1220;padding:24px;font-family:Arial,sans-serif;color:#e5e7eb">
  <table role="presentation" style="width:100%;max-width:620px;margin:0 auto;border-collapse:collapse">
    <tr>
      <td style="padding:28px;border:1px solid rgba(255,255,255,0.12);border-radius:18px;background:#111827">
        <div style="font-size:14px;letter-spacing:0.18em;text-transform:uppercase;color:#ff6b35;font-weight:700">PyAnimate</div>
        <h1 style="margin:14px 0 10px;font-size:28px;line-height:1.2;color:#ffffff">Thanks for reaching out, ${eName}.</h1>
        <p style="margin:0 0 18px;color:#a8b3c7;font-size:16px;line-height:1.7">
          Your enquiry has reached Amit at PyAnimate. I read these messages personally and will reply when I have useful context to share.
        </p>
        <div style="margin:22px 0;padding:16px;border-radius:12px;background:#0b1220;border:1px solid rgba(255,255,255,0.08)">
          <p style="margin:0 0 6px;color:#7c879a;font-size:12px;text-transform:uppercase;letter-spacing:0.14em">Your topic</p>
          <p style="margin:0;color:#ffffff;font-size:16px;font-weight:700">${eSubject}</p>
        </div>
        <p style="margin:0;color:#a8b3c7;font-size:15px;line-height:1.7">
          While you wait, you can keep exploring animated Python lessons at
          <a href="${siteUrl}" style="color:#ff6b35;text-decoration:none">pyanimate.com</a>.
        </p>
        <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:24px 0 14px">
        <p style="margin:0;color:#7c879a;font-size:12px;line-height:1.6">
          This confirmation was sent because you submitted the PyAnimate enquiry form. If this was not you, you can ignore this email.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;

  await transporter.sendMail({
    from: `PyAnimate <${from}>`,
    to: visitorEmail,
    replyTo: from,
    subject: 'Thanks for contacting PyAnimate',
    text: `Hi ${visitorName},\n\nThanks for reaching out to PyAnimate. Your enquiry about "${subject}" has reached Amit, and I will reply when I have useful context to share.\n\nExplore PyAnimate: ${siteUrl}\n\nIf this was not you, you can ignore this email.`,
    html,
  });
}
