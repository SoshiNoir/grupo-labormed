"use client";

import WhatsappButton from "@/components/WhatsappButton";
import React from "react";

interface ListItemProps {
  title: string;
  text: string;
  titleColor?: string;
  textColor?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  text,
  titleColor = "text-green-500",
  textColor = "text-gray-700",
}) => {
  return (
    <li className="border-b border-gray-300 pb-2">
      <span className={`font-bold ${titleColor}`}>{title}:</span>{" "}
      <span className={textColor}>{text}</span>
    </li>
  );
};

const FetalSexing: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto text-center px-4 md:px-6">
      <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden p-4 md:p-6">
        <h1 className="text-3xl font-bold text-green-50 mb-4">
          Sexagem Fetal
        </h1>
        <p className="text-lg text-gray-700">
          O Laboratório Clínico Labor Med tem o orgulho de oferecer o exame de
          Sexagem Fetal, um procedimento simples e não invasivo que permite
          descobrir o sexo do bebê a partir da 8ª semana de gestação. Este exame,
          realizado com uma amostra de sangue materno, utiliza tecnologia avançada
          para identificar a presença do DNA fetal na circulação sanguínea da mãe.
        </p>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          O que é a Sexagem Fetal?
        </h2>
        <p className="text-gray-700">
          O exame de sexagem fetal é um procedimento não invasivo que detecta
          a presença do cromossomo Y no sangue materno. A presença do cromossomo
          Y indica que o bebê é do sexo masculino, enquanto a sua ausência
          indica que o bebê é do sexo feminino.
        </p>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          Por que realizar a Sexagem Fetal no Labor Med?
        </h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Confiabilidade"
            text="Resultados precisos com tecnologia de ponta."
          />
          <ListItem
            title="Rapidez"
            text="Entrega do laudo em poucos dias úteis."
          />
          <ListItem
            title="Atendimento Acolhedor"
            text="Acompanhamos você com todo o carinho que esse momento merece."
          />
        </ul>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          Recomendações
        </h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Idade gestacional"
            text="Realizar a coleta a partir da 8ª semana de gestação para garantir a confiabilidade do exame."
          />
          <ListItem
            title="Agendamento"
            text="Consulte nossa equipe para esclarecer dúvidas e agendar sua coleta."
          />
        </ul>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <p className="text-gray-700 mb-4">
          No Laboratório Clínico Labor Med, celebramos com você a vida que está
          por vir. Conte conosco para tornar esse momento ainda mais especial!
        </p>
      </div>

      <div className="bg-green-90 rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Entre em Contato</h2>
        <p className="text-gray-300 mb-4">
          Para mais informações ou esclarecimento de dúvidas, entre em contato com
          nossa equipe de atendimento:
        </p>
        <WhatsappButton
          phoneNumber="551637618555"
          label="WhatsApp: 16 3761-8555"
        />
      </div>
    </div>
  );
};

export default FetalSexing;
