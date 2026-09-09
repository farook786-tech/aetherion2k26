'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut, Sparkles, ExternalLink } from 'lucide-react';
import { GOOGLE_FORM_REGISTRATION_URL } from '@/lib/data/events';

interface PosterZoomModalProps {
  poster: {
    src: string;
    title: string;
    category?: string;
  } | null;
  onClose: () => void;
  onViewDetails?: () => void;
}

export default function PosterZoomModal({
  poster,
  onClose,
  onViewDetails,
}: PosterZoomModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (poster) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsZoomed(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [poster, onClose]);

  if (!poster) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between p-2 sm:p-4 md:p-6 bg-black/92 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="w-full max-w-4xl flex items-center justify-between gap-2 py-2 px-3 sm:px-4 rounded-xl bg-[#0e0407]/90 border border-red-500/30 backdrop-blur-md z-20 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <Sparkles className="w-4 h-4 text-red-400 shrink-0" />
          <div className="min-w-0 flex-1">
            <h3 className="text-xs sm:text-base font-extrabold text-white truncate font-mono">
              {poster.title}
            </h3>
            <span className="text-[9px] sm:text-[10px] text-red-300/80 font-mono tracking-wider truncate block uppercase">
              Official Event Poster • HD View
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white text-[11px] sm:text-xs font-mono transition-all active:scale-95"
            title={isZoomed ? 'Fit to Screen' : 'Zoom In'}
          >
            {isZoomed ? (
              <>
                <ZoomOut className="w-3.5 h-3.5 text-amber-400" />
                <span>Fit</span>
              </>
            ) : (
              <>
                <ZoomIn className="w-3.5 h-3.5 text-red-400" />
                <span>Zoom</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close poster view"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-600/40 hover:bg-red-600/70 border border-red-500/50 text-white flex items-center justify-center transition-all active:scale-95 shadow-[0_0_15px_rgba(230,0,26,0.5)] shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container (Scrollable / Zoomable) */}
      <div
        className="relative w-full flex-1 flex items-center justify-center overflow-auto my-1.5 sm:my-2 p-1 sm:p-2 cursor-zoom-in min-h-0"
        onClick={(e) => {
          e.stopPropagation();
          setIsZoomed(!isZoomed);
        }}
      >
        <div
          className={`relative transition-all duration-300 ease-out flex items-center justify-center ${
            isZoomed
              ? 'w-full max-w-[1100px] h-[120vh] sm:h-[150vh] cursor-zoom-out'
              : 'w-full max-w-2xl h-full max-h-[70vh] sm:max-h-[78vh] md:max-h-[82vh] cursor-zoom-in'
          }`}
        >
          <Image
            src={poster.src}
            alt={`${poster.title} Full Poster`}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] rounded-xl select-none"
            priority
          />
        </div>
      </div>

      {/* Bottom Floating Info & Action Bar */}
      <div
        className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-2 py-2 px-3 sm:px-4 rounded-xl bg-[#0e0407]/90 border border-red-500/30 backdrop-blur-md z-20 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[11px] text-slate-300 font-medium">
            <span className="text-red-400 font-bold font-mono">Tip:</span> Tap or click image to zoom in/out.
          </span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          {onViewDetails && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onViewDetails();
              }}
              className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg border border-red-500/40 bg-red-600/20 hover:bg-red-600/30 text-white text-[11px] sm:text-xs font-bold transition-all text-center whitespace-nowrap"
            >
              View Full Rules
            </button>
          )}

          <a
            href={GOOGLE_FORM_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-[11px] sm:text-xs font-bold transition-all shadow-[0_0_15px_rgba(230,0,26,0.4)] whitespace-nowrap"
          >
            <span>Register Now</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
