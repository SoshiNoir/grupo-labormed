'use client';

import { SmileyMeh, SmileySad, SmileyWink } from '@phosphor-icons/react';
import React from 'react';
import SectionHeading from './SectionHeading';

interface SatisfactionProps {
  onSelectRating: (rating: '1' | '3' | '5') => void;
}

const moods = [
  {
    value: '1' as const,
    label: 'Precisa melhorar',
    description: 'Não fiquei satisfeito',
    icon: SmileySad,
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'hover:border-rose-200',
  },
  {
    value: '3' as const,
    label: 'Foi ok',
    description: 'Experiência neutra',
    icon: SmileyMeh,
    color: 'text-[#8c6b33]',
    bg: 'bg-[#fdf8ec]',
    border: 'hover:border-[#d2ae6d]/30',
  },
  {
    value: '5' as const,
    label: 'Foi ótimo',
    description: 'Atendimento excelente',
    icon: SmileyWink,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'hover:border-emerald-200',
  },
];

const Satisfaction: React.FC<SatisfactionProps> = ({ onSelectRating }) => {
  return (
    <section className='mt-32 space-y-12'>
      <div className='flex flex-col items-center text-center'>
        <SectionHeading
          eyebrow='Feedback'
          title='Sua opinião é fundamental'
          description='Conte como foi sua experiência no Labormed. Sua avaliação direta nos ajuda a manter a excelência no atendimento.'
        />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-slate-50 rounded-[2.5rem] border border-slate-200 p-4 md:p-8'>
        {/* Left Info Panel */}
        <div className='lg:col-span-4 flex flex-col justify-center p-6 md:p-8 space-y-6'>
          <div className='space-y-4'>
            <span className='inline-flex px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-400'>
              Pesquisa Rápida
            </span>
            <h3 className='text-3xl font-bold text-slate-900 leading-tight'>
              Como foi o seu atendimento?
            </h3>
            <p className='text-slate-500 leading-relaxed'>
              Clique em um dos humores ao lado para iniciar sua avaliação
              detalhada.
            </p>
          </div>
        </div>

        {/* Right Interaction Panel */}
        <div className='lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {moods.map((mood) => {
            const Icon = mood.icon;

            return (
              <button
                key={mood.label}
                type='button'
                onClick={() => onSelectRating(mood.value)}
                className={`group flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-transparent shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-2 ${mood.border}`}
              >
                <div
                  className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-active:scale-90 ${mood.bg} ${mood.color}`}
                >
                  <Icon size={48} weight='duotone' />
                </div>

                <div className='text-center'>
                  <h4 className='text-lg font-bold text-slate-900 group-hover:text-slate-950'>
                    {mood.label}
                  </h4>
                  <p className='mt-1 text-sm text-slate-400 font-medium'>
                    {mood.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Satisfaction;
