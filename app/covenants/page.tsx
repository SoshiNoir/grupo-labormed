import PageShell from '@/components/PageShell';
import Image from 'next/image';

const cardData = [
  { id: 1, title: 'AMIL', imageSrc: '/amil.png' },
  { id: 2, title: 'APAS', imageSrc: '/apas.jpg' },
  { id: 3, title: 'BENEVIDA', imageSrc: '/benevida.jpg' },
  { id: 4, title: 'BRADESCO SAÚDE', imageSrc: '/bradesco.png' },
  { id: 5, title: 'CABEMIL', imageSrc: '/cabemil.png' },
  { id: 6, title: 'CABESP', imageSrc: '/cabesp.jpg' },
  { id: 7, title: 'CAASP', imageSrc: '/caasp.jpg' },
  { id: 8, title: 'CASSI', imageSrc: '/cassi.jpg' },
  { id: 9, title: 'ECONOMUS', imageSrc: '/economus.jpg' },
  { id: 10, title: 'HAPVIDA', imageSrc: '/hapvida.jpg' },
  { id: 11, title: 'MEDISERVICE', imageSrc: '/mediservice.jpg' },
  { id: 12, title: 'MEDICINA DO TRABALHO', imageSrc: '/medicinadotrabalho.jpg' },
  { id: 13, title: 'NOVA LOTUS', imageSrc: '/novalotus.jpg' },
  { id: 14, title: 'SINDICATO RURAL DE BATATAIS', imageSrc: '/sindicatoruraldebatatais.jpg' },
  { id: 15, title: 'PREFEITURA DE BATATAIS', imageSrc: '/prefeituradebatatais.jpg' },
  { id: 16, title: 'SAÚDE CAIXA', imageSrc: '/saudecaixa.jpg' },
  { id: 17, title: 'SUL AMÉRICA', imageSrc: '/sulamerica.jpg' },
  { id: 18, title: 'SOLUMEDI', imageSrc: '/solumedi.jpg' },
  { id: 19, title: 'S.P.A. SAÚDE', imageSrc: '/spasaude.jpg' },
  { id: 20, title: 'VIVEST', imageSrc: '/vivest.jpg' },
  { id: 21, title: 'PARTICULARES', imageSrc: '/logoPng.png' },
  { id: 22, title: 'USINA BATATAIS', imageSrc: '/usinabatatais.jpg' },
  { id: 23, title: 'UNIMED', imageSrc: '/unimed.jpg' },
];

function Covenants() {
  return (
    <PageShell
      eyebrow='Convênios'
      title='Cobertura ampla para pacientes e empresas.'
      description='Cobertura ampla para pacientes e empresas, com logotipos organizados em uma grade clara e consistente.'
      imageSrc='/company.jpeg'
      imageAlt='Convênios atendidos pelo Labormed'
    >
      <section className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {cardData.map((card) => (
          <article
            key={card.id}
            className='rounded-[1.75rem] border border-white/70 bg-white/80 p-3 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.55)] backdrop-blur sm:p-5'
          >
            <div className='relative flex h-40 items-center justify-center overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white p-3 sm:p-4'>
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                className='object-contain p-3 sm:p-4'
              />
            </div>
            <h2 className='mt-5 text-center text-lg font-semibold text-slate-950'>
              {card.title}
            </h2>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

export default Covenants;
