import Image from 'next/image';
import React from 'react';

const cardData = [
  { id: 1, title: 'AMIL', imageSrc: '/amil.png' },
  { id: 2, title: 'APAS', imageSrc: '/apas.jpg' },
  { id: 3, title: 'BENEVIDA', imageSrc: '/benevida.jpg' },
  { id: 4, title: 'BRADESCO SAÚDE', imageSrc: '/bradesco.png' },
  { id: 5, title: 'CABEMIL', imageSrc: '/cabemil.png' },
  { id: 6, title: 'CABESP', imageSrc: '/cabesp.jpg' },
  { id: 7, title: 'CAASP', imageSrc: '/caasp.jpg' },
  { id: 8, title: 'CASSI', imageSrc: '/cassi.jpg' },
  { id: 9, title: 'ECONOMUS', imageSrc: '/economus.jpg' },
  { id: 10, title: 'HAPVIDA', imageSrc: '/hapvida.jpg' },
  { id: 11, title: 'MEDISERVICE', imageSrc: '/mediservice.jpg' },
  { id: 12, title: 'MEDICINA DO TRABALHO', imageSrc: '/medicinadotrabalho.jpg' },
  { id: 13, title: 'NOVA LOTUS', imageSrc: '/novalotus.jpg' },
  { id: 14, title: 'SINDICATO RURAL DE BATATAIS', imageSrc: '/sindicatoruraldebatatais.jpg' },
  { id: 15, title: 'PREFEITURA DE BATATAIS', imageSrc: '/prefeituradebatatais.jpg' },
  { id: 16, title: 'SAÚDE CAIXA', imageSrc: '/saudecaixa.jpg' },
  { id: 17, title: 'SUL AMÉRICA', imageSrc: '/sulamerica.jpg' },
  { id: 18, title: 'SOLUMEDI', imageSrc: '/solumedi.jpg' },
  { id: 19, title: 'S.P.A. SAÚDE', imageSrc: '/spasaude.jpg' },
  { id: 20, title: 'VIVEST', imageSrc: '/vivest.jpg' },
  { id: 21, title: 'PARTICULARES', imageSrc: '/logoPng.png' },
  { id: 22, title: 'USINA BATATAIS', imageSrc: '/usinabatatais.jpg' },
  { id: 23, title: 'UNIMED', imageSrc: '/unimed.jpg' },
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
                  objectFit="contain"
                  className="rounded-t-lg"
                  fill />
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
