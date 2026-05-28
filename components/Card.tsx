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
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-12 ${className}`}
    >
      <div className='lg:col-span-7 space-y-10'>{leftContent}</div>
      <div className='lg:col-span-5 space-y-4'>{rightContent}</div>
    </div>
  );
};

export default Card;
