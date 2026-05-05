import PageShell from '@/components/PageShell';
import Image from 'next/image';

const Certifications = () => {
  return (
    <PageShell
      eyebrow='Certificações'
      title='Compromisso contínuo com padrões de qualidade.'
      description='As certificações reforçam práticas seguras, precisão analítica e um nível elevado de confiança para pacientes e profissionais de saúde.'
      imageSrc='/bg-slide-1.jpg'
      imageAlt='Certificações Labormed'
    >
      < className='rounded-[1rem] border border-white/70 bg-white/80 p-3 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.55)] backdrop-blur md:p-8'>
        <div className='grid gap-6 lg:grid-cols-[0.85fr_1.15fr]'>
          <div className='space-y-4'>
            <span className='inline-flex rounded-full border border-[#d2ae6d]/40 bg-[#d2ae6d]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#8c6b33]'>
              Qualidade reconhecida
            </span>
            <h2 className='text-3xl font-semibold tracking-tight text-slate-950'>
              Certificação em destaque
            </h2>
            <p className='text-base leading-8 text-slate-600'>
              O laboratório mantém uma rotina orientada por segurança, precisão
              e melhoria contínua. Esta apresentação substitui o bloco antigo e
              deixa a certificação com mais peso visual.
            </p>
          </div>
          <div className='overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-inner'>
            <Image
              src='/IBG.jpg'
              alt='Certificação Labormed'
              width={1200}
              height={900}
              className='h-auto w-full rounded-[1.25rem] object-contain'
              priority
            />
          </div>
        </div>
      </>
    </PageShell>
  );
};

export default Certifications;
