'use client';

import sendMail from '@/app/api/mailProvider/implementations/MailerProvider';
import {
  CircleNotch,
  SmileyMeh,
  SmileySad,
  SmileyWink,
  X,
} from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ratingOptions = [
  {
    value: '1',
    label: 'Muito insatisfeito',
    icon: SmileySad,
    accent: 'text-rose-600 bg-rose-50 border-rose-100',
  },
  {
    value: '3',
    label: 'Neutro',
    icon: SmileyMeh,
    accent: 'text-[#8c6b33] bg-[#fdf8ec] border-[#d2ae6d]/20',
  },
  {
    value: '5',
    label: 'Muito satisfeito',
    icon: SmileyWink,
    accent: 'text-emerald-700 bg-emerald-50 border-emerald-100',
  },
];

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildEmailTemplate = ({
  name,
  email,
  rating,
  comments,
}: {
  name: string;
  email: string;
  rating: string;
  comments: string;
}) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeRating = escapeHtml(rating);
  const safeComments = escapeHtml(comments).replace(/\n/g, '<br />');

  return `
    <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:24px;color:#0f172a">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:20px;overflow:hidden">
        <div style="background:#1d5d43;color:#fff;padding:24px 28px">
          <h1 style="margin:0;font-size:22px;line-height:1.2">Pesquisa de Satisfação</h1>
        </div>
        <div style="padding:28px">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.7"><strong>Nome:</strong> ${safeName}</p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.7"><strong>E-mail:</strong> ${safeEmail}</p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.7"><strong>Avaliação:</strong> ${safeRating}</p>
          <div style="font-size:15px;line-height:1.7">
            <strong>Mensagem:</strong>
            <div style="margin-top:8px;padding:16px;border-radius:14px;background:#f8fafc;border:1px solid #e2e8f0">${safeComments || 'Sem comentário adicional.'}</div>
          </div>
        </div>
      </div>
    </div>
  `;
};

const SatisfactionSurvey: React.FC<{
  onClose: () => void;
  initialRating?: string;
}> = ({ onClose, initialRating = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(initialRating);
  const [comments, setComments] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setRating(initialRating);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [initialRating]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const emailTemplate = buildEmailTemplate({
        name,
        email,
        rating,
        comments,
      });

      await sendMail(emailTemplate);
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const modalContent = (
    <div
      className='fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-md transition-all'
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className='relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl lg:flex'>
        <button
          onClick={onClose}
          className='absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900'
        >
          <X size={20} weight='bold' />
        </button>

        <div className='relative flex flex-col justify-between bg-emerald-900 p-8 text-white lg:w-[40%] lg:p-12'>
          <div className='relative z-10'>
            <span className='inline-block rounded-full bg-emerald-800/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300'>
              Feedback
            </span>
            <h2 className='mt-6 text-3xl font-bold leading-tight'>
              Como foi sua visita hoje?
            </h2>
          </div>
          <div className='relative z-10 mt-12 space-y-3'>
            {ratingOptions.map((opt) => (
              <button
                key={opt.value}
                type='button'
                onClick={() => setRating(opt.value)}
                className={`flex w-full items-center gap-4 rounded-2xl border p-4 transition-all ${rating === opt.value ? 'border-emerald-400/50 bg-emerald-800 shadow-lg' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${opt.accent}`}
                >
                  <opt.icon size={24} weight='duotone' />
                </div>
                <span className='text-sm font-semibold'>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Panel: Form Content */}
        <form onSubmit={handleSubmit} className='flex-1 p-8 lg:p-12'>
          <div className='grid gap-6 md:grid-cols-2'>
            {/* Name Field */}
            <div className='space-y-2'>
              <label className='text-xs font-bold uppercase tracking-wider text-slate-400'>
                Nome Completo
              </label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Ex: João Silva'
                className='w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-300 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5'
                required
              />
            </div>

            {/* Email Field */}
            <div className='space-y-2'>
              <label className='text-xs font-bold uppercase tracking-wider text-slate-400'>
                E-mail para contato
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='joao@email.com'
                className='w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-300 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5'
                required
              />
            </div>
          </div>

          {/* Rating Dropdown */}
          <div className='mt-6 space-y-2'>
            <label className='text-xs font-bold uppercase tracking-wider text-slate-400'>
              Avaliação Geral
            </label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className='w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white'
              required
            >
              <option value=''>Selecione uma nota...</option>
              <option value='5'>5 - Excelente</option>
              <option value='4'>4 - Bom</option>
              <option value='3'>3 - Regular</option>
              <option value='2'>2 - Ruim</option>
              <option value='1'>1 - Muito Ruim</option>
            </select>
          </div>

          {/* Comments Area */}
          <div className='mt-6 space-y-2'>
            <label className='text-xs font-bold uppercase tracking-wider text-slate-400'>
              Sua mensagem
            </label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder='Conte-nos um pouco mais sobre sua experiência...'
              className='min-h-[120px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5'
              rows={4}
            />
          </div>

          {/* Action Button */}
          <button
            type='submit'
            disabled={isSending}
            className='mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-emerald-600/40 disabled:opacity-70 disabled:cursor-not-allowed'
          >
            {isSending ? (
              <>
                <CircleNotch size={20} className='animate-spin' />
                Enviando...
              </>
            ) : (
              'Enviar Avaliação'
            )}
          </button>
        </form>
      </div>
    </div>
  );

  return mounted ? createPortal(modalContent, document.body) : null;
};

export default SatisfactionSurvey;
