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
    <div>
    <AppContext.Consumer>
        {
        (val)=>{
          return  <h1>{val}</h1>
        }
      }
        </AppContext.Consumer>
    </div>
    <button {...rest}>{children} </button>
    </>


  )

  
};

export default Button;
