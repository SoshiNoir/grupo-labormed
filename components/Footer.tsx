import { UNIT_LOCATIONS, RESULTS_URL } from '@/constants';
import {
  ArrowUpRight,
  CaretRight,
  InstagramLogo,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';
import UnitInfoCard from './UnitInfoCard';

type QuickAccessLink = {
  href: string;
  label: string;
  external?: boolean;
  highlight?: boolean;
};

const quickAccessLinks: QuickAccessLink[] = [
  { href: '/about', label: 'Sobre o Labormed' },
  { href: '/units#batatais', label: 'Batatais' },
  { href: '/units#altinopolis', label: 'Altinópolis' },
  {
    href: RESULTS_URL,
    label: 'Resultados Online',
    external: true,
    highlight: true,
  },
];

const Footer = () => {
  const buildMapsUrl = (address: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className='mt-24 border-t border-slate-200 bg-slate-50 text-slate-900'>
      <div className='mx-auto max-w-7xl px-0 py-12 sm:px-6 sm:py-16'>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-12'>
          <div className='space-y-8 lg:col-span-5'>
            <div className='space-y-6'>
              <Image
                src='/horizontal.png'
                alt='Logo Labormed'
                width={240}
                height={70}
                className='h-auto w-48 object-contain'
              />
              <p className='max-w-md text-base leading-relaxed text-slate-600'>
                Liderança em análises clínicas há mais de 40 anos. Compromisso
                com a precisão diagnóstica e o atendimento humanizado em toda a
                nossa rede.
              </p>
            </div>

            <div className='flex flex-wrap gap-2'>
              {['PNCQ Certificado', 'Atendimento Humanizado', 'Saúde Ocupacional'].map((stat) => (
                <span
                  key={stat}
                  className='inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500 shadow-sm'
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>

          <div className='lg:col-span-3'>
            <h4 className='mb-6 text-sm font-bold uppercase tracking-widest text-slate-400'>
              Navegação
            </h4>
            <ul className='space-y-4'>
              {quickAccessLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-2 text-base font-medium transition-colors ${
                      link.highlight
                        ? 'text-emerald-600 hover:text-emerald-700'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {link.label}
                    {link.external ? (
                      <ArrowUpRight size={14} />
                    ) : (
                      <CaretRight
                        size={14}
                        className='-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100'
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='mt-6 border-t border-slate-200 pt-5'>
              <p className='text-xs font-bold uppercase tracking-widest text-slate-400'>
                Redes sociais
              </p>
              <div className='mt-3 flex items-center gap-3'>
                <Link
                  href='https://www.instagram.com/labor_med/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-colors hover:text-emerald-600'
                >
                  <InstagramLogo size={18} weight='bold' />
                </Link>
                <Link
                  href='https://www.youtube.com/@Labor_med/videos'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-colors hover:text-emerald-600'
                >
                  <YoutubeLogo size={18} weight='bold' />
                </Link>
              </div>
            </div>
          </div>

          <div className='lg:col-span-4'>
            <div className='group relative overflow-hidden rounded-2xl bg-emerald-900 p-8 text-white shadow-xl shadow-emerald-900/10'>
              <div className='relative z-10'>
                <h4 className='mb-2 text-xs font-bold uppercase tracking-widest text-emerald-300'>
                  Portal do Paciente
                </h4>
                <p className='mb-6 text-xl font-semibold'>
                  Acesse seus resultados com segurança.
                </p>
                <Link
                  href={RESULTS_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-emerald-900 transition-transform hover:scale-[1.02] active:scale-[0.98]'
                >
                  Ver Resultados
                </Link>
              </div>
              <div className='absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-emerald-800 transition-transform group-hover:scale-150' />
            </div>
          </div>
        </div>

        <hr className='my-10 border-slate-200 sm:my-12' />

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {UNIT_LOCATIONS.map((unit) => (
            <UnitInfoCard
              key={unit.id}
              unit={unit}
              mapHref={buildMapsUrl(unit.address)}
            />
          ))}
        </div>

        <div className='mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-6 md:pt-8'>
          <p className='text-xs font-medium text-slate-500'>
            Â© 2026 Labormed Laboratório Clínico. CNPJ: 00.000.000/0001-00
          </p>
          <div className='flex flex-nowrap gap-4 overflow-x-auto whitespace-nowrap md:gap-6'>
            {['Ethics', 'RightsAndDuties', 'pickup'].map((path) => (
              <Link
                key={path}
                href={`/${path}`}
                className='text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-600'
              >
                {path === 'pickup' ? 'Coleta Domiciliar' : path}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
