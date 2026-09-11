'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string | Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const target = targetDate instanceof Date ? targetDate : new Date(targetDate);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetIST = new Date(target.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const nowIST = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      
      const difference = targetIST.getTime() - nowIST.getTime();
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, isMounted]);

  if (!isMounted) {
    return (
      <div className="inline-flex items-center gap-3 text-white font-mono">
        <span className="text-sm font-bold uppercase tracking-wider">Loading...</span>
      </div>
    );
  }

  const pad = (n: number) => String(n).padStart(2, '0');

  const isEventStarted = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isEventStarted) {
    return (
      <div className="inline-flex items-center gap-2 sm:gap-3 text-white font-mono">
        <span className="text-xs font-bold uppercase tracking-wider text-green-400">Live</span>
        <span className="text-green-500">|</span>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-lg sm:text-xl font-black">00</span>
          <span className="text-[10px] text-green-300 uppercase">Days</span>
          <span className="text-green-500">:</span>
          <span className="text-lg sm:text-xl font-black">00</span>
          <span className="text-[10px] text-green-300 uppercase">Hrs</span>
          <span className="text-green-500">:</span>
          <span className="text-lg sm:text-xl font-black">00</span>
          <span className="text-[10px] text-green-300 uppercase">Min</span>
          <span className="text-green-500">:</span>
          <span className="text-lg sm:text-xl font-black">00</span>
          <span className="text-[10px] text-green-300 uppercase">Sec</span>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 text-white font-mono">
      <span className="text-xs font-bold uppercase tracking-wider text-red-300">Countdown</span>
      <span className="text-red-500">|</span>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="text-lg sm:text-xl font-black">{pad(timeLeft.days)}</span>
        <span className="text-[10px] text-red-300 uppercase">Days</span>
        <span className="text-red-500">:</span>
        <span className="text-lg sm:text-xl font-black">{pad(timeLeft.hours)}</span>
        <span className="text-[10px] text-red-300 uppercase">Hrs</span>
        <span className="text-red-500">:</span>
        <span className="text-lg sm:text-xl font-black">{pad(timeLeft.minutes)}</span>
        <span className="text-[10px] text-red-300 uppercase">Min</span>
        <span className="text-red-500">:</span>
        <span className="text-lg sm:text-xl font-black">{pad(timeLeft.seconds)}</span>
        <span className="text-[10px] text-red-300 uppercase">Sec</span>
      </div>
    </div>
  );
}
