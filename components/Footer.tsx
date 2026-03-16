import { UNIT_LOCATIONS } from '@/constants';
import { Clock, MapPin, Phone } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mt-24 border-t border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.96)_0%,rgba(226,232,240,0.98)_100%)] text-slate-900'>
      <div className='mx-auto max-w-7xl px-4 py-14 md:px-6'>
        <div className='grid gap-6 rounded-[2rem] border border-white/70 bg-white/78 p-8 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.28)] backdrop-blur-xl lg:grid-cols-[1.2fr_0.8fr_0.8fr]'>
          <div>
            <span className='inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900'>
              Grupo Labormed
            </span>
            <div className='mt-5 max-w-sm'>
              <Image
                src='/horizontal.png'
                alt='Logo Labormed'
                width={320}
                height={96}
                className='h-auto w-full object-contain object-left'
              />
            </div>
            <p className='mt-5 max-w-xl text-sm leading-7 text-slate-600'>
              Laboratório de análises clínicas com mais de 37 anos de atuação,
              atendimento humanizado e estrutura preparada para pacientes
              particulares, convênios, empresas e saúde ocupacional.
            </p>
            <div className='mt-6 flex flex-wrap gap-3 text-sm text-slate-600'>
              <span className='rounded-full border border-slate-200 bg-white px-4 py-2'>
                Batatais
              </span>
              <span className='rounded-full border border-slate-200 bg-white px-4 py-2'>
                Altinópolis
              </span>
              <span className='rounded-full border border-slate-200 bg-white px-4 py-2'>
                Resultados online
              </span>
            </div>
          </div>

          <div className='space-y-5 rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900'>
                Acesso rápido
              </p>
              <h2 className='mt-3 text-2xl font-semibold tracking-tight text-slate-950'>
                Navegação essencial
              </h2>
            </div>
            <div className='grid gap-3 text-sm text-slate-600'>
              <Link href='/about' className='rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-emerald-200 hover:text-slate-950'>
                Sobre o Labormed
              </Link>
              <Link href='/units' className='rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-emerald-200 hover:text-slate-950'>
                Unidades e contato
              </Link>
              <Link href='/covenants' className='rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-emerald-200 hover:text-slate-950'>
                Convênios atendidos
              </Link>
              <Link href='/faq' className='rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-emerald-200 hover:text-slate-950'>
                Dúvidas frequentes
              </Link>
            </div>
          </div>

          <div className='space-y-5 rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#8c6b33]'>
                Qualidade e atendimento
              </p>
              <h2 className='mt-3 text-2xl font-semibold tracking-tight text-slate-950'>
                Serviços digitais e certificação
              </h2>
            </div>
            <Link
              href='https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx'
              target='_blank'
              className='flex items-center justify-between rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-100'
            >
              Portal de Resultados
              <span aria-hidden='true'>↗</span>
            </Link>
            <div className='rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4'>
              <p className='text-sm font-semibold text-slate-950'>
                Programa Nacional de Controle de Qualidade
              </p>
              <div className='mt-4 flex min-h-[116px] items-center justify-center rounded-[1.25rem] bg-white p-4'>
                <Image
                  src='/pncq.webp'
                  alt='Certificação PNCQ'
                  width={260}
                  height={96}
                  className='h-auto w-full object-contain'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 grid gap-4 xl:grid-cols-3'>
          {UNIT_LOCATIONS.map((unit) => {
            const accentClass =
              unit.accent === 'gold'
                ? 'text-[#8c6b33] border-[#d2ae6d]/30 bg-[#d2ae6d]/12'
                : 'text-emerald-900 border-emerald-200 bg-emerald-50';

            return (
              <div
                key={unit.id}
                className='rounded-[1.75rem] border border-white/70 bg-white/78 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.2)] backdrop-blur-xl'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='min-w-0'>
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${accentClass}`}
                    >
                      {unit.shortTitle}
                    </span>
                    <h3 className='mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-950'>
                      {unit.title}
                    </h3>
                    <p className='mt-2 text-sm text-slate-500'>{unit.city}</p>
                  </div>
                  <div className='relative h-12 w-12 shrink-0'>
                    <Image
                      src={unit.pinSrc}
                      alt={unit.title}
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>

                <div className='mt-6 space-y-4 text-sm leading-7 text-slate-600'>
                  <div className='flex gap-3'>
                    <MapPin size={18} className='mt-1 shrink-0 text-slate-700' />
                    <p>{unit.address}</p>
                  </div>
                  <div className='flex gap-3'>
                    <Phone size={18} className='mt-1 shrink-0 text-slate-700' />
                    <div>
                      {unit.phones.map((phone) => (
                        <p key={phone}>{phone}</p>
                      ))}
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <Clock size={18} className='mt-1 shrink-0 text-slate-700' />
                    <div>
                      {unit.hours.map((hour) => (
                        <p key={hour}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='mt-8 flex flex-col gap-3 border-t border-slate-300/70 pt-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between'>
          <p>Copyright © 2026 | Labormed Laboratório Clínico | Todos os direitos reservados.</p>
          <div className='flex flex-wrap gap-4'>
            <Link href='/ethics' className='transition hover:text-slate-900'>
              Código de Conduta Ética
            </Link>
            <Link href='/RightsAndDuties' className='transition hover:text-slate-900'>
              Direitos e deveres
            </Link>
            <Link href='/pickup' className='transition hover:text-slate-900'>
              Coleta domiciliar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
