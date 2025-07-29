import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`bg-gray-100 rounded-lg p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;