import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputBox from '../Input/InputBox';

describe('InputBox Component', () => {

    it('renders the input box correctly', () => {
        const { getByPlaceholderText } = render(<InputBox type="text" placeholder="Enter text" />);
        const inputElement = getByPlaceholderText('Enter text');

        expect(inputElement).toBeInTheDocument();
    });

    it('calls the onChange function when input value changes', () => {
        const onChangeMock = jest.fn();
        const { getByPlaceholderText } = render(
            <InputBox type="text" placeholder="Enter text" onChange={onChangeMock} />
        );
        const inputElement = getByPlaceholderText('Enter text') as HTMLInputElement; // Explicit cast

        fireEvent.change(inputElement, { target: { value: 'new value' } });

        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(inputElement.value).toBe('new value');
    });

    // Add more test cases as needed
});