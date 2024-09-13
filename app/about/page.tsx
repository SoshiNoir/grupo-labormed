"use client"; // Para garantir que o componente seja um Client Component

import Button from '@/components/Button'; // Corrigido para o caminho correto do botão
import Image from 'next/image';
import React from 'react';
import { FaLayerGroup, FaLock, FaRegBuilding, FaRegHeart, FaRegStar, FaRegThumbsUp } from 'react-icons/fa'; // Ícones usados nos cards

const About: React.FC = () => {
  return (
    <>
      <div className="p-6 max-w-7xl mx-auto text-center px-1 md:px-6">
        {/* Seção principal */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex-1 p-4 md:p-6 md:w-2/3"> {/* Reduzi o padding */}
            <h2 className="text-3xl font-bold mb-4 text-green-500">Labor Med</h2>
            <p className="text-lg mb-4 text-center">
              O Laboratório Labor Med é uma empresa com mais de 37 anos atuando no mercado de Análises Clínicas com um grande portfólio de exames e atendendo a conveniados de diversos planos de saúde, além do atendimento particular e empresas que prestam serviço de saúde ocupacional.
            </p>
          </div>
          <div className="flex-1 p-1 md:p-6 md:w-1/3 bg-white"> {/* Reduzi o padding */}
            <div className="relative w-full h-64">
              <Image
                src="/bg-slide-1.jpg"
                alt="Imagem do Sobre"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Nova seção com cards */}
        <div className="bg-green-90 py-16 mt-12 rounded-lg overflow-hidden px-1 md:px-1">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg text-center">
                <div className="mb-4">
                  <FaRegHeart className="text-4xl text-green-50 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-0 md:mb-4">Qualidade</h3> {/* Mudança no mb */}
                <p className="text-green-50 text-lg">
                  Comprometidos com a qualidade dos nossos exames e atendimento, garantindo a melhor precisão e confiabilidade.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg text-center"> {/* Reduzi o padding */}
                <div className="mb-4">
                  <FaRegStar className="text-4xl text-green-50 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excelência</h3>
                <p className="text-green-50 text-lg">
                  Buscamos sempre a excelência em todos os nossos serviços, com uma equipe altamente qualificada e dedicada.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg text-center"> {/* Reduzi o padding */}
                <div className="mb-4">
                  <FaRegThumbsUp className="text-4xl text-green-50 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Satisfação</h3>
                <p className="text-green-50 text-lg">
                  Garantimos a satisfação dos nossos clientes com um atendimento personalizado e eficiente.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg text-center"> {/* Reduzi o padding */}
                <div className="mb-4">
                  <FaRegBuilding className="text-4xl text-green-50 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Estrutura</h3>
                <p className="text-green-50 text-lg">
                  O Laboratório conta com três unidades de atendimento na cidade de Batatais e uma unidade de atendimento na cidade de Altinópolis. Todas as unidades contam com recepções e salas de coletas organizadas e aconchegantes e Núcleo Técnico Operacional (NTO) para a realização dos exames.
                </p>
              </div>
              {/* Card 5 */}
              <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg text-center"> {/* Reduzi o padding */}
                <div className="mb-4">
                  <FaLayerGroup className="text-4xl text-green-50 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Equipamentos e Equipe</h3>
                <p className="text-green-50 text-lg">
                  O Laboratório conta com equipamentos automatizados e modernos, o que garante melhor precisão, agilidade e qualidade no processo analítico. Conta com profissionais capacitados para cada tipo de processo, sempre atualizados para executar os serviços com qualidade, cordialidade e empatia.
                </p>
              </div>
              {/* Card 6 */}
              <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg text-center"> {/* Reduzi o padding */}
                <div className="mb-4">
                  <FaLock className="text-4xl text-green-50 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Segurança e Qualidade</h3>
                <p className="text-green-50 text-lg">
                  Nosso Laboratório participa de um sistema de Avaliação de Resultados em Qualidade com outros Laboratórios do Brasil (PNCQ – Programa Nacional de Controle Qualidade) o qual recebemos o título de “Excelência”. Possuímos parceria com Consultoria de Análises Clínicas que nos auxilia em constantes treinamentos e melhoria de processos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
