'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Ticket } from 'lucide-react';
import { GOOGLE_FORM_REGISTRATION_URL, SYMPOSIUM_METADATA } from '@/lib/data/events';
import CountdownTimer from './countdown-timer';

export default function HeroSection() {
  return (
    <section className="relative z-20 flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-base font-black uppercase tracking-[0.28em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)] sm:text-xl md:text-2xl"
        >
          <span className="text-fire-red">AMSphere</span>
          <span className="text-white"> Presents:</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-mono text-5xl font-black uppercase tracking-[0.12em] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.95),0_0_35px_rgba(230,0,26,0.45)] sm:text-7xl md:text-8xl"
        >
          AETHERION
          <span className="text-fire-red font-sans text-3xl tracking-normal sm:text-5xl md:text-6xl">
            &apos;26
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-5 max-w-2xl text-lg font-semibold leading-snug text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.95)] sm:text-xl md:text-2xl"
        >
          AETHERION&apos;26 — Where innovation, creativity and competition collide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-7 flex flex-col items-center text-center"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm sm:text-base">
            <CountdownTimer targetDate="2026-09-12T09:30:00" />
            <span className="hidden sm:inline text-red-500">|</span>
            <a
              href={SYMPOSIUM_METADATA.venueMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] hover:text-[#ff1a00] transition-colors"
              title="Open AMS College of Engineering on Google Maps"
            >
              <MapPin className="h-4 w-4 text-[#ff1a00]" />
              <span>{SYMPOSIUM_METADATA.venue}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="entry-pass-card group relative mx-auto mt-8 w-full max-w-[360px] cursor-default rounded-2xl p-[1px] transition-transform duration-300 hover:scale-[1.03]"
        >
          <div className="relative overflow-hidden rounded-2xl bg-[#0a0305]/80 px-6 py-6 backdrop-blur-xl sm:px-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-orange-500/10" />
            <div className="relative flex flex-col items-center">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff2a00]">
                <Ticket className="h-3.5 w-3.5" />
                Entry Fee
              </span>
              <div className="mt-3 grid w-full grid-cols-2 gap-3">
                <div className="flex flex-col items-center rounded-xl border border-white/10 bg-black/30 px-2 py-2.5">
                  <span className="text-3xl font-black tracking-tight text-white drop-shadow-[0_0_22px_rgba(230,0,26,0.55)] sm:text-4xl">
                    ₹150
                  </span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-200">
                    per person
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-xl border border-white/10 bg-black/30 px-2 py-2.5">
                  <span className="text-3xl font-black tracking-tight text-white drop-shadow-[0_0_22px_rgba(230,0,26,0.55)] sm:text-4xl">
                    ₹300
                  </span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-200">
                    team of 2–3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.44 }}
          className="mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={GOOGLE_FORM_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-register-btn group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-300/40 bg-gradient-to-r from-red-600 via-orange-600 to-red-700 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_35px_rgba(230,0,26,0.55)] transition-transform duration-300 hover:scale-105 sm:w-auto"
          >
            <span>Register Now — ₹150 / ₹300</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#events"
            className="inline-flex w-full items-center justify-center rounded-xl border border-red-400/40 bg-black/55 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-red-300/70 hover:bg-black/70 sm:w-auto"
          >
            Explore 11 Events
          </a>
        </motion.div>
      </div>
    </section>
  );
}
