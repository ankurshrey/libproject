

import React, { SelectHTMLAttributes, FocusEvent, ChangeEvent } from 'react';
//import Options  from '../../../../@lib/@native/rkDropdown'
import { Options } from 'lib/@native/rkDropdown/dropdown.rk'

// Define a type for the options that can be either string or number
// type OptionType = string | number;
// export interface Options {
//   id:string,
//   value:string
// }

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Options[];
  onBlur?: (event: FocusEvent<HTMLSelectElement>) => void;
  onFocus?: (event: FocusEvent<HTMLSelectElement>) => void;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = ({ options, onBlur, onFocus, onChange, ...rest }: DropdownProps) => {
 
  return (
    <select
      {...rest}
      data-testid="dropdown"
      autoFocus={rest.autoFocus}
      multiple={false}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
    >
      <option disabled value="">
        --Please choose an option--
      </option>
      {options.map((item, index) => (
        <option key={index} value={item.id} disabled={item.isDisabled} selected={item.isSelected}>
          {item.value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
