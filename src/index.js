import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyHomeSearchProvider } from "./components/Contexts/HomeSearchContext";
import { HomeDateFilterProvider } from "./components/Contexts/HomeDateFilterContext";
import { AdvertismentDetailProvider } from "./components/Contexts/AdvertismentDetailContenxt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyHomeSearchProvider>
    <HomeDateFilterProvider>
      <AdvertismentDetailProvider>
          <App />
      </AdvertismentDetailProvider>
    </HomeDateFilterProvider>
  </MyHomeSearchProvider>
);
