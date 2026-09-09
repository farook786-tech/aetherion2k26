'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function PromoWidget() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('aetherion-promo-dismissed');
    if (dismissed) setVisible(false);
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem('aetherion-promo-dismissed', 'true');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[90] w-72">
      <div className="rounded-xl bg-[#0a0305]/90 border border-red-500/30 shadow-[0_0_25px_rgba(230,0,26,0.25)] p-4 backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Special Offer</p>
              <p className="text-[11px] text-slate-300 leading-snug">
                First 25 female participants get complimentary palm mehndi art at the venue.
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="mt-0.5 rounded-lg bg-white/5 p-1 text-slate-400 hover:text-white transition-colors"
            aria-label="Dismiss offer"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
