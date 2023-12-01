// Example usage in another component

import React from 'react';
import Button from './component/Button/Button';
import InputBox from './component/Input/InputBox';
import Dropdown from './component/Dropdown/Dropdown';
import { Options } from 'lib/@native/rkDropdown/dropdown.rk';
const App = () => {
  const dropdownOptions: Options[] = [
    {
      id: 'group1',
      label: 'Group 1',
      isOptionGroup: true,
      options: [
        {
          id: 'item1',
          value: 'Item 1',
          isSelected: true,
        },
        {
          id: 'item2',
          value: 'Item 2',
          isSelected: true,
        },
      ],
    },
    {
      id: 'group2',
      label: 'Group 2',
      isOptionGroup: true,
      options: [
        {
          id: 'item3',
          value: 'Item 3',
          isSelected: true,
        },
        {
          id: 'item4',
          value: 'Item 4',
          isSelected: true,
        },
      ],
    },
    {
      id: 'item5',
      value: 'Item 5',
      isSelected: true,
    },
    {
      id: 'item6',
      value: 'Item 6',
      isSelected: true,
    },
    {
      id: 'item7',
      value: 'Item 7',
      isSelected: true,
    },
  ];

  return (
    <div>
      {/* <Button
        onClick={() => console.log('Button clicked')}
        className="custom-class"
        disabled={true}
        style={{ color: "red", backgroundColor: "black" }}
      >
        Click me
      </Button>
      <InputBox
        type="text"
        required
        placeholder="Enter text"
        onChange={(e) => console.log('Input changed:', e.target.value)}
      /> */}
      {/* <Dropdown options={dropdownOptions} onChange={(e) => alert(e.target.value + ' Dropdown changed')} /> */}
      {/* <Dropdown options={dropdownOptions} onChange={(event) => console.log('Change event', event)} /> */}
      <Dropdown options={dropdownOptions} onBlur={(event) => console.log('Blur event', event)} onFocus={(event) => console.log('Focus event', event)} />


    </div>
  );
};

export default App;
