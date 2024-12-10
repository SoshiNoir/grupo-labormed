// app/results/page.tsx

import Image from 'next/image';
import React from 'react';

// Dados de exemplo para os cards
const cardData = [
  { id: 1, imgSrc: '/doc.jpg', title: 'Médicos', text: 'Acesso dos MÉDICOS aos resultados dos exames de seus pacientes. O LOGIN e a SENHA são informados pelo Laboratório. Caso ainda não possua, entre em contato conosco.', link: 'https://lablaudo.com.br/acesso_chave/?serie=4362' },
  { id: 2, imgSrc: '/patient.jpg', title: 'Pacientes', text: 'Acesso dos PACIENTES aos resultados de seus exames. O LOGIN e a SENHA encontram-se disponíveis em seu protocolo de atendimento.', link: 'https://lablaudo.com.br/acesso_paciente' },
  { id: 3, imgSrc: '/company.jpeg', title: 'Empresas', text: 'Acesso das EMPRESAS aos resultados dos exames de seus funcionários. O LOGIN e a SENHA são informados pelo Laboratório. Caso ainda não possua, entre em contato conosco.', link: 'https://lablaudo.com.br/acesso_chave/?serie=4362' },
  { id: 4, imgSrc: '/sample.png', title: 'Convênios', text: 'Acesso das empresas de MEDICINA OCUPACIONAL aos resultados dos exames de seus conveniados. O LOGIN e a SENHA são informados pelo Laboratório.', link: 'https://lablaudo.com.br/acesso_chave/?serie=4362' },
];

const ResultsPage = () => {
  return (
    <div className="flex flex-col items-center my-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl w-full">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="border rounded-lg overflow-hidden shadow-lg w-full h-[400px] mx-auto"
          >
            <div className="relative w-full h-1/2">
              <Image
                src={card.imgSrc}
                alt={card.title}
                objectFit="cover"
                className="absolute top-0 left-0"
                fill />
            </div>
            <div className="h-1/2 bg-white flex flex-col justify-between items-center text-center">
              <h2 className="pt-2 regular-24 font-RobotoMono text-green-90">{card.title}</h2>
              <p className="m-2 regular-16 text-gray-600">{card.text}</p>
              <a href={card.link} className="w-full">
                <button className="regular-18 bg-green-90 text-white p-4 rounded w-full hover:bg-green-50">
                  Acessar
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
