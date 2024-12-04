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

const PaternityTest: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto text-center px-4 md:px-6">
      <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden p-4 md:p-6">
        <h1 className="text-3xl font-bold text-green-50 mb-4">
          Teste de Paternidade
        </h1>
        <p className="text-lg text-gray-700">
          No Laboratório Clínico Labor Med, oferecemos o Teste de Paternidade, um
          exame que combina precisão, segurança e sigilo para responder com clareza
          uma questão importante na vida das famílias.
        </p>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          O que é o Teste de Paternidade?
        </h2>
        <p className="text-gray-700">
          O exame de paternidade é um teste genético que compara o DNA de pessoas
          envolvidas para confirmar, com alta confiabilidade, a relação biológica
          entre o suposto pai e o filho.
        </p>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          Opções Disponíveis no Labor Med
        </h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Teste de Paternidade Trio"
            text="Coleta realizada através da saliva. Participam: suposto pai, filho e mãe. Recomendado para garantir maior confiabilidade."
          />
          <ListItem
            title="Teste de Paternidade Duo"
            text="Coleta realizada através da saliva. Participam: suposto pai e filho. Disponível apenas quando o filho é maior de 18 anos ou já está registrado em cartório."
          />
        </ul>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          Por que realizar o Teste de Paternidade no Labor Med?
        </h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Segurança e precisão"
            text="Utilizamos tecnologia avançada para garantir resultados confiáveis."
          />
          <ListItem
            title="Sigilo absoluto"
            text="Todo o processo é tratado com discrição e respeito."
          />
          <ListItem
            title="Rapidez"
            text="Resultados disponibilizados em tempo ágil, sem comprometer a qualidade da análise."
          />
        </ul>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          Como funciona o Exame?
        </h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Procedimento"
            text="A coleta é simples, indolor e realizada com uma amostra de saliva de cada participante."
          />
          <ListItem
            title="Apoio especializado"
            text="Nossa equipe especializada está pronta para oferecer suporte durante todas as etapas do processo."
          />
        </ul>
      </div>

      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <p className="text-gray-700 mb-4">
          No Laboratório Clínico Labor Med, entendemos a importância desse exame
          e trabalhamos para garantir confiança, acolhimento e resultados precisos
          para você e sua família.
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

export default PaternityTest;
