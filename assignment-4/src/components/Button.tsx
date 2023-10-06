'use client';

import React from 'react';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ children, type = 'button', className, disabled, onClick }: IButtonProps) {
  return (
    <button
      type={type}
      className={`text-sm rounded-md font-semibold  transition-colors cursor-pointer hover:bg-opacity-80 ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
