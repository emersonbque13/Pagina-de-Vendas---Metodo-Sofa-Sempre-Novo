/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Sparkles, Shield, Award, Download } from 'lucide-react';
import GiroCleanLogo from './GiroCleanLogo';

export default function EbookMockup() {
  const rings = Array.from({ length: 16 });

  return (
    <div className="relative group perspective-1000 py-6 px-4 flex justify-center items-center">
      {/* 3D Ebook Canvas Container */}
      <div className="relative w-64 h-88 transition-transform duration-500 ease-out transform hover:rotate-y-12 hover:-translate-y-2 hover:scale-105 select-none">
        
        {/* Soft realistic notebook glow & shadow */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/10 to-blue-500/10 rounded-2xl blur-md opacity-20 group-hover:opacity-35 transition-opacity" />

        {/* Realistic Metal Spiral Rings on the Left */}
        <div className="absolute left-0 top-4 bottom-4 w-7 flex flex-col justify-between z-20 pointer-events-none">
          {rings.map((_, i) => (
            <div key={i} className="flex items-center h-4 relative">
              {/* Notebook page hole */}
              <div className="w-1 h-2.5 rounded-full bg-slate-900/30 absolute left-[18px] shadow-inner" />
              {/* Double wire spiral ring loop */}
              <div className="w-5.5 h-2 bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 rounded-md border border-slate-500/30 absolute left-[2px] -rotate-12 shadow-sm" />
            </div>
          ))}
        </div>

        {/* The White Notebook Page Body */}
        <div className="absolute inset-y-0 left-[20px] right-0 bg-white border border-slate-150 rounded-r-2xl shadow-[15px_15px_30px_rgba(0,0,0,0.18),-1px_0px_3px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between p-5 text-[#1a365d]">
          
          {/* Subtle line representing sheet margin near spiral holes */}
          <div className="absolute top-0 bottom-0 left-2 w-[1px] bg-slate-100" />

          {/* Book Header */}
          <div className="flex justify-end items-start z-10">
            <span className="bg-slate-100 text-slate-500 font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded border border-slate-200 font-bold">
              Guia Prático
            </span>
          </div>

          {/* Centered Stamp Emblem (SSV) */}
          <div className="flex flex-col items-center justify-center my-auto text-center z-10 pt-4">
            {/* Elegant Double Circle stamp */}
            <div className="border border-[#13317c]/30 rounded-full p-0.5 mb-5 shadow-sm bg-white">
              <div className="border-2 border-dashed border-[#13317c]/50 rounded-full w-14 h-14 flex items-center justify-center">
                <span className="font-serif font-black text-lg text-[#13317c] tracking-wider">SSV</span>
              </div>
            </div>

            {/* Title Block */}
            <p className="text-[9px] font-sans font-extrabold uppercase tracking-[0.25em] text-[#13317c]/70">
              M É T O D O
            </p>
            <h3 className="font-serif font-black text-[38px] tracking-[0.05em] text-[#13317c] leading-none my-1">
              SOFÁ
            </h3>
            <p className="text-xs font-sans font-black tracking-[0.18em] text-[#13317c]/90 uppercase leading-none">
              SEMPRE NOVO
            </p>

            {/* Elegant horizontal line bullet separator */}
            <div className="flex items-center gap-1.5 my-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#13317c]/40" />
              <div className="w-16 h-[1px] bg-[#13317c]/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#13317c]/40" />
            </div>

            {/* Dynamic subtitle tags */}
            <p className="text-[8px] font-sans font-extrabold tracking-wider text-slate-400 italic uppercase leading-relaxed">
              LIMPAR • CONSERVAR • RESTAURAR
            </p>
          </div>

          {/* Bottom Wave Vector (Fluid bottom curve from original blueprint) */}
          <div className="absolute bottom-0 left-0 right-0 h-22 overflow-hidden rounded-br-2xl pointer-events-none">
            <svg viewBox="0 0 100 40" className="w-full h-full fill-[#13317c] text-[#13317c]" preserveAspectRatio="none">
              <path d="M0,40 L100,40 L100,12 C80,4 55,28 0,20 Z" />
              <path d="M0,40 L100,40 L100,16 C80,10 55,31 0,25 Z" fill="#20409c" opacity="0.25" />
            </svg>
            {/* Text on top of the wave */}
            <span className="absolute bottom-2.5 left-0 right-0 text-center font-mono text-[7px] font-bold text-white/95 uppercase tracking-[0.2em] z-10">
              GIRO CLEAN ACADEMY ® 2026
            </span>
          </div>

          {/* Page fold effect at top-right */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-slate-200 to-white shadow-sm pointer-events-none rounded-bl border-l border-b border-slate-100" />
        </div>
      </div>

      {/* Accompanying Floating Badge */}
      <div className="absolute top-2 right-2 md:right-4 bg-amber-500 text-slate-950 font-sans font-black text-[9px] px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1 animate-bounce z-20 border border-white/20 uppercase tracking-wider">
        <Download className="h-3 w-3" />
        Manual em PDF
      </div>

      {/* Floating Pages beneath to simulate physical workbook page stack thickness */}
      <div className="absolute inset-y-8 right-1.5 w-1 bg-slate-200 rounded-r shadow-sm opacity-90 z-0" />
      <div className="absolute inset-y-10 right-1 w-1 bg-slate-300 rounded-r shadow-sm opacity-70 z-0" />
    </div>
  );
}
