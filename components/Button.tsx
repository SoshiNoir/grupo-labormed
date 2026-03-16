import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  type?: 'button' | 'submit';
  title: string;
  icon?: ReactNode;
  variant?: string;
  paddingVariant?: 'normal' | 'spacious';
  onClick?: () => void;
  href?: string;
  target?: string;
};

const Button = ({
  type = 'button',
  title,
  icon,
  variant = 'normal',
  paddingVariant = 'normal',
  onClick,
  href,
  target,
}: ButtonProps) => {
  const paddingClasses =
    paddingVariant === 'spacious' ? 'px-6 py-3.5' : 'px-4 py-2.5';

  const buttonContent = (
    <div className='flex w-full items-center justify-center gap-2 text-center'>
      {icon &&
        (typeof icon === 'string' ? (
          <Image src={icon} alt={title} width={20} height={20} />
        ) : (
          icon
        ))}
      <span className='whitespace-nowrap text-center text-[0.98rem] font-semibold leading-6 tracking-normal md:text-base'>
        {title}
      </span>
    </div>
  );

  const baseClasses =
    variant === 'normal'
      ? 'border border-emerald-200 bg-white text-emerald-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-lg'
      : variant;

  const sharedClasses = `inline-flex items-center justify-center rounded-full ${paddingClasses} ${baseClasses}`;
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={sharedClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={sharedClasses} type={type} onClick={onClick}>
      {buttonContent}
    </button>
  );
};

export default Button;
