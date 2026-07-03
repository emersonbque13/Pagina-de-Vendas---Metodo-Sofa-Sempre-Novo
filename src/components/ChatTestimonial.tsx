/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Video, MoreVertical, Send, CheckCheck, Smile } from 'lucide-react';

export default function ChatTestimonial() {
  const [messages, setMessages] = useState<Array<{
    id: number;
    sender: 'you' | 'customer';
    text: string;
    time: string;
    status?: 'sent' | 'received' | 'read';
  }>>([]);

  const [typing, setTyping] = useState(false);

  // Staggered typing effect simulating active chat on mount
  useEffect(() => {
    const chatData = [
      {
        id: 1,
        sender: 'you' as const,
        text: 'E se possível, poderia deixar aqui mesmo na conversa um depoimento curto do que achou do serviço do Método Sofá Sempre Novo®, para eu divulgar com os alunos?',
        time: '07:28',
        status: 'read' as const,
      },
      {
        id: 2,
        sender: 'customer' as const,
        text: 'Gostaria de registrar minha satisfação com o excelente serviço prestado! O atendimento foi realizado com muita competência, responsabilidade, pontualidade e atenção aos detalhes. Excelente profissional!',
        time: '07:31',
      },
      {
        id: 3,
        sender: 'customer' as const,
        text: 'Bom dia! Meu sofá ficou maravilhoso, parecendo que acabou de sair da loja. Muito cheiroso mesmo!',
        time: '07:31',
      },
      {
        id: 4,
        sender: 'you' as const,
        text: 'Bom dia! Muito obrigado por registrar sua opinião! Ficamos muito felizes em ajudar! 🙏🙌',
        time: '07:37',
        status: 'read' as const,
      }
    ];

    // load message 1 immediately
    setMessages([chatData[0]]);

    // customer starts typing and replies
    const t1 = setTimeout(() => {
      setTyping(true);
    }, 1500);

    const t2 = setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, chatData[1]]);
    }, 3800);

    const t3 = setTimeout(() => {
      setTyping(true);
    }, 4800);

    const t4 = setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, chatData[2]]);
    }, 6500);

    const t5 = setTimeout(() => {
      setMessages(prev => [...prev, chatData[3]]);
    }, 8000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto bg-[#0b141a] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans">
      {/* WhatsApp Header */}
      <div className="bg-[#075e54] p-3 flex justify-between items-center text-white">
        <div className="flex items-center gap-2.5">
          {/* Mock customer profile pic */}
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-slate-300 overflow-hidden flex items-center justify-center text-slate-800 font-extrabold text-sm border border-white/20">
              MC
            </div>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-[#075e54]" />
          </div>

          <div>
            <h5 className="text-xs font-bold leading-tight">Mariana Costa (Cliente)</h5>
            <span className="text-[10px] text-green-300 leading-none">Online</span>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-4 text-white/90">
          <Video className="h-4 w-4 cursor-pointer hover:text-white" />
          <Phone className="h-4 w-4 cursor-pointer hover:text-white" />
          <MoreVertical className="h-4 w-4 cursor-pointer hover:text-white" />
        </div>
      </div>

      {/* Chat Background with classic pattern effect */}
      <div 
        className="h-96 p-4 overflow-y-auto space-y-3 flex flex-col justify-end bg-slate-900"
        style={{
          backgroundImage: `radial-gradient(#ffffff08 1.5px, transparent 1.5px)`,
          backgroundSize: '15px 15px',
        }}
      >
        {/* Info Box */}
        <div className="mx-auto bg-slate-950/80 border border-slate-800 rounded-lg py-1 px-3 text-[10px] text-slate-400 text-center uppercase tracking-wider font-mono">
          Criptografia de Ponta a Ponta
        </div>

        {messages.map((msg) => {
          const isYou = msg.sender === 'you';
          return (
            <div 
              key={msg.id}
              className={`flex flex-col max-w-[85%] rounded-2xl p-2.5 text-xs shadow ${
                isYou 
                  ? 'bg-[#005c4b] text-white self-end rounded-tr-none' 
                  : 'bg-[#202c33] text-slate-100 self-start rounded-tl-none'
              }`}
            >
              <p className="leading-relaxed break-words">{msg.text}</p>
              
              <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-300 self-end">
                <span>{msg.time}</span>
                {isYou && (
                  <CheckCheck className={`h-3.5 w-3.5 ${msg.status === 'read' ? 'text-sky-400' : 'text-slate-400'}`} />
                )}
              </div>
            </div>
          );
        })}

        {/* Typing state */}
        {typing && (
          <div className="bg-[#202c33] text-slate-400 rounded-2xl p-2 px-3 text-xs self-start rounded-tl-none flex items-center gap-1">
            <span className="font-semibold italic">Digitando</span>
            <span className="inline-flex gap-0.5">
              <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          </div>
        )}
      </div>

      {/* WhatsApp Input Bar */}
      <div className="bg-[#1f2c34] p-2 flex items-center gap-2">
        <Smile className="h-5 w-5 text-slate-400 cursor-pointer" />
        <div className="bg-[#2a3942] rounded-xl flex-1 px-3 py-1.5 text-xs text-slate-400 border border-slate-700/50">
          Mensagem...
        </div>
        <div className="h-8 w-8 rounded-full bg-[#00a884] flex items-center justify-center text-white cursor-pointer hover:bg-[#00bc93] transition-colors">
          <Send className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}
