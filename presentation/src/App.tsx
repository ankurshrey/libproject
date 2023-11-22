// Example usage in another component

import React from 'react';
import Button from './component/Button/Button';
import InputBox from './component/Input/InputBox';
import Dropdown, { Options } from './component/Dropdown/Dropdown';

const App = () => {
  const dropdownOptions: Options[] = [
    {
    id:"item 1",
    value:"item 2"
  },
  {
    id:"item 3",
    value:"item 4"
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
      <Dropdown options={dropdownOptions} onChange={(e) => console.log('Dropdown changed:', e.target.value)} />
    </div>
  );
};

export default App;
