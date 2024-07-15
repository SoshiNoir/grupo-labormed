import React from 'react';

interface CardProps {
  className?: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', leftContent, rightContent }) => {
  return (
    <div className={`flex flex-col rounded-md overflow-hidden my-12 ${className} md:flex-row`}>
      <div className="flex w-full p-4 md:w-3/5">
        {leftContent}
      </div>
      <div className="flex w-full p-4 md:w-2/5">
        {rightContent}
      </div>
    </div>
  );
};

export default Card;
