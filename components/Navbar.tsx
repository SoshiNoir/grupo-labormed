'use client';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InstagramLogo, YoutubeLogo } from 'phosphor-react';
import { useEffect, useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTitleBarVisible, setIsTitleBarVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState('');
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 50;
    setIsScrolled(scrolled);
    setIsTitleBarVisible(!scrolled);
  };

  const updatePadding = () => {
    const navHeight =
      (document.getElementById('navbar')?.offsetHeight || 0) / 2;
    document.body.style.paddingTop = `${navHeight}px`;
  };

  useEffect(() => {
    const handleInitialScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setIsTitleBarVisible(!scrolled);
    };

    // Ajusta o estado inicial baseado na posição do scroll
    handleInitialScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updatePadding);
    updatePadding();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePadding);
    };
  }, []);

  useEffect(() => {
    const path = pathname.replace(/\/$/, '');
    setCurrentPath(path);
    const page = NAV_LINKS.find((link) => link.href === path)?.label || '';
    setCurrentPage(page);
  }, [pathname]);

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

  const titleBarBgClass =
    currentPath === '/' ? 'bg-transparent' : 'bg-green-90';

  const shouldRenderTitleBar = currentPage && currentPath !== '/';

  return (
    <nav
      id='navbar'
      className='fixed top-0 left-0 right-0 z-30 bg-gray-100 shadow w-full'
    >
      <div className='max-w-screen-xl mx-auto p-4 flex-row sm:flex-col items-center'>
        <div className='flex justify-center items-center'>
          <Link href='/'>
            <Image
              src='/horizontalcrop.png'
              alt='logo'
              width={isScrolled ? 253 : 506}
              height={isScrolled ? 144 : 288}
              className='transition-all duration-300 object-contain'
            />
          </Link>
          <div className='flex justify-end items-center ml-auto lg:hidden'>
            <Image
              src='menu.svg'
              alt='menu'
              width={32}
              height={32}
              className='inline-block cursor-pointer'
              onClick={toggleMenu}
            />
          </div>
        </div>

        <div className='mt-4 w-full'>
          <ul className='hidden h-full lg:flex justify-between w-full items-center'>
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link href={link.href}>
                  <span className='tracking-wider regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-90 lg:regular-16 lg:text-center 3xl:regular-18'>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Button
                type='button'
                title='Resultados'
                variant='btn_dark_green'
                href='https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx'
                target='_blank'
              />
            </li>
            <li>
              <Link href='https://www.instagram.com/labor_med/' target='_blank'>
                <InstagramLogo
                  size={32}
                  color='#34D399'
                  className='cursor-pointer transition-all hover:text-green-500'
                />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.youtube.com/@Labor_med/videos'
                target='_blank'
              >
                <YoutubeLogo
                  size={32}
                  color='#34D399'
                  className='cursor-pointer transition-all hover:text-green-500'
                />
              </Link>
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <div
            className={`fixed top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.95)] shadow-lg z-40 lg:hidden flex flex-col transition-transform duration-1000 ease-out ${
              isMenuOpen
                ? 'transform translate-y-0'
                : 'transform -translate-y-full'
            }`}
          >
            <div className='flex justify-end p-4'>
              <button className='text-gray-600 text-2xl' onClick={toggleMenu}>
                &times;
              </button>
            </div>
            <ul className='flex flex-col items-center justify-center h-full'>
              {NAV_LINKS.map((link) => (
                <li key={link.key} className='py-4'>
                  <Link href={link.href} onClick={closeMenu}>
                    <span className='block text-gray-900 hover:text-green-700 text-lg sm:text-base cursor-pointer'>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li className='py-4'>
                <Button
                  type='button'
                  title='Resultados'
                  variant='btn_dark_green'
                  href='https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx'
                  target='_blank'
                />
              </li>
              <li className='py-4'>
                <Link
                  href='https://www.instagram.com/labor_med/'
                  target='_blank'
                >
                  <InstagramLogo
                    size={32}
                    color='#34D399'
                    className='cursor-pointer transition-all hover:text-green-500'
                  />
                </Link>
              </li>
              <li className='py-4'>
                <Link
                  href='https://www.youtube.com/@Labor_med/videos'
                  target='_blank'
                >
                  <YoutubeLogo
                    size={32}
                    color='#34D399'
                    className='cursor-pointer transition-all hover:text-green-500'
                  />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {shouldRenderTitleBar && (
        <div
          className={`w-full h-[3rem] flex justify-center transition-all duration-1000 ease-out ${titleBarBgClass} ${
            isTitleBarVisible ? 'block' : 'hidden'
          }`}
        >
          <div className='flex items-center'>
            <h1 className='text-3xl text-gray-10'>{currentPage}</h1>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
