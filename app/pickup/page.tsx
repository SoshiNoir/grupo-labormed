import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';
import PageShell from '@/components/PageShell';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Pickup = () => {
  return (
    <PageShell
      eyebrow='Coleta'
      title='Coleta domiciliar com a mesma linguagem visual do restante do site.'
      description='A página foi reestruturada em blocos translúcidos, com leitura melhor e canais de contato mais destacados.'
      imageSrc='/banner3.png'
      imageAlt='Serviço de coleta domiciliar'
    >
      <div className='grid gap-5 lg:grid-cols-[0.95fr_1.05fr]'>
        <GlassCard className='border border-green-50/20 bg-green-90 text-white backdrop-blur-2xl'>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Entre em contato pelos nossos canais de atendimento
          </h2>
          <p className='mt-4 text-sm leading-7 text-emerald-100/85'>
            Agende com a equipe e confirme disponibilidade para sua região.
          </p>
          <div className='mt-6 flex flex-col gap-4'>
            <Button
              title='Telefone: (16) 3761-3311'
              icon={<FaPhoneAlt className='text-lg text-green-500' />}
              variant='border border-white/20 bg-white/95 text-emerald-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white'
              href='tel:1637613311'
            />
            <Button
              title='WhatsApp: (16) 3761-8555'
              icon={<FaWhatsapp className='text-lg text-green-500' />}
              variant='border border-white/20 bg-white/95 text-emerald-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white'
              href='https://wa.me/551637618555'
              target='_blank'
            />
          </div>
        </GlassCard>

        <GlassCard title='Exames indisponíveis para coleta domiciliar'>
          <ul className='list-disc space-y-2 pl-5 text-base leading-8 text-slate-600'>
            <li>Toxicológico</li>
            <li>Exame de paternidade</li>
            <li>Espermograma</li>
          </ul>
        </GlassCard>
      </div>
    </PageShell>
  );
};

export default Pickup;
