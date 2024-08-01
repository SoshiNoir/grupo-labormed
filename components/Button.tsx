import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type?: 'button' | 'submit'; // `type` é opcional agora, já que `href` pode ser usado para navegação
  title: string;
  icon?: string;
  variant?: string;
  onClick?: () => void;
  href?: string;  // Propriedade opcional href
}

const Button = ({ type = 'button', title, icon, variant, onClick, href }: ButtonProps) => {
  const buttonContent = (
    <>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-14 md:bold-16 cursor-pointer">{title}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <button
          className={`flexCenter cursor-pointer gap-3 rounded-full md:regular-16 ${variant}`}
          type={type}
          onClick={onClick}
        >
          {buttonContent}
        </button>
      </Link>
    );
  }

  return (
    <button
      className={`flexCenter cursor-pointer gap-3 rounded-full md:regular-16 ${variant}`}
      type={type}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
