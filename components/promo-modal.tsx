'use client';

import React, { useEffect, useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('aetherion-promo-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('aetherion-promo-dismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-[#0a0305] border border-red-500/30 shadow-[0_0_40px_rgba(230,0,26,0.3)] p-6 sm:p-8 text-center">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close promo"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
          <Sparkles className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-black text-white mb-2">Special Offer</h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          First 25 female participants will receive complimentary palm mehndi art at the venue.
        </p>

        <button
          onClick={handleClose}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(230,0,26,0.4)] hover:brightness-110 transition-all"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
