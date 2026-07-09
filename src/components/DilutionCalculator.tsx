/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Beaker, Settings, AlertCircle, Sparkles, Check, Lock } from 'lucide-react';

interface DilutionRatio {
  label: string;
  ratio: number;
  description: string;
}

export default function DilutionCalculator() {
  const [dirtLevel, setDirtLevel] = useState<'leve' | 'media' | 'pesada'>('leve');
  const [containerSize, setContainerSize] = useState<number>(500); // in ml
  const [productType, setProductType] = useState<string>('flotador');
  const [lockAlert, setLockAlert] = useState<'dirt' | 'capacity' | null>(null);

  const dirtLevels: Record<'leve' | 'media' | 'pesada', DilutionRatio> = {
    leve: { label: 'Sujeira Leve (Manutenção)', ratio: 40, description: 'Indicado para poeira do dia a dia, manutenção mensal e odores suaves.' },
    media: { label: 'Sujeira Média (Uso Geral)', ratio: 20, description: 'Para sofás com manchas leves, encardido de suor comum ou marcas de pés.' },
    pesada: { label: 'Sujeira Pesada (Extremo)', ratio: 10, description: 'Para sofás com cheiro de xixi de pet, manchas antigas e gordura corporal acumulada.' },
  };

  const productOptions = [
    { id: 'flotador', name: 'Flotador / Multi-estofados (APC)', action: 'Limpeza de tecidos em geral e manchas' },
    { id: 'extratora', name: 'Detergente para Extratora', action: 'Higienização profunda por extração' },
    { id: 'bactericida', name: 'Sanitizante Bactericida (Finalizador)', action: 'Eliminar ácaros, fungos e cheiro ruim' },
  ];

  // Calculation logic: Ratio 1:N means 1 part product to N parts total solution (or N parts water)
  // Let's use 1 part product to N parts water: total parts = N + 1.
  // Product ml = total_solution / (ratio + 1)
  const ratio = dirtLevels[dirtLevel].ratio;
  const productMl = Math.round(containerSize / (ratio + 1));
  const waterMl = containerSize - productMl;

  return (
    <div className="w-full bg-slate-50 border border-blue-100 rounded-3xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
      {/* Bonus Badge */}
      <div className="flex justify-between items-center mb-6">
        <span className="bg-blue-600 text-white font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          🎁 BÔNUS 1 INCLUSO
        </span>
        <span className="text-slate-400 font-mono text-xs font-semibold">
          Valor Real: <span className="line-through text-red-500">R$ 47,00</span>
        </span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-100 text-blue-600 p-2.5 rounded-2xl">
          <Beaker className="h-6 w-6" />
        </div>
        <div>
          <h4 className="font-sans font-extrabold text-lg text-slate-950 tracking-tight">
            Calculadora de Diluição Giro Clean®
          </h4>
          <p className="text-xs text-slate-500 leading-none mt-1">
            Ferramenta interativa inclusa no seu material de estudos.
          </p>
        </div>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed mb-6">
        Evite gastar produto em excesso ou queimar o tecido do seu sofá por diluir errado. Selecione as opções abaixo e veja a mágica acontecer:
      </p>

      <div className="space-y-5">
        {/* 1. Select Product Type */}
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-700 mb-2">
            1. Tipo de Produto Utilizado:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {productOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setProductType(opt.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  productType === opt.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-200'
                }`}
                type="button"
              >
                <p className="text-xs font-bold leading-tight">{opt.name}</p>
                <p className={`text-[10px] mt-1 leading-snug ${productType === opt.id ? 'text-blue-100' : 'text-slate-400'}`}>
                  {opt.action}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Select Dirt Level */}
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-700 mb-2">
            2. Nível de Sujeira do Sofá:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['leve', 'media', 'pesada'] as const).map((level) => {
              const isLocked = level !== 'leve';
              return (
                <button
                  key={level}
                  onClick={() => {
                    if (isLocked) {
                      setLockAlert('dirt');
                    } else {
                      setDirtLevel(level);
                      if (lockAlert === 'dirt') setLockAlert(null);
                    }
                  }}
                  className={`p-3 rounded-xl border text-center transition-all relative overflow-hidden ${
                    isLocked
                      ? 'bg-slate-100/80 text-slate-400 border-slate-200/60 cursor-pointer hover:bg-slate-150'
                      : dirtLevel === level
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                  type="button"
                >
                  <span className="text-xs font-extrabold uppercase flex items-center justify-center gap-1.5 tracking-wider">
                    {isLocked && <Lock className="h-3.5 w-3.5 text-amber-500 shrink-0" />}
                    {level === 'leve' ? 'Leve 1:40' : level === 'media' ? 'Média 1:20' : 'Pesada 1:10'}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-[11px] text-slate-500 mt-2 italic bg-slate-100/80 p-2.5 rounded-lg border border-slate-200/50 leading-relaxed">
            {dirtLevels[dirtLevel].description}
          </p>
        </div>

        {/* 3. Container Size Slider */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-extrabold uppercase tracking-widest text-slate-700">
              3. Capacidade do seu Borrifador / Extratora:
            </label>
            <span className="font-mono text-sm font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              {containerSize < 1000 ? `${containerSize} ml` : `${containerSize / 1000} Litro(s)`}
            </span>
          </div>
          <input
            type="range"
            min="500"
            max="5000"
            step="500"
            value={containerSize}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val > 500) {
                setLockAlert('capacity');
                setContainerSize(500);
              } else {
                setContainerSize(val);
                if (lockAlert === 'capacity') setLockAlert(null);
              }
            }}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
            <span>500 ml (Disponível)</span>
            <span className="flex items-center gap-0.5 text-slate-400/80">
              <Lock className="h-2.5 w-2.5 text-amber-500 shrink-0" /> 1.5 Litros (Bloqueado)
            </span>
            <span className="flex items-center gap-0.5 text-slate-400/80">
              <Lock className="h-2.5 w-2.5 text-amber-500 shrink-0" /> 5 Litros (Bloqueado)
            </span>
          </div>
        </div>

        {/* Locked Feature Conversion Box */}
        {lockAlert && (
          <div className="bg-amber-50/95 border-2 border-amber-400 rounded-2xl p-4 md:p-5 text-slate-800 shadow-md transition-all">
            <div className="flex gap-3 items-start mb-3">
              <div className="bg-amber-100 text-amber-600 p-2 rounded-xl shrink-0 mt-0.5">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-sans font-black text-sm text-slate-950 uppercase tracking-wide flex items-center gap-1.5">
                  Recurso Exclusivo Bloqueado
                </h5>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                  {lockAlert === 'dirt' 
                    ? 'A proporção exata de diluição de produtos químicos para remover manchas antigas, cheiro de xixi de pet, mofo e gordura corporal (Sujeiras Médias e Pesadas) é liberada apenas no material completo.' 
                    : 'As regulagens de diluição para borrifadores de grande porte (1 Litro, 1.5 Litros, 2 Litros) e extratoras de alta capacidade são exclusivas de quem adquire o e-book completo.'}
                </p>
              </div>
            </div>
            <a
              href="https://pay.kiwify.com.br/zIqMrjt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-sans font-black text-xs md:text-sm py-3.5 px-4 rounded-xl shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all uppercase tracking-wider text-center"
            >
              <Sparkles className="h-4 w-4 fill-slate-950 animate-pulse" />
              Desbloquear Calculadora Completa por R$ 37,00
            </a>
          </div>
        )}

        {/* Results Box */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-2xl p-5 shadow-inner relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 bg-white/5 rounded-bl-2xl">
            <Sparkles className="h-4 w-4 text-cyan-300" />
          </div>

          <h5 className="font-sans font-extrabold text-xs uppercase tracking-widest text-blue-300 mb-3">
            Fórmula de Diluição Gerada:
          </h5>

          <div className="grid grid-cols-2 gap-4 text-center mb-4">
            <div className="bg-white/10 rounded-xl p-3 border border-white/5">
              <span className="text-[10px] text-slate-300 block uppercase tracking-wider font-semibold">Quantidade de Produto:</span>
              <span className="text-2xl font-sans font-extrabold text-green-400 block mt-1">
                {productMl} ml
              </span>
              <span className="text-[10px] text-slate-400 italic">Copinho de dose ou seringa</span>
            </div>
            <div className="bg-white/10 rounded-xl p-3 border border-white/5">
              <span className="text-[10px] text-slate-300 block uppercase tracking-wider font-semibold">Quantidade de Água:</span>
              <span className="text-2xl font-sans font-extrabold text-blue-300 block mt-1">
                {waterMl} ml
              </span>
              <span className="text-[10px] text-slate-400 italic">Água limpa da torneira</span>
            </div>
          </div>

          {/* Action Step-by-Step */}
          <div className="border-t border-white/10 pt-4 text-xs space-y-2">
            <p className="font-bold text-slate-200 uppercase tracking-widest text-[10px] mb-2">Instruções de Preparo:</p>
            <div className="flex gap-2.5 items-start">
              <span className="h-4 w-4 bg-blue-500/30 text-blue-300 border border-blue-500/50 rounded-full flex items-center justify-center font-mono font-bold text-[9px] shrink-0 mt-0.5">
                1
              </span>
              <p className="text-slate-300 leading-snug">
                Coloque <strong className="text-white font-bold">{waterMl} ml</strong> de água morna ou natural primeiro no borrifador.
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <span className="h-4 w-4 bg-blue-500/30 text-blue-300 border border-blue-500/50 rounded-full flex items-center justify-center font-mono font-bold text-[9px] shrink-0 mt-0.5">
                2
              </span>
              <p className="text-slate-300 leading-snug">
                Adicione devagar <strong className="text-white font-bold">{productMl} ml</strong> do produto para evitar excesso de espuma.
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <span className="h-4 w-4 bg-blue-500/30 text-blue-300 border border-blue-500/50 rounded-full flex items-center justify-center font-mono font-bold text-[9px] shrink-0 mt-0.5">
                3
              </span>
              <p className="text-slate-300 leading-snug">
                Agite levemente e faça o teste em uma pequena área imperceptível do tecido antes de aplicar em todo o sofá.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-amber-50 border border-amber-200/50 p-3 rounded-xl leading-relaxed">
          <AlertCircle className="h-4 w-4 text-amber-500 shrink-0" />
          <span>
            <strong>Dica Pro de Economia:</strong> Com o Método Sempre Novo, 1 frasco de produto de R$ 35 rende até 20 diluições completas! Você gasta apenas <strong>R$ 1,75</strong> por higienização profissional contra os R$ 250 cobrados por empresas.
          </span>
        </div>
      </div>
    </div>
  );
}
