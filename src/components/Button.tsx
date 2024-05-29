import React from 'react';

interface ButtonProps {
  label: string;
  pill?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'strange' | 'text';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  soft?: boolean;
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
  success: 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring focus:ring-emerald-200',
  strange: 'bg-purple-500 hover:bg-purple-600 text-white focus:ring focus:ring-purple-200',
  text: 'text-neutral-900 focus:ring focus:ring-neutral-200',
};

const softColorClasses = {
  primary: 'bg-sky-100 hover:bg-sky-200 text-sky-800 focus:ring focus:ring-sky-200/80',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring focus:ring-gray-100',
  danger: 'bg-rose-100 hover:bg-rose-200 text-rose-800 focus:ring focus:ring-rose-200/80',
  warning: 'bg-amber-100 hover:bg-amber-200 text-amber-800 focus:ring focus:ring-amber-200/80',
  success: 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800 focus:ring focus:ring-emerald-200/80',
  strange: 'bg-purple-200 hover:bg-purple-300 text-purple-800 focus:ring focus:ring-purple-100',
  text: 'text-neutral-500 focus:ring focus:ring-neutral-100',
};

const disabledClasses = 'opacity-50 cursor-not-allowed pointer-events-none';

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  pill = false, 
  size = 'medium', 
  color = 'primary', 
  onClick, 
  disabled = false,
  ariaLabel,
  className = '',
  soft = false,
}) => {
  const selectedColorClasses = soft ? softColorClasses : colorClasses;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`duration-150 ${pill ? 'rounded-full' : 'rounded-lg'} ${sizeClasses[size]} ${selectedColorClasses[color]} ${className} ${disabled ? disabledClasses : ''}`}
    >
      {label}
    </button>
  );
};
