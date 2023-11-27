import React from 'react';

import '@testing-library/jest-dom';
import Dropdown from './Dropdown';
import { Options } from 'lib/@native/rkDropdown/dropdown.rk';

import { render, screen, fireEvent } from '@testing-library/react';


describe('Dropdown', () => {
  const options: Options[] = [
    { id: '1', value: 'Option 1' },
    { id: '2', value: 'Option 2' },
    { id: '3', value: 'Option 3' },
  ];

  it('renders the dropdown with options', () => {
    render(<Dropdown options={options} />);
    
    // Check if the options are rendered
    options.forEach((option) => {
      const optionElement = screen.getByText(option.value);
      expect(optionElement).toBeInTheDocument();
    });
    
  });
 
 

  it('calls the onChange function when the dropdown value changes', () => {
    const onChangeMock = jest.fn();
    const options = [
        { id: '1', value: 'Option 1' },
        { id: '2', value: 'Option 2' },
        { id: '3', value: 'Option 3' },
    ];
    const { getByTestId } = render(<Dropdown options={options} onChange={onChangeMock} />);
    const dropdownElement = getByTestId('dropdown') as HTMLSelectElement;

    fireEvent.change(dropdownElement, { target: { value: '2' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(dropdownElement.value).toBe('2');
});

it('renders options correctly', () => {
  const { getByTestId, getByText } = render(<Dropdown options={options} />);
  const dropdown = getByTestId('dropdown');

  expect(dropdown).toBeInTheDocument();

  options.forEach((option) => {
    const optionElement = getByText(option.value);
    expect(optionElement).toBeInTheDocument();
    expect(optionElement).toHaveValue(option.id);

    if (option.isDisabled) {
      expect(optionElement).toBeDisabled();
    } else {
      expect(optionElement).not.toBeDisabled();
    }
  });
});


 
});
