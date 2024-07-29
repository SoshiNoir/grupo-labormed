'use client'

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import React from 'react';

interface Slide {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SliderProps {
  footslides: Slide[];
  height: number;
  backgroundColor?: string;
}

const FooterSlider: React.FC<SliderProps> = ({ footslides, height, backgroundColor = 'bg-yellow-50' }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1, // Default for mobile
      spacing: 10,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2, // For tablets
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 4,
          spacing: 5,
        },
      },
      '(min-width: 1440px)': {
        slides: {
          perView: 4,
          spacing: 1,
        },
      },
      '(min-width: 1920px)': {
        slides: {
          perView: 5, // For very large screens
        },
      },
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
    <div className={`relative w-screen my-12 py-3 rounded-md ${backgroundColor}`}>
      <div ref={sliderRef} className="keen-slider w-full">
        {footslides.map((footslide, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <div className="relative w-[300px] h-[300px] overflow-hidden rounded-lg">
              <Image
                src={footslide.src}
                alt={footslide.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                unoptimized
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
    </div>
  );
};

export default FooterSlider;
