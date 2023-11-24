

import React, { SelectHTMLAttributes } from 'react';
//import Options  from '../../../../@lib/@native/rkDropdown'
 import { Options } from 'lib/@native/rkDropdown/dropdown.rk'

// Define a type for the options that can be either string or number
// type OptionType = string | number;
// export interface Options {
//   id:string,
//   value:string
// }



interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  // Any additional props you want to accept
  options: Options[];
}

const Dropdown = ({ options, ...rest }: DropdownProps) => {
  return (
    <select {...rest} data-testid="dropdown">
      {options.map((item, index) => (

       ( 
       <option key={index} value={item.id} disabled={ item.isDisabled } >
          {item.value}
        </option>
        
        )

      ))}
    </select>
  );
};

export default Dropdown;
