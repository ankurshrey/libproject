// InputBox.tsx

import React, { InputHTMLAttributes } from 'react';

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  // Any additional props you want to accept
}

const InputBox = ({ ...rest }: InputBoxProps) => {
  return <input {...rest} />;
};

export default InputBox;
