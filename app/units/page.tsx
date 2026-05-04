import SectionHeading from '@/components/SectionHeading';
import WhatsappButton from '@/components/WhatsappButton';
import { UNIT_LOCATIONS } from '@/constants';
import { Clock, MapPin, Phone } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

const Units: React.FC = () => {
  return (
    <div className='space-y-8 pb-8'>
      <section className='rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.55)] backdrop-blur'>
        <SectionHeading
          eyebrow='Unidades'
          title='Atendimento em Batatais e Altinópolis'
          description='As informações abaixo centralizam contato, endereço e horários das unidades ativas.'
        />
      </section>

      <div className='space-y-6'>
        {UNIT_LOCATIONS.map((unit) => (
          <article
            key={unit.id}
            id={unit.id === 'batatais-forum' ? 'batatais' : unit.id}
            className='grid overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.55)] backdrop-blur lg:grid-cols-[1fr_420px]'
          >
            <div className='space-y-6 p-8'>
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800'>
                  {unit.shortTitle}
                </p>
                <h2 className='mt-3 text-3xl font-semibold text-slate-950'>
                  {unit.title}
                </h2>
                <p className='mt-2 text-base text-slate-500'>{unit.city}</p>
              </div>

              <div className='space-y-4 text-sm leading-7 text-slate-600'>
                <div className='flex gap-3'>
                  <MapPin size={22} className='mt-1 shrink-0 text-emerald-900' />
                  <p>{unit.address}</p>
                </div>
                <div className='flex gap-3'>
                  <Phone size={22} className='mt-1 shrink-0 text-emerald-900' />
                  <div>
                    {unit.phones.map((phone) => (
                      <p key={phone}>{phone}</p>
                    ))}
                  </div>
                </div>
                <div className='flex gap-3'>
                  <Clock size={22} className='mt-1 shrink-0 text-emerald-900' />
                  <div>
                    {unit.hours.map((hour) => (
                      <p key={hour}>{hour}</p>
                    ))}
                  </div>
                </div>
              </div>

              <WhatsappButton
                phoneNumber={unit.whatsappNumber}
                label='Falar no WhatsApp'
              />
            </div>

            <div className='min-h-[320px] border-t border-slate-200 lg:border-l lg:border-t-0'>
              <iframe
                src={unit.mapSrc}
                className='h-full min-h-[320px] w-full border-none'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title={unit.title}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Units;
