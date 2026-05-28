import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const DEFAULT_PHONE_NUMBER = '16992023156';

const FloatingWhatsappBubble = () => {
  const whatsappUrl = `https://wa.me/${DEFAULT_PHONE_NUMBER}`;

  return (
    <Link
      aria-label='Falar no WhatsApp'
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-[#1fb85a] focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2 focus:ring-offset-white md:bottom-6 md:right-6 md:h-16 md:w-16'
    >
      <FaWhatsapp className='h-7 w-7 md:h-8 md:w-8' />
    </Link>
  );
};

export default FloatingWhatsappBubble;
