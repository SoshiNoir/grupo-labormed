import Image from 'next/image'; // Importa o componente Image do Next.js
import React from 'react';
import { FaRegHeart, FaRegStar, FaRegThumbsUp } from 'react-icons/fa'; // Exemplo de ícones; ajuste conforme necessário

const About: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Seção principal */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 p-6 md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-green-500">Labor Med</h2>
          <p className="text-lg mb-4">O Laboratório Labor Med é uma empresa com mais de 37 anos atuando no mercado de Análises Clínicas com um grande portfólio de exames e atendendo a conveniados de diversos planos de saúde, além do atendimento particular e empresas que prestam serviço de saúde ocupacional.</p>
        </div>
        <div className="flex-1 p-6 md:w-1/3 bg-white">
          <div className="relative w-full h-64">
            <Image
              src="/bg-slide-1.jpg" // Substitua pelo caminho correto da sua imagem
              alt="Imagem do Sobre"
              layout="fill" // Preenche o contêiner pai
              objectFit="cover" // Ajusta a imagem para cobrir o contêiner
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Nova seção com cards */}
      <div className="bg-green-90 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <FaRegHeart className="text-4xl text-green-50 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
              <p className="text-green-50 text-lg">Comprometidos com a qualidade dos nossos exames e atendimento, garantindo a melhor precisão e confiabilidade.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <FaRegStar className="text-4xl text-green-50 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excelência</h3>
              <p className="text-green-50 text-lg">Buscamos sempre a excelência em todos os nossos serviços, com uma equipe altamente qualificada e dedicada.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <FaRegThumbsUp className="text-4xl text-green-50 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 ">Satisfação</h3>
              <p className="text-green-50 text-lg">Garantimos a satisfação dos nossos clientes com um atendimento personalizado e eficiente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
