'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import React from 'react';

interface Slide {
  src: string;
  alt: string;
  width: number;
  height: number | string; // Pode ser número ou string (ex: 'auto')
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

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    slider.current?.prev();
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    slider.current?.next();
  };

  return (
    <div className="relative w-full max-h-[600px] overflow-hidden">
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className="keen-slider__slide flex justify-center items-center relative">
            <div
              className="relative w-full h-full"
              style={{ height: typeof slide.height === 'string' ? slide.height : `${slide.height}px` }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                objectFit="cover" // Padrão para telas maiores
                className="rounded-lg object-contain sm:object-cover" // Aplicar contain no mobile e cover a partir do sm (640px)
                priority
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-0"
        onClick={handlePrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-0"
        onClick={handleNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Indicadores de slide */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 bg-white rounded-full border border-gray-400"
            onClick={() => slider.current?.moveToIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
