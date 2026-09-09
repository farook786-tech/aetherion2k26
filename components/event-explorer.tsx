'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EventItem, EVENTS_DATA } from '@/lib/data/events';
import EventModal from './event-modal';
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
}: {
  event: EventItem;
  index: number;
  onOpen: (event: EventItem) => void;
}) {
  const isTechnical = event.category === 'technical';
  const isEsports = event.category === 'e-sports';

  const accentBorder = isTechnical
    ? 'border-red-500/25 hover:border-red-400/70 hover:shadow-[0_16px_40px_-12px_rgba(230,0,26,0.45)]'
    : isEsports
      ? 'border-orange-500/25 hover:border-orange-400/70 hover:shadow-[0_16px_40px_-12px_rgba(249,115,22,0.4)]'
      : 'border-amber-500/20 hover:border-amber-400/60 hover:shadow-[0_16px_40px_-12px_rgba(245,158,11,0.35)]';

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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="event-card-shell group flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-[#0a0305]/80 p-6 text-center backdrop-blur-xl transition-all"
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${
          isTechnical ? 'bg-red-600/20 opacity-60' : 'bg-orange-500/20 opacity-50'
        }`}
      />
      <div
        className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${iconWrap}`}
      >
        {iconMap[event.iconName] || <Flame className="w-5 h-5" />}
      </div>
      <span className={`relative mb-3 rounded-full border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider ${badge}`}>
        {CATEGORY_LABEL[event.category]}
      </span>
      <h3 className="relative px-2 text-xl font-black tracking-wide text-white transition-colors group-hover:text-red-200 sm:text-2xl">
        {event.title}
      </h3>
      <p className="relative mt-3 text-xs leading-relaxed text-slate-300 line-clamp-3">
        {event.shortDesc}
      </p>

      <div className="relative mt-5 grid grid-cols-1 gap-2 border-t border-white/10 pt-4 text-left text-[12px] text-slate-200 sm:grid-cols-2">
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 shrink-0 text-red-400" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5 shrink-0 text-orange-400" />
          <span>{event.teamSize}</span>
        </div>
        <div className="flex items-center gap-1.5 font-bold text-white sm:col-span-2">
          <IndianRupee className="h-3.5 w-3.5 shrink-0 text-orange-300" />
          <span>₹150 / person · ₹300 team (2–3)</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onOpen(event)}
        className="relative mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.05] py-2.5 px-3 text-xs font-semibold text-white transition-colors hover:border-red-400/40 hover:bg-white/[0.09]"
      >
        <span>View Full Details</span>
        <ChevronRight className="h-3.5 w-3.5 text-red-400" />
      </button>
    </motion.article>
  );
}

function EventSection({
  title,
  countLabel,
  events,
  gridClass,
  onOpen,
}: {
  title: string;
  countLabel: string;
  events: EventItem[];
  gridClass: string;
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
      <div className={gridClass}>
        {events.map((event, index) => (
          <EventShowcaseCard key={event.id} event={event} index={index} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

export default function EventExplorer() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const technicalEvents = EVENTS_DATA.filter((e) => e.category === 'technical');
  const nonTechnicalEvents = EVENTS_DATA.filter((e) => e.category === 'non-technical');
  const esportsEvents = EVENTS_DATA.filter((e) => e.category === 'e-sports');

  return (
    <div id="events" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-300 mb-4">
          <Flame className="w-3.5 h-3.5 text-orange-400" />
          <span>11 ARENAS • ₹150 / PERSON · ₹300 TEAM (2–3)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Explore All <span className="text-gradient">AETHERION Events</span>
        </h2>
        <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
          Five technical arenas, four non-technical challenges, and two e-sports titles. ₹150 per person, or ₹300 for a team of 2–3. For specific games, look into the required members and decide what you want to join.
        </p>
      </div>

      <div className="space-y-16">
        <EventSection
          title="Technical Events"
          countLabel={`${technicalEvents.length} events`}
          events={technicalEvents}
          gridClass="grid grid-cols-1 md:grid-cols-2 gap-6"
          onOpen={setSelectedEvent}
        />
        <EventSection
          title="Non-Technical Events"
          countLabel={`${nonTechnicalEvents.length} events`}
          events={nonTechnicalEvents}
          gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          onOpen={setSelectedEvent}
        />
        <EventSection
          title="E-Sports"
          countLabel={`${esportsEvents.length} events`}
          events={esportsEvents}
          gridClass="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-4xl"
          onOpen={setSelectedEvent}
        />
      </div>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
