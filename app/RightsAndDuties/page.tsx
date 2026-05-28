import GlassCard from '@/components/GlassCard';
import InfoListItem from '@/components/InfoListItem';
import PageShell from '@/components/PageShell';

const RightsAndDuties = () => {
  return (
    <PageShell
      eyebrow='Direitos e deveres'
      title='Uma experiência mais clara para pacientes e acompanhantes.'
      description='O conteúdo foi mantido, mas agora aparece em blocos de leitura mais confortável e coerentes com o restante do site.'
      imageSrc='/patient.jpg'
      imageAlt='Direitos e deveres dos pacientes'
    >
      <div className='grid gap-5 lg:grid-cols-2'>
        <GlassCard title='Direitos dos pacientes'>
          <ul className='space-y-4 text-left text-sm leading-7'>
            <InfoListItem title='Atendimento humanizado e respeitoso' text='Ser tratado com cordialidade, livre de preconceito de raça, etnia, credo, sexo, idade ou origem.' />
            <InfoListItem title='Identidade respeitada' text='Ser identificado pelo nome, sobrenome ou nome social, sem apelidos ou termos desrespeitosos.' />
            <InfoListItem title='Integridade e privacidade garantidas' text='Ter segurança, individualidade e valores éticos, culturais e morais respeitados.' />
            <InfoListItem title='Identificação dos profissionais' text='Reconhecer os profissionais envolvidos por meio de crachás visíveis e legíveis.' />
            <InfoListItem title='Informações claras' text='Receber orientações compreensíveis sobre preparo, coleta, valores, convênios e prazos.' />
            <InfoListItem title='Direito à expressão' text='Manifestar insatisfações ou preocupações por canais de atendimento e pesquisas de satisfação.' />
            <InfoListItem title='Acesso aos laudos' text='Obter resultados com segurança pelo site ou presencialmente, com identificação adequada.' />
            <InfoListItem title='Confidencialidade' text='Ter a privacidade de dados pessoais e laudos assegurada.' />
          </ul>
        </GlassCard>

        <GlassCard className='border border-green-50/20 bg-green-90 text-white backdrop-blur-2xl'>
          <h2 className='text-2xl font-semibold tracking-tight text-white'>
            Deveres dos pacientes
          </h2>
          <ul className='mt-4 space-y-4 text-left text-sm leading-7'>
            <InfoListItem light title='Busca por informações' text='Informar-se sobre condições e normas de atendimento do laboratório.' />
            <InfoListItem light title='Cumprimento das regras' text='Respeitar orientações e normas para realização dos exames.' />
            <InfoListItem light title='Identificação pessoal' text='Apresentar documento oficial com foto para o atendimento.' />
            <InfoListItem light title='Responsabilidade financeira' text='Honrar os compromissos financeiros assumidos.' />
            <InfoListItem light title='Documentação de convênios' text='Providenciar os documentos necessários para autorizações de convênios e parcerias.' />
            <InfoListItem light title='Respeito mútuo' text='Tratar os demais pacientes e profissionais com civilidade e cortesia.' />
            <InfoListItem light title='Zelo pelo patrimônio' text='Preservar o patrimônio da instituição para garantir conforto a todos.' />
            <InfoListItem light title='Proibição de fumar' text='Não fumar dentro das dependências do laboratório.' />
            <InfoListItem light title='Responsabilidade dos responsáveis' text='No caso de menores, pais ou responsáveis devem cumprir esses deveres.' />
          </ul>
        </GlassCard>
      </div>
    </PageShell>
  );
};

export default RightsAndDuties;
