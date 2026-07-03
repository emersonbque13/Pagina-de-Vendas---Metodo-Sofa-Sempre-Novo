/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

interface SubstanceStatus {
  substance: string;
  status: 'allowed' | 'forbidden' | 'warning';
  explanation: string;
}

interface FabricData {
  id: string;
  name: string;
  description: string;
  careSymbol: string;
  substances: SubstanceStatus[];
}

export default function PodeOuNaoPodeTable() {
  const [selectedFabric, setSelectedFabric] = useState<string>('suede');

  const fabrics: Record<string, FabricData> = {
    suede: {
      id: 'suede',
      name: 'Suede / Animale / Veludo Sintético',
      description: 'Tecido sintético super resistente e macio, muito comum em sofás modernos.',
      careSymbol: 'Código "W" ou "S/W"',
      substances: [
        { substance: 'Água Natural', status: 'allowed', explanation: 'Pode ser usada moderadamente, sem encharcar a espuma de poliuretano.' },
        { substance: 'Detergente Neutro / APC', status: 'allowed', explanation: 'Perfeito para esfregar com escova de cerdas macias ou médias.' },
        { substance: 'Álcool Isopropílico', status: 'allowed', explanation: 'Excelente para tirar caneta e secar super rápido.' },
        { substance: 'Bicarbonato de Sódio em Pó', status: 'allowed', explanation: 'Pode espalhar a seco para retirar odores de mofo e xixi.' },
        { substance: 'Vinagre Branco de Álcool', status: 'warning', explanation: 'Use diluído e apenas para neutralizar odores. Puro pode desbotar.' },
        { substance: 'Cloro ou Água Sanitária (Alvejantes)', status: 'forbidden', explanation: 'NUNCA USE! Mancha o tecido de laranja permanentemente e corrói as fibras.' },
      ],
    },
    chenille: {
      id: 'chenille',
      name: 'Chenille / Jacquard',
      description: 'Tecido texturizado com algodão ou viscose. Acumula muita poeira nas tramas.',
      careSymbol: 'Código "S"',
      substances: [
        { substance: 'Detergente Neutro / APC', status: 'allowed', explanation: 'Usar somente a espuma do produto, esfregando com carinho.' },
        { substance: 'Água Natural', status: 'warning', explanation: 'Use pouquíssima água. Chenille encolhe fácil se for encharcado.' },
        { substance: 'Cloro ou Água Sanitária (Alvejantes)', status: 'forbidden', explanation: 'Proibido! Destrói a textura felpuda e rasga a fibra com o tempo.' },
        { substance: 'Secador de Cabelo (Calor)', status: 'forbidden', explanation: 'O calor excessivo deforma as fibras de poliéster do Chenille.' },
        { substance: 'Vinagre Branco', status: 'allowed', explanation: 'Excelente amaciante de fibras. Restaura o toque macio do tecido.' },
      ],
    },
    linho: {
      id: 'linho',
      name: 'Linho / Algodão Cru / Fibras Naturais',
      description: 'Tecido extremamente elegante e de alto luxo, porém ultra-sensível e de cuidados rigorosos.',
      careSymbol: 'Código "S" (Apenas solventes secos)',
      substances: [
        { substance: 'Detergente Neutro para Estofados', status: 'warning', explanation: 'Deve ser Ph neutro estrito e aplicado com pouca umidade.' },
        { substance: 'Água em abundância', status: 'forbidden', explanation: 'CRÍTICO! Causa "mancha de água" (auréolas amarelas) terríveis de remover.' },
        { substance: 'Álcool Líquido 70%', status: 'forbidden', explanation: 'Causa desbotamento químico imediato em fibras naturais cruas.' },
        { substance: 'Peróxido de Hidrogênio', status: 'warning', explanation: 'Pode ser usado para clarear amarelados, mas com diluição exata sob risco de manchar.' },
        { substance: 'Cloro ou Alvejante Clorado', status: 'forbidden', explanation: 'NUNCA USE! Deixa o linho amarelo-gema e dissolve as tramas do algodão.' },
      ],
    },
    couro: {
      id: 'couro',
      name: 'Couro Legítimo / Courvin / PU',
      description: 'Impermeável, mas exige hidratação periódica para não trincar.',
      careSymbol: 'Código "W" ou Limpeza com Pano Úmido',
      substances: [
        { substance: 'Pano levemente úmido com Sabão Neutro', status: 'allowed', explanation: 'Higienização segura e rápida.' },
        { substance: 'Creme Hidratante (Uso Geral)', status: 'warning', explanation: 'Evite cremes de pele comuns (podem entupir os poros do couro). Use hidratante específico de couro.' },
        { substance: 'Álcool Isopropílico', status: 'forbidden', explanation: 'Remove a película de verniz protetor do couro, causando rachaduras.' },
        { substance: 'Bicarbonato de Sódio', status: 'warning', explanation: 'Não esfregue o pó na superfície para não riscar o brilho do couro.' },
        { substance: 'Vinagre de Álcool', status: 'allowed', explanation: 'Diluído em água ajuda a desinfetar sem agredir a impermeabilidade.' },
      ],
    },
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
      {/* Header Bonus Badge */}
      <div className="flex justify-between items-center mb-6">
        <span className="bg-emerald-600 text-white font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          🎁 BÔNUS 3 INCLUSO
        </span>
        <span className="text-slate-500 font-mono text-xs font-semibold">
          Valor Real: <span className="line-through text-red-500">R$ 35,00</span>
        </span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="bg-emerald-500/15 text-emerald-400 p-2.5 rounded-2xl">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <div>
          <h4 className="font-sans font-extrabold text-lg tracking-tight text-white">
            Tabela Interativa "Pode ou Não Pode"
          </h4>
          <p className="text-xs text-emerald-400 font-semibold leading-none mt-1">
            Guia de Segurança Anti-Danos de Tecido
          </p>
        </div>
      </div>

      <p className="text-sm text-slate-300 leading-relaxed mb-6">
        A maior preocupação de quem limpa o sofá em casa é <strong>estragar o tecido</strong> ou deixá-lo manchado para sempre. Selecione seu tecido abaixo e veja o que é seguro aplicar:
      </p>

      {/* Fabric selector tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.values(fabrics).map((fabric) => (
          <button
            key={fabric.id}
            onClick={() => setSelectedFabric(fabric.id)}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
              selectedFabric === fabric.id
                ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-md'
                : 'bg-slate-800/80 text-slate-300 border-slate-700/50 hover:bg-slate-800'
            }`}
            type="button"
          >
            {fabric.name.split(' / ')[0]}
          </button>
        ))}
      </div>

      {/* Selected Fabric Info */}
      <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 mb-6">
        <h5 className="font-sans font-bold text-sm text-white mb-1">
          {fabrics[selectedFabric].name}
        </h5>
        <p className="text-xs text-slate-400 leading-relaxed">
          {fabrics[selectedFabric].description}
        </p>
        <div className="flex items-center gap-2 mt-3 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 w-fit">
          <HelpCircle className="h-3 w-3" />
          Símbolo na etiqueta: {fabrics[selectedFabric].careSymbol}
        </div>
      </div>

      {/* Interactive Table Content */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Química Geral e Restrições:</p>
        
        {fabrics[selectedFabric].substances.map((item, idx) => (
          <div 
            key={idx}
            className={`p-3 rounded-xl border flex items-start gap-3 transition-all ${
              item.status === 'allowed'
                ? 'bg-green-950/20 border-green-500/20 hover:border-green-500/40'
                : item.status === 'warning'
                ? 'bg-amber-950/20 border-amber-500/20 hover:border-amber-500/40'
                : 'bg-red-950/20 border-red-500/20 hover:border-red-500/40'
            }`}
          >
            {/* Status Icons */}
            {item.status === 'allowed' && (
              <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
            )}
            {item.status === 'warning' && (
              <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5 animate-pulse" />
            )}
            {item.status === 'forbidden' && (
              <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            )}

            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-bold text-xs text-white">
                  {item.substance}
                </span>
                <span className={`text-[9px] font-mono font-extrabold uppercase px-1.5 py-0.2 rounded ${
                  item.status === 'allowed'
                    ? 'bg-green-500/20 text-green-400'
                    : item.status === 'warning'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {item.status === 'allowed' ? 'Permitido' : item.status === 'warning' ? 'Cuidado' : 'Proibido'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                {item.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
