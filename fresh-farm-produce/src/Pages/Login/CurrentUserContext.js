import React, { createContext, useContext, useState, useEffect } from "react";

const CurrentUserContext = createContext(); // Create context

export const useCurrentUser = () => useContext(CurrentUserContext); // Custom hook to consume context

export const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial value of user is null

  // Function to set the user and persist to localStorage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

  // Function to clear the user from state and localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    // Check localStorage for user data on initial load
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ user, setUser, login, logout }}>
      {" "}
      {/* Include setUser in context value */}
      {children}
    </CurrentUserContext.Provider>
  );
};
