// Example usage in another component

import React, { createContext, useContext, useEffect, useState } from 'react';
import Button from './component/Button/Button';
import InputBox from './component/Input/InputBox';
import Dropdown from './component/Dropdown/Dropdown';
import { Options } from 'lib/@native/rkDropdown/dropdown.rk';
import { AppContext } from './index'
import { InputTypes } from 'lib/@native/rkInputs/input.rk';
import PrimaryPage from './component/PrimaryPage';
//import './config/config.json'

// const UserContext = createContext('')
const UserContext = createContext<any>(undefined);

const App = () => {

  const [fileContent, setFileContent] = useState(null);
  const configPath = useContext(AppContext);

  useEffect(() => {


    const fetchData = async () => {

  try {
    // Fetch the file using the path
    const response = await fetch(configPath);
     console.log("response",response)
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

        // Parse the JSON content
        const data = await response.json();

        // Set the file content in the state
        setFileContent(data);
        console.log("first", data)
      } catch (error) {
        console.error(error);
      }

    }
    fetchData()
  }, [])

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
      isSelected: true,
    },
  ];
const inputType:InputTypes={
  type: 'text',
  label: 'ckecked',
  placeholder: 'Enter The Name'
}

  return (
    <div>
      <label>
        <AppContext.Consumer>
          {

            (val) => {
              return <Dropdown onChange={(e) => console.log(val)} options={dropdownOptions} onBlur={(event) => console.log('Blur event', event)} onFocus={(event) => console.log('Focus event', event)} />

            }
          }
        </AppContext.Consumer>
      </label>

      {/* <Button
        onClick={() => console.log('Button clicked')}
        className="custom-class"
        disabled={true}
        style={{ color: "red", backgroundColor: "black" }}
      >
        Click me
      </Button> */}
      <InputBox
        onChange={(e) => console.log('Input changed:', e.target.value)} inputs={inputType}      />
      {/* <Dropdown options={dropdownOptions} onChange={(e) => alert(e.target.value + ' Dropdown changed')} /> */}
      {/* <Dropdown options={dropdownOptions} onChange={(event) => console.log('Change event', event)} /> */}
      <UserContext.Provider value='hello context' >
        <Dropdown onChange={(e) => alert(e.target.value + ' Dropdown changed')} options={dropdownOptions} onBlur={(event) => console.log('Blur event', event)} onFocus={(event) => console.log('Focus event', event)} />

      </UserContext.Provider>
      
      <PrimaryPage />


    </div>
  );
};

export default App;
export { UserContext }
