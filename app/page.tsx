'use client';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Doubts from '@/components/Doubts';
import Satisfaction from '@/components/Satisfaction';
import SatisfactionSurvey from '@/components/SatisfactionSurvey';
import Services from '@/components/Services';
import SectionHeading from '@/components/SectionHeading';
import Slider from '@/components/Slider';
import WhatsappButton from '@/components/WhatsappButton';
import { HERO_SLIDES, LAB_PHOTOS } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';

const HomePage = () => {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [surveyInitialRating, setSurveyInitialRating] = useState('');

  return (
    <div className='space-y-8 pb-8'>
      <Slider slides={HERO_SLIDES} />

      <section className='grid gap-5 lg:grid-cols-[1.25fr_0.75fr]'>
        <div className='rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.55)] backdrop-blur'>
          <span className='inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900'>
            Grupo Labormed
          </span>
          <h1 className='mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl'>
            Diagnóstico clínico com confiança, agilidade e atendimento próximo.
          </h1>
          <p className='mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg'>
            Há mais de 37 anos, o Grupo Labormed realiza análises clínicas para
            pacientes particulares, convênios, empresas e saúde ocupacional,
            com atendimento humanizado e unidades em Batatais e Altinópolis.
          </p>
          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <Button
              title='Consultar Resultados'
              href='https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx'
              target='_blank'
              variant='bg-emerald-950 text-white shadow-lg shadow-emerald-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-900'
              paddingVariant='spacious'
            />
            <Button
              title='Ver Unidades'
              href='/units'
              paddingVariant='spacious'
            />
          </div>
        </div>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-1'>
          <div className='rounded-[2rem] border border-white/70 bg-emerald-950 p-7 text-white shadow-[0_28px_70px_-40px_rgba(6,78,59,0.85)]'>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200'>
              Atendimento
            </p>
            <h2 className='mt-4 text-2xl font-semibold'>Fale com nossa equipe</h2>
            <p className='mt-3 text-sm leading-7 text-emerald-100/85'>
              Tire dúvidas sobre preparo, agende exames e receba orientação
              rápida pelo WhatsApp.
            </p>
            <div className='mt-6'>
              <WhatsappButton
                phoneNumber='551637618555'
                label='WhatsApp: 16 3761-8555'
              />
            </div>
          </div>
          <div className='rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_28px_70px_-40px_rgba(15,23,42,0.55)] backdrop-blur'>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#b08943]'>
              Estrutura
            </p>
            <h2 className='mt-4 text-2xl font-semibold text-slate-950'>
              Três unidades, equipe qualificada e rotina técnica segura.
            </h2>
            <p className='mt-3 text-sm leading-7 text-slate-600'>
              Recepções organizadas, coleta humanizada e núcleo técnico
              operacional para mais precisão, agilidade e confiança.
            </p>
          </div>
        </div>
      </section>

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
                  Leve autorização, comprovante de coleta e documento do paciente.
                </p>
              </div>
            </div>
            <div className='w-full max-w-[36rem] rounded-[1.5rem] border border-slate-200 bg-white/80 p-5'>
              <div className='flex flex-col items-center justify-center gap-3 sm:flex-row'>
                <Button
                  title='Portal de Resultados'
                  href='https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx'
                  target='_blank'
                  variant='bg-emerald-950 text-white shadow-lg shadow-emerald-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-900'
                />
                <div className='min-w-[220px]'>
                  <WhatsappButton
                    phoneNumber='551637618555'
                    label='Precisa de ajuda?'
                  />
                </div>
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

      <section className='mt-20 space-y-8'>
        <SectionHeading
          eyebrow='Ambiente'
          title='Estrutura preparada para acolher com organização e cuidado'
          description='Conheça alguns ambientes do Labormed, com espaços pensados para atendimento, coleta e rotina laboratorial.'
        />
        <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          {LAB_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className='group relative h-[280px] overflow-hidden rounded-[1.75rem] border border-white/60 bg-slate-950 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.75)]'
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className='object-cover transition duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent' />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
