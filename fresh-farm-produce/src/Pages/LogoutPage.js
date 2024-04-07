// Logout.js
import React from "react";
import { useCurrentUser } from "./Login/CurrentUserContext";
import "./LogoutPage.css";

const Logout = () => {
  const { logout } = useCurrentUser(); // Access the logout function from the context

  const handleLogout = () => {
    logout(); // Call the logout function
  };

  return (
<div className="logoutContainer" style={{ minHeight: "750px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
    <h1 style={{ color: "white" }}>Are you sure you want to Logout?</h1>
    <button onClick={handleLogout} className="logoutButton">Logout</button>
</div>
);
};

export default Logout;
