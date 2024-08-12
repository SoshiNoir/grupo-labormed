import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type?: 'button' | 'submit';
  title: string;
  icon?: string;
  variant?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}

const Button = ({ type = 'button', title, icon, variant, onClick, href, target }: ButtonProps) => {
  const buttonContent = (
    <>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-14 md:bold-16 cursor-pointer">{title}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} passHref target={target} className={`flexCenter cursor-pointer gap-3 rounded-full md:regular-16 ${variant}`}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={`flexCenter cursor-pointer gap-3 rounded-full md:regular-16 sm:regular-14 ${variant}`}
      type={type}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
