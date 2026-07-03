/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Users, Shield, MessageSquare, ThumbsUp, Sparkles, UserCheck } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  avatar: string;
  role: 'Membro' | 'Moderador' | 'Aluno VIP';
  time: string;
  text: string;
  sofaStatus?: string;
  likes: number;
  commentsCount: number;
  hasLiked?: boolean;
}

export default function CommunityFeed() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Aline Schmidt',
      avatar: 'AS',
      role: 'Aluno VIP',
      time: 'Há 2 horas',
      text: 'Gente, estou chocada com a diluição da Tabela de Diluições! Fiz o teste no meu sofá de Suede amassado que estava imundo por causa do meu Golden Retriever e o cheiro de xixi sumiu por completo! Olha, economizei R$ 280 da higienização que ia pagar hoje. Melhor investimento que fiz esse ano!',
      sofaStatus: '✨ Suede Limpo & Sem Cheiro de Pet',
      likes: 42,
      commentsCount: 7,
      hasLiked: false,
    },
    {
      id: 2,
      author: 'Roberto Alencar',
      avatar: 'RA',
      role: 'Aluno VIP',
      time: 'Há 5 horas',
      text: 'Minha esposa estava querendo jogar nosso sofá de chenille fora de tão encardido que estava. Usei o Método do Módulo 4 com o borrifador comum de R$ 15 e o resultado ficou profissional. Tecido macio e sem aquelas auréolas de água amareladas. Economizamos mais de R$ 1.500 de comprar outro sofá!',
      sofaStatus: '🛋️ Chenille Higienizado com Sucesso',
      likes: 29,
      commentsCount: 4,
      hasLiked: false,
    }
  ]);

  const toggleLike = (id: number) => {
    setPosts(prev => prev.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.hasLiked ? post.likes - 1 : post.likes + 1,
          hasLiked: !post.hasLiked
        };
      }
      return post;
    }));
  };

  return (
    <div className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-3xl p-5 md:p-6 shadow-xl max-w-xl mx-auto font-sans">
      {/* Header Info */}
      <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2.5 rounded-xl text-white">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-sans font-extrabold text-sm text-white flex items-center gap-1">
              Comunidade Oficial
              <span className="bg-blue-500/10 text-blue-400 text-[9px] font-bold px-2 py-0.5 rounded-full border border-blue-400/20">
                1.428 Membros
              </span>
            </h4>
            <p className="text-[11px] text-slate-400">Grupo de Suporte & Troca de Experiências</p>
          </div>
        </div>
        
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-bold">
          <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
          84 Ativos Agora
        </span>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed mb-5">
        Ao adquirir o e-book, você ganha acesso imediato ao nosso <strong>grupo exclusivo no Facebook e Telegram</strong>. Veja o que os alunos estão postando lá dentro em tempo real:
      </p>

      {/* Feed Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-slate-900 border border-slate-800/80 rounded-2xl p-4 space-y-3">
            {/* Post Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-slate-800 text-blue-400 font-extrabold text-xs flex items-center justify-center border border-slate-700">
                  {post.avatar}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                    {post.author}
                    <span className="bg-blue-500/10 text-blue-300 text-[8px] font-bold px-1.5 py-0.2 rounded border border-blue-400/10 uppercase font-mono">
                      {post.role}
                    </span>
                  </h5>
                  <p className="text-[9px] text-slate-500">{post.time}</p>
                </div>
              </div>
              
              {post.sofaStatus && (
                <span className="text-[9px] bg-slate-950 text-slate-300 border border-slate-800 px-2 py-1 rounded-md font-semibold">
                  {post.sofaStatus}
                </span>
              )}
            </div>

            {/* Post Body */}
            <p className="text-xs text-slate-300 leading-relaxed italic">
              "{post.text}"
            </p>

            {/* Post Footer Actions */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              <button 
                onClick={() => toggleLike(post.id)}
                className={`flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors ${post.hasLiked ? 'text-blue-400 font-bold' : ''}`}
                type="button"
              >
                <ThumbsUp className="h-3.5 w-3.5" />
                <span>{post.likes}</span>
              </button>
              
              <div className="flex items-center gap-1.5">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>{post.commentsCount} comentários</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Proof Box */}
      <div className="bg-blue-900/30 border border-blue-500/20 rounded-2xl p-3 mt-4 text-center">
        <p className="text-[11px] text-blue-300 leading-relaxed font-semibold flex items-center justify-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-yellow-400 animate-spin" />
          Acesso vitalício incluso sem mensalidades ou taxas extras.
        </p>
      </div>
    </div>
  );
}
