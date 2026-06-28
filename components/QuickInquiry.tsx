'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const SUBJECTS = ['Track / lesson feedback', 'Bug report', 'Collaboration', 'General inquiry'];

type Status = 'idle' | 'sending' | 'success' | 'error';

export function QuickInquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honey, setHoney] = useState('');
  const [startedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, _honey: honey, startedAt: String(startedAt) }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (data.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-signal/30 focus:border-signal/40 transition-all';

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center gap-3 text-center min-h-[200px] justify-center">
        <CheckCircle size={36} className="text-emerald-400" />
        <h3 className="text-lg font-bold text-white">Message sent!</h3>
        <p className="text-sm text-white/50">Thanks for reaching out. I&apos;ll get back to you soon.</p>
        <button onClick={() => setStatus('idle')} className="mt-2 text-sm text-signal underline underline-offset-2 hover:opacity-80">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-bold text-white mb-1">Quick Inquiry</h3>
      <p className="text-sm text-white/50 mb-5">Fill out the form and I&apos;ll get back to you.</p>

      <form onSubmit={handleSend} className="space-y-4">
        {/* Honeypot */}
        <input
          type="text"
          name="_honey"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute opacity-0 pointer-events-none w-0 h-0"
        />

        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            required
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Subject <span className="text-red-400">*</span>
          </label>
          <select required value={subject} onChange={(e) => setSubject(e.target.value)} className={inputClass}>
            <option value="">Select a subject...</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">
            Message <span className="text-red-400">*</span>
            <span className="ml-2 font-normal text-white/30">{message.length}/3000</span>
          </label>
          <textarea
            required
            maxLength={3000}
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me what's on your mind..."
            className={`${inputClass} resize-y min-h-[100px]`}
          />
        </div>

        {status === 'error' && (
          <div className="flex items-start gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-signal text-white shadow-[0_2px_12px_rgba(232,98,42,0.35)] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(232,98,42,0.45)] transition-all disabled:opacity-60 disabled:translate-y-0"
        >
          {status === 'sending' ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending…
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
