import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../index';
import InputBox from './Input/InputBox';
import { InputTypes } from 'lib/@native/rkInputs/input.rk';

// interface Control {
//   id: string;
//   label: string;
//   type: string;
//   placeholder: string;
//   required?: boolean;
// }

// interface PrimaryBoxProps {
//   controls: Control[];
// }
const x:InputTypes={
  id:'text1',
  label:'hello',
  type:'text'
}
const PrimaryPage = () => {
  const configPath = useContext(AppContext);
  const [controls, setControls] = useState<InputTypes[]>([]); // Provide an initial state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(configPath);

        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const data = await response.json();
        setControls(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [configPath]); // Include configPath as a dependency for useEffect

  console.log("prime",controls)
  
  return (
    <div>      
    <InputBox inputs={x}/>
    {/* {controls?.map((control) => (
        <InputBox key={control.id} inputs={control} />
      ))} */}

    </div>
  );
};

export default PrimaryPage;
