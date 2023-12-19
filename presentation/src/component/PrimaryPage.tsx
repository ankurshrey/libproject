import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../index';
import InputBox from './Input/InputBox';
import { InputTypes } from 'lib/@native/rkInputs/input.rk';

const PrimaryPage = () => {
  const configPath = useContext(AppContext);
  const [controls, setControls] = useState<InputTypes[]>([]); 

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
  }, [configPath]);

  return (
    <div>
      {controls.length > 0 ? (
        controls.map((control) => (
          <InputBox key={control.id} inputs={control} />
        ))
      ) : (
        <div>No controls available</div>
      )}
    </div>
  );
};

export default PrimaryPage;
