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

const HeelPrickTest: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto text-center px-4 md:px-6">
      <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden p-4 md:p-6">
        <h1 className="text-3xl font-bold text-green-50 mb-4">
          Exame Teste do Pezinho
        </h1>
        <p className="text-lg text-gray-700">
          O Teste do Pezinho é um exame fundamental para a saúde do recém-nascido,
          realizado nos primeiros dias de vida para identificar precocemente
          condições genéticas, metabólicas e hormonais que, quando tratadas a tempo,
          podem evitar complicações graves e melhorar a qualidade de vida da criança.
        </p>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          Opções Disponíveis
        </h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Teste do Pezinho Plus"
            text="Detecta 10 condições, oferecendo uma análise ampla e confiável."
          />
          <ListItem
            title="Teste do Pezinho Ampliado"
            text="Abrange 8 exames, com foco nas doenças mais comuns."
          />
          <ListItem
            title="Teste do Pezinho Master"
            text="Realiza a avaliação mais completa, com a detecção de 15 condições."
          />
        </ul>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          Importância do Teste do Pezinho
        </h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Diagnóstico Precoce"
            text="Identifica doenças antes que os sintomas apareçam."
          />
          <ListItem
            title="Prevenção de Complicações"
            text="Permite iniciar o tratamento adequado imediatamente, prevenindo sequelas."
          />
          <ListItem
            title="Saúde Integral"
            text="Contribui para o desenvolvimento saudável da criança."
          />
        </ul>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          Como é Realizado o Exame
        </h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Procedimento"
            text="Coleta de sangue simples, rápida e segura."
          />
          <ListItem
            title="Conforto"
            text="Garantindo o conforto do recém-nascido e a tranquilidade dos pais."
          />
        </ul>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          Compromisso com a Qualidade
        </h2>
        <p className="text-gray-700 mb-4">
          No Laboratório Clínico Labor Med, contamos com equipamentos modernos,
          equipe especializada e um compromisso com a qualidade, assegurando resultados
          precisos e confiáveis.
        </p>
      </div>

      <div className="bg-green-90 rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Entre em Contato</h2>
        <p className="text-gray-300 mb-4">
          Para mais informações, entre em contato com nossa equipe de atendimento:
        </p>
        <WhatsappButton
          phoneNumber="551637618555"
          label="WhatsApp: 16 3761-8555"
        />
      </div>
    </div>
  );
};

export default HeelPrickTest;
