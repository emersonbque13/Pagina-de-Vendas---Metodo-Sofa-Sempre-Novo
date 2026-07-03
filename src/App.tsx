/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Check, AlertCircle, ShieldCheck, 
  ChevronRight, HelpCircle, Award, Clock, ArrowRight,
  Star, DollarSign, CheckCircle2, XCircle, Info,
  Flame, Lock, ShieldAlert, Heart, Calendar, MessageCircle, Play
} from 'lucide-react';

import GiroCleanLogo from './components/GiroCleanLogo';
import SofaSlider from './components/SofaSlider';
import EbookMockup from './components/EbookMockup';
import DilutionCalculator from './components/DilutionCalculator';
import PodeOuNaoPodeTable from './components/PodeOuNaoPodeTable';
import ChatTestimonial from './components/ChatTestimonial';
import CommunityFeed from './components/CommunityFeed';
import FAQSection from './components/FAQSection';

export default function App() {
  // Pricing configuration for the e-book
  const [ebookPrice, setEbookPrice] = useState<number>(37.00);
  const [showConfigPanel, setShowConfigPanel] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(874); // Countdown timer in seconds (approx 14m 34s)
  const [purchaseSimulated, setPurchaseSimulated] = useState<boolean>(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState<boolean>(false);

  // Form states for checkout simulation
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [pixSelected, setPixSelected] = useState<boolean>(true);

  // Purchase notification state
  const [notification, setNotification] = useState<{
    name: string;
    city: string;
    state: string;
    method: 'PIX' | 'Cartão de Crédito';
    timeAgo: string;
  } | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    const buyers = [
      { name: 'Mariana Costa', city: 'Aracaju', state: 'SE', method: 'PIX' },
      { name: 'Rodrigo Medeiros', city: 'Salvador', state: 'BA', method: 'Cartão de Crédito' },
      { name: 'Ana Beatriz Silva', city: 'São Paulo', state: 'SP', method: 'PIX' },
      { name: 'Felipe Alencar', city: 'Rio de Janeiro', state: 'RJ', method: 'Cartão de Crédito' },
      { name: 'Juliana Fonseca', city: 'Belo Horizonte', state: 'MG', method: 'PIX' },
      { name: 'Marcos Souza', city: 'Curitiba', state: 'PR', method: 'PIX' },
      { name: 'Gabriela Lima', city: 'Fortaleza', state: 'CE', method: 'Cartão de Crédito' },
      { name: 'Lucas Nascimento', city: 'Recife', state: 'PE', method: 'PIX' },
      { name: 'Patrícia Schmitt', city: 'Porto Alegre', state: 'RS', method: 'Cartão de Crédito' },
      { name: 'Carlos Eduardo', city: 'Brasília', state: 'DF', method: 'PIX' },
      { name: 'Camila Rocha', city: 'Maceió', state: 'AL', method: 'PIX' },
      { name: 'Thiago Ramos', city: 'Florianópolis', state: 'SC', method: 'Cartão de Crédito' },
      { name: 'Aline Torres', city: 'Natal', state: 'RN', method: 'PIX' },
      { name: 'Daniel Goulart', city: 'Manaus', state: 'AM', method: 'PIX' },
      { name: 'Isabela Ribeiro', city: 'Vitória', state: 'ES', method: 'Cartão de Crédito' }
    ];

    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * buyers.length);
      const buyer = buyers[randomIndex];
      const timeOptions = ['há 3 segundos', 'há 12 segundos', 'há 25 segundos', 'há 40 segundos', 'há poucos instantes'];
      const randomTime = timeOptions[Math.floor(Math.random() * timeOptions.length)];

      setNotification({
        name: buyer.name,
        city: buyer.city,
        state: buyer.state,
        method: buyer.method as 'PIX' | 'Cartão de Crédito',
        timeAgo: randomTime
      });
      setShowNotification(true);

      // Hide after 6 seconds
      const hideTimeout = setTimeout(() => {
        setShowNotification(false);
      }, 6000);

      return hideTimeout;
    };

    // First notification after 3 seconds on load to immediately show capability
    const initialTimeout = setTimeout(() => {
      showRandomNotification();
    }, 3000);

    // Then repeat every 60 seconds (1 minute)
    const interval = setInterval(() => {
      showRandomNotification();
    }, 60000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  // Countdown clock simulation
  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setPurchaseSimulated(true);
  };

  const handleCloseModal = () => {
    setCheckoutModalOpen(false);
    setPurchaseSimulated(false);
    setFullName('');
    setEmail('');
  };

  // SEO Fields (Configured in memory, easily read or exported)
  const seoDetails = {
    title: "Método Sofá Sempre Novo® | Guia Completo Giro Clean",
    description: "Aprenda a higienizar seu próprio sofá de forma segura, eliminando manchas, xixi de pet e odores. Economize centenas de reais com técnicas profissionais de estofados.",
    slug: "metodo-sofa-sempre-novo",
    keywords: "limpeza de sofá, como higienizar sofá, tirar mancha de sofá, xixi de gato sofá, receita caseira sofá, limpar suede, giro clean"
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* TOP EMERGENCY BANNER (Urgência Realista) */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-xs font-sans font-extrabold tracking-wide uppercase flex items-center justify-center gap-2">
        <Flame className="h-3.5 w-3.5 animate-bounce shrink-0" />
        <span>Oferta por tempo limitado: Seu sofá limpo gastando quase nada!</span>
        <span className="bg-black/20 px-2 py-0.5 rounded font-mono text-[10px] tracking-wider border border-white/10 shrink-0">
          Expira em {formatTime(timeLeft)}
        </span>
      </div>

      {/* HEADER NAVBAR */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 py-3.5 sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <GiroCleanLogo className="h-8 md:h-10" variant="horizontal" />
            <span className="text-amber-500 text-[10px] md:text-xs font-black uppercase bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0">PRO®</span>
          </div>
          <a
            href="https://pay.kiwify.com.br/zIqMrjt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy-900 hover:bg-navy-800 text-white font-display text-xs md:text-sm font-black px-5 py-2.5 rounded-xl transition-all shadow active:translate-y-0.5 cursor-pointer uppercase tracking-wider inline-block text-center"
            id="header-cta-button"
          >
            Quero o Método
          </a>
        </div>
      </header>

      {/* ========================================================
          SEÇÃO 1 - HERO SECTION (Visualmente Impactante e Focada)
          ======================================================== */}
      <section className="relative overflow-hidden py-14 md:py-24 min-h-[580px] flex items-center">
        {/* Panoramic high-end luxury sofa in a pristine high-standard living room */}
        <img 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80"
          alt="Sala de Estar com Sofá Design de Alto Padrão"
          className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
          style={{ objectPosition: 'center 70%' }}
          referrerPolicy="no-referrer"
        />
        {/* Slightly transparent glass-like blur & elegant dark overlay to keep high-contrast readability */}
        <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1.5px] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-950/25 to-slate-950/10 z-[1]" />

        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10 w-full">
          
          {/* Hero Card on Left - Elevated glassmorphism card for high standard */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-lg rounded-[28px] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-center border border-white/20 space-y-6">
            <span className="inline-block bg-navy-900 text-white px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest w-fit">
              Método Testado e Aprovado
            </span>
            
            <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight text-navy-900 tracking-tight uppercase">
              Pare de passar vergonha com seu <span className="text-amber-500">sofá encardido!</span>
            </h1>

            <p className="text-base text-[#475569] leading-relaxed max-w-xl font-medium">
              Aprenda o segredo profissional para higienizar seu próprio sofá com segurança, economizando até R$ 600 em cada limpeza.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 pt-2">
              <li className="flex gap-2.5 items-center font-semibold text-xs md:text-sm text-slate-700">
                <span className="text-emerald-500 font-bold text-lg shrink-0">✔</span>
                <span>Identifique o tecido e evite danos permanentes</span>
              </li>
              <li className="flex gap-2.5 items-center font-semibold text-xs md:text-sm text-slate-700">
                <span className="text-emerald-500 font-bold text-lg shrink-0">✔</span>
                <span>Os 3 produtos caseiros que batem qualquer profissional</span>
              </li>
              <li className="flex gap-2.5 items-center font-semibold text-xs md:text-sm text-slate-700">
                <span className="text-emerald-500 font-bold text-lg shrink-0">✔</span>
                <span>Remoção total de manchas de pets e crianças</span>
              </li>
              <li className="flex gap-2.5 items-center font-semibold text-xs md:text-sm text-slate-700">
                <span className="text-emerald-500 font-bold text-lg shrink-0">✔</span>
                <span>Técnica de secagem ultra-rápida (sem cheiro ruim)</span>
              </li>
            </ul>

            {/* Compare Box */}
            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="h-32 rounded-2xl relative overflow-hidden flex items-end p-2.5 border border-slate-300 shadow-sm bg-slate-200">
                {/* Custom SVG drawing of a highly stained, dirty suede sofa seat (Antes) */}
                <svg viewBox="0 0 160 100" className="w-full h-full absolute inset-0 object-cover" preserveAspectRatio="none" id="svg-antes-dirty">
                  <defs>
                    <filter id="dirty-blur-filter" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" />
                    </filter>
                    <filter id="dirty-blur-small" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="1.5" />
                    </filter>
                    <linearGradient id="dirty-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#bfab96" />
                      <stop offset="50%" stopColor="#aa9781" />
                      <stop offset="100%" stopColor="#8d7d6b" />
                    </linearGradient>
                    <linearGradient id="dirty-arm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ad9a85" />
                      <stop offset="100%" stopColor="#7a6b5a" />
                    </linearGradient>
                  </defs>

                  {/* Background Base */}
                  <rect width="160" height="100" fill="url(#dirty-bg-grad)" />

                  {/* Backrest (Top section) */}
                  <path d="M 0,0 L 160,0 L 160,30 L 0,26 Z" fill="#998773" stroke="#706151" strokeWidth="0.5" />
                  
                  {/* Armrest on Left */}
                  <path d="M 0,15 C 15,20 28,30 24,100 L 0,100 Z" fill="url(#dirty-arm-grad)" stroke="#665849" strokeWidth="0.5" />

                  {/* Seam Lines on Seat (Grid-like Tufting) */}
                  <path d="M 24,55 C 70,52 110,50 160,48" stroke="#7a6a59" strokeWidth="1" strokeDasharray="1,1" fill="none" opacity="0.6" />
                  <path d="M 24,78 C 70,75 110,72 160,70" stroke="#7a6a59" strokeWidth="1" strokeDasharray="1,1" fill="none" opacity="0.6" />
                  <path d="M 70,28 L 60,100" stroke="#7a6a59" strokeWidth="1" strokeDasharray="1,1" fill="none" opacity="0.6" />
                  <path d="M 115,29 L 110,100" stroke="#7a6a59" strokeWidth="1" strokeDasharray="1,1" fill="none" opacity="0.6" />

                  {/* Large water stain / grease on the left seat near the armrest */}
                  <ellipse cx="50" cy="58" rx="20" ry="12" fill="#4a3b2c" filter="url(#dirty-blur-filter)" opacity="0.75" />
                  <ellipse cx="58" cy="62" rx="12" ry="8" fill="#302419" filter="url(#dirty-blur-filter)" opacity="0.8" />

                  {/* Water stains/spots in the middle */}
                  <ellipse cx="95" cy="48" rx="14" ry="7" fill="#524334" filter="url(#dirty-blur-filter)" opacity="0.7" />
                  <ellipse cx="102" cy="50" rx="6" ry="4" fill="#382b1e" filter="url(#dirty-blur-filter)" opacity="0.75" />

                  {/* Dark greasy spots near front/right */}
                  <circle cx="125" cy="72" r="5" fill="#2d2217" filter="url(#dirty-blur-small)" opacity="0.8" />
                  <circle cx="85" cy="80" r="7" fill="#403225" filter="url(#dirty-blur-filter)" opacity="0.75" />
                  <circle cx="140" cy="60" r="4" fill="#2d2217" filter="url(#dirty-blur-small)" opacity="0.8" />

                  {/* Overall vignette shadow for dirt/wear */}
                  <rect width="160" height="100" fill="black" opacity="0.08" pointerEvents="none" />
                </svg>
                <span className="bg-black/75 backdrop-blur-sm text-white font-display text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wider z-10">
                  Antes: Encardido
                </span>
              </div>
              <div className="h-32 rounded-2xl relative overflow-hidden flex items-end p-2.5 border border-slate-200 shadow-md bg-white">
                {/* Custom SVG drawing of a beautifully clean, pristine suede sofa seat with sparkling highlights (Depois) */}
                <svg viewBox="0 0 160 100" className="w-full h-full absolute inset-0 object-cover" preserveAspectRatio="none" id="svg-depois-clean">
                  <defs>
                    <linearGradient id="clean-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#faf6f0" />
                      <stop offset="50%" stopColor="#f3e9dc" />
                      <stop offset="100%" stopColor="#eadecc" />
                    </linearGradient>
                    <linearGradient id="clean-arm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#f3e9dc" />
                    </linearGradient>
                    <linearGradient id="sheen-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                      <stop offset="50%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Background Base (Clean cream/beige) */}
                  <rect width="160" height="100" fill="url(#clean-bg-grad)" />

                  {/* Backrest (Top section) */}
                  <path d="M 0,0 L 160,0 L 160,30 L 0,26 Z" fill="#eadecc" stroke="#d5c3b0" strokeWidth="0.5" />
                  
                  {/* Armrest on Left */}
                  <path d="M 0,15 C 15,20 28,30 24,100 L 0,100 Z" fill="url(#clean-arm-grad)" stroke="#d5c3b0" strokeWidth="0.5" />

                  {/* Seam Lines on Seat (Grid-like Tufting) */}
                  <path d="M 24,55 C 70,52 110,50 160,48" stroke="#d5c3b0" strokeWidth="1" strokeDasharray="1,1" fill="none" opacity="0.8" />
                  <path d="M 24,78 C 70,75 110,72 160,70" stroke="#d5c3b0" strokeWidth="1" strokeDasharray="1,1" fill="none" opacity="0.8" />
                  <path d="M 70,28 L 60,100" stroke="#d5c3b0" strokeWidth="1" strokeDasharray="1,1" fill="none" opacity="0.8" />
                  <path d="M 115,29 L 110,100" stroke="#d5c3b0" strokeWidth="1" strokeDasharray="1,1" fill="none" opacity="0.8" />

                  {/* Clean highlight sheen crossing diagonally */}
                  <polygon points="20,100 80,0 110,0 50,100" fill="url(#sheen-grad)" opacity="0.7" />

                  {/* Glowing Sparkle icons to denote sparkling cleanliness */}
                  <g transform="translate(65, 45) scale(0.6)">
                    <path d="M 0,-10 L 2,-3 L 9,-3 L 3,1 L 5,8 L 0,4 L -5,8 L -3,1 L -9,-3 L -2,-3 Z" fill="#fcd34d" />
                  </g>
                  <g transform="translate(120, 35) scale(0.45)">
                    <path d="M 0,-10 L 2,-3 L 9,-3 L 3,1 L 5,8 L 0,4 L -5,8 L -3,1 L -9,-3 L -2,-3 Z" fill="#60a5fa" />
                  </g>
                  <g transform="translate(85, 75) scale(0.4)">
                    <path d="M 0,-10 L 2,-3 L 9,-3 L 3,1 L 5,8 L 0,4 L -5,8 L -3,1 L -9,-3 L -2,-3 Z" fill="#34d399" />
                  </g>
                </svg>
                <span className="bg-emerald-500 text-white font-display text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wider z-10 shadow-sm">
                  Depois: Renovado
                </span>
              </div>
            </div>

            {/* Trust Bar */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-100 text-[10px] md:text-[11px] text-[#94A3B8] font-bold">
              <div className="flex items-center gap-1">🛡️ 7 Dias de Garantia</div>
              <div className="flex items-center gap-1">⚡ Acesso Imediato</div>
              <div className="flex items-center gap-1">💳 Compra 100% Segura</div>
            </div>
          </div>

          {/* Right Column: Mockup Card and Action Price */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between relative z-10">
            <div className="bg-gradient-to-br from-navy-950/90 to-slate-900/90 backdrop-blur-lg rounded-[28px] p-6 md:p-8 flex flex-col items-center justify-center relative text-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] min-h-[380px] flex-1 border border-white/10">
              {/* Guarantee Seal */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white border-4 border-[#FCD34D] rounded-full flex flex-col items-center justify-center text-[9px] font-black text-[#B45309] text-center leading-tight shadow-md rotate-[15deg] z-20 select-none">
                <span>7 DIAS</span>
                <span>GARANTIA</span>
              </div>
              
              {/* Mockup content */}
              <div className="z-10 w-full flex flex-col items-center">
                <div className="scale-95 transform">
                  <EbookMockup />
                </div>
                
                <div className="text-center mt-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">MÉTODO SOFÁ SEMPRE NOVO®</p>
                  <p className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mt-2">Por Apenas</p>
                  <p className="text-4xl md:text-5xl font-display font-black text-amber-500 my-1">
                    R$ {ebookPrice.toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-[11px] text-slate-300 font-semibold opacity-90">
                    OU 5X DE R$ {(ebookPrice / 5 * 1.08).toFixed(2).replace('.', ',')}
                  </p>
                </div>
              </div>

              {/* Urgency warning inside right card */}
              <div className="w-full mt-4 pt-4 border-t border-white/10 z-10 text-center">
                <span className="text-[11px] text-[#EF4444] font-black uppercase tracking-wider">
                  ⚠️ Oferta disponível apenas para os próximos 12 compradores
                </span>
                
                <a
                  href="https://pay.kiwify.com.br/zIqMrjt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-3 cta-button-minimal text-slate-950 font-display font-black text-sm md:text-base py-4 rounded-xl shadow-lg hover:brightness-110 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
                  id="hero-cta-button"
                >
                  SIM! QUERO MEU SOFÁ NOVO AGORA
                  <ArrowRight className="h-4.5 w-4.5 stroke-[3]" />
                </a>
              </div>

              {/* Subtle background glow */}
              <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-blue-800/20 blur-2xl pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SEÇÃO 2 - IDENTIFICAÇÃO (Esse produto foi feito para mim)
          ======================================================== */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-navy-900 mb-1 font-mono">
            Será que este manual é para você?
          </p>
          <h2 className="font-display font-black text-2xl md:text-3xl text-navy-900 tracking-tight mb-8 uppercase">
            Se você se identificar com 2 ou mais das situações abaixo, a resposta é <span className="text-amber-500">SIM:</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 text-left hover:border-navy-900/10 hover:shadow-md transition-all">
              <span className="text-2xl block mb-2">😳</span>
              <h4 className="font-display font-bold text-navy-900 text-sm mb-1 leading-snug uppercase tracking-wide">Vergonha do Sofá Encardido</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Você sente vergonha quando as visitas chegam na sua casa e olham para as manchas amarelas ou o encardido escuro do tecido.
              </p>
            </div>

            <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 text-left hover:border-navy-900/10 hover:shadow-md transition-all">
              <span className="text-2xl block mb-2">👶🐶</span>
              <h4 className="font-display font-bold text-navy-900 text-sm mb-1 leading-snug uppercase tracking-wide">Crianças e Pets em Casa</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Todo dia é uma batalha nova: pelos, patas sujas de terra, odores de urina ou farelo de biscoito e derramamento de sucos.
              </p>
            </div>

            <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 text-left hover:border-navy-900/10 hover:shadow-md transition-all">
              <span className="text-2xl block mb-2">😨</span>
              <h4 className="font-display font-bold text-navy-900 text-sm mb-1 leading-snug uppercase tracking-wide">Medo de Estragar o Tecido</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Você quer limpar, mas tem pavor de usar o produto químico errado e acabar queimando, manchando ou desbotando seu sofá caríssimo.
              </p>
            </div>

            <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 text-left hover:border-navy-900/10 hover:shadow-md transition-all">
              <span className="text-2xl block mb-2">🧼</span>
              <h4 className="font-display font-bold text-navy-900 text-sm mb-1 leading-snug uppercase tracking-wide">Testou Receitas da Internet</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Já tentou usar bicarbonato com vinagre ou amaciante e percebeu que depois de secar ficou duro, com cheiro de azedo e manchas circulares.
              </p>
            </div>

            <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 text-left hover:border-navy-900/10 hover:shadow-md transition-all">
              <span className="text-2xl block mb-2">💸</span>
              <h4 className="font-display font-bold text-navy-900 text-sm mb-1 leading-snug uppercase tracking-wide">Não Quer Gastar Centenas de Reais</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Sabe que pagar R$ 250 a R$ 400 para empresas de higienização profissional a cada 6 meses pesa no orçamento da família.
              </p>
            </div>

            <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 text-left hover:border-navy-900/10 hover:shadow-md transition-all">
              <span className="text-2xl block mb-2">😷</span>
              <h4 className="font-display font-bold text-navy-900 text-sm mb-1 leading-snug uppercase tracking-wide">Rinite e Crises de Espirro</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                A família vive com o nariz coçando e tosses frequentes por causa do acúmulo invisível de ácaros, poeira e bactérias nos estofados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SEÇÃO EXTRA - SAÚDE E RISCOS (Baseada no Infográfico)
          ======================================================== */}
      <section className="py-16 text-white border-b border-navy-950 relative overflow-hidden">
        {/* Background image: High-end luxury sofa in high-standard ambient with a slightly transparent effect */}
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
          alt="Estofado Fino em Ambiente de Luxo"
          className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        {/* Slightly transparent glass-like blur & dark overlay */}
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px] z-[1]" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2">
              <ShieldAlert className="h-4 w-4 animate-pulse" />
              Alerta de Saúde Familiar
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-snug uppercase">
              Seu Sofá Pode Estar Prejudicando a Saúde da Sua Família!
            </h2>
            <p className="text-xs md:text-sm text-slate-300 mt-2">
              O que os olhos não enxergam no tecido do estofado pode estar fazendo mal invisível todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div className="p-4 bg-navy-950/80 border border-slate-850 rounded-xl text-center shadow-sm">
              <span className="text-3xl block mb-2">🤧</span>
              <h5 className="font-display font-extrabold text-xs text-white uppercase tracking-wider mb-1">Alergias</h5>
              <p className="text-[11px] text-slate-400 leading-snug">
                Rinite, espirros frequentes e coceira terrível nos olhos e nariz por conta do pó.
              </p>
            </div>

            <div className="p-4 bg-navy-950/80 border border-slate-850 rounded-xl text-center shadow-sm">
              <span className="text-3xl block mb-2">🫁</span>
              <h5 className="font-display font-extrabold text-xs text-white uppercase tracking-wider mb-1">Asma / Bronquite</h5>
              <p className="text-[11px] text-slate-400 leading-snug">
                Crises respiratórias graves, falta de ar, tosse seca e chiado no peito em crianças.
              </p>
            </div>

            <div className="p-4 bg-navy-950/80 border border-slate-850 rounded-xl text-center shadow-sm">
              <span className="text-3xl block mb-2">🔴</span>
              <h5 className="font-display font-extrabold text-xs text-white uppercase tracking-wider mb-1">Irritações de Pele</h5>
              <p className="text-[11px] text-slate-400 leading-snug">
                Coceiras estranhas, dermatites atópicas e alergias inexplicáveis na pele das pernas.
              </p>
            </div>

            <div className="p-4 bg-navy-950/80 border border-slate-850 rounded-xl text-center shadow-sm">
              <span className="text-3xl block mb-2">👶</span>
              <h5 className="font-display font-extrabold text-xs text-white uppercase tracking-wider mb-1">Riscos para Crianças</h5>
              <p className="text-[11px] text-slate-400 leading-snug">
                Bebês que engatinham no sofá ficam muito mais vulneráveis a engolir fungos e ácaros.
              </p>
            </div>

            <div className="p-4 bg-navy-950/80 border border-slate-850 rounded-xl text-center shadow-sm">
              <span className="text-3xl block mb-2">💨</span>
              <h5 className="font-display font-extrabold text-xs text-white uppercase tracking-wider mb-1">Mau Cheiro</h5>
              <p className="text-[11px] text-slate-400 leading-snug">
                Ambiente pesado, fedor de mofo e xixi impregnados que não saem com desodorizador.
              </p>
            </div>

          </div>

          <div className="mt-8 bg-navy-950 border border-slate-800 p-5 rounded-2xl flex flex-col md:flex-row items-center gap-4 justify-between shadow-lg">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold text-amber-400">🚨 Sabia que ácaros, restos de pele e resíduos corporais se acumulam no sofá diariamente?</p>
              <p className="text-[11px] text-slate-400 mt-1">Giro Clean recomenda a higienização a cada 6 meses, principalmente em lares com crianças e animais de estimação.</p>
            </div>
            <a
              href="https://pay.kiwify.com.br/zIqMrjt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-display font-black text-xs py-3 px-6 rounded-xl shrink-0 transition-colors shadow active:translate-y-0.5 uppercase tracking-wider inline-block text-center"
              id="perigos-cta-button"
            >
              Quero Eliminar esses Perigos
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SEÇÃO 3 - O CUSTO DE NÃO FAZER NADA (Conscientização)
          ======================================================== */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase text-red-500 tracking-widest">
              Faça as contas e pare de perder dinheiro
            </span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-navy-900 tracking-tight mt-1 uppercase">
              O Custo Financeiro de Continuar no Erro
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white border-t-4 border-red-500 rounded-2xl p-6 shadow-sm relative overflow-hidden border-x border-b border-slate-100">
              <h4 className="font-display font-extrabold text-[#1E293B] text-sm md:text-base mb-3 flex items-center gap-2 uppercase tracking-wide">
                <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                Caminho 1: Pagar profissionais toda vez
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Higienização profissional comum:</strong> Custa de R$ 250 a R$ 400 por visita.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Frequência anual com pets/crianças:</strong> 3 vezes ao ano = <strong className="text-slate-900">R$ 900+ jogados fora.</strong></span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Desgaste:</strong> Você fica refém de agendar horários, pessoas estranhas em sua casa e barulhos altíssimos.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-t-4 border-red-500 rounded-2xl p-6 shadow-sm relative overflow-hidden border-x border-b border-slate-100">
              <h4 className="font-display font-extrabold text-[#1E293B] text-sm md:text-base mb-3 flex items-center gap-2 uppercase tracking-wide">
                <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                Caminho 2: Receitas caseiras "milagrosas"
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Vinagre e Bicarbonato puros:</strong> Anulam-se quimicamente. O pó de bicarbonato quebra as fibras de linho e suede por fricção abrasiva.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Desbotamento químico:</strong> O uso de cloro líquido ou alvejantes ácidos mancha o tecido permanentemente de laranja ou roxo.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Prejuízo total:</strong> O sofá estraga e você perde o móvel por uma economia boba.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Destaque do valor do método */}
          <div className="mt-8 bg-emerald-50 border border-emerald-200/60 p-6 rounded-3xl text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs text-emerald-800 font-extrabold uppercase tracking-widest font-mono">A Solução Inteligente:</p>
            <p className="text-sm md:text-base text-navy-900 leading-relaxed font-bold">
              Com o <strong>Método Sofá Sempre Novo®</strong>, você compra produtos profissionais concentrados baratos, dilui certinho e higieniza você mesmo com segurança total pelo resto da vida.
            </p>
            <p className="text-xs text-slate-500 italic mt-2">
              Seu custo real por limpeza? <strong>Menos de R$ 2,00 por aplicação!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SEÇÃO 4 - APRESENTAÇÃO DO MÉTODO E HISTÓRIA (Autoridade)
          ======================================================== */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase text-navy-900 tracking-wider">
              A Origem do Método
            </span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-navy-900 tracking-tight leading-snug uppercase">
              Quem está por trás do Método Sofá Sempre Novo®?
            </h2>
            
            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
              Olá, nós somos da <strong>Giro Clean PRO®</strong>. Trabalhamos há anos prestando serviços de altíssima performance de limpeza e higienização de estofados residenciais de luxo.
            </p>
            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
              Durante as nossas visitas, nos deparamos com clientes desesperados: pessoas que tinham acabado de estragar sofás caríssimos tentando tirar uma mancha de café ou xixi de filhotes usando receitas malucas de "vinagre puro" e "mistura caseira" ensinadas por influenciadores na internet.
            </p>
            <p className="text-xs md:text-sm text-[#475569] leading-relaxed font-bold text-navy-900">
              Isso quebrava nosso coração. Os clientes gastavam centenas de reais e destruíam a sala por pura falta de orientação correta.
            </p>
            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
              Decidimos condensar todo o nosso conhecimento prático, produtos de mercado e técnicas químicas industriais seguras em um <strong>Ebook passo a passo ilustrado, feito para qualquer pessoa comum aplicar</strong> sem precisar de experiência nenhuma.
            </p>
          </div>

          <div className="bg-navy-900 rounded-3xl p-6 border border-slate-850 text-white flex flex-col justify-between h-fit relative shadow-xl">
            <span className="absolute top-2 right-4 text-[9px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
              Selo Oficial Giro Clean PRO®
            </span>
            
            <div className="flex justify-center mb-5 bg-white/5 p-4 rounded-2xl border border-white/10">
              <GiroCleanLogo className="h-56 w-56 drop-shadow-xl" variant="badge" />
            </div>
            
            <div className="bg-navy-950 p-4 rounded-xl border border-slate-800 text-left space-y-3">
              <p className="text-xs font-bold text-amber-500 uppercase tracking-wider">Por que o nosso método funciona?</p>
              <div className="space-y-2">
                <div className="flex gap-2 items-start text-[11px]">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Base Científica:</strong> Utilizamos química de PH de tecidos (Neutro, Ácido, Alcalino) para limpar sem desbotar.</span>
                </div>
                <div className="flex gap-2 items-start text-[11px]">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Sem Maquinário:</strong> Adaptamos a enxágue por fricção manual e absorção ativa por panos de microfibra de alta gramatura.</span>
                </div>
                <div className="flex gap-2 items-start text-[11px]">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Praticidade de Bolso:</strong> Criado para você abrir o celular na beira do sofá e ir consultando em tempo real.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SEÇÃO 5 - O QUE VOCÊ VAI APRENDER (Módulos Detalhados)
          ======================================================== */}
      <section className="py-12 bg-[#F8FAFC] border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase text-navy-900 tracking-wider">
              Conteúdo Programático Completo
            </span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-navy-900 tracking-tight mt-1 leading-snug uppercase">
              O que você vai aprender passo a passo no e-book:
            </h2>
          </div>

          {/* List of 7 Modules */}
          <div className="space-y-4 max-w-3xl mx-auto">
            
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-start hover:border-navy-900/10 transition-all">
              <span className="font-mono text-xl font-black text-white bg-navy-900 h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                01
              </span>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-navy-900 text-sm md:text-base uppercase tracking-wide">Módulo 1: Desvendando o Tecido do Seu Sofá (Código Secreto)</h4>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  Aprenda a ler a etiqueta do sofá e a fazer o teste do toque para diferenciar Suede, Linho, Chenille, Jacquard ou Couro.
                </p>
                <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 pt-1">
                  <Check className="h-3.5 w-3.5" /> Benefício: Elimina 100% o risco de queimar, endurecer ou estragar o tecido com produtos incompatíveis.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-start hover:border-navy-900/10 transition-all">
              <span className="font-mono text-xl font-black text-white bg-navy-900 h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                02
              </span>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-navy-900 text-sm md:text-base uppercase tracking-wide">Módulo 2: O Arsenal Barato de Limpeza de Mercado</h4>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  Quais são os produtos de supermercado baratos (que custam de R$ 5 a R$ 15) que limpam tão bem quanto os produtos profissionais das marcas caras.
                </p>
                <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 pt-1">
                  <Check className="h-3.5 w-3.5" /> Benefício: Economia de dinheiro imediata sem precisar comprar químicos importados de alto custo.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-start hover:border-navy-900/10 transition-all">
              <span className="font-mono text-xl font-black text-white bg-navy-900 h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                03
              </span>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-navy-900 text-sm md:text-base uppercase tracking-wide">Módulo 3: Passo a Passo da Higienização Manual (Sem Extratora)</h4>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  O protocolo completo de escovação com cerdas corretas, técnica de diluição ideal e o método do "enxágue por absorção" com panos para remover a sujeira cinza profunda.
                </p>
                <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 pt-1">
                  <Check className="h-3.5 w-3.5" /> Benefício: Deixa o sofá com toque macio, super higienizado e revitaliza a cor original de fábrica.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-start hover:border-navy-900/10 transition-all">
              <span className="font-mono text-xl font-black text-white bg-navy-900 h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                04
              </span>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-navy-900 text-sm md:text-base uppercase tracking-wide">Módulo 4: Neutralização Química de Odores (Sem Máscaras)</h4>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  A técnica secreta de PH para matar as bactérias causadoras do cheiro de azedo de suor, mofo persistente e xixi.
                </p>
                <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 pt-1">
                  <Check className="h-3.5 w-3.5" /> Benefício: Sua sala volta a ficar cheirosa e fresca, livre de mau odor crônico de mofo.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-start hover:border-navy-900/10 transition-all">
              <span className="font-mono text-xl font-black text-white bg-navy-900 h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                05
              </span>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-navy-900 text-sm md:text-base uppercase tracking-wide">Módulo 5: Protocolo Especial Antióleo e Manchas Críticas</h4>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  Como agir pontualmente contra manchas de vinho, café derramado, canetinha de escola dos filhos, sangue e gordura corporal nos braços do sofá.
                </p>
                <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 pt-1">
                  <Check className="h-3.5 w-3.5" /> Benefício: Remove a mancha na hora sem precisar lavar o sofá inteiro e sem deixar auréolas amareladas após secar.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-start hover:border-navy-900/10 transition-all">
              <span className="font-mono text-xl font-black text-white bg-navy-900 h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                06
              </span>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-navy-900 text-sm md:text-base uppercase tracking-wide">Módulo 6: O Segredo Pro do Sofá Limpo 5x Mais Tempo</h4>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  Como criar uma microbarreira invisível repelente de poeira e pelo de animais gastando pouquíssimo por aplicação.
                </p>
                <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 pt-1">
                  <Check className="h-3.5 w-3.5" /> Benefício: Diminui drasticamente a necessidade de esfregar o sofá todo mês, estendendo a vida útil do estofado.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-start hover:border-navy-900/10 transition-all">
              <span className="font-mono text-xl font-black text-white bg-navy-900 h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                07
              </span>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-navy-900 text-sm md:text-base uppercase tracking-wide">Módulo 7: Manual de Sobrevivência de Xixi de Pets</h4>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  O guia rápido para usar quando seu pet urinar no sofá. Ação em menos de 10 minutos para secar e neutralizar sem estragar a espuma interna.
                </p>
                <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 pt-1">
                  <Check className="h-3.5 w-3.5" /> Benefício: Evita que a urina filtre e apodreça a madeira estrutural ou a espuma profunda do móvel.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SEÇÃO 6 - OS SUPER BÔNUS (Mostrando Alto Valor Percebido)
          ======================================================== */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase text-navy-900 tracking-wider">
              Acelere Seus Resultados
            </span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-navy-900 tracking-tight mt-1 leading-snug uppercase">
              Bônus Exclusivos Inclusos na Sua Compra Hoje:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
            {/* Bonus 1 - Interactive Calculator */}
            <div className="flex flex-col h-full">
              <DilutionCalculator />
            </div>

            {/* Bonus 3 - Pode ou Não Pode */}
            <div className="flex flex-col h-full">
              <PodeOuNaoPodeTable />
            </div>
          </div>

          {/* Secondary Bonuses: Checklist + Community group */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8 max-w-4xl mx-auto">
            
            {/* Bonus 2: Checklist */}
            <div className="p-6 bg-emerald-50/50 border-2 border-dashed border-emerald-400/60 rounded-3xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    🎁 BÔNUS 2
                  </span>
                  <span className="text-slate-400 font-mono text-xs line-through">R$ 29,00</span>
                </div>
                <h4 className="font-display font-extrabold text-navy-900 text-base mb-2 uppercase tracking-wide">Checklist Profissional de Execução</h4>
                <p className="text-xs text-[#475569] leading-relaxed mb-4 font-medium">
                  Um roteiro passo a passo resumido em 1 página para você ir marcando enquanto faz o processo de limpeza na sua sala.
                </p>
                <div className="bg-white p-3 rounded-xl border border-slate-100 text-xs text-slate-500 space-y-1 shadow-sm">
                  <p className="font-bold text-navy-900 uppercase tracking-widest text-[9px]">O que inclui:</p>
                  <p className="font-medium text-slate-700">✓ Checklist de preparação do ambiente e proteção do chão</p>
                  <p className="font-medium text-slate-700">✓ Passo a passo cronometrado do tempo de ação química</p>
                  <p className="font-medium text-slate-700">✓ Teste de enxágue rápido com pano úmido</p>
                </div>
              </div>
              <p className="text-[11px] text-emerald-600 font-bold mt-4">✓ Acelerador: Evita esquecer qualquer etapa do processo.</p>
            </div>

            {/* Bonus 4: Community Feed mockup */}
            <div className="flex flex-col h-full bg-slate-50/50 border border-slate-100 rounded-3xl p-4">
              <span className="text-center md:text-left mb-2 text-xs font-bold text-navy-900 uppercase tracking-wider pl-1">[Bônus 4: Comunidade Oficial]</span>
              <CommunityFeed />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SEÇÃO 7 - TRANSFORMAÇÃO (Antes vs Depois Visual)
          ======================================================== */}
      <section className="py-12 bg-navy-950 text-white border-b border-navy-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase text-amber-500 tracking-wider">
              Explore a Transformação Visual Real
            </span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight mt-1 leading-snug uppercase">
              Compare a Realidade do Aluno Antes e Depois do Método:
            </h2>
          </div>

          <div className="mb-12">
            <SofaSlider />
          </div>

          {/* Comparativo textual robusto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8 border-t border-slate-800 pt-8">
            <div className="space-y-3 bg-red-950/25 border border-red-500/30 p-5 rounded-2xl">
              <h4 className="font-display font-extrabold text-red-400 text-base flex items-center gap-2 uppercase tracking-wide">
                <XCircle className="h-5 w-5 text-red-400" />
                Como era ANTES de começar:
              </h4>
              <ul className="space-y-2 text-xs text-slate-200 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Sofá encardido:</strong> Sala pesada com manchas escuras nos braços e assentos.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Medo constante:</strong> Pavor extremo de derramar um copo de suco ou água e manchar o tecido.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Desperdício de dinheiro:</strong> Compras infinitas de receitas caseiras amadoras ineficazes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Vergonha social:</strong> Medo de abrir a casa para amigos sentarem no sofá sujo.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 bg-emerald-950/25 border border-emerald-500/30 p-5 rounded-2xl">
              <h4 className="font-display font-extrabold text-emerald-400 text-base flex items-center gap-2 uppercase tracking-wide">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                Como fica DEPOIS do método:
              </h4>
              <ul className="space-y-2 text-xs text-slate-200 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold">✔</span>
                  <span><strong>Conhecimento real:</strong> Domínio completo dos químicos corretos e PH de lavagem.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold">✔</span>
                  <span><strong>Economia drástica:</strong> Mais de R$ 800 poupados todos os anos em limpezas domésticas.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold">✔</span>
                  <span><strong>Segurança total:</strong> Certeza absoluta de como tirar qualquer mancha sem estragar o sofá.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 font-bold">✔</span>
                  <span><strong>Orgulho do lar:</strong> Sofá sempre limpo, restaurado, extremamente perfumado e convidativo.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SEÇÃO 8 - PARA QUEM É / PARA QUEM NÃO É
          ======================================================== */}
      <section className="py-12 bg-[#F8FAFC] border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 max-w-xl mx-auto">
            <h2 className="font-display font-black text-2xl md:text-3xl text-navy-900 tracking-tight leading-snug uppercase">
              Para quem é recomendado o Método Sofá Sempre Novo®?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Para Quem é */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 space-y-4 shadow-sm hover:border-navy-900/10 transition-all">
              <h4 className="font-display font-extrabold text-emerald-600 text-sm md:text-base uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 stroke-[2.5]" />
                Esse Método é Para Você que:
              </h4>
              <div className="space-y-3 text-xs text-[#475569] leading-relaxed font-medium">
                <p className="flex items-start gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>É dono(a) de casa e cansou de olhar para o sofá sujo todo santo dia.</span>
                </p>
                <p className="flex items-start gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Quer economizar dinheiro real eliminando serviços de empresas de limpeza a seco caras.</span>
                </p>
                <p className="flex items-start gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Possui cães ou gatos que sobem nos estofados e deixam odores marcados.</span>
                </p>
                <p className="flex items-start gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Gosta de manter a casa organizada, higienizada e livre de poeira e ácaros nocivos.</span>
                </p>
                <p className="flex items-start gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Quer aprender uma habilidade prática de manutenção doméstica para a vida inteira.</span>
                </p>
              </div>
            </div>

            {/* Para Quem NÃO é */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 space-y-4 shadow-sm hover:border-navy-900/10 transition-all">
              <h4 className="font-display font-extrabold text-[#EF4444] text-sm md:text-base uppercase tracking-wider flex items-center gap-2">
                <XCircle className="h-5 w-5 stroke-[2.5]" />
                Esse Método NÃO é recomendado se:
              </h4>
              <div className="space-y-3 text-xs text-[#475569] leading-relaxed font-medium">
                <p className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Você prefere continuar gastando R$ 300+ a cada sujeira simples no estofado.</span>
                </p>
                <p className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Não tem disposição de dedicar 30 minutos para passar uma escovinha no sofá.</span>
                </p>
                <p className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Acredita em soluções mágicas que limpam o sofá com o poder do pensamento sem esfregar.</span>
                </p>
                <p className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Acha que receitas caseiras erradas da internet com cloro nunca vão queimar suas fibras de Linho.</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SEÇÃO 9 - GARANTIA (Risco Zero e Segurança Total)
          ======================================================== */}
      <section className="py-12 bg-navy-900 text-white border-b border-navy-950">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="flex justify-center">
            {/* Guarantee Badge */}
            <div className="h-20 w-20 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-display font-black text-xs uppercase tracking-widest flex-col shadow-xl border-4 border-white/20 animate-bounce">
              <span>7 Dias</span>
              <span className="text-[9px] font-bold">Garantia</span>
            </div>
          </div>

          <p className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
            COMPROMISSO ZERO RISCO GIRO CLEAN
          </p>

          <h2 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight leading-snug max-w-xl mx-auto uppercase">
            Garantia Incondicional Blindada de 7 Dias!
          </h2>

          <p className="text-xs md:text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Nós confiamos tanto nas técnicas químicas profissionais explicadas no e-book que damos garantia incondicional de uma semana completa. Baixe o guia, identifique seu tecido e faça as misturas. Se por qualquer motivo você achar que o método não te economizou dinheiro ou não gostou da formatação, envie um e-mail. Nós devolveremos 100% do seu dinheiro investido de volta na mesma hora. Sem burocracia, sem ressentimentos e continuamos amigos.
          </p>

          <div className="pt-2 flex justify-center gap-6 text-[10px] text-slate-300 font-semibold">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              Reembolso Facilitado
            </span>
            <span className="flex items-center gap-1">
              <Lock className="h-4 w-4 text-amber-400" />
              Processamento Criptografado
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          SEÇÃO EXTRA - PROVA SOCIAL DO WHATSAPP (Fidelity Testimonial)
          ======================================================== */}
      <section className="py-12 bg-[#F8FAFC] border-b border-slate-100 relative">
        <span className="absolute top-2 right-4 text-[9px] font-mono text-slate-400 uppercase">
          [Sugestão Visual: Prints Reais de Satisfação]
        </span>
        
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5 flex flex-col items-center">
            <ChatTestimonial />
          </div>

          <div className="md:col-span-7 space-y-4 text-left">
            <div className="flex gap-1 text-amber-500">
              {[1,2,3,4,5].map(star => <Star key={star} className="h-5 w-5 fill-amber-500 text-amber-500" />)}
            </div>
            
            <h3 className="font-display font-black text-2xl md:text-3xl text-navy-900 tracking-tight leading-tight uppercase">
              O Que Dizem os Alunos que Decidiram Economizar na Prática:
            </h3>

            <p className="text-xs md:text-sm text-[#475569] leading-relaxed font-medium">
              O depoimento ao lado é um registro real de satisfação de nossos clientes atendidos pela metodologia da Giro Clean PRO®. Mais de 1.400 alunos já baixaram o método e conseguiram restaurar sofás de linho amarelado, chenille de anos e suedes com odores persistentes.
            </p>

            <blockquote className="border-l-4 border-emerald-500 pl-4 py-1 italic text-xs text-slate-500 font-medium">
              "Meu sofá estava com aquele cheiro de mofo de inverno. Usei a misturinha de R$ 12 do Módulo 4 e a sala parece outra. Até o ar ficou mais puro. Recomendo muito!" <br />
              <strong className="text-navy-900 not-italic font-bold mt-1 block">— Carina Venturini, Curitiba/PR</strong>
            </blockquote>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-2">
              <span className="flex items-center gap-1 font-bold text-navy-900">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                Nota 4.9/5 estrelas de aprovação geral
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SEÇÃO 10 - FAQ COMPLETO (12 Perguntas de Objeções)
          ======================================================== */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase text-navy-900 tracking-wider">
              Dúvidas Frequentes Respondidas
            </span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-navy-900 tracking-tight mt-1 leading-snug uppercase">
              Tem alguma dúvida? Nós respondemos tudo:
            </h2>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* ========================================================
          SEÇÃO 11 - CTA FINAL (Fechamento Emocional Forte)
          ======================================================== */}
      <section className="py-20 text-white relative overflow-hidden">
        {/* Background image: High-end luxury sofa in high-standard ambient with a slightly transparent effect */}
        <img 
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80"
          alt="Estofado e Decoração Fina de Alto Padrão"
          className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        {/* Slightly transparent glass-like blur & dark overlay */}
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px] z-[1]" />
        {/* Decorative subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-[1]" />

        <div className="max-w-3xl mx-auto px-4 text-center space-y-8 relative z-10">
          
          <div className="space-y-3">
            <span className="bg-emerald-500 text-slate-950 font-sans text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
              A Decisão Inteligente Hoje
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-tight uppercase">
              Sua Sala Mais Limpa, Cheirosa e Livre de Ácaros!
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mx-auto pt-2 font-medium">
              Não adie a higienização do seu estofado. Continuar usando receitas perigosas do YouTube ou pagando centenas de reais para terceiros é queimar o dinheiro da sua família à toa.
            </p>
          </div>

          {/* Pricing Highlight Box */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-md mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-mono text-[9px] font-bold px-3 py-1 rounded-bl-xl uppercase">
              Oferta Garantida
            </div>
            
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest font-mono mb-1">
              Método Sofá Sempre Novo®
            </p>
            
            <div className="flex justify-center items-baseline gap-2 my-2">
              <span className="text-slate-500 text-xs line-through">De R$ 97,00</span>
              <span className="text-[11px] text-slate-400">por apenas</span>
              <span className="text-3xl md:text-4xl font-display font-black text-emerald-400">
                R$ {ebookPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <p className="text-[11px] text-slate-300 leading-snug">
              Sem mensalidades ou taxas surpresa. Pagamento único com acesso vitalício imediato.
            </p>

            <div className="border-t border-slate-800 my-4 pt-4 space-y-2 text-left">
              <div className="flex gap-2 items-center text-xs">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-200">E-book Principal Método Sofá Sempre Novo (Download)</span>
              </div>
              <div className="flex gap-2 items-center text-xs">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-200">Bônus 1: Calculadora Interativa de Diluição</span>
              </div>
              <div className="flex gap-2 items-center text-xs">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-200">Bônus 2: Checklist Profissional de Execução</span>
              </div>
              <div className="flex gap-2 items-center text-xs">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-200">Bônus 3: Tabela de Restrição "Pode ou Não Pode"</span>
              </div>
              <div className="flex gap-2 items-center text-xs">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-200">Bônus 4: Comunidade Oficial de Suporte no Telegram</span>
              </div>
            </div>

            <a
              href="https://pay.kiwify.com.br/zIqMrjt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-display font-black text-base md:text-lg py-4 px-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 hover:translate-y-[-2px] active:translate-y-[1px] cursor-pointer border-b-4 border-amber-600 uppercase tracking-wide text-center inline-block"
              id="cta-final-box"
            >
              SIM! QUERO ECONOMIZAR E APRENDER
              <ArrowRight className="h-5 w-5 stroke-[3]" />
            </a>

            <div className="flex items-center justify-center gap-4 mt-4 text-[10px] text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Lock className="h-3.5 w-3.5" />
                SSL Seguro
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Check className="h-3.5 w-3.5" />
                Garantia de 7 Dias
              </span>
            </div>
          </div>


        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-950 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-2">
              <GiroCleanLogo className="h-8 md:h-10" variant="horizontal" lightText={true} />
              <span className="text-amber-500 text-[10px] font-extrabold uppercase bg-white/5 px-1.5 py-0.5 rounded border border-white/10 shrink-0">PRO®</span>
            </div>
            <p className="text-center md:text-right leading-relaxed max-w-md text-slate-400">
              Giro Clean PRO® Limpeza e Higienização de Estofados. Fale com o suporte WhatsApp: (79) 99837-6954.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px]">
            <p className="font-medium">© 2026 Método Sofá Sempre Novo®. Todos os direitos reservados. Giro Clean é uma marca registrada.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-400 font-semibold transition-colors">Políticas de Privacidade</a>
              <a href="#" className="hover:text-emerald-400 font-semibold transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-emerald-400 font-semibold transition-colors">Suporte Técnico</a>
            </div>
          </div>

          <p className="text-[9px] text-slate-500 leading-relaxed text-justify">
            Aviso de Responsabilidade: Os resultados obtidos com o Método Sofá Sempre Novo® podem variar de acordo com o estado prévio de conservação do estofado, a qualidade dos tecidos, a precisão na diluição dos produtos químicos e o cumprimento exaustivo do protocolo descrito no manual. A Giro Clean PRO® e seus desenvolvedores não se responsabilizam por eventuais danos causados por negligência na leitura das advertências ou má aplicação dos produtos.
          </p>
        </div>
      </footer>


      {/* ========================================================
          🛒 SIMULADOR DE CHECKOUT MODAL (INTERAÇÃO PREMIUM)
          ======================================================== */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full relative border border-slate-100 animate-in fade-in zoom-in-95 duration-150 text-slate-800">
            
            {/* Modal Header */}
            <div className="bg-navy-950 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-emerald-400" />
                <span className="font-display font-extrabold text-sm uppercase tracking-wider">
                  Ambiente Seguro de Compra
                </span>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-white font-bold text-lg p-1 cursor-pointer"
                type="button"
              >
                ✕
              </button>
            </div>

            {purchaseSimulated ? (
              // Purchase Success Screen
              <div className="p-6 text-center space-y-4">
                <div className="mx-auto h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 border border-emerald-100">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h4 className="font-display font-black text-xl text-navy-900 leading-tight uppercase">
                  Simulação de Compra Efetuada!
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  Parabéns, <strong className="text-navy-900">{fullName}</strong>! Seu pedido para o e-book <strong className="text-navy-900">Método Sofá Sempre Novo®</strong> foi processado no simulador de vendas.
                </p>
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-2xl text-left text-xs space-y-2">
                  <p className="font-bold text-navy-900 uppercase tracking-wider text-[10px]">Próximos passos reais (fora do simulador):</p>
                  <p className="text-[#475569] font-medium">1. Um e-mail de confirmação seria enviado imediatamente para <strong className="text-navy-900">{email}</strong>.</p>
                  <p className="text-[#475569] font-medium">2. Se pago via PIX, o QR code seria gerado para transferência instantânea.</p>
                  <p className="text-[#475569] font-medium">3. Os links para download direto e acesso ao grupo de Telegram/Facebook seriam liberados na hora.</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="w-full bg-navy-900 hover:bg-navy-950 text-white font-display text-xs font-bold py-3 rounded-xl shadow uppercase tracking-wider cursor-pointer"
                  type="button"
                >
                  Voltar para a Landing Page
                </button>
              </div>
            ) : (
              // Checkout form screen
              <form onSubmit={handleCheckoutSubmit} className="p-5 space-y-4 text-left">
                
                {/* Summary Order Card */}
                <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 flex justify-between items-center text-xs">
                  <div>
                    <p className="font-bold text-navy-900">Método Sofá Sempre Novo®</p>
                    <p className="text-slate-400 text-[10px]">Guia Prático + 4 Super Bônus</p>
                  </div>
                  <span className="font-mono font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 text-xs">
                    R$ {ebookPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy-900 mb-1">
                      Seu Nome Completo:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Silva Santos"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-navy-900 rounded-xl p-2.5 text-xs outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy-900 mb-1">
                      Seu Melhor E-mail (Para Envio do Link):
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: seu-email@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-navy-900 rounded-xl p-2.5 text-xs outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Simulated Payment Methods */}
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-navy-900 mb-1.5">
                    Forma de Pagamento Simulada:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPixSelected(true)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        pixSelected
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-300 font-bold'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      ⚡ PIX (Imediato)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPixSelected(false)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        !pixSelected
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-300 font-bold'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      💳 Cartão Crédito
                    </button>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  ⚠️ <strong>Aviso:</strong> Esta é uma simulação segura de checkout. Nenhum dado financeiro real ou cobrança monetária será efetuada neste ambiente de testes do AI Studio.
                </div>

                {/* Form Action Button */}
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-display font-black text-sm py-3.5 rounded-xl shadow-md transition-colors uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  Confirmar Pedido Simulado
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </button>

              </form>
            )}

          </div>
        </div>
      )}

      {/* Live Purchase Notification Toast */}
      <div 
        className={`fixed bottom-6 left-6 z-50 max-w-[340px] w-[calc(100vw-3rem)] bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-2xl border border-emerald-500/30 shadow-2xl transition-all duration-500 transform ${
          showNotification && notification
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
        }`}
      >
        {notification && (
          <div className="flex items-start gap-3">
            <div className="bg-emerald-500/15 border border-emerald-500/30 p-2 rounded-xl shrink-0 flex items-center justify-center text-emerald-400">
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 justify-between">
                <span className="bg-emerald-500 text-slate-950 font-display text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                  Compra Aprovada
                </span>
                <span className="text-[10px] text-slate-400 font-medium font-mono">
                  {notification.timeAgo}
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                <strong className="text-white font-semibold">{notification.name}</strong> ({notification.city} - {notification.state}) acabou de adquirir o <span className="text-emerald-400 font-bold">Método Sofá Sempre Novo®</span>.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                <span className="bg-slate-800 px-1.5 py-0.5 rounded text-[10px] font-medium border border-slate-700">
                  {notification.method}
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-bold font-mono">R$ {ebookPrice.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
        <div className="bg-slate-950 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-2xl border border-slate-800 opacity-0 scale-95 origin-bottom-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none flex items-center gap-1.5 whitespace-nowrap">
          <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" />
          Fale com o produtor!
        </div>
        <a
          href="https://wa.me/5579998376954?text=Olá!%20Gostaria%20de%20tirar%20algumas%20dúvidas%20sobre%20o%20Método%20Sofá%20Sempre%20Novo."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 h-14 w-14 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center relative cursor-pointer group"
          aria-label="Fale conosco no WhatsApp"
        >
          {/* Pulsing glow ring around the button */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping opacity-75" />
          
          <MessageCircle className="h-7 w-7 fill-slate-950 relative z-10 stroke-[2.25]" />
          
          {/* Tiny notification indicator */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black h-5 w-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce shadow">
            1
          </span>
        </a>
      </div>

    </div>
  );
}
