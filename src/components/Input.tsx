import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password';
}

export default function Input({ className, type = 'text', ...props }: InputProps) {
  return (
    <input
      type={type}
      className={`
        block
        w-full
        py-3
        px-2
        text-gray-800
        appearance-none
        border-2 rounded
        border-gray-100
        focus:text-gray-500
        focus:outline-none
        focus:border-gray-200
        ${className}
      `}
      {...props}
    />
  );
}
