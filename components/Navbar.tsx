'use client';

import { NAV_LINKS } from '@/constants';
import {
  InstagramLogo,
  List,
  X,
  YoutubeLogo,
} from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav id='navbar' className='fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-5'>
      <div
        className={`mx-auto max-w-7xl rounded-[1.75rem] border px-4 py-3 transition duration-300 md:px-6 ${
          isScrolled
            ? 'border-white/70 bg-white/85 shadow-[0_22px_80px_-42px_rgba(15,23,42,0.6)] backdrop-blur-xl'
            : 'border-white/40 bg-white/70 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.45)] backdrop-blur-lg'
        }`}
      >
        <div className='flex items-center gap-4'>
          <Link href='/' className='shrink-0'>
            <Image
              src='/horizontalcrop.png'
              alt='Grupo Labormed'
              width={isScrolled ? 210 : 250}
              height={80}
              className='h-auto w-[190px] transition-all duration-300 md:w-[220px]'
              priority
            />
          </Link>

          <div className='hidden flex-1 items-center justify-center lg:flex'>
            <ul className='flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 p-1.5 shadow-inner'>
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;

                return (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        active
                          ? 'bg-emerald-950 text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='ml-auto hidden items-center gap-3 lg:flex'>
            <Link
              href='https://www.instagram.com/labor_med/'
              target='_blank'
              className='rounded-full border border-slate-200 bg-white/70 p-2.5 text-slate-700 transition hover:border-emerald-300 hover:text-emerald-900'
              aria-label='Instagram'
            >
              <InstagramLogo size={20} />
            </Link>
            <Link
              href='https://www.youtube.com/@Labor_med/videos'
              target='_blank'
              className='rounded-full border border-slate-200 bg-white/70 p-2.5 text-slate-700 transition hover:border-emerald-300 hover:text-emerald-900'
              aria-label='YouTube'
            >
              <YoutubeLogo size={20} />
            </Link>
            <Button
              type='button'
              title='Resultados'
              variant='bg-emerald-950 text-white shadow-lg shadow-emerald-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-900'
              href='https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx'
              target='_blank'
            />
          </div>

          <button
            type='button'
            className='ml-auto rounded-full border border-slate-200 bg-white/80 p-3 text-slate-700 lg:hidden'
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className='fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm lg:hidden'>
          <div className='absolute inset-x-3 top-24 rounded-[1.75rem] border border-white/70 bg-white p-5 shadow-2xl'>
            <ul className='space-y-2'>
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-2xl px-4 py-3 text-base font-medium transition ${
                      pathname === link.href
                        ? 'bg-emerald-950 text-white'
                        : 'bg-slate-50 text-slate-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='mt-5 flex items-center gap-3'>
              <Button
                type='button'
                title='Resultados'
                variant='bg-emerald-950 text-white shadow-lg shadow-emerald-950/20'
                href='https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx'
                target='_blank'
              />
              <Link
                href='https://www.instagram.com/labor_med/'
                target='_blank'
                className='rounded-full border border-slate-200 p-3 text-slate-700'
                aria-label='Instagram'
              >
                <InstagramLogo size={20} />
              </Link>
              <Link
                href='https://www.youtube.com/@Labor_med/videos'
                target='_blank'
                className='rounded-full border border-slate-200 p-3 text-slate-700'
                aria-label='YouTube'
              >
                <YoutubeLogo size={20} />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
