'use client';

import React, { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date('2026-09-12T09:00:00+05:30').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const timeUnits = [
    { label: 'DAYS', value: mounted ? formatNumber(timeLeft.days) : '02' },
    { label: 'HOURS', value: mounted ? formatNumber(timeLeft.hours) : '11' },
    { label: 'MINUTES', value: mounted ? formatNumber(timeLeft.minutes) : '48' },
    { label: 'SECONDS', value: mounted ? formatNumber(timeLeft.seconds) : '35' },
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-6 px-2">
      {/* Header Badge */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[11px] font-mono uppercase tracking-[0.2em] text-red-300 shadow-[0_0_15px_rgba(230,0,26,0.2)]">
          <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
          <span>Symposium Commences In</span>
        </span>
      </div>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3.5">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-2xl bg-[#0e0407]/90 border border-red-500/25 shadow-[0_8px_25px_rgba(0,0,0,0.8),0_0_20px_rgba(230,0,26,0.15)] backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(230,0,26,0.35)] hover:-translate-y-0.5"
          >
            {/* Ambient Top Glow Line */}
            <div className="absolute top-0 inset-x-3 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent pointer-events-none" />

            {/* Digit Display with 3D Fiery Drop Shadow */}
            <span className="font-mono text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-[0_0_18px_rgba(230,0,26,0.7)] group-hover:text-red-100 transition-colors">
              {unit.value}
            </span>

            {/* Sub-label */}
            <span className="mt-1 text-[9px] sm:text-[11px] font-mono font-bold tracking-[0.18em] text-orange-400 uppercase">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
