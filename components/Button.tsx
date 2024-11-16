import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit";
  title: string;
  icon?: ReactNode;
  variant?: string; // Variantes de estilo
  paddingVariant?: "normal" | "spacious"; // Adicionada a propriedade
  onClick?: () => void;
  href?: string;
  target?: string;
};

const Button = ({
  type = "button",
  title,
  icon,
  variant,
  paddingVariant = "normal", // Definindo valor padrão
  onClick,
  href,
  target,
}: ButtonProps) => {
  // Classes de padding baseadas na variante
  const paddingClasses =
    paddingVariant === "spacious" ? "px-6 py-3" : "px-4 py-2";

  const buttonContent = (
    <div className="flex items-center gap-2">
      {icon && (typeof icon === "string" ? <Image src={icon} alt={title} width={24} height={24} /> : icon)}
      <span className="bold-14 md:bold-16 cursor-pointer">{title}</span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        passHref
        target={target}
        className={`flexCenter gap-3 rounded-full md:regular-16 ${paddingClasses} ${variant}`}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={`flexCenter gap-3 rounded-full md:regular-16 sm:regular-14 ${paddingClasses} ${variant}`}
      type={type}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
