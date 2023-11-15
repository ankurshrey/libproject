// __tests__/Button.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button/Button';

describe('Button Component', () => {
  it('renders the button correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);
    const buttonElement = getByText('Click me');

    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = getByText('Click me');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
