// Dropdown.tsx

import React, { SelectHTMLAttributes } from 'react';

// Define a type for the options that can be either string or number
type OptionType = string | number;

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  // Any additional props you want to accept
  options: OptionType[];
}

const Dropdown = ({ options, ...rest }: DropdownProps) => {
  return (
    <select {...rest} data-testid="dropdown">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
