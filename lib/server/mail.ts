/**
 * Server-only Nodemailer utility for PyAnimate.
 * DO NOT import in client components.
 */
import nodemailer from 'nodemailer';

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
  <p style="color:#9ca3af;font-size:12px">Sent from the contact form at <a href="https://pyanimate.com" style="color:#e8622a">pyanimate.com</a></p>
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
