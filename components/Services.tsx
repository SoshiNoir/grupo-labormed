import { SERVICE_CARDS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionHeading from './SectionHeading';

const ImageGallery = () => {
  return (
    <section className='mt-20 space-y-8 px-1'>
      <SectionHeading
        eyebrow='Especialidades'
        title='Exames mais procurados'
        description='Selecione o exame desejado e fale com a equipe pelo WhatsApp para receber orientação rápida.'
      />
      <div className='grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4'>
        {SERVICE_CARDS.map((image) => (
          <Link
            key={image.id}
            href={`https://wa.me/551637618555?text=${encodeURIComponent(image.whatsappMessage)}`}
            target='_blank'
            rel='noopener noreferrer'
            className='group relative mx-auto flex aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] border border-white/60 bg-slate-950 shadow-[0_30px_80px_-38px_rgba(15,23,42,0.75)] sm:aspect-auto sm:h-[380px] sm:rounded-[1.75rem]'
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className='object-cover transition duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />
            <div
              className={`absolute inset-x-0 bottom-0 flex h-36 flex-col justify-end bg-gradient-to-t ${image.gradient} p-4 sm:h-48 sm:p-6`}
            >
              <p className='text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-xs sm:tracking-[0.26em]'>
                {image.eyebrow}
              </p>
              <h3 className='mt-2 text-lg font-semibold leading-tight text-white sm:mt-3 sm:text-3xl'>
                {image.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
