
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


const mockData = [
  {
    id: 'test 1',
    value: 'test 1',
    groupName: 'abc',
  },
  {
    id: 'test 2',
    value: 'test 2',
    groupName: 'abc',
  },
  {
    id: 'test 3',
    value: 'test 3',
    groupName: 'xyz',
  },
];
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
export class Main {
  react() {
    const groups = [...new Set(mockData.map((item) => item.groupName))];
    const data: MySelect = {
      isGroping: true,
      groping: {
        labels: groups,
      },
      myOption: [
        {
          id: 'myOption 1',
          value: 'myOption 1',
        },
        {
          id: 'myOption 2',
          value: 'myOption 2',
        },
      ],
    };
    data.myOption.map((option) => {
      console.log(`<select></select>`);
    });
  }
  getData() {
    const groups = [...new Set(mockData.map((item) => item.groupName))];
  }
}