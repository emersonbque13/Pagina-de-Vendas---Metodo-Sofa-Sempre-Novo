/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Sparkles, Shield, Award, Download } from 'lucide-react';
import GiroCleanLogo from './GiroCleanLogo';

export default function EbookMockup() {
  return (
    <div className="relative group perspective-1000 py-6 px-4 flex justify-center items-center">
      {/* 3D Ebook Canvas Container */}
      <div className="relative w-64 h-88 transition-transform duration-500 ease-out transform hover:rotate-y-12 hover:-translate-y-2 hover:scale-105 select-none shadow-2xl rounded-r-xl">
        {/* Shadow Overlay */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl blur-md opacity-25 group-hover:opacity-40 transition-opacity" />

        {/* The Book Body */}
        <div className="relative w-full h-full bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 border-y border-r border-blue-400/20 rounded-r-2xl overflow-hidden flex flex-col justify-between p-6 text-white shadow-[12px_12px_24px_rgba(0,0,0,0.5),-2px_0px_5px_rgba(0,0,0,0.3)]">
          
          {/* Spine Binding Highlight (simulates a physical book spine) */}
          <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-slate-950 via-slate-900 to-transparent opacity-80" />
          <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-white/20" />

          {/* Book Header */}
          <div className="flex justify-between items-start z-10">
            <span className="bg-blue-500/20 text-blue-300 font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-blue-400/20 font-bold">
              E-book Premium
            </span>
            <div className="flex gap-1 text-yellow-400 animate-pulse">
              <Sparkles className="h-4 w-4" />
            </div>
          </div>

          {/* Book Brand / Creator Logo */}
          <div className="mt-4 flex justify-center scale-90 z-10">
            <div className="bg-white/5 backdrop-blur-sm p-1.5 rounded-full border border-white/10 flex items-center justify-center">
              <GiroCleanLogo className="h-12 w-12" variant="icon" />
            </div>
          </div>

          {/* Core Title Section */}
          <div className="my-auto text-center z-10 flex flex-col items-center">
            <p className="text-[10px] font-mono tracking-widest text-green-400 font-bold uppercase mb-1">
              Guia Definitivo e Prático
            </p>
            <h3 className="font-sans font-extrabold text-2xl md:text-3xl leading-tight text-white tracking-tight drop-shadow-md">
              Método
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400">
                Sofá Sempre Novo
              </span>
            </h3>
            
            {/* Visual divider line */}
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 my-3 rounded-full" />
            
            <p className="text-[10px] text-slate-300 max-w-[180px] leading-relaxed italic">
              "Aprenda a higienizar, tirar manchas e remover odores do seu estofado economizando centenas de reais."
            </p>
          </div>

          {/* Book Footer */}
          <div className="z-10 flex justify-between items-center border-t border-white/10 pt-4 mt-2">
            <div className="flex items-center gap-1.5 text-green-400">
              <Shield className="h-3.5 w-3.5" />
              <span className="font-sans text-[10px] font-bold text-slate-300">
                Seguro & Testado
              </span>
            </div>
            <div className="bg-green-500 text-slate-950 font-sans text-[9px] font-extrabold px-2 py-0.5 rounded tracking-wide uppercase flex items-center gap-1">
              <Award className="h-3 w-3" />
              PRO®
            </div>
          </div>

          {/* Subtle watermark background circles */}
          <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />
          <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-green-500/10 blur-xl pointer-events-none" />
        </div>
      </div>

      {/* Accompanying Floating Badges */}
      <div className="absolute top-2 right-2 md:right-4 bg-amber-500 text-slate-950 font-bold text-[10px] px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1 animate-bounce z-20 border border-white/20">
        <Download className="h-3 w-3" />
        Download Imediato
      </div>

      {/* Floating Pages beneath to simulate realistic thickness */}
      <div className="absolute inset-y-8 right-1 w-1 bg-slate-200 rounded-r shadow-md opacity-90 z-0" />
      <div className="absolute inset-y-10 right-0 w-1 bg-slate-300 rounded-r shadow-md opacity-70 z-0" />
    </div>
  );
}
