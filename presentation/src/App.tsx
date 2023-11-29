// Example usage in another component

import React from 'react';
import Button from './component/Button/Button';
import InputBox from './component/Input/InputBox';
import Dropdown from './component/Dropdown/Dropdown';
import { Options } from 'lib/@native/rkDropdown/dropdown.rk';
const App = () => {
  const dropdownOptions: Options[] = [
    {
      id: "item 2",
      value: "item 2",
      isSelected: true
    },
    {
      id: "item 4",
      value: "item 4",
      isSelected: true
    },
    {
      id: "item 1",
      value: "item 1",
      isDisabled: true
    },
    {
      id: '2',
      value: 'Option 2',
      isSelected: true
    }
  ];
  return (
    <div>
      <Button
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
      />
      <Dropdown options={dropdownOptions} onChange={(e) => alert(e.target.value +' Dropdown changed')} />
      {/* <Dropdown options={dropdownOptions} onChange={(event) => console.log('Change event', event)} /> */}
      <Dropdown options={dropdownOptions} onBlur={(event) => console.log('Blur event', event)} onFocus={(event) => console.log('Focus event', event)} />


    </div>
  );
};

export default App;
