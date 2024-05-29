import React from 'react';

interface ButtonProps {
  label: string;
  pill?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'text';
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const colorClasses = {
  primary: 'bg-sky-600 hover:bg-sky-700 text-white focus:ring focus:ring-sky-200',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring focus:ring-gray-200',
  danger: 'bg-rose-500 hover:bg-rose-600 text-white focus:ring focus:ring-rose-200',
  warning: 'bg-amber-500 hover:bg-amber-600 text-white focus:ring focus:ring-amber-200',
  success: 'bg-purple-500 hover:bg-purple-600 text-white focus:ring focus:ring-purple-200',
  text: 'text-neutral-900 focus:ring focus:ring-neutral-200',
};

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  pill = false, 
  size = 'medium', 
  color = 'primary', 
  onClick, 
  disabled = false,
  ariaLabel,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`duration-150 ${pill ? 'rounded-full' : 'rounded-lg'} ${sizeClasses[size]} ${colorClasses[color]} ${className} ${disabled ? 'opacity-75  cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  );
};
