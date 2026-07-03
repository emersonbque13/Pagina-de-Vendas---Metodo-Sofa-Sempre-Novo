/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Eye, ShieldAlert, Sparkles, Check, ArrowLeftRight, Activity } from 'lucide-react';

export default function SofaSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // Handle click on the container to move the slider immediately
  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-slate-900 rounded-3xl p-4 md:p-6 shadow-2xl border border-slate-800 text-white">
      {/* Header comparison buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-blue-400 animate-pulse" />
          <span className="font-sans font-bold text-sm md:text-base tracking-tight">
            Simulador de Transformação Visual
          </span>
        </div>
        <div className="flex gap-2">
          <span className="bg-red-500/20 text-red-400 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border border-red-500/30">
            <span className="h-1.5 w-1.5 bg-red-500 rounded-full animate-ping" />
            Sem Higienização
          </span>
          <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border border-green-500/30">
            <span className="h-1.5 w-1.5 bg-green-500 rounded-full" />
            Com Higienização
          </span>
        </div>
      </div>

      <p className="text-xs md:text-sm text-slate-300 text-center mb-4">
        Arraste a barra central para os lados e compare a sujeira oculta (ácaros, fungos e bactérias) com o sofá limpo e restaurado.
      </p>

      {/* Main Interactive Stage */}
      <div 
        ref={containerRef}
        className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-700 bg-slate-950 shadow-inner"
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* BEFORE/DIRTY SIDE (Always in background, full width) */}
        <div className="absolute inset-0 w-full h-full bg-[#1e293b]">
          {/* Background image: stylized vector sofa with dark, dirty gradients and stains */}
          <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20">
            {/* The Sofa Drawing (Dirty version) */}
            <svg viewBox="0 0 400 220" className="w-full max-w-lg transition-transform duration-500">
              {/* Back cushions */}
              <rect x="50" y="40" width="145" height="100" rx="15" fill="#524335" stroke="#33271d" strokeWidth="4" />
              <rect x="205" y="40" width="145" height="100" rx="15" fill="#4d3e31" stroke="#33271d" strokeWidth="4" />
              
              {/* Dirt Stains on cushions */}
              <ellipse cx="100" cy="90" rx="35" ry="20" fill="#2d1f14" filter="blur(10px)" opacity="0.8" />
              <ellipse cx="250" cy="80" rx="45" ry="25" fill="#291a10" filter="blur(15px)" opacity="0.9" />
              <ellipse cx="160" cy="110" rx="20" ry="12" fill="#1c120a" filter="blur(8px)" opacity="0.85" />
              <circle cx="280" cy="110" r="15" fill="#1c120a" filter="blur(6px)" opacity="0.9" />
              
              {/* Seat cushions */}
              <rect x="45" y="125" width="150" height="45" rx="10" fill="#5c4d3f" stroke="#33271d" strokeWidth="4" />
              <rect x="205" y="125" width="150" height="45" rx="10" fill="#564739" stroke="#33271d" strokeWidth="4" />
              
              {/* More dirt on seats */}
              <ellipse cx="120" cy="145" rx="40" ry="10" fill="#2d1f14" filter="blur(8px)" opacity="0.8" />
              <ellipse cx="260" cy="140" rx="30" ry="12" fill="#1c120a" filter="blur(8px)" opacity="0.85" />

              {/* Armrests */}
              <rect x="15" y="95" width="35" height="85" rx="10" fill="#4d3e31" stroke="#2a1e15" strokeWidth="4" />
              <rect x="350" y="95" width="35" height="85" rx="10" fill="#483a2d" stroke="#2a1e15" strokeWidth="4" />
              
              {/* Dirt on armrests */}
              <ellipse cx="32" cy="130" rx="10" ry="20" fill="#1c120a" filter="blur(6px)" opacity="0.8" />
              <ellipse cx="368" cy="130" rx="10" ry="20" fill="#1c120a" filter="blur(6px)" opacity="0.8" />

              {/* Sofa Base */}
              <rect x="35" y="170" width="330" height="25" rx="4" fill="#3d2f23" />
              
              {/* Legs */}
              <rect x="50" y="195" width="15" height="15" fill="#1f150c" />
              <rect x="335" y="195" width="15" height="15" fill="#1f150c" />
            </svg>
          </div>

          {/* Interactive Red Warning Indicators for Microorganisms */}
          <div className="absolute inset-0 pointer-events-auto">
            {/* Pulsating dots */}
            <div className="absolute top-[25%] left-[20%] group">
              <div className="relative">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-red-600 opacity-75 animate-ping" />
                <span className="relative flex rounded-full h-4 w-4 bg-red-500 border border-white items-center justify-center cursor-pointer">
                  <span className="h-1 w-1 bg-white rounded-full" />
                </span>
                <div className="absolute left-6 -top-2 scale-0 group-hover:scale-100 transition-all duration-300 origin-left bg-slate-950/95 border border-red-500/50 p-2.5 rounded-lg shadow-xl w-44 text-left z-20">
                  <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-0.5">👾 Ácaros Microscópicos</p>
                  <p className="text-[10px] text-slate-300 leading-tight">Milhares de ácaros se alimentam de restos de pele morta no tecido, desencadeando rinites e crises de asma.</p>
                </div>
              </div>
            </div>

            <div className="absolute top-[45%] left-[38%] group">
              <div className="relative">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-orange-600 opacity-75 animate-ping" />
                <span className="relative flex rounded-full h-4 w-4 bg-orange-500 border border-white items-center justify-center cursor-pointer">
                  <span className="h-1 w-1 bg-white rounded-full" />
                </span>
                <div className="absolute left-6 -top-2 scale-0 group-hover:scale-100 transition-all duration-300 origin-left bg-slate-950/95 border border-orange-500/50 p-2.5 rounded-lg shadow-xl w-44 text-left z-20">
                  <p className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-0.5">🧫 Bactérias & Odores</p>
                  <p className="text-[10px] text-slate-300 leading-tight">Causam cheiro de azedo e de mofo, proliferando rapidamente com o suor humano e gordura corporal.</p>
                </div>
              </div>
            </div>

            <div className="absolute top-[65%] left-[22%] group">
              <div className="relative">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-amber-600 opacity-75 animate-ping" />
                <span className="relative flex rounded-full h-4 w-4 bg-amber-500 border border-white items-center justify-center cursor-pointer">
                  <span className="h-1 w-1 bg-white rounded-full" />
                </span>
                <div className="absolute left-6 -top-2 scale-0 group-hover:scale-100 transition-all duration-300 origin-left bg-slate-950/95 border border-amber-500/50 p-2.5 rounded-lg shadow-xl w-44 text-left z-20">
                  <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-0.5">🍄 Fungos & Bolor</p>
                  <p className="text-[10px] text-slate-300 leading-tight">A umidade do ar e de sucos derramados penetra no estofamento criando manchas pretas difíceis de tirar.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-3 left-3 bg-red-600/90 backdrop-blur-sm px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
            <ShieldAlert className="h-3 w-3 animate-bounce" />
            Alerta: Foco de Alergias
          </div>
        </div>

        {/* AFTER/CLEAN SIDE (Slipped container, width is dynamic based on sliderPosition) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* Sub-container must have fixed full-width matching parent so it doesn't squish */}
          <div className="absolute inset-0 w-full h-full bg-[#0f172a]" style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}>
            {/* Background image: pristine clean glowing cream sofa */}
            <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-br from-blue-950 via-slate-900 to-green-950/20">
              
              {/* Sparkle background elements */}
              <div className="absolute top-12 left-1/4 text-yellow-300 animate-pulse">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="absolute bottom-16 left-1/3 text-blue-300 animate-bounce delay-300">
                <Sparkles className="h-4 w-4" />
              </div>

              {/* The Sofa Drawing (Clean restored version) */}
              <svg viewBox="0 0 400 220" className="w-full max-w-lg">
                {/* Back cushions - restored to clean elegant beige/cream */}
                <rect x="50" y="40" width="145" height="100" rx="15" fill="#f5ebe0" stroke="#d5c3b0" strokeWidth="4" />
                <rect x="205" y="40" width="145" height="100" rx="15" fill="#faf5ef" stroke="#d5c3b0" strokeWidth="4" />
                
                {/* Subtle fresh highlighting sheen */}
                <path d="M 60 55 Q 120 48 180 55" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M 215 55 Q 275 48 335 55" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.6" />

                {/* Seat cushions */}
                <rect x="45" y="125" width="150" height="45" rx="10" fill="#fcf8f2" stroke="#d5c3b0" strokeWidth="4" />
                <rect x="205" y="125" width="150" height="45" rx="10" fill="#faf5ef" stroke="#d5c3b0" strokeWidth="4" />

                {/* Armrests */}
                <rect x="15" y="95" width="35" height="85" rx="10" fill="#faf5ef" stroke="#cbb29b" strokeWidth="4" />
                <rect x="350" y="95" width="35" height="85" rx="10" fill="#f8f1e9" stroke="#cbb29b" strokeWidth="4" />

                {/* Sofa Base */}
                <rect x="35" y="170" width="330" height="25" rx="4" fill="#d5c3b0" />
                
                {/* Legs */}
                <rect x="50" y="195" width="15" height="15" fill="#78350f" />
                <rect x="335" y="195" width="15" height="15" fill="#78350f" />
              </svg>
            </div>

            <div className="absolute bottom-3 left-3 bg-green-600/90 backdrop-blur-sm px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 text-white">
              <Check className="h-3 w-3" />
              Sofá Restaurado e Cheiroso
            </div>
          </div>
        </div>

        {/* SLIDER CONTROLLER HANDLE BAR */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Circle Badge */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-blue-600 border-2 border-white shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform">
            <ArrowLeftRight className="h-5 w-5 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Info labels */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-3 bg-red-950/30 border border-red-900/30 rounded-xl">
          <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1 flex items-center gap-1">
            ❌ Sem Higienização
          </h4>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Suor acumulado de anos, oleosidade da pele, ácaros invisíveis, germes perigosos e manchas que desvalorizam sua sala.
          </p>
        </div>
        <div className="p-3 bg-green-950/30 border border-green-900/30 rounded-xl">
          <h4 className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1 flex items-center gap-1">
            ✔ Com o Método Sempre Novo
          </h4>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Eliminação de 99.9% de germes, cheiro perfumado, remoção de manchas difíceis e tecido com toque macio de sofá novo.
          </p>
        </div>
      </div>
    </div>
  );
}
