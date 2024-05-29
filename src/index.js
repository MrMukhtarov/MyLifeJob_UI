import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyHomeSearchProvider } from "./components/Contexts/HomeSearchContext";
import { HomeDateFilterProvider } from "./components/Contexts/HomeDateFilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyHomeSearchProvider>
    <HomeDateFilterProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HomeDateFilterProvider>
  </MyHomeSearchProvider>
);
