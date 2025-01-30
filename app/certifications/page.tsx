'use client'; // Para garantir que o componente seja um Client Component

import Button from '@/components/Button'; // Corrigido para o caminho correto do botão
import Image from 'next/image';
import React from 'react';
import {
  FaLayerGroup,
  FaLock,
  FaRegBuilding,
  FaRegHeart,
  FaRegStar,
  FaRegThumbsUp,
} from 'react-icons/fa'; // Ícones usados nos cards

const Certifications: React.FC = () => {
  return (
    <>
      <div className='p-6 max-w-7xl mx-auto text-center px-1 md:px-6'>
        {/* Seção principal */}
        <div className='flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='flex-1 p-4 md:p-6 md:w-2/3'>
            {' '}
            {/* Reduzi o padding */}
            <p className='text-lg mb-4 text-center'>
              O Labormed, comprometido com a excelência nos serviços de saúde,
              busca garantir a máxima qualidade em todas as suas operações. Suas
              certificações refletem a conformidade com práticas de segurança,
              precisão e atendimento humanizado, estabelecendo um nível elevado
              de confiança tanto para pacientes quanto para profissionais da
              saúde.
            </p>
          </div>
          <div className='flex-1 p-1 md:p-6 md:w-1/3 bg-white'>
            {' '}
            <div className='relative w-full h-64'>
              <Image
                src='/bg-slide-1.jpg'
                alt='Imagem do Sobre'
                objectFit='cover'
                className='rounded-lg'
                fill
              />
            </div>
          </div>
        </div>

        {/* Nova seção com cards */}
        <div className='bg-green-90 py-16 mt-12 rounded-lg overflow-hidden px-1 md:px-1'>
          <div className='max-w-6xl mx-auto'>
            {/* Alterado para sempre exibir uma coluna, mas adaptável */}
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
              {/* Card 1 */}
              <div className='bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg text-center'>
                <div className='mb-4'>
                  {/*   <FaRegStar className='text-4xl text-green-50 mx-auto' /> */}
                </div>
                {/*               <h3 className="text-xl font-semibold mb-0 md:mb-4">Certificação DICQ</h3>*/}
                <Image
                  src='/IBG.jpg'
                  alt='Pesquisa de Satisfação'
                  width={1080}
                  height={1080}
                  layout='responsive'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
