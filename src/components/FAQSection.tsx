/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 'q1',
      question: '1. Preciso de alguma máquina extratora profissional cara para aplicar o método?',
      answer: 'Não! O Método foi desenhado para ser executado com itens comuns que você já tem em casa ou compra no mercado do bairro por menos de R$ 15: borrifador comum manual, escovinha macia e panos de microfibra. Caso você queira alugar uma extratora no futuro, ensinamos o passo a passo, mas ela NÃO é necessária para obter resultados profissionais de limpeza.'
    },
    {
      id: 'q2',
      question: '2. Como eu vou receber o produto e em quanto tempo?',
      answer: 'O envio é imediato! Assim que seu pagamento for aprovado (via PIX cai na hora, cartão de crédito em até 5 minutos), você receberá um e-mail com as instruções de download e acesso. Você baixa o e-book no celular, tablet ou computador e já pode começar hoje mesmo.'
    },
    {
      id: 'q3',
      question: '3. Tenho medo de usar o produto errado e queimar ou manchar meu sofá. O método é seguro?',
      answer: 'Absolutamente seguro! Nós começamos ensinando você a identificar o tecido do seu estofado (Suede, Chenille, Linho, Couro, Velvet, etc.) através da etiqueta oculta ou de um teste físico rápido de toque. Depois, fornecemos a tabela de diluições exatas e a Tabela "Pode ou Não Pode". Você saberá exatamente qual produto é seguro para o seu tipo específico de sofá.'
    },
    {
      id: 'q4',
      question: '4. Quanto vou gastar com os produtos de higienização recomendados?',
      answer: 'Muito pouco! Os produtos profissionais de alta concentração sugeridos custam entre R$ 25 e R$ 40 o frasco concentrado. Como a diluição é altíssima (ensinamos como fazer isso render na calculadora e nas tabelas), um único frasco de produto rende de 15 a 20 higienizações completas. O custo por limpeza cai para menos de R$ 2,00!'
    },
    {
      id: 'q5',
      question: '5. Funciona para eliminar cheiro forte de urina de gato ou cachorro?',
      answer: 'Sim! No Módulo 6, temos um protocolo específico focado em "Xixi de Pet e Odores Crônicos". Explicamos como quebrar as moléculas de ureia usando neutralizadores corretos ao invés de receitas caseiras da internet que apenas mascaram e pioram o cheiro de azedo após secarem.'
    },
    {
      id: 'q6',
      question: '6. Consigo remover manchas antigas (café, vinho, molho, sangue ou canetinha)?',
      answer: 'Sim! Dedicamos o Módulo 5 inteiramente à remoção de manchas difíceis e comuns. Você aprenderá a ação química ideal para soltar cada tipo de pigmento sem desbotar o tecido, agindo de forma cirúrgica e segura.'
    },
    {
      id: 'q7',
      question: '7. Sou homem/mulher e não tenho experiência nenhuma com limpeza. Consigo aplicar?',
      answer: 'Perfeitamente. O Método Sofá Sempre Novo® foi estruturado com uma didática simples, direta e livre de termos técnicos complexos. Cada etapa é ilustrada com indicações visuais, passo a passo de movimentos, tempo de ação dos produtos e instruções de enxágue. Qualquer pessoa consegue aplicar do absoluto zero.'
    },
    {
      id: 'q8',
      question: '8. Posso usar as receitas de internet com vinagre puro e bicarbonato que vi no YouTube?',
      answer: 'Cuidado! Receitas que misturam vinagre (ácido) e bicarbonato (alcalino) causam uma reação de efervescência que anula o poder de limpeza de ambos, gerando apenas água salgada gaseificada. Pior: o bicarbonato em pó não aspirado corretamente se cristaliza nas fibras, quebrando-as e deixando o sofá áspero, endurecido e manchado de cinza. Nosso método te ensina a ciência real por trás dos produtos de higienização profissional.'
    },
    {
      id: 'q9',
      question: '9. Serve para sofás impermeabilizados?',
      answer: 'Sim! Ensinamos como realizar a higienização de manutenção em sofás que já possuem impermeabilização sem remover a película protetora do tecido. Também mostramos como identificar se a sua impermeabilização ainda está ativa ou se precisa de renovação.'
    },
    {
      id: 'q10',
      question: '10. O e-book tem suporte se eu tiver alguma dúvida sobre meu tecido?',
      answer: 'Sim! Além do material completo, você receberá o convite para entrar no nosso Grupo Oficial de Alunos (Bônus 4). Lá dentro você pode postar fotos do seu sofá, tirar dúvidas com a comunidade e receber dicas extras direto da Giro Clean PRO®!'
    },
    {
      id: 'q11',
      question: '11. Qual é a garantia que eu tenho ao comprar?',
      answer: 'Garantia Incondicional de 7 dias! Se você comprar, ler o método e achar que as técnicas não servem para o seu sofá, ou simplesmente não gostar da formatação, basta enviar um e-mail ou solicitar o reembolso direto na plataforma de pagamento. Nós devolveremos 100% do seu dinheiro sem perguntas ou burocracia.'
    },
    {
      id: 'q12',
      question: '12. O pagamento é seguro?',
      answer: 'Sim, 100% seguro. Suas transações são intermediadas e processadas pelas maiores e mais seguras plataformas de infoprodutos do Brasil (com criptografia SSL de nível bancário). Seus dados cadastrais e de cartão de crédito estarão completamente protegidos.'
    }
  ];

  const toggleOpen = (id: string) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleOpen(item.id)}
              className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
              type="button"
              id={`faq-btn-${item.id}`}
            >
              <span className="font-sans font-bold text-slate-900 text-sm md:text-base leading-snug">
                {item.question}
              </span>
              <span className="text-blue-500 bg-blue-50 p-1.5 rounded-lg shrink-0">
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 border-t border-slate-50 bg-slate-50/50">
                <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
