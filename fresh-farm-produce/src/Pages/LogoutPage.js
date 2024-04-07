// Logout.js
import React from "react";
import { useCurrentUser } from "./Login/CurrentUserContext";

const Logout = () => {
  const { logout } = useCurrentUser(); // Access the logout function from the context

  const handleLogout = () => {
    logout(); // Call the logout function
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
