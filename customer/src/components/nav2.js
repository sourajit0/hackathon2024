import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import logo from "./logo.png";
import profileIcon from "./profileIcon.png";
import "./Style/nav.css"; // Import CSS for styling
//import { useContext } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img
            src={logo}
            height="35"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </a>
      </div>
      <div className="profile-dropdown">
        <img
          src={profileIcon}
          height="30"
          alt="Profile"
          onClick={toggleMenu}
        />
        {/* <div className={`dropdown-content ${isOpen ? "active" : ""}`}>
          <Link to="/profile">Profile</Link>
          <Link to="/notifications">Notification</Link>
          <div className="dropdown-divider"></div>
          <Link to="/Logout">Logout</Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
