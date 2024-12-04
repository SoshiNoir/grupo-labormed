"use client";

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

const RightsAndDuties: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto text-center px-4 md:px-6">
      {/* Header da página */}
      <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden p-4 md:p-6">
        <h1 className="text-3xl font-bold text-green-50 mb-4">
          Direitos e Deveres dos Pacientes
        </h1>
        <p className="text-lg text-gray-700">
          No Laboratório Clínico Labor Med, garantimos uma experiência de
          qualidade baseada no respeito, ética e confiança.
        </p>
      </div>

      {/* Direitos dos Pacientes */}
      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">
          Direitos dos Pacientes
        </h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Atendimento humanizado e respeitoso"
            text="Ser tratado com cordialidade, livre de qualquer preconceito de raça, etnia, credo, sexo, idade ou origem."
          />
          <ListItem
            title="Identidade respeitada"
            text="Ser identificado pelo seu nome, sobrenome ou nome social, nunca por apelidos ou termos desrespeitosos."
          />
          <ListItem
            title="Integridade e privacidade garantidas"
            text="Ter sua segurança, individualidade e valores éticos, culturais e morais respeitados, preservando sua imagem e identidade."
          />
          <ListItem
            title="Identificação dos profissionais"
            text="Reconhecer os profissionais envolvidos no atendimento por meio de crachás visíveis e legíveis."
          />
          <ListItem
            title="Informações claras"
            text="Receber explicações compreensíveis sobre o preparo, coleta de exames, valores, convênios, parcerias e prazos para entrega dos resultados."
          />
          <ListItem
            title="Direito à expressão"
            text="Manifestar insatisfações ou preocupações por meio de canais de atendimento e Pesquisas de Satisfação."
          />
          <ListItem
            title="Acesso aos laudos"
            text="Obter resultados de forma segura, seja pelo site do laboratório mediante login e senha, ou presencialmente, com apresentação de documento ou autorização para terceiros."
          />
          <ListItem
            title="Confidencialidade"
            text="Ter a privacidade de seus dados pessoais e laudos assegurada."
          />
        </ul>
      </div>

      {/* Deveres dos Pacientes */}
      <div className="bg-green-90 rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">
          Deveres dos Pacientes
        </h2>
        <ul className="space-y-4 text-left">
          <ListItem
            title="Busca por informações"
            text="Informar-se sobre as condições e normas de atendimento do Laboratório."
            textColor="text-gray-300"
          />
          <ListItem
            title="Cumprimento das regras"
            text="Respeitar as orientações e normas para realização dos exames."
            textColor="text-gray-300"
          />
          <ListItem
            title="Identificação pessoal"
            text="Apresentar documento oficial com foto para o atendimento."
            textColor="text-gray-300"
          />
          <ListItem
            title="Responsabilidade financeira"
            text="Honrar os compromissos financeiros assumidos."
            textColor="text-gray-300"
          />
          <ListItem
            title="Documentação de convênios"
            text="Providenciar os documentos necessários para autorizações de Convênios e Parcerias."
            textColor="text-gray-300"
          />
          <ListItem
            title="Respeito mútuo"
            text="Tratar os demais pacientes e profissionais com civilidade e cortesia."
            textColor="text-gray-300"
          />
          <ListItem
            title="Zelo pelo patrimônio"
            text="Preservar o patrimônio da instituição para garantir conforto a todos."
            textColor="text-gray-300"
          />
          <ListItem
            title="Proibição de fumar"
            text="Não fumar dentro das dependências do Laboratório."
            textColor="text-gray-300"
          />
          <ListItem
            title="Responsabilidade dos responsáveis"
            text="No caso de menores de 18 anos, pais ou responsáveis devem cumprir esses deveres."
            textColor="text-gray-300"
          />
        </ul>
      </div>
    </div>
  );
};

export default RightsAndDuties;
