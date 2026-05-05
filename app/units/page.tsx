import PageShell from '@/components/PageShell';
import UnitInfoCard from '@/components/UnitInfoCard';
import WhatsappButton from '@/components/WhatsappButton';
import { UNIT_LOCATIONS } from '@/constants';
import React from 'react';

const Units: React.FC = () => {
  return (
    <PageShell
      eyebrow='Unidades e Contato'
      title='Atendimento em Batatais e Altinópolis'
      description='As informações abaixo centralizam contato, endereço e horários das unidades ativas.'
    >
      <div className='space-y-8'>
        <div className='space-y-6'>
          {UNIT_LOCATIONS.map((unit) => (
            <article
              key={unit.id}
              id={unit.id === 'batatais-forum' ? 'batatais' : unit.id}
              className='grid gap-0 overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.55)] backdrop-blur lg:grid-cols-[1fr_420px]'
            >
              <UnitInfoCard
                unit={unit}
                mapHref={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unit.address)}`}
                className='rounded-none border-0 shadow-none hover:border-0'
                footerSlot={
                  <WhatsappButton
                    phoneNumber={unit.whatsappNumber}
                    label='Falar no WhatsApp'
                  />
                }
              />

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
    </PageShell>
  );
};

export default Units;
