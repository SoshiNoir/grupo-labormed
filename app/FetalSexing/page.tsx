import GlassCard from '@/components/GlassCard';
import InfoListItem from '@/components/InfoListItem';
import PageShell from '@/components/PageShell';
import WhatsappButton from '@/components/WhatsappButton';

const FetalSexing = () => {
  return (
    <PageShell
      eyebrow='Sexagem fetal'
      title='Exame não invasivo com apresentação mais delicada e atual.'
      description='A página agora usa painéis translúcidos e hierarquia mais clara para comunicar tecnologia, confiança e acolhimento.'
      imageSrc='/fetalsexing.png'
      imageAlt='Exame de sexagem fetal'
    >
      <div className='grid gap-5'>
        <GlassCard title='O que é a sexagem fetal?'>
          <p className='text-sm leading-8 text-slate-600'>
            O exame detecta a presença do cromossomo Y no sangue materno. Sua presença indica bebê do sexo masculino; a ausência indica bebê do sexo feminino. É um procedimento simples, realizado a partir da amostra de sangue da mãe.
          </p>
        </GlassCard>

        <div className='grid gap-5 lg:grid-cols-2'>
          <GlassCard title='Por que realizar no Labormed?'>
            <ul className='space-y-4 text-left text-sm leading-7'>
              <InfoListItem title='Confiabilidade' text='Resultados precisos com tecnologia de ponta.' />
              <InfoListItem title='Rapidez' text='Entrega do laudo em poucos dias úteis.' />
              <InfoListItem title='Atendimento acolhedor' text='Acompanhamento cuidadoso em um momento especial da gestação.' />
            </ul>
          </GlassCard>

          <GlassCard title='Recomendações'>
            <ul className='space-y-4 text-left text-sm leading-7'>
              <InfoListItem title='Idade gestacional' text='Realizar a coleta a partir da 8ª semana para garantir confiabilidade.' />
              <InfoListItem title='Agendamento' text='Consulte nossa equipe para esclarecer dúvidas e marcar a coleta.' />
            </ul>
          </GlassCard>
        </div>

        <GlassCard className='border border-green-50/20 bg-green-90 text-white backdrop-blur-2xl'>
          <h2 className='text-2xl font-semibold tracking-tight text-white'>
            Entre em contato
          </h2>
          <p className='mt-4 text-sm leading-7 text-emerald-100/85'>
            Para mais informações ou esclarecimento de dúvidas, fale com a equipe de atendimento.
          </p>
          <div className='mt-6'>
            <WhatsappButton phoneNumber='551637618555' label='WhatsApp: 16 3761-8555' />
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
};

export default FetalSexing;
