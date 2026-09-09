'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Gift } from 'lucide-react';

export default function PromoWidget() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('aetherion-promo-dismissed');
    if (dismissed) setVisible(false);
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem('aetherion-promo-dismissed', 'true');
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Special Offer"
      className="fixed bottom-3 inset-x-3 sm:inset-x-auto sm:bottom-5 sm:left-5 z-[90] sm:max-w-[360px] animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      {/* Outer ambient glow */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />

        {/* Card Body */}
        <div className="relative rounded-2xl bg-[#0d0306]/95 border border-red-500/40 p-3.5 sm:p-4 shadow-[0_8px_32px_rgba(230,0,26,0.35)] backdrop-blur-2xl">
          <div className="flex items-start gap-3">
            {/* Animated Icon Box */}
            <div className="relative flex-shrink-0">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 via-orange-500/15 to-transparent border border-red-500/30 text-amber-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                <Gift className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-red-400 animate-bounce" style={{ animationDuration: '2.5s' }} />
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-amber-500 border border-black"></span>
              </span>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase bg-red-500/20 border border-red-500/40 text-red-300">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                  Special Spotlight
                </span>
              </div>

              <h4 className="text-[11px] sm:text-xs font-bold font-mono tracking-wide text-white uppercase truncate">
                Complimentary Mehndi Art
              </h4>
              
              <p className="mt-1 text-[11px] sm:text-[11.5px] leading-snug text-slate-200">
                <span className="font-semibold text-amber-400">15 random female participants</span> will receive complimentary palm mehndi art at the venue! ✨
              </p>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleClose}
              className="flex-shrink-0 -mr-1 -mt-1 rounded-lg p-1 text-slate-400 hover:text-white hover:bg-red-500/20 border border-transparent hover:border-red-500/30 transition-all"
              aria-label="Dismiss offer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
