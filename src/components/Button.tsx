import React, { InputHTMLAttributes } from 'react';

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text?: string;
  raised?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
}

const raisedStyle = 'bg-gray-800 text-white hover:bg-gray-700';
const flatStyle = 'text-gray-800 hover:text-gray-700 hover:bg-gray-700 hover:bg-opacity-5';

export default function Button({
  children,
  text,
  raised,
  className,
  type = 'button',
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        ${raised ? raisedStyle : flatStyle}
        px-4 py-2
        w-full
        rounded
        uppercase
        font-bold
        focus:outline-none
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-6 w-6 mx-auto text-current" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            fill="none"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        text ?? children
      )}
    </button>
  );
}
