'use client';

import React from 'react';
import { Flame, Phone, Instagram } from 'lucide-react';

const COORDINATORS = [
  { name: 'Ahamed Multhazim. A', phone: '9600244885', href: 'tel:+919600244885', wa: 'https://wa.me/919600244885' },
  { name: 'Mohammed Abdul Faazil. A', phone: '9445328586', href: 'tel:+919445328586', wa: 'https://wa.me/919445328586' },
  { name: 'Thowbiq Raja', phone: '8807841124', href: 'tel:+918807841124', wa: 'https://wa.me/918807841124' },
  { name: 'Saravanan B', phone: '8248892060', href: 'tel:+918248892060', wa: 'https://wa.me/918248892060' },
];

export default function ContactSection() {
  return (
    <section id="coordinators" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-red-500/10">
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
        {COORDINATORS.map((coordinator, idx) => (
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

      <div className="mt-12 text-center">
        <p className="text-xs text-slate-400 mb-3">Follow AETHERION&apos;26</p>
        <a
          href="https://www.instagram.com/aetherion_2k26_?stkn=azAzMWRlbzR0bzIx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-surface border border-border text-base font-bold text-white hover:border-red-500/40 transition-colors"
        >
          <Instagram className="w-6 h-6 text-pink-400" />
          <span className="text-lg">@aetherion_2k26_</span>
        </a>
      </div>
    </section>
  );
}
