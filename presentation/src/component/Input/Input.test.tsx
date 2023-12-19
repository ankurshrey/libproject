import React from 'react';
import { render, screen } from '@testing-library/react';
import InputBox from './InputBox';

describe('InputBox component', () => {
    test('renders label and input with valid props', () => {
        const inputs = {
            type: 'text',
            label: 'Username',
            placeholder: 'Enter your username',
            id:'text1'
        };
        render(<InputBox inputs={inputs} />);

        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Username' })).toBeInTheDocument();
    });

    test('renders input with placeholder from props', () => {
        const inputs = {
            type: 'password',
            label: 'Password',
            placeholder: 'Enter your password',
            id:'text1'
        };
        render(<InputBox inputs={inputs} />);

        expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    });

    test('renders optional props like required', () => {
        const inputs = {
            type: 'email',
            label: 'Email',
            placeholder: 'Enter your email',
            required: true,
            id:'text1'

        };
        render(<InputBox inputs={inputs} />);

        expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAttribute('required');
    });

    test('passes additional props to input element', () => {
        const inputs = {
            type: 'number',
            label: 'Age',
            placeholder: 'Enter your age',
            id: 'ageInput',
        };
        render(<InputBox inputs={inputs} data-testid="custom-input" />);
        expect(screen.getByTestId('custom-input')).toHaveAttribute('id', 'ageInput');
    });
});