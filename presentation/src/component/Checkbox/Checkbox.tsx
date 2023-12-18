import React, { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <div>
      <input type="checkbox" {...rest} />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
