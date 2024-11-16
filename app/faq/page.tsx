"use client"; // Para usar Client Components
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quais exames de rotina devo fazer?",
    answer:
      "Os exames de rotina variam conforme a idade, sexo e histórico de saúde, mas geralmente incluem hemograma completo, glicemia, perfil lipídico, exames de função hepática e renal, além de exames hormonais e urinálise. É recomendável conversar com seu médico para definir quais exames são mais adequados ao seu perfil.",
  },
  {
    question: "É necessário estar em jejum para fazer os exames?",
    answer:
      "Nem todos os exames exigem jejum, mas muitos sim, como o de glicemia e o perfil lipídico. Normalmente, o jejum recomendado é de 8 a 12 horas. Siga as orientações do laboratório ou consulte seu médico para confirmar o tempo exato.",
  },
  {
    question: "Posso beber água enquanto estou em jejum para o exame?",
    answer:
      "Sim, a água geralmente é permitida, pois ajuda na hidratação e pode facilitar a coleta de sangue. No entanto, evite exagerar na quantidade e consulte o laboratório, pois alguns exames específicos podem ter orientações diferentes.",
  },
  {
    question: "Quais medicamentos devo suspender antes dos exames?",
    answer:
      "Alguns medicamentos podem interferir nos resultados dos exames. Informe seu médico sobre todos os medicamentos que você usa, e ele orientará se algum deve ser interrompido e por quanto tempo.",
  },
  {
    question: "Preciso parar de tomar café antes dos exames?",
    answer:
      "Café, chás e outros estimulantes devem ser evitados antes de exames que exigem jejum, pois podem afetar os resultados. Se o exame não requer jejum, verifique com o laboratório se o café é permitido.",
  },
  {
    question: "Com que frequência devo fazer exames laboratoriais de rotina?",
    answer:
      "A frequência dos exames depende de fatores como idade, histórico familiar e condições de saúde. Em geral, recomenda-se exames anuais para adultos saudáveis, mas pessoas com condições específicas podem precisar de monitoramento mais frequente.",
  },
  {
    question: "Posso fazer exame de rotina mesmo sem pedido médico?",
    answer:
      "Sim, é possível realizar exames sem pedido médico, mas é recomendável ter acompanhamento médico para interpretar os resultados corretamente e garantir que você esteja realizando os exames apropriados para seu perfil de saúde.",
  },
  {
    question: "O que fazer se um resultado estiver alterado?",
    answer:
      "Se algum resultado estiver fora do normal, é importante não tirar conclusões sem orientação médica. Marque uma consulta para que seu médico avalie o resultado e, se necessário, solicite exames adicionais para um diagnóstico mais preciso.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 flex justify-between items-center text-lg font-medium text-green-700 focus:outline-none"
            >
              {item.question}
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-6 bg-gray-70 text-green-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
