'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { EventItem, EVENTS_DATA } from '@/lib/data/events';
import EventModal from './event-modal';
import {
  Search,
  Cpu,
  Terminal,
  Presentation,
  Palette,
  Film,
  Mic2,
  Sparkles,
  Clock,
  MapPin,
  Users,
  IndianRupee,
  ChevronRight,
  Flame,
  Gamepad2,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Presentation: <Presentation className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Gamepad2: <Gamepad2 className="w-5 h-5" />,
  Film: <Film className="w-5 h-5" />,
  Mic2: <Mic2 className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

const CATEGORY_LABEL: Record<string, string> = {
  technical: 'Technical',
  'non-technical': 'Non-Technical',
};

function EventShowcaseCard({
  event,
  index,
  onOpen,
}: {
  event: EventItem;
  index: number;
  onOpen: (event: EventItem) => void;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isTechnical = event.category === 'technical';

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      className="group h-[420px] [perspective:1200px]"
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.8 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face - Event Name */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl border p-6 cursor-pointer ${
            isTechnical
              ? 'border-red-500/25 bg-gradient-to-br from-red-950/40 via-black/60 to-surface'
              : 'border-amber-500/20 bg-gradient-to-br from-amber-950/30 via-black/60 to-surface'
          }`}
          onClick={() => setIsFlipped(true)}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div
            className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl ${
              isTechnical ? 'bg-red-600/20' : 'bg-orange-500/20'
            }`}
          />

          <div className="relative flex flex-col items-center text-center space-y-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl border ${
                isTechnical
                  ? 'border-red-500/30 bg-red-500/15 text-red-300'
                  : 'border-amber-500/30 bg-amber-500/15 text-amber-300'
              }`}
            >
              {iconMap[event.iconName] || <Flame className="w-6 h-6" />}
            </div>

            <span
              className={`rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-wider ${
                isTechnical
                  ? 'bg-red-500/10 text-red-200 border-red-500/20'
                  : 'bg-amber-500/10 text-amber-200 border-amber-500/20'
              }`}
            >
              {CATEGORY_LABEL[event.category]}
            </span>

            <h3 className="text-2xl font-black tracking-wide text-white">
              {event.title}
            </h3>

            <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">
              Click to view details
            </p>
          </div>
        </div>

        {/* Back Face - Event Details */}
        <div
          className={`absolute inset-0 flex flex-col justify-between rounded-2xl border p-6 ${
            isTechnical
              ? 'border-red-500/25 hover:border-red-400/70 hover:shadow-[0_16px_40px_-12px_rgba(230,0,26,0.45)]'
              : 'border-amber-500/20 hover:border-amber-400/60 hover:shadow-[0_16px_40px_-12px_rgba(245,158,11,0.35)]'
          } bg-gradient-to-br from-black/80 via-black/60 to-surface`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div
            className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${
              isTechnical ? 'bg-red-600/20 opacity-60' : 'bg-orange-500/20 opacity-50'
            }`}
          />

          <div className="relative space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black tracking-wide text-white line-clamp-1">
                {event.title}
              </h3>
              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className="text-[10px] font-mono text-slate-400 hover:text-white uppercase tracking-wider"
              >
                Back
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2 text-[11px] text-slate-200">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 shrink-0 text-red-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-orange-400" />
                <span>{event.venue}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 shrink-0 text-red-300" />
                <span>{event.teamSize}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
              {event.shortDesc}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpen(event)}
            className="relative mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.05] py-2.5 px-3 text-xs font-semibold text-white transition-colors hover:border-red-400/40 hover:bg-white/[0.09]"
          >
            <span>View Details</span>
            <ChevronRight className="h-3.5 w-3.5 text-red-400" />
          </button>
        </div>
      </motion.div>
    </motion.article>
  );
}

function EventSection({
  title,
  countLabel,
  events,
  onOpen,
}: {
  title: string;
  countLabel: string;
  events: EventItem[];
  onOpen: (event: EventItem) => void;
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <EventShowcaseCard key={event.id} event={event} index={index} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

export default function EventExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'technical' | 'non-technical'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const filteredEvents = useMemo(() => {
    return EVENTS_DATA.filter((event) => {
      let matchesCat = true;
      if (selectedCategory === 'technical') matchesCat = event.category === 'technical';
      if (selectedCategory === 'non-technical') matchesCat = event.category === 'non-technical';

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;

      const titleMatch = event.title.toLowerCase().includes(q);
      const descMatch = event.shortDesc.toLowerCase().includes(q) || event.tagline.toLowerCase().includes(q);
      const coordMatch = event.coordinators.some((c) => c.name.toLowerCase().includes(q));
      const subMatch = event.subEvents?.some((s) => s.name.toLowerCase().includes(q));

      return matchesCat && (titleMatch || descMatch || coordMatch || subMatch);
    });
  }, [selectedCategory, searchQuery]);

  const technicalEvents = filteredEvents.filter((e) => e.category === 'technical');
  const nonTechnicalEvents = filteredEvents.filter((e) => e.category === 'non-technical');

  return (
    <div id="events" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-300 mb-4">
          <Flame className="w-3.5 h-3.5 text-orange-400" />
          <span>11 ARENAS · ₹150 SOLO · ₹300 TEAM (2–3)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Explore All <span className="text-gradient">AETHERION Events</span>
        </h2>
        <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
          Five technical events and five non-technical events across 11 live arenas. ₹150 for one person, ₹300 for a team of 2–3.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <div className="flex items-center p-1 rounded-xl bg-surface border border-border shadow-inner w-full md:w-auto overflow-x-auto">
          {[
            { id: 'all', label: 'All Tracks' },
            { id: 'technical', label: 'Technical' },
            { id: 'non-technical', label: 'Non-Technical' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as typeof selectedCategory)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-[0_0_15px_rgba(230,0,26,0.4)]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-300 absolute left-3.5 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events, topics, coordinators..."
            className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-x-1/2 text-xs text-slate-300 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="space-y-16">
          <EventSection
            title="Technical Events"
            countLabel={`${technicalEvents.length} events`}
            events={technicalEvents}
            onOpen={setSelectedEvent}
          />
          <EventSection
            title="Non-Technical Events"
            countLabel={`${nonTechnicalEvents.length} events`}
            events={nonTechnicalEvents}
            onOpen={setSelectedEvent}
          />
        </div>
      ) : (
        <div className="text-center py-16 bg-surface border border-border rounded-2xl max-w-md mx-auto">
          <p className="text-slate-200 text-sm">No events found matching your search query.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 text-xs font-mono text-red-300 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
