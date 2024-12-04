import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit";
  title: string;
  icon?: ReactNode;
  variant?: string;
  paddingVariant?: "normal" | "spacious";
  onClick?: () => void;
  href?: string;
  target?: string;
};

const Button = ({
  type = "button",
  title,
  icon,
  variant = "normal", // Variante padrão
  paddingVariant = "normal",
  onClick,
  href,
  target,
}: ButtonProps) => {
  const paddingClasses =
    paddingVariant === "spacious" ? "px-6 py-3" : "px-4 py-2";

  const buttonContent = (
    <div className="flex items-center gap-2">
      {icon && (typeof icon === "string" ? <Image src={icon} alt={title} width={24} height={24} /> : icon)}
      <span className="bold-14 md:bold-16 cursor-pointer">{title}</span>
    </div>
  );

  const baseClasses =
    variant === "normal"
      ? "bg-white text-green-90 font-bold border-2 border-transparent hover:border-green-500 hover:shadow-inner hover:shadow-green-500 transition-all duration-200"
      : variant;

  if (href) {
    return (
      <Link
        href={href}
        passHref
        target={target}
        className={`flexCenter gap-3 rounded-full md:regular-16 ${paddingClasses} ${baseClasses}`}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={`flexCenter gap-3 rounded-full md:regular-16 sm:regular-14 ${paddingClasses} ${baseClasses}`}
      type={type}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
