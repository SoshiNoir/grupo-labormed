import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./Button";

interface WhatsappButtonProps {
  phoneNumber: string;
  label: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ phoneNumber, label }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Button
      title={label}
      icon={<FaWhatsapp className="text-lg text-green-500" />}
      variant="bg-white text-green-90 font-bold border-2 border-transparent hover:border-green-500 hover:shadow-inner hover:shadow-green-500 transition-all duration-200"
      href={whatsappUrl}
      target="_blank"
    />
  );
};

export default WhatsappButton;
