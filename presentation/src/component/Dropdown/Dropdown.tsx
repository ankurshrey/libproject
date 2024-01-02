import React from 'react';
import { SelectHTMLAttributes } from 'react';
import { Options, MySelect, MyOption } from 'lib/@native/rkDropdown/dropdown.rk';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Options[] | MyOption[];
  isGrouping?: boolean | string;
  groupingLabels?: string[] | boolean;
  placeholder?: string;
}

const Dropdown = ({ options, onBlur, onFocus, onChange, isGrouping, groupingLabels, placeholder, ...rest }: DropdownProps) => {
  const renderOptions = (options: Options[] | MyOption[]) => {
    return options.map((item, index) => {
      if ('isOptionGroup' in item && item.isOptionGroup) {
        return (
          <optgroup label={item.label || ''} key={index}>
            {item.options?.map((groupItem, groupIndex) => (
              <option
                key={groupIndex}
                value={groupItem.id}
                disabled={groupItem.isDisabled}
                defaultValue={groupItem.isSelected ? '' :undefined}
              >
                {groupItem.value}
              </option>
            ))}
          </optgroup>
        );
      } else {
        return (
          <option
            key={index}
            value={item.id}
            disabled={item.isDisabled}
            defaultValue={item.isSelected ? '' : undefined}
          >
            {item.value}
          </option>
        );
      }
    });
  };

  return (
    <label>
      <select
        {...rest}
        data-testid="dropdown"
        autoFocus={rest.autoFocus}
        multiple={false}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        value={rest.value}
      >
        
            {isGrouping && Array.isArray(groupingLabels)
              ? groupingLabels.map((label, labelIndex) => (
                  <optgroup label={label} key={labelIndex}>
                    {renderOptions(options)}
                  </optgroup>
                ))
              : renderOptions(options)}
          
      </select>
    </label>
  );
};

export default Dropdown;
