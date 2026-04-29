'use client';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Doubts from '@/components/Doubts';
import Satisfaction from '@/components/Satisfaction';
import SatisfactionSurvey from '@/components/SatisfactionSurvey';
import SectionHeading from '@/components/SectionHeading';
import Services from '@/components/Services';
import Slider from '@/components/Slider';
import WhatsappButton from '@/components/WhatsappButton';
import { HERO_SLIDES } from '@/constants';
import { useState } from 'react';

const HomePage = () => {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [surveyInitialRating, setSurveyInitialRating] = useState('');
  const whatsappBaseUrl = 'https://wa.me/551637618555';

  const buildWhatsappUrl = (message?: string) => {
    if (!message) {
      return whatsappBaseUrl;
    }

    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  const attendanceOptions = [
    {
      title: 'Estou com sintomas gripais',
      message: 'Olá, estou com sintomas gripais e preciso de orientação.',
    },
    {
      title: 'Quero fazer um Check-up',
      message: 'Olá, quero agendar um check-up.',
    },
    {
      title: 'Preciso de exames específicos',
      message: 'Olá, preciso de exames específicos e gostaria de orientação.',
    },
    {
      title: 'Quero coleta domiciliar',
      message: 'Olá, quero agendar coleta domiciliar.',
    },
  ];

  const experiencePoints = [
    'Resultados rápidos e confiáveis',
    'Atendimento humanizado',
    'Estrutura moderna e segura',
    'Coleta domiciliar',
  ];

  return (
    <div className='space-y-8 pb-8'>
      <Slider slides={HERO_SLIDES} />

      <Card
        leftContent={
          <div className='flex h-full flex-col justify-between gap-6'>
            <div>
              <span className='inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900'>
                Grupo Labormed
              </span>
              <h1 className='mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl'>
                Cuide da sua saúde com resultados rápidos e confiáveis.
              </h1>
              <p className='mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg'>
                Há mais de 40 anos referência em exames laboratoriais com
                tecnologia, precisão e atendimento humanizado.
              </p>

              <div className='mt-8 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 p-5'>
                <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#b08943]'>
                  Experiência
                </p>
                <h2 className='mt-4 text-2xl font-semibold text-slate-950'>
                  Porque escolher o Laboratório Labor Med?
                </h2>
                <ul className='mt-5 grid gap-x-5 gap-y-3 text-sm leading-7 text-slate-700 md:grid-cols-2'>
                  {experiencePoints.map((point) => (
                    <li key={point} className='flex gap-3'>
                      <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b08943]' />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className='mt-5 text-sm font-medium uppercase tracking-[0.22em] text-slate-500'>
                Atendimento ágil * Coleta segura * Resultados online
              </p>
            </div>
          </div>
        }
        rightContent={
          <div className='flex h-full w-full flex-col gap-4'>
            <div className='rounded-[1.5rem] border border-white/70 bg-emerald-950 p-7 text-white shadow-[0_20px_50px_-35px_rgba(6,78,59,0.75)]'>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200'>
                Atendimento
              </p>
              <h2 className='mt-4 text-2xl font-semibold'>
                Como Podemos te ajudar hoje?
              </h2>
              <div className='mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-1'>
                {attendanceOptions.map((option) => (
                  <Button
                    key={option.title}
                    title={option.title}
                    href={buildWhatsappUrl(option.message)}
                    target='_blank'
                    variant='border border-white/15 bg-white/10 text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/15'
                  />
                ))}
              </div>
            </div>

            <div className='rounded-[1.5rem] border border-white/70 bg-white p-7 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)]'>
              <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-1'>
                <Button
                  title='Agendar exame'
                  href={buildWhatsappUrl('Olá, quero agendar um exame.')}
                  target='_blank'
                  variant='bg-emerald-950 text-white shadow-lg shadow-emerald-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-900'
                  paddingVariant='spacious'
                />
                <Button
                  title='Ver resultados'
                  href={buildWhatsappUrl('Olá, quero ver meus resultados.')}
                  target='_blank'
                  variant='border border-[#d2ae6d]/40 bg-[#d2ae6d]/10 text-slate-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#d2ae6d]/20'
                  paddingVariant='spacious'
                />
                <div className='md:col-span-2 lg:col-span-1'>
                <WhatsappButton
                  phoneNumber='551637618555'
                  label='Falar no WhatsApp'
                />
                </div>
              </div>
            </div>
          </div>
        }
      />

      <Card
        leftContent={
          <div className='flex w-full flex-col gap-5'>
            <SectionHeading
              eyebrow='Resultados'
              title='Resultados online e retirada presencial com orientação clara'
              description='Acesse seus exames pelo portal do laboratório ou consulte as regras para retirada presencial por paciente e terceiros.'
            />
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5'>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-900'>
                  Online
                </p>
                <p className='mt-3 text-sm leading-7 text-slate-700'>
                  Consulte laudos com segurança, praticidade e acesso protegido.
                </p>
              </div>
              <div className='rounded-[1.5rem] border border-[#d2ae6d]/40 bg-[#d2ae6d]/10 p-5'>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#8c6b33]'>
                  Presencial
                </p>
                <p className='mt-3 text-sm leading-7 text-slate-700'>
                  Confira a documentação necessária para retirada no balcão.
                </p>
              </div>
            </div>
          </div>
        }
        rightContent={
          <div className='flex h-full w-full flex-col justify-between gap-4'>
            <div className='grid w-full max-w-[32rem] gap-4 md:grid-cols-2'>
              <div className='rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-5'>
                <h3 className='text-base font-semibold text-slate-950'>
                  Retirada pelo cliente
                </h3>
                <p className='mt-3 text-sm leading-7 text-slate-600'>
                  Apresente comprovante de coleta e documento de identificação.
                </p>
              </div>
              <div className='rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-5'>
                <h3 className='text-base font-semibold text-slate-950'>
                  Retirada por terceiros
                </h3>
                <p className='mt-3 text-sm leading-7 text-slate-600'>
                  Leve autorização, comprovante de coleta e documento do
                  paciente.
                </p>
              </div>
            </div>
            <div className='w-full max-w-[36rem] rounded-[1.5rem] border border-slate-200 bg-white/80 p-5'>
              <div className='grid gap-3'>
                <Button
                  title='Agendar exame'
                  href={buildWhatsappUrl('Olá, quero agendar um exame.')}
                  target='_blank'
                  variant='bg-emerald-950 text-white shadow-lg shadow-emerald-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-900'
                />
                <Button
                  title='Ver resultados'
                  href={buildWhatsappUrl('Olá, quero ver meus resultados.')}
                  target='_blank'
                  variant='border border-[#d2ae6d]/40 bg-[#d2ae6d]/10 text-slate-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#d2ae6d]/20'
                />
                <WhatsappButton
                  phoneNumber='551637618555'
                  label='Falar no WhatsApp'
                />
              </div>
            </div>
          </div>
        }
      />

      <Services />
      <Satisfaction
        onSelectRating={(rating) => {
          setSurveyInitialRating(rating);
          setIsSurveyOpen(true);
        }}
      />
      {isSurveyOpen ? (
        <SatisfactionSurvey
          initialRating={surveyInitialRating}
          onClose={() => {
            setIsSurveyOpen(false);
            setSurveyInitialRating('');
          }}
        />
      ) : null}
      <Doubts />
    </div>
  );
};

export default HomePage;
