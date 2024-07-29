import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-8 relative">
      <div className="absolute inset-x-0 top-0 bg-gray-100" style={{ height: 'auto', minHeight: '100px' }}>
        {/* Primeira seção dividida em três colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 md:px-8 lg:px-16">
          <div className="flex items-center gap-4">
            <div className="w-[100px] h-[100px] relative">
              <Image
                src="/path/to/image1.jpg" // Substitua pelo caminho correto da sua imagem
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
                src="/asdad.png" // Substitua pelo caminho correto da sua imagem
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
                src="/path/to/image3.jpg" // Substitua pelo caminho correto da sua imagem
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

        {/* Segunda seção ocupando toda a largura, centralizada e com elementos em coluna */}
        <div className="w-full bg-yellow-50 p-8 flex flex-col items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-[100px] h-[100px] relative">
              <Image
                src="/path/to/image4.jpg" // Substitua pelo caminho correto da sua imagem
                alt="Imagem 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">Título 4</h3>
              <p>Descrição ou conteúdo para a segunda seção.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
