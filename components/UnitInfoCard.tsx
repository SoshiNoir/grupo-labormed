import { Clock, MapPin, Phone } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export type UnitInfoCardData = {
  id: string;
  title: string;
  city: string;
  pinSrc: string;
  address: string;
  phones: string[];
  hours: string[];
};

type UnitInfoCardProps = {
  unit: UnitInfoCardData;
  mapHref?: string;
  className?: string;
  footerSlot?: ReactNode;
};

const UnitInfoCard = ({ unit, mapHref, className = '', footerSlot }: UnitInfoCardProps) => {
  const content = (
    <div
      className={`grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_-36px_rgba(15,23,42,0.55)] transition-colors hover:border-emerald-200 ${className}`}
    >
      <div className='flex flex-col gap-6 p-6 sm:flex-row'>
        <div className='relative h-16 w-16 shrink-0 rounded-xl border border-slate-100 bg-slate-50 p-2'>
          <Image
            src={unit.pinSrc}
            alt={unit.title}
            fill
            className='object-contain p-2'
          />
        </div>

        <div className='space-y-4 flex-1'>
          <div>
            <h3 className='text-xl font-bold text-slate-950'>{unit.title}</h3>
            <p className='text-sm font-medium uppercase tracking-tight text-emerald-600'>
              {unit.city}
            </p>
          </div>

          <div className='grid gap-3 text-sm text-slate-600'>
            {mapHref ? (
              <Link
                href={mapHref}
                target='_blank'
                rel='noopener noreferrer'
                className='flex gap-3 transition-colors hover:text-emerald-700'
              >
                <MapPin size={18} className='shrink-0 text-slate-400' />
                <span>{unit.address}</span>
              </Link>
            ) : (
              <div className='flex gap-3'>
                <MapPin size={18} className='shrink-0 text-slate-400' />
                <span>{unit.address}</span>
              </div>
            )}

            <div className='flex gap-3'>
              <Phone size={18} className='shrink-0 text-slate-400' />
              <div className='flex flex-wrap gap-x-4'>
                {unit.phones.map((phone) => (
                  <span key={phone} className='font-medium text-slate-600'>
                    {phone}
                  </span>
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

      {footerSlot ? <div className='border-t border-slate-100 p-6'>{footerSlot}</div> : null}
    </div>
  );

  return content;
};

export default UnitInfoCard;
