import React, { useState } from "react";
import logo from "./logo.png";
import profileIcon from "./profileIcon.png";
import "./Style/nav.css";

function NavScrollExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src={logo}
          height="35"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </div>
      {/* <button
        className={`navbar-toggle ${isOpen ? "active" : ""}`}
        aria-controls="navbarLinks"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button> */}
      {/* <div
        className={`navbar-links ${isOpen ? "active" : ""}`}
        id="navbarLinks"
      >
        <ul>
          <li>
            <a href="#action1">Home</a>
          </li>
          <li>
            <a href="#action2">Link</a>
          </li>
        </ul>
      </div> */}
      <div className="profile-dropdown">
        <img src={profileIcon} height="30" alt="Profile" />
        <div className="dropdown-content">
          <a href="#action/3.1">Profile</a>
          <a href="#action/3.2">Notification</a>
          <a href="#action/3.3">Settings</a>
          <div className="dropdown-divider"></div>
          <a href="#action/3.4">Logout</a>
        </div>
      </div>
    </nav>
  );
}

export default NavScrollExample;
