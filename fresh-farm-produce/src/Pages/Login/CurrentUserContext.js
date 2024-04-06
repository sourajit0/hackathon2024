// CurrentUserContext.js
import React, { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(); // Create context

export const useCurrentUser = () => useContext(CurrentUserContext); // Custom hook to consume context

export const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial value of user is null

  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
