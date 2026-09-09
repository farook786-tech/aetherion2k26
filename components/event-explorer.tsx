'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { EventItem, EVENTS_DATA } from '@/lib/data/events';
import EventModal from './event-modal';
import PosterZoomModal from './poster-zoom-modal';
import {
  Cpu,
  Terminal,
  Presentation,
  Palette,
  Gamepad2,
  Film,
  Mic2,
  Dumbbell,
  Sparkles,
  Clock,
  Users,
  IndianRupee,
  ChevronRight,
  Flame,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Presentation: <Presentation className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Gamepad2: <Gamepad2 className="w-5 h-5" />,
  Film: <Film className="w-5 h-5" />,
  Mic2: <Mic2 className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

const CATEGORY_LABEL: Record<EventItem['category'], string> = {
  technical: 'Technical',
  'non-technical': 'Non-Technical',
  'e-sports': 'E-Sports',
};

function EventShowcaseCard({
  event,
  index,
  onOpen,
  onZoomPoster,
}: {
  event: EventItem;
  index: number;
  onOpen: (event: EventItem) => void;
  onZoomPoster: (poster: { src: string; title: string; category?: string }, fallbackEvent: EventItem) => void;
}) {
  const isTechnical = event.category === 'technical';
  const isEsports = event.category === 'e-sports';

  const accentBorder = isTechnical
    ? 'border-red-500/25 hover:border-red-400/80 hover:shadow-[0_12px_30px_-8px_rgba(230,0,26,0.45)]'
    : isEsports
      ? 'border-orange-500/25 hover:border-orange-400/80 hover:shadow-[0_12px_30px_-8px_rgba(249,115,22,0.4)]'
      : 'border-amber-500/20 hover:border-amber-400/70 hover:shadow-[0_12px_30px_-8px_rgba(245,158,11,0.35)]';

  const iconWrap = isTechnical
    ? 'border-red-500/30 bg-red-500/15 text-red-300'
    : isEsports
      ? 'border-orange-500/30 bg-orange-500/15 text-orange-300'
      : 'border-amber-500/30 bg-amber-500/15 text-amber-300';

  const badge = isTechnical
    ? 'border-red-500/30 bg-red-500/10 text-red-200'
    : isEsports
      ? 'border-orange-500/30 bg-orange-500/10 text-orange-200'
      : 'border-amber-500/30 bg-amber-500/10 text-amber-200';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className={`event-card-shell group flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-[#0a0305]/95 p-3 sm:p-3.5 text-center backdrop-blur-xl transition-all ${accentBorder}`}
    >
      {/* If the event has an official poster, display compact neat poster */}
      {event.posterImage ? (
        <div className="flex flex-col flex-1">
          {/* Header Title Bar */}
          <div className="flex items-center justify-between gap-2 mb-2.5 px-1">
            <span className="font-mono text-[10px] uppercase font-bold text-red-400 truncate">
              {event.title}
            </span>
            <span className={`rounded-full border px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider ${badge}`}>
              {CATEGORY_LABEL[event.category]}
            </span>
          </div>

          {/* Compact Poster View - Clicking opens big zoomed poster */}
          <div
            onClick={() => onZoomPoster({ src: event.posterImage!, title: event.title, category: event.category }, event)}
            className="relative w-full aspect-[3/4] max-h-[320px] sm:max-h-[350px] rounded-xl overflow-hidden cursor-pointer bg-[#050102] border border-red-500/20 group-hover:border-red-500/50 transition-all flex items-center justify-center p-1 shadow-inner"
            title="Click to view full zoomed poster"
          >
            <Image
              src={event.posterImage}
              alt={`${event.title} Poster`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
              priority={index < 3}
            />
            {/* Ambient hover / touch hint overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-[11px] font-mono font-bold text-white bg-gradient-to-r from-red-600 to-orange-600 border border-red-400 px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                🔍 Zoom Poster
              </span>
            </div>
          </div>

          {/* Quick Info & Bottom Action */}
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-300 px-1">
            <span className="font-mono text-red-300 flex items-center gap-1">
              <Clock className="w-3 h-3 text-red-400" />
              {event.time}
            </span>
            <span className="font-mono text-orange-300">
              {event.teamSize}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onOpen(event)}
            className="relative mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl border border-red-500/30 bg-white/[0.04] py-2 px-3 text-xs font-bold text-white transition-all hover:border-red-400 hover:bg-red-600/20 active:scale-95"
          >
            <span>View Full Details</span>
            <ChevronRight className="h-3.5 w-3.5 text-red-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      ) : (
        /* Fallback for events without separate uploaded posters */
        <div className="flex flex-col flex-1 p-2">
          <div
            className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${
              isTechnical ? 'bg-red-600/20 opacity-60' : 'bg-orange-500/20 opacity-50'
            }`}
          />
          <div
            className={`relative mb-3 flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${iconWrap} mx-auto`}
          >
            {iconMap[event.iconName] || <Flame className="w-4 h-4" />}
          </div>
          <span className={`relative mb-2 rounded-full border px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider mx-auto ${badge}`}>
            {CATEGORY_LABEL[event.category]}
          </span>
          <h3 className="relative px-1 text-lg font-black tracking-wide text-white transition-colors group-hover:text-red-200 sm:text-xl">
            {event.title}
          </h3>
          <p className="relative mt-2 text-xs leading-relaxed text-slate-300 line-clamp-3">
            {event.shortDesc}
          </p>

          <div className="relative mt-auto pt-3 grid grid-cols-1 gap-1.5 border-t border-white/10 text-left text-[11px] text-slate-200 sm:grid-cols-2">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 shrink-0 text-red-400" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3 shrink-0 text-orange-400" />
              <span>{event.teamSize}</span>
            </div>
            <div className="flex items-center gap-1 font-bold text-white sm:col-span-2">
              <IndianRupee className="h-3 w-3 shrink-0 text-orange-300" />
              <span>₹150 / person · ₹300 team (2–3)</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpen(event)}
            className="relative mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.05] py-2 px-3 text-xs font-semibold text-white transition-colors hover:border-red-400/40 hover:bg-white/[0.09]"
          >
            <span>View Full Details</span>
            <ChevronRight className="h-3.5 w-3.5 text-red-400" />
          </button>
        </div>
      )}
    </motion.article>
  );
}

function EventSection({
  title,
  countLabel,
  events,
  gridClass,
  onOpen,
  onZoomPoster,
}: {
  title: string;
  countLabel: string;
  events: EventItem[];
  gridClass: string;
  onOpen: (event: EventItem) => void;
  onZoomPoster: (poster: { src: string; title: string; category?: string }, fallbackEvent: EventItem) => void;
}) {
  if (events.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-2 border-b border-red-500/20 pb-3 sm:flex-row sm:items-end">
        <div>
          <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">{title}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
            {countLabel}
          </p>
        </div>
      </div>
      <div className={gridClass}>
        {events.map((event, index) => (
          <EventShowcaseCard
            key={event.id}
            event={event}
            index={index}
            onOpen={onOpen}
            onZoomPoster={onZoomPoster}
          />
        ))}
      </div>
    </div>
  );
}

export default function EventExplorer() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [zoomPoster, setZoomPoster] = useState<{ src: string; title: string; category?: string } | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'technical' | 'non-technical' | 'e-sports'>('all');

  const technicalEvents = EVENTS_DATA.filter((e) => e.category === 'technical');
  const nonTechnicalEvents = EVENTS_DATA.filter((e) => e.category === 'non-technical');
  const esportsEvents = EVENTS_DATA.filter((e) => e.category === 'e-sports');

  const tabs: { id: 'all' | 'technical' | 'non-technical' | 'e-sports'; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'technical', label: 'Technical' },
    { id: 'non-technical', label: 'Non-Technical' },
    { id: 'e-sports', label: 'E-Sports' },
  ];

  const handleZoomPoster = (
    poster: { src: string; title: string; category?: string },
    event: EventItem
  ) => {
    setSelectedEvent(event); // keep active for easy transition to details
    setZoomPoster(poster);
  };

  return (
    <div id="events" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-300 mb-4">
          <Flame className="w-3.5 h-3.5 text-orange-400" />
          <span>10 ARENAS • ₹150 / PERSON · ₹300 TEAM (2–3)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Explore All <span className="text-gradient">AETHERION Events</span>
        </h2>
        <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
          Technical arenas, non-technical challenges, and e-sports titles. ₹150 per person, or ₹300 for a team of 2–3. For specific games, look into the required members and decide what you want to join.
        </p>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-[0_0_20px_rgba(230,0,26,0.6)] border border-red-400/50 scale-[1.03]'
                    : 'bg-[#0e0407]/90 text-slate-300 hover:text-white border border-red-500/20 hover:border-red-500/50 hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-16">
        {(activeTab === 'all' || activeTab === 'technical') && (
          <EventSection
            title="Technical Events"
            countLabel={`${technicalEvents.length} events`}
            events={technicalEvents}
            gridClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            onOpen={setSelectedEvent}
            onZoomPoster={handleZoomPoster}
          />
        )}
        {(activeTab === 'all' || activeTab === 'non-technical') && (
          <EventSection
            title="Non-Technical Events"
            countLabel={`${nonTechnicalEvents.length} events`}
            events={nonTechnicalEvents}
            gridClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            onOpen={setSelectedEvent}
            onZoomPoster={handleZoomPoster}
          />
        )}
        {(activeTab === 'all' || activeTab === 'e-sports') && (
          <EventSection
            title="E-Sports"
            countLabel={`${esportsEvents.length} events`}
            events={esportsEvents}
            gridClass="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto"
            onOpen={setSelectedEvent}
            onZoomPoster={handleZoomPoster}
          />
        )}
      </div>

      {/* Text Details Modal */}
      <EventModal
        event={zoomPoster ? null : selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      {/* Poster Zoom Modal */}
      <PosterZoomModal
        poster={zoomPoster}
        onClose={() => setZoomPoster(null)}
        onViewDetails={() => {
          // Keep selectedEvent open in EventModal
        }}
      />
    </div>
  );
}
