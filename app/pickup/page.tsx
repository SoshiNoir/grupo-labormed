"use client";

import Button from "@/components/Button"; // Importando seu componente Button
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Ícones para telefone e WhatsApp

const Pickup: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto text-center px-4 md:px-6">
      {/* Header da página */}
      <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden p-4 md:p-6">
        <h1 className="text-3xl font-bold text-green-500 mb-4">Coleta Domiciliar</h1>
        <p className="text-lg text-gray-700">
          Precisando fazer exames sem sair de casa? Nosso serviço de coleta domiciliar traz conforto e praticidade para você!
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Agende agora e cuide da sua saúde com a equipe especializada do Labor Med.
        </p>
      </div>

      {/* Contatos */}
      <div className="bg-green-90 text-white rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4">Entre em contato pelos nossos canais de atendimento:</h2>
        <div className="flex flex-col gap-4 items-center">
          {/* Botão Telefone */}
          <Button
            title="Telefone: (16) 3761-3311"
            icon={<FaPhoneAlt className="text-lg text-green-500" />} // Ícone para telefone
            variant="bg-white text-green-90 font-bold hover:bg-green-50 transition duration-200"
            href="tel:1637613311"
          />
          {/* Botão WhatsApp */}
          <Button
            title="WhatsApp: (16) 3761-855"
            icon={<FaWhatsapp className="text-lg text-green-500" />} // Ícone para WhatsApp
            variant="bg-white text-green-90 font-bold hover:bg-green-50 transition duration-200"
            href="https://wa.me/551637618555"
            target="_blank"
          />
        </div>
      </div>

      {/* Observação */}
      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Exames indisponíveis para coleta domiciliar:</h3>
        <ul className="text-lg text-gray-700 list-disc list-inside">
          <li>Toxicológico</li>
          <li>Exame de paternidade</li>
          <li>Espermograma</li>
        </ul>
      </div>

      {/* Final */}
      <div className="mt-8">
        <p className="text-lg text-gray-700 font-semibold">
          <span className="text-green-500">Labor Med</span>, mais que um laboratório, um parceiro que acompanha a sua saúde.
        </p>
      </div>
    </div>
  );
};

export default Pickup;
