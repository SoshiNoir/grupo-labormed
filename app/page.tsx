import Button from "@/components/Button";
import Card from "@/components/Card";
import Slider from "@/components/Slider";

const slides = [
  { src: '/r2.jpeg', alt: 'Slide 2', width: 1920, height: 630 },
  { src: '/r3.jpeg', alt: 'Slide 3', width: 1920, height: 630 },
  { src: '/r1.jpeg', alt: 'Slide 1', width: 1920, height: 630 },
];

const HomePage = () => {
  return (
    <>
      <Slider slides={slides} height={630} />
      <section className="body-container">
        <Card
          className="bg-green-90"
          leftContent={
            <div className="flex flex-col justify-center w-full content-center gap-2">
              <h2 className="text-white text-lg font-bold">Resultados de Exames Online</h2>
              <Button
                type="button"
                title="Atendimentos realizados até dia 01/10/23 - clique aqui"
                variant="btn_white_text"
              />
              <Button
                type="button"
                title="Atendimentos realizados após dia 01/10/23 - clique aqui"
                variant="btn_white_text"
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
      </section>
    </>
  );
};

export default HomePage;