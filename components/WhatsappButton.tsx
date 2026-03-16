import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from './Button';

interface WhatsappButtonProps {
  phoneNumber: string;
  label: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  phoneNumber,
  label,
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Button
      title={label}
      icon={<FaWhatsapp className='text-lg text-green-500' />}
      variant='border border-emerald-200 bg-white text-emerald-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-lg'
      href={whatsappUrl}
      target='_blank'
    />
  );
};

export default WhatsappButton;
