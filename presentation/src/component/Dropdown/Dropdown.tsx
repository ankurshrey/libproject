import { SelectHTMLAttributes } from 'react';
import { Options } from 'lib/@native/rkDropdown/dropdown.rk';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Options[];
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
      {
        options.map((item, index) => (
          item.isOptionGroup ? (
            <optgroup label={item.label} key={index}>
              <option value="" disabled>--Please choose an option--</option>
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
    // <label>
    //   Please choose one or more pets:
    //   <select name="pets" multiple>
    //     <optgroup label="4-legged pets">
    //       <option value="dog">Dog</option>
    //     </optgroup>
    //   </select>
    // </label>
  );
};

export default Dropdown;
