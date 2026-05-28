'use client';

import { NAV_LINKS, RESULTS_URL } from '@/constants';
import { InstagramLogo, List, X, YoutubeLogo } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <nav
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'pt-2 md:pt-4' : 'pt-2 md:pt-6'
      }`}
    >
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-slate-950/40 backdrop-blur-md lg:hidden'
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <div
          className={`relative flex items-center justify-between rounded-[1rem] border px-3 py-2 transition-all duration-500 ${
            isScrolled
              ? 'border-slate-200 bg-white/90 shadow-xl shadow-slate-200/50 backdrop-blur-xl'
              : 'border-white/0 bg-transparent'
          }`}
        >
          {/* Logo Section - Reduced width to save space */}
          <div className='flex w-[130px] md:w-[180px] items-center shrink-0'>
            <Link
              href='/'
              className='relative z-10 transition-transform hover:scale-[1.02]'
            >
              <Image
                src='/horizontalcrop.png'
                alt='Grupo Labormed'
                width={180}
                height={45}
                className={`h-auto transition-all duration-500 ${
                  isScrolled ? 'scale-90 origin-left' : 'scale-100 origin-left'
                }`}
                priority
              />
            </Link>
          </div>

          {/* Centered Navigation Links - Tightened spacing */}
          <div className='hidden lg:flex flex-1 justify-center px-2'>
            <ul className='flex items-center gap-0.5 rounded-full border border-slate-100 bg-slate-50/50 p-1'>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.key} className='relative'>
                    <Link
                      href={link.href}
                      className={`relative flex items-center justify-center whitespace-nowrap px-3 xl:px-4 py-2 text-[13px] xl:text-sm font-semibold transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId='nav-pill'
                          initial={false}
                          transition={{
                            type: 'spring',
                            duration: 0.5,
                            bounce: 0.2,
                          }}
                          className='absolute inset-0 z-0 rounded-full bg-emerald-950 shadow-md'
                        />
                      )}
                      <span className='relative z-10'>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Actions - Optimized width and spacing */}
          <div className='hidden lg:flex items-center gap-2 xl:gap-4 shrink-0 justify-end min-w-fit'>
            <div className='flex items-center gap-2 border-r border-slate-200 pr-2 xl:pr-4'>
              <Link
                href='https://www.instagram.com/labor_med/'
                target='_blank'
                className='text-slate-400 hover:text-emerald-600 transition-colors'
              >
                <InstagramLogo size={18} weight='bold' />
              </Link>
              <Link
                href='https://www.youtube.com/@Labor_med/videos'
                target='_blank'
                className='text-slate-400 hover:text-emerald-600 transition-colors'
              >
                <YoutubeLogo size={18} weight='bold' />
              </Link>
            </div>
            <Button
              title='Resultados'
              href={RESULTS_URL}
              target='_blank'
              variant='bg-emerald-600 text-white font-bold px-4 xl:px-6 py-2 text-xs xl:text-sm rounded-full hover:bg-emerald-700 transition-all'
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type='button'
            onClick={toggleMenu}
            className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border transition-all lg:hidden ${
              isMenuOpen
                ? 'border-emerald-100 bg-emerald-50 text-emerald-900'
                : 'border-slate-200 bg-white text-slate-900'
            }`}
          >
            {isMenuOpen ? (
              <X size={20} weight='bold' />
            ) : (
              <List size={20} weight='bold' />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className='absolute inset-x-4 top-[calc(100%+12px)] z-[101] lg:hidden'
            >
              <div className='rounded-[1rem] border border-slate-200 bg-white p-3 sm:p-6 shadow-2xl text-center'>
                <ul className='grid gap-2'>
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={link.key}>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`flex items-center justify-center whitespace-nowrap rounded-xl px-5 py-3 text-base font-bold transition-all active:scale-[0.98] ${
                            isActive
                              ? 'bg-emerald-50 text-emerald-900 border border-emerald-100'
                              : 'bg-slate-50 text-slate-600'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className='mt-6 pt-6 border-t border-slate-100'>
                  <Button
                    title='Resultados Online'
                    href={RESULTS_URL}
                    target='_blank'
                    variant='w-full bg-emerald-950 text-white font-bold py-4 rounded-xl flex justify-center shadow-lg'
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
