'use client';

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Slide {
  src: string;
  alt: string;
  link: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slideChanged(instance) {
      setCurrentSlide(instance.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  useEffect(() => {
    if (!slider.current) {
      return;
    }

    const timer = window.setInterval(() => {
      slider.current?.next();
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slider]);

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    slider.current?.prev();
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    slider.current?.next();
  };

  return (
    <section className='relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_35px_90px_-45px_rgba(15,23,42,0.45)]'>
      <div className='relative aspect-[3/1] w-full'>
        <div ref={sliderRef} className='keen-slider h-full w-full'>
          {slides.map((slide, index) => (
            <div key={index} className='keen-slider__slide relative h-full w-full'>
              {slide.link.startsWith('http') ? (
                <a
                  href={slide.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block h-full w-full'
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className='object-cover'
                    priority={index === 0}
                  />
                </a>
              ) : (
                <Link href={slide.link} className='block h-full w-full'>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className='object-cover'
                    priority={index === 0}
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-slate-950/45 p-2 text-white backdrop-blur transition hover:bg-slate-950/65 sm:left-6 sm:p-3'
        onClick={handlePrev}
        aria-label='Slide anterior'
      >
        <ArrowLeft size={24} weight='bold' />
      </button>

      <button
        className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-slate-950/45 p-2 text-white backdrop-blur transition hover:bg-slate-950/65 sm:right-6 sm:p-3'
        onClick={handleNext}
        aria-label='Proximo slide'
      >
        <ArrowRight size={24} weight='bold' />
      </button>

      <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/40 bg-slate-950/45 px-3 py-2 backdrop-blur'>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 rounded-full transition-all ${
              currentSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/55'
            }`}
            onClick={() => slider.current?.moveToIdx(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
