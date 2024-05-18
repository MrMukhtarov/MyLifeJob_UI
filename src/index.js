import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyHomeSearchProvider } from "./components/Contexts/HomeSearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyHomeSearchProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyHomeSearchProvider>
);
