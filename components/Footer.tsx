import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-70 py-8 relative">
      <div className="absolute inset-x-0 top-0 bg-gray-100" style={{ height: 'auto', minHeight: '100px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 md:px-8 lg:px-16">
          <div className="flex items-center gap-4">
            <div className="w-[100px] h-[100px] relative">
              <Image
                src="/pinMain.svg"
                alt="Imagem 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Título 1</h3>
              <p>Descrição ou conteúdo para a primeira coluna.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[100px] h-[100px] relative">
              <Image
                src="/pinGold.svg"
                alt="Imagem 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Título 2</h3>
              <p>Descrição ou conteúdo para a segunda coluna.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[100px] h-[100px] relative">
              <Image
                src="/pinMain.svg"
                alt="Imagem 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Título 3</h3>
              <p>Descrição ou conteúdo para a terceira coluna.</p>
            </div>
          </div>
        </div>

        <div className="w-full p-8 flex flex-col items-center border-t border-gray-300">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-96 h-auto">
              <Image
                src="/horizontal.png"
                alt="Imagem 4"
                width={384}
                height={216}
              />
            </div>
            <div className="text-center">
              <p>Copyright © 2024  |  Labor Med  |  Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
