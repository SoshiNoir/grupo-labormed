// app/footer/page.tsx

import { Clock, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-16 ml-2 md:ml-0 flex flex-col items-center border-t border-gray-300">
      {/* Linha horizontal riscando o topo */}
      <div className="absolute inset-x-0 top-0" style={{ height: '2px', backgroundColor: 'gray', zIndex: 1 }}></div>

      <div className="relative pt-8 bg-gray-100" style={{ minHeight: '100px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 md:px-8 lg:px-16">
          <div className="flex items-center gap-4 border-b md:border-r border-gray-300 md:border-b-0 pb-4 md:pb-0 md:pr-4">
            <div className="w-[100px] h-[100px] relative">
              <Image
                src="/pinMain.svg"
                alt="Imagem 1"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="p-2 align-middle justify-center">
              <h3 className="text-lg font-bold mb-2 pl-3">Unidade 1 - Batatais</h3>
              <div className="flex flex-column gap-2 p-2">
                <MapPin size={38} color="var(--color-main)" />
                <p>Rua Coronel Joaquim Rosa, 457 - Centro - Batatais - São Paulo </p>
              </div>
              <div className="flex flex-column gap-2 p-2">
                <Phone size={28} color="var(--color-main)" />
                <p>(16) 3761-6066</p>
              </div>
              <div className="flex flex-column gap-2 p-2">
                <Clock size={28} color="var(--color-main)" />
                <div>
                  <p>Seg - Sex das 06h30 - 17h30</p>
                  <p>Sábado e domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b md:border-r border-gray-300 md:border-b-0 pb-4 md:pb-0 md:pr-4">
            <div className="w-[100px] h-[100px] relative">
              <Image
                src="/pinGold.svg"
                alt="Imagem 2"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="p-2 align-middle justify-center">
              <h3 className="text-lg font-bold mb-2 pl-3">Unidade 2 - Batatais</h3>
              <div className="flex flex-column gap-2 p-2">
                <MapPin size={38} color="var(--color-alt)" />
                <p>Travessa Intendente Vigilato, 295 - Centro - Batatais - São Paulo</p>
              </div>
              <div className="flex flex-column gap-2 p-2">
                <Phone size={28} color="var(--color-alt)" />
                <p>(16) 3761-8555</p>
              </div>
              <div className="flex flex-column gap-2 p-2">
                <Clock size={28} color="var(--color-alt)" />
                <div>
                  <p>Seg - Sex das 06h30 - 17h30</p>
                  <p>Sábado e domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 pb-4 md:pb-0">
            <div className="w-[100px] h-[100px] relative">
              <Image
                src="/pinMain.svg"
                alt="Imagem 3"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="p-2 align-middle justify-center">
              <h3 className="text-lg font-bold mb-2 pl-3">Unidade 3 - Altinópolis</h3>
              <div className="flex flex-column gap-2 p-2">
                <MapPin size={38} color="var(--color-main)" />
                <p>Rua Coronel Joaquim Alberto, 377 - Centro - Altinópolis - São Paulo</p>
              </div>
              <div className="flex flex-column gap-2 p-2">
                <Phone size={28} color="var(--color-main)" />
                <p>(16) 3665-3422</p>
              </div>
              <div className="flex flex-column gap-2 p-2">
                <Clock size={28} color="var(--color-main)" />
                <div>
                  <p>Seg - Sex das 06h30 - 17h00</p>
                  <p>Sábado e domingo: Fechado</p>
                </div>
              </div>
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
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="text-center">
              <p>Copyright © 2024 | Labor Med | Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
