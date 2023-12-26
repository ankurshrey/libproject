import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonTypes } from "lib/@native/rkButton/Button";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  dData: ButtonTypes;
}

const Button = ({ children, dData }: ButtonProps) => {
  console.log("button data = ", dData.type);

  return (
    <>
      <br />
      <button>{children} </button>
    </>
  );
};
export default Button;
