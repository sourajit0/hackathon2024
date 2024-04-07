import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import profileIcon from "./profileIcon.png";
import "./Style/nav.css";

// ErrorBoundary component to catch and handle errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Handle errors by updating state
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Render error message or children based on error state
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

// Navbar component wrapped with error boundary
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ErrorBoundary>
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
          <div className={`dropdown-content ${isOpen ? "active" : ""}`}>
            <Link to="/profile">Profile</Link>
            <Link to="/notifications">Notification</Link>
            <div className="dropdown-divider"></div>
            <Link to="/Logout">Logout</Link>
          </div>
        </div>
      </nav>
    </ErrorBoundary>
  );
};

export default Navbar;
