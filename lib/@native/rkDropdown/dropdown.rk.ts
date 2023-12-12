
export interface Options {
  id: string,
  value?: string,
  isDisabled?: boolean | false,
  isSelected?: boolean,
  label?: string,
  isOptionGroup?: boolean,
  options?: Options[];
}

export interface MySelect {
  active?: boolean;
  placeholder?: string;
  isGroping?: boolean;
  groping?: {
    labels: string[];
  };
  myOption: MyOption[];
}
export interface MyOption {
  id: string;
  value: string;
  selected?: boolean;
}
export interface MyOptgroup {
  label: string;
}

export class RKDropdown {

}

