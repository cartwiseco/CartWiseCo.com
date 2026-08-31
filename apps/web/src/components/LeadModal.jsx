import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import LeadForm from '@/components/LeadForm';

export default function LeadModal({ open, onClose, title = 'Tell us about your project' }) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[#0B0B14]/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-[2rem] border border-white/[0.08] bg-[#12131d] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        <div className="mb-4 flex items-center justify-between px-2 pt-2">
          <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
          <button type="button" onClick={onClose} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/75">Close</button>
        </div>
        <LeadForm onClose={onClose} />
      </div>
    </div>,
    document.body
  );
}
