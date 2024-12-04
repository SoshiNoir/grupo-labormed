"use client";

import React from "react";

const Ethics: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto text-center px-4 md:px-6">
      {/* Header da página */}
      <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden p-4 md:p-6">
        <h1 className="text-3xl font-bold text-green-50 mb-4">Código de Conduta Ética</h1>
        <p className="text-lg text-gray-700">
          No Laboratório Clínico Labor Med, a ética e a integridade são os pilares que sustentam todas as nossas atividades.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Nosso compromisso é garantir que colaboradores, parceiros e pacientes sejam tratados com respeito, transparência e profissionalismo.
        </p>
      </div>

      {/* Princípios Fundamentais */}
      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">Princípios Fundamentais</h2>
        <ul className="text-lg text-gray-700 list-disc list-inside text-left">
          <li>
            <span className="font-bold">Integridade:</span> Atuar com honestidade, justiça e transparência em todos os serviços e relacionamentos.
          </li>
          <li>
            <span className="font-bold">Respeito à vida e à dignidade humana:</span> Garantir que todas as pessoas sejam tratadas com respeito, independentemente de raça, credo, gênero, orientação sexual, idade ou condição social.
          </li>
          <li>
            <span className="font-bold">Confidencialidade:</span> Preservar o sigilo absoluto de informações pessoais e resultados laboratoriais dos pacientes.
          </li>
          <li>
            <span className="font-bold">Imparcialidade:</span> Realizar todos os serviços com precisão, livre de influências externas ou preconceitos.
          </li>
        </ul>
      </div>

      {/* Compromissos */}
      <div className="bg-green-90 rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Nossos Compromissos</h2>
        <div className="text-left text-green-500">
          <h3 className="text-lg font-semibold mb-2">Com Pacientes:</h3>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li>Garantir atendimento humanizado e respeitoso.</li>
            <li>Oferecer informações claras sobre exames e prazos.</li>
            <li>Garantir a segurança e a qualidade em todas as etapas laboratoriais.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">Com Colaboradores:</h3>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li>Manter um ambiente saudável, seguro e livre de discriminações.</li>
            <li>Incentivar o desenvolvimento profissional e pessoal.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">Com a Sociedade:</h3>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li>Atuar de forma responsável e ética com fornecedores e parceiros.</li>
            <li>Contribuir para o bem-estar da comunidade e práticas sustentáveis.</li>
          </ul>
        </div>
      </div>

      {/* Condutas Proibidas */}
      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-50 mb-4">Condutas Proibidas</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 text-left">
          <li>Qualquer forma de preconceito, discriminação ou assédio.</li>
          <li>Uso indevido de informações de pacientes ou parceiros.</li>
          <li>Negligência que comprometa a qualidade ou segurança dos resultados.</li>
          <li>Aceitação ou oferta de vantagens indevidas.</li>
        </ul>
      </div>

      {/* Canal de Ética */}
      <div className="bg-green-90 rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Canal de Ética</h2>
        <p className="text-lg text-gray-300">
          Relate condutas inadequadas ou sugestões pelo nosso canal seguro e sigiloso. Todas as denúncias serão analisadas com imparcialidade e discrição.
        </p>
      </div>

      {/* Final */}
      <div className="mt-8">
        <p className="text-lg text-gray-700 font-semibold">
          <span className="text-green-500">Labor Med</span>, ética e excelência em cada passo.
        </p>
      </div>
    </div>
  );
};

export default Ethics;
