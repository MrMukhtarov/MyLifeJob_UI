import { createContext, useState } from "react";

const AdvertismentDetailContext = createContext();

export const AdvertismentDetailProvider = ({ children }) => {
  const [adverDetail, setAdverDetail] = useState("");


  return (
    <AdvertismentDetailContext.Provider
      value={{ adverDetail, setAdverDetail}}
    >
      {children}
    </AdvertismentDetailContext.Provider>
  );
};

export default AdvertismentDetailContext;
