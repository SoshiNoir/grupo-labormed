'use client';

import { X } from '@phosphor-icons/react';
import { HERO_SLIDES } from '@/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const campaign = HERO_SLIDES[3];

const CampaignPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className='fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6'
      role='dialog'
      aria-modal='true'
      aria-label={campaign.alt}
      onClick={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <div className='relative w-full max-w-[1024px] overflow-visible'>
        <button
          type='button'
          onClick={() => setIsOpen(false)}
          className='absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-slate-950/70 text-white shadow-lg backdrop-blur-md transition hover:bg-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:-right-3 sm:-top-3 sm:h-11 sm:w-11'
          aria-label='Fechar campanha'
          autoFocus
        >
          <X size={22} weight='bold' />
        </button>

        <a
          href={campaign.link}
          target='_blank'
          rel='noopener noreferrer'
          className='relative block max-h-[calc(100dvh-1.5rem)] w-full overflow-hidden rounded-2xl bg-[#f7f2e6] shadow-2xl ring-1 ring-white/20 sm:max-h-[calc(100dvh-3rem)] sm:rounded-[2rem]'
          aria-label={`${campaign.alt}. Abrir conversa no WhatsApp`}
        >
          <Image
            src={campaign.mobileSrc}
            alt={campaign.alt}
            width={1024}
            height={1536}
            priority
            sizes='calc(100vw - 1.5rem)'
            className='max-h-[calc(100dvh-1.5rem)] w-full object-contain sm:hidden'
          />
          <Image
            src={campaign.src}
            alt={campaign.alt}
            width={2151}
            height={731}
            priority
            sizes='min(1024px, calc(100vw - 3rem))'
            className='hidden max-h-[calc(100dvh-3rem)] w-full object-contain sm:block'
          />
        </a>
      </div>
    </div>,
    document.body,
  );
};

export default CampaignPopup;
