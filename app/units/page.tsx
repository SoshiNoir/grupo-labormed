import WhatsappButton from "@/components/WhatsappButton";
import { Clock, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';
import React from 'react';

interface CardProps {
  imageSrc: string;
  preTitle: string;
  title: string;
  content: React.ReactNode; // Aceita qualquer conteúdo React, incluindo divs
  mapSrc: string;
  whatsappLink: string; // Link para o WhatsApp
}

const Card: React.FC<CardProps> = ({ imageSrc, preTitle, title, content, mapSrc, whatsappLink }) => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mb-8">
      {/* Primeira parte - Imagem */}
      <div className="md:w-1/3 w-full p-2 flex items-center justify-center">
        <div className="w-[300px] h-[200px] bg-gray-200 overflow-hidden rounded-lg flex items-center justify-center">
          <Image
            src={imageSrc}
            alt="Card image"
            width={300}
            height={200}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Segunda parte - Título e Conteúdo */}
      <div className="md:w-1/3 w-full p-6">
        <h2 className="text-md font-bold mb-4 text-[var(--color-main)]">{preTitle}</h2>
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-main)]">{title}</h2>
        <div className="text-gray-700 mb-2">
          {content}
          {/* Substitua o botão WhatsApp pelo componente */}
          <div className="flex flex-col items-center mt-4">
            <WhatsappButton
              phoneNumber="551637618555"
              label="WhatsApp: 16 3761-8555"
            />
          </div>
        </div>
      </div>

      {/* Terceira parte - Miniatura do Google Maps */}
      <div className="md:w-1/3 w-full p-6">
        <iframe
          src={mapSrc}
          className="w-full h-full border-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

const Units: React.FC = () => {
  const cardsData: CardProps[] = [
    {
      imageSrc: '/unidade1.jpg',
      preTitle: 'Unidade 1 - Batatais',
      title: 'Labor Med Centro',
      content: (
        <div>
          <div className="flex flex-row gap-2 p-2">
            <MapPin size={38} color="var(--color-main)" />
            <p>Rua Coronel Joaquim Rosa, 457 - Centro - Batatais - São Paulo </p>
          </div>
          <div className="flex flex-row gap-2 p-2">
            <Phone size={28} color="var(--color-main)" />
            <p>(16) 3761-6066</p>
          </div>
          <div className="flex flex-row gap-2 p-2">
            <Clock size={28} color="var(--color-main)" />
            <div>
              <p>Seg - Sex das 06h30 - 17h30</p>
              <p>Sábado e domingo: Fechado</p>
            </div>
          </div>
        </div>
      ),
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5748.634419824107!2d-47.584351371662414!3d-20.891059671670032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9fac1ed8f2b9d%3A0x8e287a8d5b1dbbc1!2sR.%20Cel.%20Joaquim%20Rosa%2C%20457%20-%20Centro%2C%20Batatais%20-%20SP%2C%2014300-039%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1726110436198!5m2!1spt-BR!2sus',
      whatsappLink: 'https://wa.me/5516237616066', // Link para o WhatsApp
    },
    {
      imageSrc: '/unidade2.jpg',
      preTitle: 'Unidade 2 - Batatais',
      title: 'Labor Med Fórum',
      content: (
        <div>
          <div className="flex flex-row gap-2 p-2">
            <MapPin size={38} color="var(--color-alt)" />
            <p>Travessa Intendente Vigilato, 295 - Centro - Batatais - São Paulo</p>
          </div>
          <div className="flex flex-row gap-2 p-2">
            <Phone size={28} color="var(--color-alt)" />
            <p>(16) 3761-8555</p>
          </div>
          <div className="flex flex-row gap-2 p-2">
            <Clock size={28} color="var(--color-alt)" />
            <div>
              <p>Seg - Sex das 06h30 - 17h30</p>
              <p>Sábado e domingo: Fechado</p>
            </div>
          </div>
        </div>
      ),
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3320.9272525537353!2d-47.58491778009317!3d-20.887571597239255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9faea56fd24d1%3A0x28e0e2e22a0fc31c!2sR.%20Dr.%20Manoel%20Furtado%2C%20235%20-%20Centro%2C%20Batatais%20-%20SP%2C%2014300-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1726110289366!5m2!1spt-BR!2sus',
      whatsappLink: 'https://wa.me/5516237618555',
    },
    {
      imageSrc: '/unidade3.jpg',
      preTitle: 'Unidade 3 - Altinópolis',
      title: 'Labor Med Altinópolis',
      content: (
        <div>
          <div className="flex flex-row gap-2 p-2">
            <MapPin size={38} color="var(--color-main)" />
            <p>Rua Coronel Joaquim Alberto, 377 - Centro - Altinópolis - São Paulo</p>
          </div>
          <div className="flex flex-row gap-2 p-2">
            <Phone size={28} color="var(--color-main)" />
            <p>(16) 3665-3422</p>
          </div>
          <div className="flex flex-row gap-2 p-2">
            <Clock size={28} color="var(--color-main)" />
            <div>
              <p>Seg - Sex das 06h30 - 17h00</p>
              <p>Sábado e domingo: Fechado</p>
            </div>
          </div>
        </div>
      ),
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2558.4166046496994!2d-47.37624281591836!3d-21.025992980221528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b760ce779031d3%3A0x3c58634861723af1!2sR.%20Cel.%20Joaquim%20Alberto%2C%20354%20-%20Centro%2C%20Altin%C3%B3polis%20-%20SP%2C%2013920-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1726110915783!5m2!1spt-BR!2sus',
      whatsappLink: 'https://wa.me/551636653422', // Link para o WhatsApp
    },
  ];

  return (
    <div>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Units;
