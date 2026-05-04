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
import {
  CaretRight,
  House,
  MapPin,
  ShieldCheck,
  Timer,
  UserFocus,
} from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

const HomePage = () => {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [surveyInitialRating, setSurveyInitialRating] = useState('');
  const whatsappBaseUrl = 'https://wa.me/551637618555';

  const buildWhatsappUrl = (message?: string) => {
    if (!message) return whatsappBaseUrl;
    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  const attendanceOptions = [
    {
      title: 'Sintomas Gripais',
      icon: <ShieldCheck size={20} />,
      message: 'Olá, estou com sintomas gripais e preciso de orientação.',
    },
    {
      title: 'Check-up Geral',
      icon: <UserFocus size={20} />,
      message: 'Olá, quero agendar um check-up.',
    },
    {
      title: 'Exames Específicos',
      icon: <Timer size={20} />,
      message: 'Olá, preciso de exames específicos.',
    },
    {
      title: 'Coleta Domiciliar',
      icon: <House size={20} />,
      message: 'Olá, quero agendar coleta domiciliar.',
    },
  ];

  const experiencePoints = [
    'Resultados rápidos e confiáveis',
    'Atendimento humanizado',
    'Estrutura moderna e segura',
    'Coleta domiciliar premium',
  ];

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <Slider slides={HERO_SLIDES} />

      <main className='mx-auto max-w-7xl px-6 space-y-24 py-16'>
        {/* Main Introduction & Action Hub */}
        <section className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
          {/* Left: Branding & Value Proposition */}
          <div className='lg:col-span-7 space-y-10'>
            <div className='space-y-6'>
              <span className='inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 border border-emerald-100'>
                Liderança em Diagnóstico
              </span>
              <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]'>
                Sua saúde em{' '}
                <span className='text-emerald-600'>primeiro lugar</span>, com
                precisão absoluta.
              </h1>
              <p className='max-w-2xl text-lg md:text-xl text-slate-500 leading-relaxed'>
                Há mais de 40 anos, unimos tecnologia de ponta e um olhar
                humanizado para oferecer a melhor experiência em exames
                laboratoriais.
              </p>
            </div>

            {/* Why Choose Us "Bento" mini-grid */}
            <div className='rounded-3xl bg-slate-50 border border-slate-100 p-8 shadow-sm'>
              <h3 className='text-sm font-bold uppercase tracking-widest text-[#b08943] mb-6'>
                Por que escolher a Labormed?
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {experiencePoints.map((point) => (
                  <div key={point} className='flex items-center gap-3 group'>
                    <div className='h-2 w-2 rounded-full bg-[#b08943] transition-transform group-hover:scale-150' />
                    <span className='text-slate-700 font-medium'>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Quick Action Hub */}
          <div className='lg:col-span-5 space-y-4'>
            <div className='rounded-[2rem] bg-emerald-950 p-8 text-white shadow-2xl shadow-emerald-900/20'>
              <div className='mb-8'>
                <p className='text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2'>
                  Central de Atendimento
                </p>
                <h2 className='text-2xl font-bold'>Como podemos te ajudar?</h2>
              </div>

              <div className='grid gap-3'>
                {attendanceOptions.map((option) => (
                  <a
                    key={option.title}
                    href={buildWhatsappUrl(option.message)}
                    target='_blank'
                    className='flex items-center justify-between p-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all hover:translate-x-1'
                  >
                    <div className='flex items-center gap-3'>
                      <span className='text-emerald-400'>{option.icon}</span>
                      <span className='font-semibold'>{option.title}</span>
                    </div>
                    <CaretRight size={16} className='text-white/40' />
                  </a>
                ))}
              </div>
            </div>

            {/* Core Action Buttons */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3'>
              <Button
                title='Agendar Exame Agora'
                href={buildWhatsappUrl('Olá, quero agendar um exame.')}
                target='_blank'
                variant='bg-emerald-600 text-white font-bold py-5 rounded-2xl hover:bg-emerald-700 shadow-xl shadow-emerald-600/20 transition-all active:scale-95'
              />
              <WhatsappButton
                phoneNumber='551637618555'
                label='Suporte via WhatsApp'
              />
            </div>
          </div>
        </section>

        {/* Results Info Section */}
        <section className='bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-200'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div className='space-y-6'>
              <SectionHeading
                eyebrow='Acesso Facilitado'
                title='Consulte seus exames sem sair de casa'
                description='Oferecemos total flexibilidade. Acesse seus laudos digitalmente com total segurança ou retire presencialmente em uma de nossas unidades.'
              />

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <div className='flex-1 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm'>
                  <div className='h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4'>
                    <ShieldCheck size={24} weight='bold' />
                  </div>
                  <h4 className='font-bold text-slate-900 mb-2'>
                    Portal Online
                  </h4>
                  <p className='text-sm text-slate-500'>
                    Acesso criptografado e download imediato de laudos.
                  </p>
                </div>
                <div className='flex-1 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm'>
                  <div className='h-10 w-10 rounded-full bg-[#d2ae6d]/10 flex items-center justify-center text-[#8c6b33] mb-4'>
                    <MapPin size={24} weight='bold' />
                  </div>
                  <h4 className='font-bold text-slate-900 mb-2'>Presencial</h4>
                  <p className='text-sm text-slate-500'>
                    Retirada rápida com suporte técnico para dúvidas básicas.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Rules Card */}
            <div className='bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100'>
              <h3 className='text-xl font-bold text-slate-900 mb-8'>
                Regras para Retirada
              </h3>
              <div className='space-y-8'>
                <div className='relative pl-8'>
                  <div className='absolute left-0 top-1 h-full w-1 bg-emerald-500 rounded-full' />
                  <h4 className='font-bold text-slate-900 uppercase text-xs tracking-widest mb-2'>
                    O Próprio Cliente
                  </h4>
                  <p className='text-slate-600 text-sm'>
                    Necessário apresentar documento original com foto e o
                    canhoto de coleta.
                  </p>
                </div>
                <div className='relative pl-8'>
                  <div className='absolute left-0 top-1 h-full w-1 bg-[#d2ae6d] rounded-full' />
                  <h4 className='font-bold text-slate-900 uppercase text-xs tracking-widest mb-2'>
                    Por Terceiros
                  </h4>
                  <p className='text-slate-600 text-sm'>
                    Apresentar autorização assinada, documento do paciente (ou
                    cópia) e identificação do retirante.
                  </p>
                </div>
              </div>

              <div className='mt-10 pt-8 border-t border-slate-100'>
                <Button
                  title='Ver Resultados Online'
                  href={buildWhatsappUrl('Olá, quero ver meus resultados.')}
                  target='_blank'
                  variant='w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Components */}
        <Services />

        <Satisfaction
          onSelectRating={(rating) => {
            setSurveyInitialRating(rating);
            setIsSurveyOpen(true);
          }}
        />

        {isSurveyOpen && (
          <SatisfactionSurvey
            initialRating={surveyInitialRating}
            onClose={() => {
              setIsSurveyOpen(false);
              setSurveyInitialRating('');
            }}
          />
        )}

        <Doubts />
      </main>
    </div>
  );
};

export default HomePage;
