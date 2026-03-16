import GlassCard from '@/components/GlassCard';
import PageShell from '@/components/PageShell';

const Ethics = () => {
  return (
    <PageShell
      eyebrow='Ética'
      title='Código de conduta com visual mais institucional e legível.'
      description='Em vez de blocos opacos e pesados, a página agora usa painéis translúcidos com hierarquia mais clara.'
      imageSrc='/company.jpeg'
      imageAlt='Código de conduta ética'
    >
      <div className='grid gap-5 lg:grid-cols-2'>
        <GlassCard title='Princípios fundamentais'>
          <ul className='list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600'>
            <li><strong className='text-emerald-900'>Integridade:</strong> atuar com honestidade, justiça e transparência.</li>
            <li><strong className='text-emerald-900'>Respeito à vida e à dignidade humana:</strong> tratar todas as pessoas com respeito, sem discriminação.</li>
            <li><strong className='text-emerald-900'>Confidencialidade:</strong> preservar o sigilo de informações pessoais e resultados laboratoriais.</li>
            <li><strong className='text-emerald-900'>Imparcialidade:</strong> realizar serviços com precisão, livres de influências externas.</li>
          </ul>
        </GlassCard>

        <GlassCard className='border border-green-50/20 bg-green-90 text-white backdrop-blur-2xl'>
          <h2 className='text-2xl font-semibold tracking-tight text-white'>
            Nossos compromissos
          </h2>
          <div className='mt-4 space-y-5 text-left text-sm leading-7 text-slate-200'>
            <div>
              <h3 className='font-semibold text-white'>Com pacientes</h3>
              <ul className='mt-2 list-disc space-y-2 pl-5'>
                <li>Garantir atendimento humanizado e respeitoso.</li>
                <li>Oferecer informações claras sobre exames e prazos.</li>
                <li>Garantir segurança e qualidade em todas as etapas laboratoriais.</li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-white'>Com colaboradores</h3>
              <ul className='mt-2 list-disc space-y-2 pl-5'>
                <li>Manter ambiente saudável, seguro e livre de discriminações.</li>
                <li>Incentivar desenvolvimento profissional e pessoal.</li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-white'>Com a sociedade</h3>
              <ul className='mt-2 list-disc space-y-2 pl-5'>
                <li>Atuar com responsabilidade ética junto a fornecedores e parceiros.</li>
                <li>Contribuir para o bem-estar da comunidade e práticas sustentáveis.</li>
              </ul>
            </div>
          </div>
        </GlassCard>

        <GlassCard title='Condutas proibidas'>
          <ul className='list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600'>
            <li>Qualquer forma de preconceito, discriminação ou assédio.</li>
            <li>Uso indevido de informações de pacientes ou parceiros.</li>
            <li>Negligência que comprometa qualidade ou segurança dos resultados.</li>
            <li>Aceitação ou oferta de vantagens indevidas.</li>
          </ul>
        </GlassCard>

        <GlassCard className='bg-white/60'>
          <h2 className='text-2xl font-semibold tracking-tight text-slate-950'>
            Canal de ética
          </h2>
          <p className='mt-4 text-sm leading-7 text-slate-600'>
            Relate condutas inadequadas ou sugestões pelo nosso canal seguro e sigiloso. Todas as denúncias são analisadas com imparcialidade e discrição.
          </p>
        </GlassCard>
      </div>
    </PageShell>
  );
};

export default Ethics;
