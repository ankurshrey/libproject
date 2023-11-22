import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
    it('renders the dropdown correctly', () => {
        const options = ['Option 1', 'Option 2', 'Option 3'];
        const { getByText } = render(<Dropdown options={options} />);

        options.forEach((option) => {
            const optionElement = getByText(option);
            expect(optionElement).toBeInTheDocument();
        });
    });

    it('calls the onChange function when the dropdown value changes', () => {
        const onChangeMock = jest.fn();
        const options = ['Option 1', 'Option 2', 'Option 3'];
        const { getByTestId } = render(<Dropdown options={options} onChange={onChangeMock} />);
        const dropdownElement = getByTestId('dropdown') as HTMLSelectElement;

        fireEvent.change(dropdownElement, { target: { value: 'Option 2' } });

        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(dropdownElement.value).toBe('Option 2');
    });

});