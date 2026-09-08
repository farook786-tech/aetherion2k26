import React from 'react';
import { ArrowRight, MapPin, Ticket } from 'lucide-react';
import { GOOGLE_FORM_REGISTRATION_URL, SYMPOSIUM_METADATA } from '@/lib/data/events';

export default function HeroSection() {
  return (
    <section className="relative z-20 flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-4 text-base font-black uppercase tracking-[0.28em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)] sm:text-xl md:text-2xl">
          <span className="text-fire-red">AMSphere</span>
          <span className="text-white"> Presents:</span>
        </p>

        <h1 className="font-mono text-5xl font-black uppercase tracking-[0.12em] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.95),0_0_35px_rgba(230,0,26,0.45)] sm:text-7xl md:text-8xl">
          AETHERION
          <span className="text-fire-red font-sans text-3xl tracking-normal sm:text-5xl md:text-6xl">
            &apos;26
          </span>
        </h1>

        <h2 className="mt-5 max-w-3xl text-2xl font-black leading-tight tracking-tight text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.95)] sm:text-4xl md:text-5xl">
          Where Power Meets
          <br />
          <span className="text-fire-red">
            Limitless Intelligence
          </span>
        </h2>

        <p className="mt-6 max-w-[820px] text-sm leading-relaxed text-slate-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] sm:text-base md:text-lg">
          Proudly presented by <strong className="text-fire-red">AMSphere</strong>,{' '}
          <strong className="text-fire-red">AETHERION&apos;26</strong> is a national-scale flagship symposium
          for engineers, creators, competitive coders, and gamers. Register at ₹150 per person, or ₹300
          for a team of 2–3 — then pick the arenas that match your squad size. Guided by{' '}
          <span className="font-semibold text-fire-red">POWER • INNOVATION • COMPETITION • CREATIVITY • FUTURE</span>.
        </p>

        <div className="mt-7 flex flex-col items-center text-center">
          <p className="text-3xl font-black tracking-tight text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.95)] sm:text-5xl md:text-6xl">
            12th September 2026
          </p>
          <a
            href={SYMPOSIUM_METADATA.venueMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] hover:text-[#ff1a00] sm:text-base"
            title="Open AMS College of Engineering on Google Maps"
          >
            <MapPin className="h-4 w-4 text-[#ff1a00]" />
            {SYMPOSIUM_METADATA.venue}
          </a>
        </div>

        <div className="entry-pass-card group relative mx-auto mt-8 w-full max-w-[420px] cursor-default rounded-2xl p-[1px] transition-transform duration-300 hover:scale-[1.03]">
          <div className="relative overflow-hidden rounded-2xl bg-[#0a0305]/80 px-5 py-6 sm:px-6 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-orange-500/10" />
            <div className="relative flex flex-col items-center">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff2a00]">
                <Ticket className="h-3.5 w-3.5" />
                Entry Pass
              </span>
              <div className="mt-4 grid w-full grid-cols-2 divide-x divide-red-500/30">
                <div className="flex flex-col items-center px-3">
                  <span className="text-4xl font-black tracking-tight text-white drop-shadow-[0_0_22px_rgba(230,0,26,0.55)] sm:text-5xl">
                    ₹150
                  </span>
                  <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ff1a00]">
                    Per Person
                  </span>
                </div>
                <div className="flex flex-col items-center px-3">
                  <span className="text-4xl font-black tracking-tight text-white drop-shadow-[0_0_22px_rgba(230,0,26,0.55)] sm:text-5xl">
                    ₹300
                  </span>
                  <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ff1a00]">
                    Team of 2–3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={GOOGLE_FORM_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-register-btn group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-300/40 bg-gradient-to-r from-red-600 via-orange-600 to-red-700 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_35px_rgba(230,0,26,0.55)] transition-transform duration-300 hover:scale-105 sm:w-auto"
          >
            <span>Register Now</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#events"
            className="inline-flex w-full items-center justify-center rounded-xl border border-red-400/40 bg-black/55 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-red-300/70 hover:bg-black/70 sm:w-auto"
          >
            Explore 11 Events
          </a>
        </div>
      </div>
    </section>
  );
}
