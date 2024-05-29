import { createContext, useState } from "react";

const HomeDateFilterContext = createContext();

export const HomeDateFilterProvider = ({ children }) => {
  const [date, setDate] = useState("");

  return (
    <HomeDateFilterContext.Provider value={{ date, setDate }}>
      {children}
    </HomeDateFilterContext.Provider>
  );
};

export default HomeDateFilterContext;
