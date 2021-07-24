import React, { InputHTMLAttributes } from 'react';

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  children?: never;
  text: string;
  raised?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const raisedStyle = 'bg-gray-800 text-white hover:bg-gray-700';
const flatStyle = 'text-gray-800 hover:text-gray-700 hover:bg-gray-100';

export default function Button({
  text,
  raised,
  className,
  type = 'button',
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
      {text}
    </button>
  );
}
