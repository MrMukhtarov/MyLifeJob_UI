import { createContext, useState } from "react";

 const MyHomeSearchContext = createContext();

export const MyHomeSearchProvider = ({ children }) => {
  const [state, setState] = useState("");

  return (
    <MyHomeSearchContext.Provider value={{ state, setState }}>
      {children}
    </MyHomeSearchContext.Provider>
  );
};

export default MyHomeSearchContext;
