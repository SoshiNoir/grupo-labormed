import { UNIT_LOCATIONS } from '@/constants';
import {
  ArrowUpRight,
  CaretRight,
  Clock,
  MapPin,
  Phone,
} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';

const RESULTS_URL = 'https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx';

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
] as const;

const Footer = () => {
  const buildMapsUrl = (address: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const phoneToTel = (phone: string) => `tel:${phone.replace(/\D/g, '')}`;

  return (
    <footer className='mt-24 border-t border-slate-200 bg-slate-50 text-slate-900'>
      <div className='mx-auto max-w-7xl px-6 py-16'>
        {/* Top Section: Branding & Quick Links */}
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
          {/* Brand Column */}
          <div className='lg:col-span-5 space-y-8'>
            <div className='space-y-6'>
              <Image
                src='/horizontal.png'
                alt='Logo Labormed'
                width={240}
                height={70}
                className='h-auto w-48 object-contain'
              />
              <p className='max-w-md text-base leading-relaxed text-slate-600'>
                Liderança em análises clínicas há mais de 37 anos. Compromisso
                com a precisão diagnóstica e o atendimento humanizado em toda a
                nossa rede.
              </p>
            </div>

            <div className='flex flex-wrap gap-2'>
              {[
                'PNCQ Certificado',
                'Atendimento Humanizado',
                'Saúde Ocupacional',
              ].map((stat) => (
                <span
                  key={stat}
                  className='inline-flex items-center rounded-md bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 shadow-sm'
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className='lg:col-span-3'>
            <h4 className='text-sm font-bold uppercase tracking-widest text-slate-400 mb-6'>
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
                        className='opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0'
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditation / Portal Card */}
          <div className='lg:col-span-4'>
            <div className='rounded-2xl bg-emerald-900 p-8 text-white shadow-xl shadow-emerald-900/10 relative overflow-hidden group'>
              <div className='relative z-10'>
                <h4 className='text-emerald-300 text-xs font-bold uppercase tracking-widest mb-2'>
                  Portal do Paciente
                </h4>
                <p className='text-xl font-semibold mb-6'>
                  Acesse seus resultados com segurança.
                </p>
                <Link
                  href={RESULTS_URL}
                  target='_blank'
                  className='inline-flex items-center justify-center w-full rounded-xl bg-white px-6 py-3 text-emerald-900 font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]'
                >
                  Ver Resultados
                </Link>
              </div>
              {/* Decorative Circle */}
              <div className='absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-emerald-800 transition-transform group-hover:scale-150' />
            </div>
          </div>
        </div>

        <hr className='my-16 border-slate-200' />

        {/* Units Section */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {UNIT_LOCATIONS.map((unit) => (
            <div
              key={unit.id}
              className='flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-slate-200 bg-white hover:border-emerald-200 transition-colors'
            >
              <div className='relative h-16 w-16 shrink-0 rounded-xl bg-slate-50 p-2 border border-slate-100'>
                <Image
                  src={unit.pinSrc}
                  alt={unit.title}
                  fill
                  className='object-contain p-2'
                />
              </div>

              <div className='space-y-4 flex-1'>
                <div>
                  <h3 className='text-xl font-bold text-slate-950'>
                    {unit.title}
                  </h3>
                  <p className='text-sm font-medium text-emerald-600 uppercase tracking-tight'>
                    {unit.city}
                  </p>
                </div>

                <div className='grid gap-3 text-sm text-slate-600'>
                  <Link
                    href={buildMapsUrl(unit.address)}
                    target='_blank'
                    className='flex gap-3 hover:text-emerald-700 transition-colors'
                  >
                    <MapPin size={18} className='shrink-0 text-slate-400' />
                    <span>{unit.address}</span>
                  </Link>

                  <div className='flex gap-3'>
                    <Phone size={18} className='shrink-0 text-slate-400' />
                    <div className='flex flex-wrap gap-x-4'>
                      {unit.phones.map((phone) => (
                        <a
                          key={phone}
                          href={phoneToTel(phone)}
                          className='hover:text-emerald-700 font-medium'
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className='flex gap-3'>
                    <Clock size={18} className='shrink-0 text-slate-400' />
                    <div className='space-y-1'>
                      {unit.hours.map((hour) => (
                        <p key={hour} className='text-xs'>
                          {hour}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className='mt-16 flex flex-col gap-6 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between'>
          <p className='text-xs text-slate-500 font-medium'>
            © 2026 Labormed Laboratório Clínico. CNPJ: 00.000.000/0001-00
          </p>
          <div className='flex flex-wrap gap-6'>
            {['Ethics', 'RightsAndDuties', 'pickup'].map((path) => (
              <Link
                key={path}
                href={`/${path}`}
                className='text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-emerald-600 transition-colors'
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
