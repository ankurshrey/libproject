// import React from 'react';
// import '@testing-library/jest-dom';
// import Dropdown from './Dropdown';
// import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// describe('Dropdown', () => {
//     const options = [
//         {
//             label: 'Group 1', isOptionGroup: true, options: [
//                 { id: '1', value: 'Option 1' },
//                 { id: '2', value: 'Option 2', isSelected: true },
//                 { id: '3', value: 'Option 3' ,isSelected: true},
//             ]
//         },
//         { id: '4', value: 'Option 4' },
//         // Add more options or groups as needed
//     ];

//     it('renders the dropdown with options', () => {
//         render(<Dropdown options={options} />);

//         // Check if the options are rendered
//         options.forEach((groupOrOption) => {
//             const label = screen.getByText(groupOrOption.label);
//             expect(label).toBeInTheDocument();

//             if (groupOrOption.isOptionGroup) {
//                 groupOrOption.options.forEach((option) => {
//                     const optionElement = screen.getByText(option.value);
//                     expect(optionElement).toBeInTheDocument();
//                 });
//             } else {
//                 const optionElement = screen.getByText(groupOrOption.value);
//                 expect(optionElement).toBeInTheDocument();
//             }
//         });
//     });

//     it('calls the onChange function when the dropdown value changes', () => {
//         const onChangeMock = jest.fn();
//         const { getByTestId } = render(<Dropdown options={options} onChange={onChangeMock} />);
//         const dropdownElement = getByTestId('dropdown') as HTMLSelectElement;

//         fireEvent.change(dropdownElement, { target: { value: '4' } });

//         expect(onChangeMock).toHaveBeenCalledTimes(1);
//         expect(dropdownElement.value).toBe('4');
//     });

//     it('renders disabled option correctly', () => {
//         const { getByText } = render(<Dropdown options={options} />);

//         options.forEach((groupOrOption) => {
//             if (groupOrOption.isOptionGroup) {
//                 groupOrOption.options.forEach((option) => {
//                     const optionElement = getByText(option.value);
//                     expect(optionElement).toBeInTheDocument();
//                     expect(optionElement).toHaveValue(option.id);

//                     if (option.isDisabled) {
//                         expect(optionElement).toBeDisabled();
//                     } else {
//                         expect(optionElement).not.toBeDisabled();
//                     }
//                 });
//             } else {
//                 const optionElement = getByText(groupOrOption.value);
//                 expect(optionElement).toBeInTheDocument();
//                 expect(optionElement).toHaveValue(groupOrOption.id);

//                 if (groupOrOption.isDisabled) {
//                     expect(optionElement).toBeDisabled();
//                 } else {
//                     expect(optionElement).not.toBeDisabled();
//                 }
//             }
//         });
//     });

//     test('renders and handles single select', () => {
//         render(<Dropdown options={options} autoFocus={true} />);

//         // Check if the component renders with the correct options
//         expect(screen.getByText('Option 1')).toBeInTheDocument();
//         expect(screen.getByText('Option 2')).toBeInTheDocument();
//         expect(screen.getByText('Option 3')).toBeInTheDocument();
//         expect(screen.getByText('Option 4')).toBeInTheDocument();

//         // Check if the pre-selected option is selected
//         const preSelectedOption = screen.getByText('Option 2') as HTMLOptionElement;
//         expect(preSelectedOption.selected).toBe(true);

//         // Try to select another option
//         userEvent.selectOptions(screen.getByTestId('dropdown'), '4');

//         // Check if the newly selected option is selected
//         const newlySelectedOption = screen.getByText('Option 4') as HTMLOptionElement;
//         expect(newlySelectedOption.selected).toBe(true);

//         // Check that the previously selected option is no longer selected
//         expect(preSelectedOption.selected).toBe(false);
//     });
// });