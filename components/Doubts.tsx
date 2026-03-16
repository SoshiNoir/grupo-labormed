import { QUICK_LINKS } from '@/constants';
import Link from 'next/link';
import SectionHeading from './SectionHeading';

const themeClasses = [
  'bg-emerald-950 text-white',
  'bg-[#d2ae6d] text-white',
  'bg-emerald-900 text-white',
  'bg-green-90 text-white',
];

const Doubts = () => {
  return (
    <section className='mt-20 space-y-8'>
      <SectionHeading
        eyebrow='Acesso rápido'
        title='Informações importantes para pacientes e responsáveis'
        description='Acesse orientações sobre preparo, coleta, direitos do paciente e conduta institucional em um só lugar.'
      />
      <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
        {QUICK_LINKS.map((card, index) => (
          <Link
            key={card.id}
            href={card.href}
            className={`group flex min-h-[230px] flex-col justify-between rounded-[1.75rem] p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.85)] transition duration-300 hover:-translate-y-1 ${themeClasses[index % themeClasses.length]}`}
          >
            <span className='text-sm font-semibold uppercase tracking-[0.24em] text-white/70'>
              Guia
            </span>
            <div className='space-y-3'>
              <h3 className='text-2xl font-semibold leading-tight'>{card.title}</h3>
              <p className='text-sm leading-6 text-white/80'>{card.description}</p>
            </div>
            <span className='text-sm font-semibold tracking-wide text-white/90 transition group-hover:translate-x-1'>
              Abrir página
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Doubts;
