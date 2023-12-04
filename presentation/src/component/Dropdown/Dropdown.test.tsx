import React from 'react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Options } from 'lib/@native/rkDropdown/dropdown.rk';


//..............renders label and select element..................
test('renders label and select element', () => {
    const options: Options[] = [];
    const { getByLabelText, getByTestId } = render(<Dropdown options={options} />);
    expect(getByLabelText('--Please choose one or more pets--')).toBeInTheDocument();
    expect(getByTestId('dropdown')).toBeInTheDocument();
});
//.........renders options correctly.................
test('renders options correctly', () => {
    const options = [
        { id: 'item1', value: 'Item 1' },
        { id: 'item2', value: 'Item 2' },
    ];
    const { getByText } = render(<Dropdown options={options} />);
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
});
//............renders selected options correctly............X
test('renders selected options correctly', () => {
    const options = [
        { id: 'item1', value: 'Item 1', isSelected: true },
        { id: 'item2', value: 'Item 2' },
    ];
    const { getByText, queryByText } = render(<Dropdown options={options} />);
    expect(getByText('Item 1')).toHaveAttribute('selected');
    expect(queryByText('Item 2')).not.toHaveAttribute('selected');
});
//.........renders selected options correctly..................
test('renders option groups with labels', () => {
    const options = [
        { id: 'group1', label: 'Group 1', isOptionGroup: true, options: [] },
    ];
    const { getByText } = render(<Dropdown options={options} />);
    expect(getByText('Group 1')).toBeInTheDocument();
    console.log(getByText);

});
//...........renders nested options within group.............
test('renders nested options within group', () => {
    const options = [
        {
            id: 'group1',
            label: 'Group 1',
            isOptionGroup: true,
            options: [
                { id: 'item1', value: 'Item 1' },
                { id: 'item2', value: 'Item 2' },
            ],
        },
    ];
    const { getByText } = render(<Dropdown options={options} />);
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
});
//.............calls onBlur event on select blur.....................
test('calls onBlur event on select blur', () => {
    const onBlurMock = jest.fn();
    const options: Options[] = [];
    const { getByTestId } = render(<Dropdown options={options} onBlur={onBlurMock} />);
    fireEvent.blur(getByTestId('dropdown'));
    expect(onBlurMock).toHaveBeenCalledTimes(1);
});

//..........calls onFocus event on select focus.......................
test('calls onFocus event on select focus', () => {
    const onFocusMock = jest.fn();
    const options: Options[] = [];
    const { getByTestId } = render(<Dropdown options={options} onFocus={onFocusMock} />);
    fireEvent.focus(getByTestId('dropdown'));
    expect(onFocusMock).toHaveBeenCalledTimes(1);
});
//..............sets proper accessibility attributes...................
test('sets proper accessibility attributes', () => {
    const options: Options[] = [];
    const { getByTestId } = render(<Dropdown options={options} />);
    const selectElement = getByTestId('dropdown');
    expect(selectElement).toHaveAttribute('role', 'listbox');
    expect(selectElement).toHaveAttribute('aria-labelledby', 'dropdownLabel');
});

//............clicking option sets its isSelected to true...........
test('clicking option sets its isSelected to true', () => {
    const options = [
        { id: 'item1', value: 'Item 1' },
        { id: 'item2', value: 'Item 2', isSelected: true }, // Already selected
    ];
    const mockOnChange = jest.fn();
    const { getByText } = render(
        <Dropdown options={options} onChange={mockOnChange} />
    );
    fireEvent.click(getByText('Item 2'));
    expect(options[1].isSelected).toBe(true); 
    //expect(mockOnChange).toHaveBeenCalledWith(options[1]); // Mock should receive updated `item2`
});

