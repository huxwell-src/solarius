import React, { useState, useEffect } from "react";

interface BadgeProps {
  label: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "success" | "text";
  soft?: boolean;
  close?: boolean;
}

const colorClasses = {
  primary: "bg-sky-600 text-white",
  secondary: "bg-gray-600 text-white",
  danger: "bg-rose-500 text-white",
  warning: "bg-amber-500 text-white",
  success: "bg-emerald-600 text-white",
};

const softColorClasses = {
  primary: "bg-sky-100 text-sky-800",
  secondary: "bg-gray-100 text-gray-800",
  danger: "bg-rose-100 text-rose-800",
  warning: "bg-amber-100 text-amber-800",
  success: "bg-emerald-100 text-emerald-800",
};

const svgColorClasses = {
  primary: "stroke-sky-800 bg-sky-200 hover:bg-sky-300",
  secondary: "stroke-gray-800 bg-gray-200 hover:bg-gray-300",
  danger: "stroke-rose-800 bg-rose-200 hover:bg-rose-300",
  warning: "stroke-amber-800 bg-amber-200 hover:bg-amber-300",
  success: "stroke-emerald-800 bg-emerald-200 hover:bg-emerald-300",
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  color = "primary",
  soft = false,
  close = false,
}) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (isClosed) {
      const timer = setTimeout(() => {
        setIsHidden(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosed]);

  const handleButtonClick = () => {
    setIsClosed(true);
  };

  const selectedColorClasses = soft ? softColorClasses : colorClasses;
  const selectedSvgColorClasses = soft ? svgColorClasses[color] : svgColorClasses[color];

  return (
    <span
      className={`px-3 py-0.5 flex items-center justify-center gap-1 rounded-full transition-all duration-150 ${selectedColorClasses[color]} ${isClosed ? 'opacity-0 scale-90' : ''} ${isHidden ? 'hidden' : ''}`}
    >
      {label}

      <button className={close ? "" : "hidden"} onClick={handleButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`stroke-[1.5] size-4 fill-none rounded-full p-[1px] ${selectedSvgColorClasses}`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
    </span>
  );
};
