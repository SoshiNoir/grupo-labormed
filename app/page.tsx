"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Doubts from "@/components/Doubts";
import FooterSlider from "@/components/FooterSlider";
import Rights from "@/components/Rights";
import Satisfaction from "@/components/Satisfaction";
import { default as Services } from "@/components/Services";
import Slider from "@/components/Slider";
import { useRouter } from 'next/navigation';

const slides = [
  { src: '/r2.jpeg', alt: 'Slide 1', width: 1920, height: 630 },
  { src: '/r3.jpeg', alt: 'Slide 2', width: 1920, height: 630 },
  { src: '/r1.jpeg', alt: 'Slide 3', width: 1920, height: 630 },
];

const footslides = [
  { src: '/lab1.jpg', alt: 'Slide 1', width: 316, height: 259 },
  { src: '/lab2.jpg', alt: 'Slide 2', width: 316, height: 259 },
  { src: '/lab3.jpg', alt: 'Slide 3', width: 316, height: 259 },
  { src: '/lab4.jpg', alt: 'Slide 4', width: 316, height: 259 },
  { src: '/lab1.jpg', alt: 'Slide 1', width: 316, height: 259 },
  { src: '/lab2.jpg', alt: 'Slide 2', width: 316, height: 259 },
  { src: '/lab3.jpg', alt: 'Slide 3', width: 316, height: 259 },
  { src: '/lab4.jpg', alt: 'Slide 4', width: 316, height: 259 },
];

const HomePage = () => {
  const router = useRouter();

  const handleOldResults = () => {
    router.push('https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx');
  };

  const handleNewResults = () => {
    router.push('https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx');
  };

  return (
    <>
      <Slider slides={slides} />
      <section className="body-container px-0.5">
        <Card
          className="bg-green-90"
          leftContent={
            <div className="flex flex-col justify-center w-full content-center gap-2">
              <h2 className="text-white text-lg font-bold">Resultados de Exames Online</h2>
              <Button
                type="button"
                title="Consultar resultados até dia 01/10/23 - clique aqui"
                variant="btn_white_text"
                onClick={handleOldResults}
              />
              <Button
                type="button"
                title="Consultar resultados"
                variant="btn_white_text"
                onClick={handleNewResults}
              />
              <h2 className="text-white text-sm font-bold">Precisa de ajuda?</h2>
              <p className="text-white text-sm">Clique aqui para acessar nosso WhatsApp ou entre em contato pelo número (16) 9999-9999</p>
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
        <>
          <Satisfaction />
          <Doubts />
          <Rights />
          <Services />
        </>
      </section>
      <FooterSlider footslides={footslides} height={630} backgroundColor="bg-gradient-yellow" />
    </>
  );
};

export default HomePage;
