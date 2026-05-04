import { QUICK_LINKS } from '@/constants';
import { CaretRight } from '@phosphor-icons/react';
import Link from 'next/link';
import SectionHeading from './SectionHeading';

const Doubts = () => {
  return (
    <section className='mt-32 space-y-12'>
      <SectionHeading
        eyebrow='Informações'
        title='O que você precisa saber'
        description='Orientação completa sobre preparos, direitos e coleta.'
      />
      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
        {QUICK_LINKS.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className='group flex flex-col justify-between p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1'
          >
            <div className='space-y-4'>
              <h3 className='text-xl font-bold text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors'>
                {card.title}
              </h3>
              <p className='text-sm text-slate-500 leading-relaxed'>
                {card.description}
              </p>
            </div>
            <div className='mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors'>
              Ver Detalhes <CaretRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Doubts;
