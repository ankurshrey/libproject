// Button.tsx

import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { AppContext } from '../../index'
import App from '../../App';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <>
    <button {...rest}>{children} </button>
    </>
  ) 
};

export default Button;
