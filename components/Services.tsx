import { SERVICE_CARDS, buildWhatsappUrl } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionHeading from './SectionHeading';

const ImageGallery = () => {
  return (
    <section className='space-y-8'>
      <SectionHeading
        eyebrow='Especialidades'
        title='Exames mais procurados'
        description='Selecione o exame desejado e fale com a equipe pelo WhatsApp para receber orientação rápida.'
      />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3'>
        {SERVICE_CARDS.map((image) => (
          <Link
            key={image.id}
            href={buildWhatsappUrl(image.whatsappMessage)}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={image.title}
            className='group mx-auto w-full max-w-[360px] overflow-hidden rounded-[2.25rem] border border-white/25 bg-white shadow-[0_18px_42px_-34px_rgba(15,23,42,0.24)] transition-transform duration-300 hover:-translate-y-0.5 sm:max-w-none sm:rounded-[2.5rem]'
          >
            <div className='relative aspect-[887/1774] w-full overflow-hidden rounded-[inherit] bg-white'>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw'
                className='rounded-[inherit] object-cover transition duration-500 group-hover:scale-[1.03]'
              />
            </div>
            <span className='sr-only'>{image.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
