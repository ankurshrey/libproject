
export interface Options {
  id: string,
  value?: string,
  isDisabled?: boolean | false,
  isSelected?: boolean | string
  label?: string,
  isOptionGroup?: boolean,
  options?: Options[];
}

export interface MySelect {
  active?: boolean;
  placeholder?: string;
  isGrouping?: boolean;
  grouping?: {
    labels: string[] ;
  };
  myOption: MyOption[];
}
export interface MyOption {
  id: string;
  value: string;
  selected?: boolean | string;
  isDisabled?: boolean | false,
  isSelected?: boolean,

}
export interface MyOptgroup {
  label: string;
}

export class RKDropdown {

}

