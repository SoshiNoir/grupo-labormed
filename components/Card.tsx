import React from 'react';

interface CardProps {
  className?: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  className = '',
  leftContent,
  rightContent,
}) => {
  return (
    <div
      className={`relative group flex flex-col rounded-md overflow-hidden my-12 transition duration-300 ${className} md:flex-row`}
    >
      <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10' />

      <div className='flex w-full p-4 md:w-3/5 z-20'>{leftContent}</div>
      <div className='flex w-full p-4 md:w-2/5 z-20'>{rightContent}</div>
    </div>
  );
};

export default Card;
