// Example usage in another component

import InputBox from './component/Input/InputBox';
import Dropdown from './component/Dropdown/Dropdown';
import { Options } from 'lib/@native/rkDropdown/dropdown.rk';
import { InputTypes } from 'lib/@native/rkInputs/input.rk'
const App = () => {
  const dropdownOptions: Options[] = [
    {
      id: 'group1',
      label: 'Group 1',
      isOptionGroup: false,
      options: [
        {
          id: 'item1',
          value: 'Item 1',
          isSelected: true,
        },
        {
          id: 'item2',
          value: 'Item 2',
          isSelected: false,
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
         
        },
        {
          id: 'item4',
          value: 'Item 4',
         
        },
      ],
    },
    {
      id: 'item5',
      value: 'Item 5',
      
    },
    {
      id: 'item6',
      value: 'Item 6',
      isSelected: true,
    },
    {
      id: 'item7',
      value: 'Item 7',
     
    },
  ];
  const inputData: InputTypes = {
    type: "email",
    placeholder: "Enter the Name",
    required: true,
    label: "Name : "

  }

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
       */}
      {/* <Dropdown options={dropdownOptions} onChange={(e) => alert(e.target.value + ' Dropdown changed')} /> */}
      {/* <Dropdown options={dropdownOptions} onChange={(event) => console.log('Change event', event)} /> */}
      <Dropdown onChange={(e) => alert(e.target.value + ' Dropdown changed')} options={dropdownOptions} onBlur={(event) => console.log('Blur event', event)} onFocus={(event) => console.log('Focus event', event)} />
      <InputBox
        inputs={inputData}
        onChange={(e) => console.log('Input changed:', e.target.value)}
      />

    </div>
  );
};

export default App;
