"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Doubts from "@/components/Doubts";
import FooterSlider from "@/components/FooterSlider";
import Satisfaction from "@/components/Satisfaction";
import SatisfactionSurvey from "@/components/SatisfactionSurvey"; // Importando o componente de pesquisa
import { default as Services } from "@/components/Services";
import Slider from "@/components/Slider";
import { usePathname } from 'next/navigation';
import { useState } from 'react'; // Importando useState para controle do modal

const slides = [
  { src: '/banner1.png', alt: 'Slide 1', width: 1920, height: 630, link: 'https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx' },
  { src: '/banner2.png', alt: 'Slide 2', width: 1920, height: 630, link: '/link2' },
  { src: '/banner3.png', alt: 'Slide 3', width: 1920, height: 630, link: '/link3' },
];

const footslides = [
  { src: '/lab1.jpg', alt: 'Slide 1', width: 316, height: 259 },
  { src: '/lab2.jpg', alt: 'Slide 2', width: 316, height: 259 },
  { src: '/lab3.jpg', alt: 'Slide 3', width: 316, height: 259 },
  { src: '/lab4.jpg', alt: 'Slide 4', width: 316, height: 259 },
];

const HomePage = () => {
  const pathname = usePathname();
  const [isSurveyOpen, setIsSurveyOpen] = useState(false); // Estado para controlar o modal

  const handleNewResults = () => {
    window.location.href = 'https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx';
  };

  const containerClass = pathname === "/" ? "px-0.5 pt-16" : "px-0.5 pt-16 m-16";

  const handleOpenSurvey = () => {
    setIsSurveyOpen(true);
  };

  const handleCloseSurvey = () => {
    setIsSurveyOpen(false);
  };

  return (
    <div className="p-0">
      <Slider slides={slides} />
      <section className={containerClass}>
        <Card
          className="bg-green-90"
          leftContent={
            <div className="flex flex-col justify-between w-full content-center gap-2">
              <h2 className="text-white text-lg font-bold">Resultados de Exames Online</h2>
              <Button
                type="button"
                title="Consultar Resultados"
                variant="btn_white_text"
                href="https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx"
                target="_blank"
              />
              <div>
                <h2 className="text-white text-sm font-bold">Precisa de ajuda?</h2>
                <p className="text-white text-sm">Clique aqui para acessar nosso WhatsApp ou entre em contato pelo número (16) 3761-8555.</p>
              </div>
            </div>
          }
          rightContent={
            <div className="flex flex-col gap-6 border p-2 rounded">
              <h2 className="text-white text-lg font-bold">Resultados Físicos</h2>
              <p className="text-white text-sm"><b>Retirada pelo cliente:</b> Indispensável a apresentação do
                comprovante de coleta e documento de identificação.</p>
              <p className="text-white text-sm"><b>Retirada por terceiros:</b> Indispensável a apresentação da
                autorização de entrega para terceiros, comprovante de coleta, e
                identificação do paciente</p>
            </div>
          }
        />
        <Button
          type="button"
          title="Participar da Pesquisa de Satisfação"
          variant="btn_white_text"
          onClick={handleOpenSurvey} // Abre o modal ao clicar
        />
        {isSurveyOpen && <SatisfactionSurvey onClose={handleCloseSurvey} />} {/* Renderiza o modal */}
        <Doubts />
        <Services />
      </section>
      <FooterSlider footslides={footslides} height={630} backgroundColor="bg-gradient-yellow" />
    </div>
  );
};

export default HomePage;
