import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./config/config.json";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const AppContext = createContext<any>(undefined);

root.render(
  <React.StrictMode>
    <AppContext.Provider value="/config.json">
      <App />
    </AppContext.Provider>
  </React.StrictMode>
);
export { AppContext };
reportWebVitals();
