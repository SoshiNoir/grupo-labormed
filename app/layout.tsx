import Footer from '@/components/Footer';
import FloatingWhatsappBubble from '@/components/FloatingWhatsappBubble';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { IBM_Plex_Mono, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Grupo Labormed',
  description: 'Laboratório de análises clínicas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${manrope.variable} ${plexMono.variable}`}>
        <Navbar />
        <main className='relative overflow-hidden px-0 pt-20 sm:px-3 md:px-5 md:pt-32'>
          <div className='mx-auto max-w-7xl'>{children}</div>
        </main>
        <Footer />
        <FloatingWhatsappBubble />
      </body>
    </html>
  );
}
