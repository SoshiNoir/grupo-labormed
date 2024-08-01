import Image from "next/image";
import { useRouter } from 'next/router';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant?: string;
  onClick?: () => void;
}

const Button = ({ type, title, icon, variant, onClick }: ButtonProps) => {
  return (
    <button
      className={`flexCenter cursor-pointer gap-3 rounded-full md:regular-16 ${variant}`}
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-14 md:bold-16 cursor-pointer">{title}</label>
    </button>
  );
}

export default Button;
