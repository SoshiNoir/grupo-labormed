'use client';

import PageShell from '@/components/PageShell';
import { CaretDown } from '@phosphor-icons/react';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Quais exames de rotina devo fazer?',
    answer:
      'Os exames de rotina variam conforme idade, sexo e histórico de saúde. Em geral incluem hemograma, glicemia, perfil lipídico, função hepática e renal, além de exames hormonais e urinários. O ideal é seguir orientação médica.',
  },
  {
    question: 'É necessário estar em jejum para fazer os exames?',
    answer:
      'Nem todos os exames exigem jejum, mas alguns sim, como glicemia e perfil lipídico. O período costuma variar entre 8 e 12 horas. Sempre confirme a orientação correta com o laboratório ou com seu médico.',
  },
  {
    question: 'Posso beber água enquanto estou em jejum?',
    answer:
      'Em geral sim. A água costuma ser permitida e pode ajudar na hidratação. Ainda assim, alguns exames específicos podem ter orientações diferentes.',
  },
  {
    question: 'Quais medicamentos devo suspender antes dos exames?',
    answer:
      'Alguns medicamentos interferem nos resultados. Informe tudo o que você usa e siga a orientação do seu médico antes de suspender qualquer medicamento.',
  },
  {
    question: 'Preciso parar de tomar café antes dos exames?',
    answer:
      'Café, chás e outros estimulantes devem ser evitados quando o exame exige jejum. Quando não houver essa exigência, vale confirmar a recomendação específica do laboratório.',
  },
  {
    question: 'Com que frequência devo fazer exames laboratoriais de rotina?',
    answer:
      'A frequência depende de idade, histórico familiar e condições clínicas. Para adultos saudáveis, o acompanhamento anual costuma ser o mais comum.',
  },
  {
    question: 'Posso fazer exame de rotina sem pedido médico?',
    answer:
      'Sim, mas o acompanhamento médico continua importante para interpretar corretamente os resultados e indicar os exames mais adequados ao seu perfil.',
  },
  {
    question: 'O que fazer se um resultado estiver alterado?',
    answer:
      'Evite conclusões isoladas. O melhor caminho é marcar consulta para avaliação médica e, se necessário, complementar a investigação com novos exames.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageShell
      eyebrow='Dúvidas Frequentes'
      title='Orientações claras antes e depois dos exames.'
      description='A página foi redesenhada para ficar coerente com a home, com melhor hierarquia visual e leitura mais confortável.'
      imageSrc='/doc.jpg'
      imageAlt='Informações e dúvidas frequentes'
    >
      <section className='space-y-4'>
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className='overflow-hidden rounded-[1.5rem] border border-white/50 bg-[linear-gradient(180deg,rgba(226,232,240,0.68)_0%,rgba(203,213,225,0.48)_100%)] shadow-[0_20px_50px_-36px_rgba(15,23,42,0.55)] backdrop-blur-xl'
            >
              <button
                onClick={() => toggleFAQ(index)}
                className='flex w-full items-center justify-between gap-4 p-3 md:p-6 text-left'
              >
                <span className='text-lg font-semibold text-slate-950'>
                  {item.question}
                </span>
                <CaretDown
                  size={20}
                  className={`shrink-0 text-emerald-900 transition ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen ? (
                <div className='border-t border-slate-300/70 px-3 py-4 text-sm leading-7 text-slate-700 md:px-6 md:py-5'>
                  {item.answer}
                </div>
              ) : null}
            </article>
          );
        })}
      </section>
    </PageShell>
  );
};

export default FAQ;
