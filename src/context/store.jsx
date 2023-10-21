import { useState, useEffect, createContext } from "react";

export const MainContext = createContext({
  trackingNumber: "",
  setTrackingNum: () => {},
  direction: "ltr",
});

export function ContextProvider({ children }) {
  const [trackingNum, setTrackingNum] = useState("");
  return (
    <MainContext.Provider value={{ trackingNum, setTrackingNum }}>
      {children}
    </MainContext.Provider>
  );
}
