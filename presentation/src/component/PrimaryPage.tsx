import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../index';
import InputBox from './Input/InputBox';
import { InputTypes } from 'lib/@native/rkInputs/input.rk';
import Dropdown from './Dropdown/Dropdown';
import { textAreaTypes } from 'lib/@native/rkTextarea/textArea.rk';
import  MaskedInput  from './MaskedInput/MaskedInput'
import Textarea from './TextArea/TextArea';

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
        setControls(data.Controls);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [configPath]);

  const dropdownOptions = [
    { id: '1', value: 'Option 1' },
    { id: '2', value: 'Option 2', isSelected: true },
    { id: '3', value: 'Option 3', isDisabled: true },
    {
      id: 'group1',
      label: 'Group 1',
      isOptionGroup: true,
      options: [
        { id: '4', value: 'Group 1 - Option 1' },
        { id: '5', value: 'Group 1 - Option 2', isSelected: true },
      ],
    },
    {
      id: 'group2',
      label: 'Group 2',
      isOptionGroup: true,
      options: [
        { id: '6', value: 'Group 2 - Option 1' },
        { id: '7', value: 'Group 2 - Option 2' },
      ],
    },
  ];

let data={
label: "Input10",
}
const [creditCardValue, setCreditCardValue] = useState('');
  const [macAddressValue, setMACAddressValue] = useState('');
  const [telephoneValue, setTelephoneValue] = useState('');
  const [dateTimeValue, setDateTimeValue] = useState('');
  const [alphanumericValue, setAlphanumericValue] = useState('');


  return (
    <>
     <div>
      <h1>Dynamic Masked Input Component Example</h1>

      <MaskedInput
        config={{ mask: '####-####-####-####', inputType: 'creditCard' }}
        value={creditCardValue}
        onChange={setCreditCardValue}
        placeholder="Enter credit card number"
      />

      <MaskedInput
        config={{ mask: '##:##:##:##:##:##', inputType: 'macAddress' }}
        value={macAddressValue}
        onChange={setMACAddressValue}
        placeholder="Enter MAC address"
      />

      <MaskedInput
        config={{ mask: '###-###-####', inputType: 'telephone' }}
        value={telephoneValue}
        onChange={setTelephoneValue}
        placeholder="Enter telephone number"
      />

      <MaskedInput
        config={{ mask: 'MM/DD/YYYY HH:mm', inputType: 'dateAndTime' }}
        value={dateTimeValue}
        onChange={setDateTimeValue}
        placeholder="Enter date and time"
      />

      <MaskedInput
        config={{ mask: 'AA###9', inputType: 'alphanumeric' }}
        value={alphanumericValue}
        onChange={setAlphanumericValue}
        placeholder="Enter alphanumeric value"
      />
    </div>
    <div>

      
      <Textarea textareas={data} />
      
      <Dropdown options={dropdownOptions} />
      {controls.length > 0 ? (
        controls.map((control) => (
          <InputBox key={control.id} inputs={control} />
        ))
      ) : (
        <div>No controls available</div>
      )}
    </div>
    </>
  );
};

export default PrimaryPage;
