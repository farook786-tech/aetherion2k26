export const dynamic = 'force-dynamic';

import React from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import EventExplorer from '@/components/event-explorer';
import ScheduleSection from '@/components/schedule-section';

import RulesSection from '@/components/rules-section';
import FAQSection from '@/components/faq-section';
import CustomCursor from '@/components/custom-cursor';
import PromoWidget from '@/components/promo-modal';
import { SYMPOSIUM_METADATA } from '@/lib/data/events';
import {
  Flame,
  Layers,
  Phone,
} from 'lucide-react';

import BackgroundVideo from '@/components/background-video';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-void text-slate-100 relative overflow-x-hidden selection:bg-red-600/40">

      {/* Global Background Video (Fixed for Mobile & Desktop) */}
      <BackgroundVideo />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Glassmorphic Dragon Navbar */}
      <Navbar />

      {/* Atmospheric Background Geometry & Dragon Embers */}
      <div className="fixed inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-dragon-embers opacity-25 pointer-events-none z-0" />

      <HeroSection />

      {/* ========================================================================= */}
      {/* 2. ABOUT AETHERION'26 SECTION & METRICS */}
      {/* ========================================================================= */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-red-500/10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-[#ff1a00]">
            <Layers className="w-3.5 h-3.5" />
            <span>THE VISION OF AETHERION</span>
          </div>

          <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            A national battleground for <span className="text-fire-red">engineers &amp; creators</span>
          </h2>

          <p className="mt-5 max-w-[820px] text-slate-200 text-sm sm:text-base leading-relaxed">
            Proudly presented by <strong className="text-fire-red">AMSphere</strong>, <strong className="text-white">AETHERION&apos;26</strong> is a national-scale flagship symposium crafted as a premier battleground for ambitious engineers, digital creators, competitive coders, gamers, and athletic minds.
          </p>

          <p className="mt-3 max-w-[820px] text-slate-200 text-xs sm:text-sm leading-relaxed">
            Guided by the spirit of the dragon — <strong className="text-fire-red font-mono">POWER • INNOVATION • COMPETITION • CREATIVITY • FUTURE</strong> — the symposium offers high-stakes technical tracks, non-technical arenas, and e-sports. Registration is <strong className="text-fire-red">₹150 per person</strong>, or <strong className="text-fire-red">₹300 for a team of 2–3</strong>.
          </p>

          <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {SYMPOSIUM_METADATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#0a0305]/80 border border-red-500/15 hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(230,0,26,0.15)] transition-all flex flex-col items-center justify-between group"
              >
                <span className="text-2xl sm:text-3xl font-black font-mono text-white group-hover:text-[#ff1a00] transition-colors">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-300 font-mono mt-2 leading-snug text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EVENT SYSTEM & EXPLORER (TECHNICAL & NON-TECHNICAL) */}
      {/* ========================================================================= */}
      <EventExplorer />

      {/* ========================================================================= */}
      {/* 4. SCHEDULE & 1-DAY TIMELINE SECTION */}
      {/* ========================================================================= */}
      <ScheduleSection />

      {/* ========================================================================= */}
      {/* 5. COORDINATORS DIRECTORY */}
      {/* ========================================================================= */}


      {/* ========================================================================= */}
      {/* 6. RULES & REGULATIONS */}
      {/* ========================================================================= */}
      <RulesSection />

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION */}
      {/* ========================================================================= */}
      <FAQSection />

      {/* ========================================================================= */}
      {/* 10. COORDINATORS CONTACT */}
      {/* ========================================================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-red-500/10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400 mb-4">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>COORDINATOR CONTACTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            For Further Details, Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Ahamed Multhazim. A', phone: '9600244885', href: 'tel:+919600244885', wa: 'https://wa.me/919600244885' },
            { name: 'Mohammed Abdul Faazil. A', phone: '9445328586', href: 'tel:+919445328586', wa: 'https://wa.me/919445328586' },
            { name: 'Thowbiq Raja', phone: '8807841124', href: 'tel:+918807841124', wa: 'https://wa.me/918807841124' },
            { name: 'Saravanan B', phone: '8248892060', href: 'tel:+918248892060', wa: 'https://wa.me/918248892060' },
          ].map((coordinator, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0a0305]/80 border border-red-500/15 hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(230,0,26,0.15)] transition-all flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{coordinator.name}</p>
                <p className="text-xs text-slate-400 font-mono mt-1">{coordinator.phone}</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <a
                    href={coordinator.href}
                    className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                  >
                    Call
                  </a>
                  <span className="text-slate-600">|</span>
                  <a
                    href={coordinator.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-green-400 hover:text-green-300 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3D Animated Official Instagram Showcase Card */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://www.instagram.com/aetherion_2k26_?stkn=MXhxbmJvODdoeWw0aQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-6 sm:px-8 py-4 rounded-2xl bg-gradient-to-r from-[#120306]/95 via-[#1a050b]/95 to-[#120306]/95 border border-red-500/30 hover:border-red-500/70 shadow-[0_10px_35px_rgba(230,0,26,0.25)] hover:shadow-[0_15px_45px_rgba(230,0,26,0.45)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 active:translate-y-0"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-pink-600 to-amber-500 rounded-2xl opacity-30 group-hover:opacity-80 blur-md transition duration-500 animate-pulse pointer-events-none" />

            {/* 3D Animated Floating Instagram Icon */}
            <div className="relative flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f97316] via-[#e11d48] to-[#9333ea] shadow-[0_4px_20px_rgba(225,29,72,0.6),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.4)] border border-white/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              {/* Highlight Shimmer Reflection */}
              <div className="absolute top-0.5 left-1 right-1 h-2 rounded-t-lg bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
            </div>

            {/* Label & Handle */}
            <div className="relative text-left">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 block mb-0.5">
                Official Instagram Page
              </span>
              <span className="text-sm sm:text-base font-black text-white group-hover:text-red-200 transition-colors flex items-center gap-1.5">
                @aetherion_2k26_
                <span className="text-xs text-red-400 font-mono transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. PREMIUM DRAGON FOOTER */}
      {/* ========================================================================= */}
      <footer className="border-t border-red-500/20 bg-[#060203] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase font-mono tracking-widest text-red-400 font-bold flex items-center gap-1">
              <Flame className="w-3 h-3 text-orange-500" />
              AMSPHERE PRESENTS
            </span>
            <span className="text-xl font-black tracking-widest text-white">
              AETHERION<span className="text-red-500 font-mono text-sm">&apos;26</span>
            </span>
            <p className="text-xs text-slate-500 max-w-sm">
              [OFFICIAL TAGLINE — ADD WHEN PROVIDED]
            </p>
            <p className="text-[11px] text-slate-400 font-mono">
              Presented by AMSphere
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-red-400 transition-colors">About</a>
            <a href="#events" className="hover:text-red-400 transition-colors">Events</a>
            <a href="#schedule" className="hover:text-red-400 transition-colors">Schedule</a>
            <a href="#rules" className="hover:text-red-400 transition-colors">Rules</a>
            <a href="#faq" className="hover:text-red-400 transition-colors">FAQ</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-slate-500">
              &copy; 2026 AMSphere Presents AETHERION&apos;26. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <PromoWidget />
    </div>
  );
}
