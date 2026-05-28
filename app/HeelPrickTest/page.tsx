import GlassCard from '@/components/GlassCard';
import InfoListItem from '@/components/InfoListItem';
import PageShell from '@/components/PageShell';
import WhatsappButton from '@/components/WhatsappButton';
import { WHATSAPP_NUMBER, WHATSAPP_NUMBER_DISPLAY } from '@/constants';

const HeelPrickTest = () => {
  return (
    <PageShell
      eyebrow='Teste do pezinho'
      title='Informações organizadas em um formato mais atual e leve.'
      description='O conteúdo foi mantido, mas agora aparece em cards translúcidos, com melhor leitura para pais e acompanhantes.'
      imageSrc='/heelpricktest.png'
      imageAlt='Exame teste do pezinho'
    >
      <div className='grid gap-5 lg:grid-cols-2'>
        <GlassCard title='Opções disponíveis'>
          <ul className='space-y-4 text-left text-sm leading-7'>
            <InfoListItem
              title='Teste do Pezinho Plus'
              text='Detecta 10 condições, oferecendo análise ampla e confiável.'
            />
            <InfoListItem
              title='Teste do Pezinho Ampliado'
              text='Abrange 8 exames, com foco nas doenças mais comuns.'
            />
            <InfoListItem
              title='Teste do Pezinho Master'
              text='Avaliação mais completa, com detecção de 15 condições.'
            />
          </ul>
        </GlassCard>

        <GlassCard title='Importância do exame'>
          <ul className='space-y-4 text-left text-sm leading-7'>
            <InfoListItem
              title='Diagnóstico precoce'
              text='Identifica doenças antes que os sintomas apareçam.'
            />
            <InfoListItem
              title='Prevenção de complicações'
              text='Permite iniciar o tratamento adequado imediatamente.'
            />
            <InfoListItem
              title='Saúde integral'
              text='Contribui para o desenvolvimento saudável da criança.'
            />
          </ul>
        </GlassCard>

        <GlassCard title='Como é realizado'>
          <ul className='space-y-4 text-left text-sm leading-7'>
            <InfoListItem
              title='Procedimento'
              text='Coleta de sangue simples, rápida e segura.'
            />
            <InfoListItem
              title='Conforto'
              text='Com foco no bem-estar do recém-nascido e tranquilidade dos pais.'
            />
          </ul>
        </GlassCard>

        <GlassCard title='Compromisso com a qualidade'>
          <p className='text-sm leading-8 text-slate-600'>
            Contamos com equipamentos modernos, equipe especializada e
            compromisso com a qualidade para assegurar resultados precisos e
            confiáveis.
          </p>
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

export default HeelPrickTest;
