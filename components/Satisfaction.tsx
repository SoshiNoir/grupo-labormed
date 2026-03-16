'use client';

import {
  SmileyMeh,
  SmileySad,
  SmileyWink,
} from '@phosphor-icons/react';
import React from 'react';
import SectionHeading from './SectionHeading';

interface SatisfactionProps {
  onSelectRating: (rating: '1' | '3' | '5') => void;
}

const moods = [
  {
    value: '1' as const,
    label: 'Precisa melhorar',
    description: 'Paciente não saiu satisfeito.',
    icon: SmileySad,
    accent: 'from-rose-500/20 to-rose-100/40 text-rose-600',
  },
  {
    value: '3' as const,
    label: 'Foi ok',
    description: 'Experiência neutra, sem destaque.',
    icon: SmileyMeh,
    accent: 'from-[#d2ae6d]/20 to-[#f4e6c4]/40 text-[#8c6b33]',
  },
  {
    value: '5' as const,
    label: 'Foi ótimo',
    description: 'Atendimento resolveu bem.',
    icon: SmileyWink,
    accent: 'from-emerald-500/20 to-emerald-100/40 text-emerald-700',
  },
];

const Satisfaction: React.FC<SatisfactionProps> = ({ onSelectRating }) => {
  return (
    <section className='mt-20 space-y-8'>
      <SectionHeading
        eyebrow='Experiência'
        title='Sua opinião ajuda a melhorar nosso atendimento'
        description='Conte como foi sua experiência no Labormed e contribua para a melhoria contínua dos nossos serviços.'
      />
      <div className='grid w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/76 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.55)] backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr]'>
        <div className='flex flex-col justify-between gap-6 p-8 text-left md:p-10'>
          <div>
            <span className='inline-flex rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900'>
              Sua opinião
            </span>
            <h3 className='mt-5 text-3xl font-semibold tracking-tight text-slate-950'>
              Como foi o seu atendimento no Labormed?
            </h3>
            <p className='mt-4 max-w-xl text-base leading-7 text-slate-600'>
              Escolha a opção que melhor representa sua experiência. A pesquisa
              será aberta com a nota correspondente já selecionada.
            </p>
          </div>
        </div>

        <div className='grid gap-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(241,245,249,0.95)_100%)] p-6 md:grid-cols-3 md:p-8'>
          {moods.map((mood) => {
            const Icon = mood.icon;

            return (
              <button
                key={mood.label}
                type='button'
                onClick={() => onSelectRating(mood.value)}
                className={`flex min-h-[210px] flex-col items-center justify-center rounded-[1.5rem] border border-white/70 bg-gradient-to-b ${mood.accent} px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition duration-200 hover:-translate-y-1`}
              >
                <div className='flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/70 shadow-sm backdrop-blur'>
                  <Icon size={42} weight='fill' />
                </div>
                <h4 className='mt-5 text-xl font-semibold text-slate-950'>
                  {mood.label}
                </h4>
                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  {mood.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Satisfaction;
