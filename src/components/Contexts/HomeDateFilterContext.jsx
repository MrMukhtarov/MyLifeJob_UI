import { createContext, useState } from "react";

const HomeDateFilterContext = createContext();

export const HomeDateFilterProvider = ({ children }) => {
  const [date, setDate] = useState("");
  const [salary, setSalary] = useState("");
  const [sort, setSort] = useState("");
  const [city, setCity] = useState("");

  return (
    <HomeDateFilterContext.Provider
      value={{ date, setDate, salary, setSalary, sort, setSort, city, setCity }}
    >
      {children}
    </HomeDateFilterContext.Provider>
  );
};

export default HomeDateFilterContext;
