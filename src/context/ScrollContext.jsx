// ScrollContext.js
import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const targetComponentRef = useRef(null);

  const scrollToComponent = () => {
    if (targetComponentRef.current) {
      targetComponentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToComponent, targetComponentRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
