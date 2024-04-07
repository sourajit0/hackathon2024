import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../components/logo.png";
import profileIcon from "../../components/profileIcon.png";
// import "./Style/nav.css";
function Navlog() {
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
    </nav>
  );
}

export default Navlog;
