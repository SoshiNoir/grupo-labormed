'use client';

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

interface Slide {
  src: string;
  mobileSrc?: string;
  alt: string;
  link: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  useEffect(() => {
    if (!slider.current) return;
    const timer = window.setInterval(() => {
      slider.current?.next();
    }, 5000);
    return () => window.clearInterval(timer);
  }, [slider]);

  const renderSlideImage = (slide: Slide, index: number) => (
    <div className='absolute inset-0'>
      <picture className='block h-full w-full'>
        {slide.mobileSrc && (
          <source media='(max-width: 639px)' srcSet={slide.mobileSrc} />
        )}
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          className='object-contain sm:object-cover'
          priority={index === 0}
          sizes='100vw'
        />
      </picture>
    </div>
  );

  return (
    <section className='group relative w-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#f7f2e6] shadow-xl shadow-slate-200/50 sm:rounded-[2.5rem]'>
      <div className='relative aspect-[9/16] w-full sm:aspect-[3/1]'>
        {/* Main Slider Content */}
        <div ref={sliderRef} className='keen-slider h-full w-full'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className='keen-slider__slide relative h-full w-full'
            >
              {slide.link.startsWith('http') ? (
                <a
                  href={slide.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block h-full w-full'
                >
                  {renderSlideImage(slide, index)}
                </a>
              ) : (
                <Link href={slide.link} className='block h-full w-full'>
                  {renderSlideImage(slide, index)}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Controls - Arrows only */}
        <div className='absolute inset-x-4 top-1/2 z-10 flex -translate-y-1/2 justify-between opacity-0 transition-opacity group-hover:opacity-100 hidden sm:flex'>
          <button
            className='flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-lg backdrop-blur-md transition hover:bg-white active:scale-90'
            onClick={(e) => {
              e.stopPropagation();
              slider.current?.prev();
            }}
          >
            <ArrowLeft size={24} weight='bold' />
          </button>
          <button
            className='flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-lg backdrop-blur-md transition hover:bg-white active:scale-90'
            onClick={(e) => {
              e.stopPropagation();
              slider.current?.next();
            }}
          >
            <ArrowRight size={24} weight='bold' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
