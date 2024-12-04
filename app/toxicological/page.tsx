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

const ToxicologicalExam: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto text-center px-4 md:px-6">
      <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden p-4 md:p-6">
        <h1 className="text-3xl font-bold text-green-50 mb-4">
          Exame Toxicológico
        </h1>
        <p className="text-lg text-gray-700">
          O Laboratório Clínico Labor Med oferece o Exame Toxicológico, um procedimento altamente confiável para detecção de substâncias psicoativas em cabelos ou pelos, com uma janela de detecção de aproximadamente 180 dias.
        </p>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">Informações sobre o Exame</h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Substâncias Detectadas"
            text="O exame identifica mais de 16 tipos de substâncias psicoativas."
          />
          <ListItem
            title="Janela de Detecção"
            text="Até 180 dias de consumo detectáveis através do exame."
          />
          <ListItem
            title="Material Utilizado"
            text="Amostra de cabelo ou pelos."
          />
        </ul>
      </div>


      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">Exigências Legais</h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Motoristas Profissionais"
            text="Obrigatório para condutores das categorias CNH C, D e E, conforme legislação vigente."
          />
          <ListItem
            title="Empresas"
            text="Necessário para admissões e controle periódico de colaboradores em setores específicos."
          />
          <ListItem
            title="Concursos Públicos"
            text="Exigido em diversos processos seletivos."
          />
          <ListItem
            title="Investigação Pessoal"
            text="Ideal para análise de históricos de consumo com fins legais ou administrativos."
          />
        </ul>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">Diferenciais do Exame</h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Qualidade e Segurança"
            text="Equipamentos modernos e equipe técnica especializada garantem a confiabilidade dos resultados."
          />
          <ListItem
            title="Rapidez"
            text="Resultados ágeis, sem comprometer a precisão."
          />
          <ListItem
            title="Atendimento Humanizado"
            text="Todo o processo é conduzido com discrição, respeito e profissionalismo."
          />
        </ul>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">Como Funciona</h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Amostra Coletada"
            text="A coleta é feita por profissionais capacitados em ambiente seguro e confortável."
          />
          <ListItem
            title="Janela de Detecção"
            text="A detecção pode abranger até 180 dias de consumo."
          />
        </ul>
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

export default ToxicologicalExam;
