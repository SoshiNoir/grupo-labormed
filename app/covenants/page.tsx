import Image from 'next/image';
import React from 'react';

const cardData = [
  { id: 1, title: 'AMIL', imageSrc: '/amil.png' },
  { id: 2, title: 'APAS', imageSrc: '/apas.jpg' },
  { id: 3, title: 'BRADESCO SAÚDE', imageSrc: '/bradesco.png' },
  { id: 4, title: 'CAASP', imageSrc: '/caasp.jpg' },
  { id: 5, title: 'CABESP', imageSrc: '/cabesp.jpg' },
  { id: 6, title: 'CASSI', imageSrc: '/cassi.jpg' },
  { id: 7, title: 'CESP', imageSrc: '/cesp.png' },
  { id: 8, title: 'CABEMIL', imageSrc: '/cabemil.png' },
  { id: 9, title: 'CLUBE DA SAÚDE', imageSrc: '/clubedasaude.png' },
  { id: 10, title: 'ECONOMUS', imageSrc: '/economus.jpg' },
  { id: 11, title: 'JUMIL', imageSrc: '/jumil.jpg' },
  { id: 12, title: 'PREFEITURA', imageSrc: '/prefeitura.jpg' },
  { id: 13, title: 'SAÚDE CAIXA', imageSrc: '/saudecaixa.jpg' },
  { id: 14, title: 'SÃO FRANCISCO SAÚDE', imageSrc: '/sfsaude.jpg' },
  { id: 15, title: 'SUL AMÉRICA', imageSrc: '/sulamerica.jpg' },
  { id: 16, title: 'UNIMED', imageSrc: '/unimed.jpg' },
  { id: 17, title: 'USINA BATATAIS', imageSrc: '/usinabatatais.jpg' },
];

function Covenants() {
  return (
    <section className="py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardData.map(card => (
            <div key={card.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-48 mx-1">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-center font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Covenants;
