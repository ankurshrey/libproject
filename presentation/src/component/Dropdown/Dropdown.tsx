import { SelectHTMLAttributes } from 'react';
import { Options } from 'lib/@native/rkDropdown/dropdown.rk';
import React from 'react';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Options[];
}
const Dropdown = ({ options, onBlur, onFocus, onChange, ...rest }: DropdownProps) => {
  return (
    <label>
      --Please choose one or more pets--
      <select
        {...rest}
        data-testid="dropdown"
        autoFocus={rest.autoFocus}
        multiple={false}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
      >
        {
          options.map((item, index) => (
            item.isOptionGroup ? (
              <optgroup label={item.label} key={index}>
                {item.options?.map((groupItem, groupIndex) => (
                  <option
                    key={groupIndex}
                    value={groupItem.id}
                    disabled={groupItem.isDisabled}
                    selected={groupItem.isSelected}
                  >
                    {groupItem.value}
                  </option>
                ))}
              </optgroup>
            ) : (
              <option
                key={index}
                value={item.id}
                disabled={item.isDisabled}
                selected={item.isSelected}
              >
                {item.value}
              </option>
            )
          ))}

      </select>
    </label>
  );
};

export default Dropdown;
