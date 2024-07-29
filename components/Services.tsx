import Image from 'next/image';
import React from 'react';

const images = [
  {
    id: 1,
    src: '/baby1.jpg',
    alt: 'Image 1',
    title: 'Sexagem Fetal',
    gradient: 'bg-gradient-green',
  },
  {
    id: 2,
    src: '/baby2.jpg',
    alt: 'Image 2',
    title: 'Teste da Bochechinha',
    gradient: 'bg-gradient-gold',
  },
  {
    id: 3,
    src: '/baby3.jpg',
    alt: 'Image 3',
    title: 'Teste do Pezinho',
    gradient: 'bg-gradient-green',
  },
];

const ImageGallery = () => {
  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div key={image.id} className="relative w-full h-[400px] max-w-[400px] mx-auto overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              <div className={`absolute bottom-0 left-0 right-0 h-1/3 ${image.gradient} flex items-end justify-center p-4`}>
                <h3 className="text-[30px] text-center text-white font-bold font-RobotoMono">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
