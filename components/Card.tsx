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
      className={`relative my-12 flex flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.55)] backdrop-blur ${className} md:flex-row`}
    >
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(217,119,6,0.14),_transparent_35%)]' />
      <div className='relative flex w-full p-6 md:w-3/5 md:p-8'>{leftContent}</div>
      <div className='relative flex w-full border-t border-slate-200/80 p-6 md:w-2/5 md:border-l md:border-t-0 md:p-8'>
        {rightContent}
      </div>
    </div>
  );
};

export default Card;
