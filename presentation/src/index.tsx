import React ,{ createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { emphasize } from '@mui/material';
import { Options } from 'lib/@native/rkDropdown/dropdown.rk';

import './config/config.json'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const AppContext = createContext<any>(undefined);
const dropdownOptions: Options[] = [
  {
    id: 'group1',
    label: 'Group 1',
    isOptionGroup: true,
    options: [
      {
        id: 'item1',
        value: 'Item 1',
        isSelected: true,
      },
      {
        id: 'item2',
        value: 'Item 2',
        isSelected: false,
      },
    ],
  },
  {
    id: 'group2',
    label: 'Group 2',
    isOptionGroup: true,
    options: [
      {
        id: 'item3',
        value: 'Item 3',
        isSelected: true,
      },
      {
        id: 'item4',
        value: 'Item 4',
        isSelected: true,
      },
    ],
  },
  {
    id: 'item5',
    value: 'Item 5',
    isSelected: true,
  },
  {
    id: 'item6',
    value: 'Item 6',
    isSelected: true,
  },
  {
    id: 'item7',
    value: 'Item 7',
    isSelected: true,
  },
];
root.render(
  <React.StrictMode>
    <AppContext.Provider value='../config.json'  >
    <App />
   </AppContext.Provider>
  </React.StrictMode>
);
export { AppContext }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
