'use client';

import React from 'react';
import { Award, CheckCircle2, Info, Users } from 'lucide-react';
import { SYMPOSIUM_METADATA } from '@/lib/data/events';

export default function CertificateEligibilityNote({ className = '' }: { className?: string }) {
  return (
    <div className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-red-950/30 via-black/60 to-surface border border-red-500/30 space-y-4 ${className}`}>
      <div className="flex items-center gap-2.5 border-b border-red-500/20 pb-3">
        <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
          <Award className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
            📌 NOTE – Certificate Eligibility
          </h4>
          <p className="text-[11px] text-slate-400">Official Certificate Policy for AETHERION&apos;26</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-xs sm:text-sm">Technical Event Only</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold w-fit">
            Certificate Provided
          </span>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Official Certificate of Participation will be provided.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-orange-950/20 border border-orange-500/30 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-xs sm:text-sm">Non-Technical Event Only</span>
            <Info className="w-4 h-4 text-orange-400" />
          </div>
          <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 font-semibold w-fit">
            No Certificate
          </span>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            No certificate will be provided for non-technical events only.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-xs sm:text-sm">Both Technical + Non-Technical</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold w-fit">
            Certificate Provided
          </span>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Official Certificate of Participation will be provided.
          </p>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0">
          <Users className="w-4 h-4" />
        </div>
        <div>
          <h5 className="text-xs font-bold text-white">Registration &amp; team size</h5>
          <p className="text-[11px] text-slate-300 leading-relaxed mt-1">
            {SYMPOSIUM_METADATA.pricingOffer}. {SYMPOSIUM_METADATA.teamSizeNote}
          </p>
        </div>
      </div>

      {/* Special Offer Highlight Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/30 via-red-950/20 to-orange-950/30 border border-amber-500/30 flex items-start gap-3 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
        <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
          ✨
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Special Offer
            </h5>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold">
              Exclusive Benefit
            </span>
          </div>
          <p className="text-[12px] text-slate-200 leading-relaxed mt-1">
            <strong className="text-amber-400">15 random female participants</strong> will receive complimentary palm mehndi art at the venue! 🌿
          </p>
        </div>
      </div>
    </div>
  );
}
