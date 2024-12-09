'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import React from 'react';

interface Slide {
  src: string;
  alt: string;
  link: string; // Campo para o link
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 10,
    },
  });

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    slider.current?.prev();
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    slider.current?.next();
  };

  return (
    <div className="relative w-full h-[140px] sm:h-[400px] md:h-[250px] lg:h-[250px] xl:h-[500px] overflow-hidden">
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className="keen-slider__slide relative flex justify-center items-center">
            <a href={slide.link} target="_blank" rel="noopener noreferrer" className="w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover w-full h-full" // Garante o preenchimento automático
                priority={index === 0}
              />
            </a>
          </div>
        ))}
      </div>

      {/* Botão de Anterior */}
      <button
        className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-1 sm:p-3 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-0 sm:bg-opacity-100 bg-opacity-50"
        onClick={handlePrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Botão de Próximo */}
      <button
        className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-1 sm:p-3 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-0 sm:bg-opacity-100 bg-opacity-50"
        onClick={handleNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores de slide (dots) */}
      <div className="absolute bottom-2 sm:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full border border-gray-400"
            onClick={() => slider.current?.moveToIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
