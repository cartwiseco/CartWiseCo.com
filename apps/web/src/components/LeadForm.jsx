import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { captureUtmParams, trackLeadSubmit } from '@/lib/analytics';

const initialState = {
  name: '',
  phone: '',
  platform: 'Amazon',
  message: ''
};

export default function LeadForm({ onClose = null }) {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const utm = useMemo(() => {
    if (!searchParams) return captureUtmParams();
    return { utm_source: searchParams.get('utm_source') || '', utm_medium: searchParams.get('utm_medium') || '', utm_campaign: searchParams.get('utm_campaign') || '', utm_term: searchParams.get('utm_term') || '', utm_content: searchParams.get('utm_content') || '' };
  }, [searchParams]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const payload = {
      ...form,
      ...utm,
      source: 'CartWiseCo website',
      email: 'official.cartwiseco@gmail.com',
    };

    try {
      await fetch('https://formspree.io/f/xjknjdze', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
      trackLeadSubmit();
    } catch (error) {
      console.error('Lead submit failed', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/[0.08] bg-[#0B0B14] p-6 sm:p-8">
      {submitted ? (
        <div className="text-center">
          <h3 className="font-display text-2xl font-semibold text-white">Thanks! We&apos;ll be in touch.</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/65">Your enquiry has been sent successfully. We usually respond on WhatsApp or email shortly.</p>
          {onClose && (
            <button type="button" onClick={onClose} className="mt-6 rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-white">
              Close
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-white/75">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl border border-white/10 bg-[#0B0B14] px-4 py-3 text-white outline-none focus:border-[#EC4899]" placeholder="Your name" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/75">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} required className="w-full rounded-xl border border-white/10 bg-[#0B0B14] px-4 py-3 text-white outline-none focus:border-[#EC4899]" placeholder="+91 98xxxxxx" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/75">Current Platform</label>
            <select name="platform" value={form.platform} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-[#0B0B14] px-4 py-3 text-white outline-none focus:border-[#EC4899]">
              <option>Amazon</option>
              <option>Flipkart</option>
              <option>Myntra</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/75">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows="5" className="w-full rounded-xl border border-white/10 bg-[#0B0B14] px-4 py-3 text-white outline-none focus:border-[#EC4899]" placeholder="Tell us about your business and goals." />
          </div>
          <button type="submit" disabled={submitting} className="w-full rounded-full gradient-bg px-7 py-3.5 text-sm font-semibold text-white disabled:opacity-75">
            {submitting ? 'Sending...' : 'Send Inquiry'}
          </button>
        </form>
      )}
    </div>
  );
}
