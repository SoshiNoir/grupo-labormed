import GlassCard from '@/components/GlassCard';
import InfoListItem from '@/components/InfoListItem';
import PageShell from '@/components/PageShell';
import WhatsappButton from '@/components/WhatsappButton';
import { WHATSAPP_NUMBER, WHATSAPP_NUMBER_DISPLAY } from '@/constants';

const ToxicologicalExam = () => {
  return (
    <PageShell
      eyebrow='Exame toxicológico'
      title='Conteúdo mais técnico em uma apresentação mais limpa e aerada.'
      description='Os blocos da página foram convertidos para painéis translúcidos, preservando a seriedade do tema e melhorando a leitura.'
      imageSrc='/toxicologicalexam.png'
      imageAlt='Exame toxicológico'
    >
      <div className='grid gap-5 lg:grid-cols-2'>
        <GlassCard title='Informações sobre o exame'>
          <ul className='space-y-4 text-left text-sm leading-7'>
            <InfoListItem
              title='Substâncias detectadas'
              text='Identifica mais de 16 tipos de substâncias psicoativas.'
            />
            <InfoListItem
              title='Janela de detecção'
              text='Até 180 dias de consumo detectáveis pelo exame.'
            />
            <InfoListItem
              title='Material utilizado'
              text='Amostra de cabelo ou pelos.'
            />
          </ul>
        </GlassCard>

        <GlassCard title='Exigências legais'>
          <ul className='space-y-4 text-left text-sm leading-7'>
            <InfoListItem
              title='Motoristas profissionais'
              text='Obrigatório para condutores das categorias C, D e E, conforme legislação vigente.'
            />
            <InfoListItem
              title='Empresas'
              text='Necessário em admissões e controles periódicos de colaboradores em setores específicos.'
            />
            <InfoListItem
              title='Concursos públicos'
              text='Exigido em diversos processos seletivos.'
            />
            <InfoListItem
              title='Investigação pessoal'
              text='Útil para análise de históricos de consumo com fins legais ou administrativos.'
            />
          </ul>
        </GlassCard>

        <GlassCard title='Diferenciais do exame'>
          <ul className='space-y-4 text-left text-sm leading-7'>
            <InfoListItem
              title='Qualidade e segurança'
              text='Equipamentos modernos e equipe técnica especializada garantem confiabilidade.'
            />
            <InfoListItem
              title='Rapidez'
              text='Resultados ágeis sem comprometer a precisão.'
            />
            <InfoListItem
              title='Atendimento humanizado'
              text='Todo o processo é conduzido com discrição, respeito e profissionalismo.'
            />
          </ul>
        </GlassCard>

        <GlassCard title='Como funciona'>
          <ul className='space-y-4 text-left text-sm leading-7'>
            <InfoListItem
              title='Amostra coletada'
              text='Coleta feita por profissionais capacitados em ambiente seguro e confortável.'
            />
            <InfoListItem
              title='Janela de detecção'
              text='A detecção pode abranger até 180 dias de consumo.'
            />
          </ul>
        </GlassCard>

        <GlassCard className='border border-green-50/20 bg-green-90 text-white backdrop-blur-2xl lg:col-span-2'>
          <h2 className='text-2xl font-semibold tracking-tight text-white'>
            Entre em contato
          </h2>
          <p className='mt-4 text-sm leading-7 text-emerald-100/85'>
            Para mais informações, fale com nossa equipe de atendimento.
          </p>
          <div className='mt-6'>
            <WhatsappButton
              phoneNumber={WHATSAPP_NUMBER}
              label={`WhatsApp: ${WHATSAPP_NUMBER_DISPLAY}`}
            />
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
};

export default ToxicologicalExam;
