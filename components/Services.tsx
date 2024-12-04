import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const images = [
  {
    id: 1,
    src: '/baby1.jpg',
    alt: 'Image 1',
    title: 'Sexagem Fetal',
    gradient: 'bg-gradient-green',
    link: '/FetalSexing',
  },
  {
    id: 2,
    src: '/baby2.jpg',
    alt: 'Image 2',
    title: 'Exame Toxicológico',
    gradient: 'bg-gradient-gold',
    link: '/toxicological',
  },
  {
    id: 3,
    src: '/baby3.jpg',
    alt: 'Image 3',
    title: 'Teste do Pezinho',
    gradient: 'bg-gradient-green',
    link: '/HeelPrickTest',
  },
  {
    id: 4,
    src: '/baby3.jpg',
    alt: 'Image 3',
    title: 'Teste de Paternidade',
    gradient: 'bg-gradient-green',
    link: '/PaternityTest',
  },
];

const ImageGallery = () => {
  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <Link key={image.id} href={image.link} passHref>
              <div className="relative w-full h-[400px] max-w-[400px] mx-auto overflow-hidden rounded-lg cursor-pointer">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1/3 ${image.gradient} flex items-end justify-center p-4`}
                  >
                    <h3 className="text-[30px] text-center text-white font-bold font-RobotoMono">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
