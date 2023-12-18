

import React, { InputHTMLAttributes } from 'react';
import { InputTypes } from 'lib/@native/rkInputs/input.rk'
interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  // Any additional props you want to accept
  inputs:InputTypes
}

const InputBox = ({ inputs, ...rest }: InputBoxProps) => {
  return (
    <>
    <label>{inputs.label}</label>
    <input  {...rest} required={inputs.required} type={inputs.type} placeholder={inputs.placeholder}/>
    </>
  );
};

export default InputBox;
