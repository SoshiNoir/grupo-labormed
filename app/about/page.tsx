import PageShell from '@/components/PageShell';
import {
  FaLayerGroup,
  FaLock,
  FaRegBuilding,
  FaRegHeart,
  FaRegStar,
  FaRegThumbsUp,
} from 'react-icons/fa';

const values = [
  {
    title: 'Qualidade',
    description:
      'Comprometidos com a qualidade dos exames e do atendimento, com foco em confiabilidade e precisão.',
    icon: FaRegHeart,
  },
  {
    title: 'Excelência',
    description:
      'Equipe qualificada, processos consistentes e busca contínua por melhora operacional.',
    icon: FaRegStar,
  },
  {
    title: 'Satisfação',
    description:
      'Atendimento humanizado, respostas objetivas e experiência mais fluida para o paciente.',
    icon: FaRegThumbsUp,
  },
  {
    title: 'Estrutura',
    description:
      'Unidades em Batatais e Altinópolis com recepções organizadas, salas de coleta e núcleo técnico operacional.',
    icon: FaRegBuilding,
  },
  {
    title: 'Equipamentos e equipe',
    description:
      'Equipamentos automatizados e profissionais capacitados para mais agilidade e qualidade analítica.',
    icon: FaLayerGroup,
  },
  {
    title: 'Segurança e qualidade',
    description:
      'Participação em programas de controle de qualidade e apoio consultivo para treinamento e melhoria contínua.',
    icon: FaLock,
  },
];

const About = () => {
  return (
    <PageShell
      eyebrow='Sobre'
      title='Mais de três décadas de atuação em análises clínicas.'
      description='O Labormed atende convênios, particulares e empresas de saúde ocupacional com foco em confiança técnica e atendimento humano.'
      imageSrc='/bg-slide-1.jpg'
      imageAlt='Equipe e estrutura do Labormed'
    >
      <section className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {values.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className='rounded-[1.75rem] border border-white/70 bg-white/80 p-3 md:p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.55)] backdrop-blur'
            >
              <div className='flex items-start gap-4 md:block'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-900'>
                  <Icon size={22} />
                </div>
                <div className='flex-1'>
                  <h2 className='text-2xl font-semibold text-slate-950 md:mt-5'>
                    {item.title}
                  </h2>
                  <p className='mt-3 text-sm leading-7 text-slate-600'>
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </PageShell>
  );
};

export default About;
