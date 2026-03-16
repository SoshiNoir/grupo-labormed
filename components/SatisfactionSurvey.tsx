'use client';

import {
  default as MailerProvider,
  default as sendMail,
} from '@/app/api/mailProvider/implementations/MailerProvider';
import { SmileyMeh, SmileySad, SmileyWink, X } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';

const ratingOptions = [
  {
    value: '1',
    label: 'Muito insatisfeito',
    icon: SmileySad,
    accent: 'border-rose-200 bg-rose-50 text-rose-600',
  },
  {
    value: '3',
    label: 'Neutro',
    icon: SmileyMeh,
    accent: 'border-[#d2ae6d]/40 bg-[#d2ae6d]/10 text-[#8c6b33]',
  },
  {
    value: '5',
    label: 'Muito satisfeito',
    icon: SmileyWink,
    accent: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
];

const SatisfactionSurvey: React.FC<{
  onClose: () => void;
  initialRating?: string;
}> = ({ onClose, initialRating = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(initialRating);
  const [comments, setComments] = useState('');

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #4CAF50; text-align: center;">Pesquisa de Satisfação</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Avaliação:</strong> ${rating}</p>
        <p><strong>Comentários:</strong></p>
        <blockquote style="border-left: 4px solid #4CAF50; padding-left: 10px; color: #555;">
          ${comments || 'Nenhum comentário.'}
        </blockquote>
      </div>
    `;

    sendMail(emailTemplate)
      .then(() => {
        alert('Obrigado pela sua resposta!');
        onClose();
      })
      .catch((error) => {
        console.error('Erro ao enviar:', error);
        alert('Houve um problema ao enviar sua resposta. Tente novamente.');
      });
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm'
      onClick={handleBackgroundClick}
    >
      <div className='relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-[0_40px_100px_-40px_rgba(15,23,42,0.85)]'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(210,174,109,0.1),_transparent_28%)]' />

        <button
          onClick={onClose}
          className='absolute right-5 top-5 z-10 rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition hover:text-slate-950'
          aria-label='Fechar'
        >
          <X size={20} weight='bold' />
        </button>

        <div className='relative grid gap-0 md:grid-cols-[0.85fr_1.15fr]'>
          <div className='border-b border-white/10 bg-green-90 p-8 text-white md:border-b-0 md:border-r md:border-slate-200/20 md:p-10'>
            <span className='inline-flex rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200'>
              Pesquisa
            </span>
            <h2 className='mt-5 text-3xl font-semibold tracking-tight'>
              Como foi seu atendimento?
            </h2>
            <p className='mt-4 text-sm leading-7 text-emerald-50/85'>
              A pesquisa agora segue a mesma linguagem visual do site. Escolha um humor, deixe um comentário e nos ajude a melhorar.
            </p>

            <div className='mt-8 grid gap-3'>
              {ratingOptions.map((option) => {
                const Icon = option.icon;
                const selected = rating === option.value;

                return (
                  <button
                    key={option.value}
                    type='button'
                    onClick={() => setRating(option.value)}
                    className={`flex items-center gap-3 rounded-[1.25rem] border px-4 py-3 text-left transition ${
                      selected
                        ? 'border-white/35 bg-white/12'
                        : 'border-white/10 bg-white/8 hover:bg-white/12'
                    }`}
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-full border bg-white/95 ${option.accent}`}>
                      <Icon size={24} weight='fill' />
                    </div>
                    <div>
                      <p className='font-semibold text-white'>{option.label}</p>
                      <p className='text-xs text-emerald-50/70'>Clique para selecionar</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className='relative space-y-5 bg-white p-8 md:p-10'
          >
            <div>
              <label className='block text-sm font-semibold text-slate-800'>
                Nome
              </label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='mt-2 w-full rounded-[1rem] border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-slate-800'>
                E-mail
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mt-2 w-full rounded-[1rem] border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-slate-800'>
                Avaliação detalhada
              </label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className='mt-2 w-full rounded-[1rem] border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200'
                required
              >
                <option value=''>Selecione...</option>
                <option value='1'>1 - Muito Insatisfeito</option>
                <option value='2'>2 - Insatisfeito</option>
                <option value='3'>3 - Neutro</option>
                <option value='4'>4 - Satisfeito</option>
                <option value='5'>5 - Muito Satisfeito</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-semibold text-slate-800'>
                Comentários
              </label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className='mt-2 w-full rounded-[1rem] border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200'
                rows={5}
              />
            </div>

            <button
              type='submit'
              className='w-full rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-900'
            >
              Enviar resposta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionSurvey;
