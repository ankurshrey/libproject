export interface Options {
  id: string;
  value?: string;
  isDisabled?: boolean | false;
  isSelected?: boolean;
  label?: string;
  isOptionGroup?: boolean;
  options?: Options[];
  dropdownOptions: string;
}

export interface MySelect {
  active?: boolean;
  placeholder?: string;
  isGroping?: boolean;
  groping?: {
    labels: string[];
  };
  myOption: MyOption[];
  dropdownOptions: string;
}
export interface MyOption {
  id: string;
  value: string;
  selected?: boolean;
  dropdownOptions: string;
}
export interface MyOptgroup {
  label: string;
}

export class RKDropdown {}
