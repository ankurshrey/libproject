// Example usage in another component

import React from 'react';
import Button from './component/Button/Button';
import InputBox from './component/Input/InputBox';
import Dropdown from './component/Dropdown/Dropdown';

const App = () => {
  const dropdownOptions: (string | number)[] = ['Option 1', 'Option 2', 'Option 3', 1, 2, 3];
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
