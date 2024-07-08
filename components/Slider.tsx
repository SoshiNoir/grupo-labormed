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

const slides: Slide[] = [
  { src: '/r2.jpeg', alt: 'Slide 2', width: 1920, height: 630 },
  { src: '/r3.jpeg', alt: 'Slide 3', width: 1920, height: 630 },
  { src: '/r1.jpeg', alt: 'Slide 1', width: 1920, height: 630 },
];

const Carousel: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 10,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-full">
      {slides.map((slide, index) => (
        <div key={index} className="keen-slider__slide flex justify-center">
          <div className="relative w-full h-[630px] mx-auto">
            <Image
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
