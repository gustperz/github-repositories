import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password';
  invalid?: boolean;
}

const vorderDefault = 'border-gray-100 focus:border-gray-200';
const vorderInvalid = 'border-red-400';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`
        block
        w-full
        py-3
        px-2
        text-gray-800
        appearance-none
        border-2 rounded
        focus:text-gray-500
        focus:outline-none
        ${invalid ? vorderInvalid : vorderDefault}
        ${className}
      `}
        {...props}
      />
    );
  }
);

export default Input;
