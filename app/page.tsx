export const dynamic = 'force-dynamic';

import React from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import EventExplorer from '@/components/event-explorer';
import ScheduleSection from '@/components/schedule-section';

import RulesSection from '@/components/rules-section';
import FAQSection from '@/components/faq-section';
import ContactSection from '@/components/contact-section';
import CustomCursor from '@/components/custom-cursor';
import { SYMPOSIUM_METADATA } from '@/lib/data/events';
import {
  Flame,
  Layers,
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
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-red-500/10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400">
            <Layers className="w-3.5 h-3.5" />
            <span>THE VISION OF AETHERION</span>
          </div>

          <h2 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            A national battleground for <span className="text-gradient">engineers &amp; creators</span>
          </h2>

          {/* Glassmorphism Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="p-5 rounded-2xl bg-surface/80 border border-border backdrop-blur-xl flex flex-col items-center text-center space-y-2">
              <span className="text-2xl font-black font-mono text-white">5</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Technical Events</span>
            </div>
            <div className="p-5 rounded-2xl bg-surface/80 border border-border backdrop-blur-xl flex flex-col items-center text-center space-y-2">
              <span className="text-2xl font-black font-mono text-white">5</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Non-Technical Events</span>
            </div>
            <div className="p-5 rounded-2xl bg-surface/80 border border-border backdrop-blur-xl flex flex-col items-center text-center space-y-2">
              <span className="text-2xl font-black font-mono text-white">10</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Total Events</span>
            </div>
            <div className="p-5 rounded-2xl bg-surface/80 border border-border backdrop-blur-xl flex flex-col items-center text-center space-y-2">
              <span className="text-lg font-black font-mono text-white">₹150 solo · ₹300 team</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Entry Fee</span>
            </div>
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
      {/* 9. COORDINATORS CONTACT */}
      {/* ========================================================================= */}
      <ContactSection />

      {/* ========================================================================= */}
      {/* 10. PREMIUM DRAGON FOOTER */}
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
            <a href="#coordinators" className="hover:text-red-400 transition-colors">Coordinators</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-slate-500">
              &copy; 2026 AMSphere Presents AETHERION&apos;26. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
