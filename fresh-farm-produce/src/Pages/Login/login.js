// Login.js
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "./CurrentUserContext";
import HomePage from "../../homePage";
import Signup from "../Signup/Signup";
import Footer from "../../components/Footer"
import "../Signup/Signup.css"
import Navlog from "./nav";
import "./loginStyle.css"


const Login = () => {
  const { setUser } = useCurrentUser();
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) {
        const { userId } = data;
        setUser(userId);
        setLoginSuccess(true); // Set login success flag
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };

  // Render HomePage if loginSuccess is true
  if (loginSuccess) {
    return <HomePage />;
  }

  // Render login form if not logged in
  return (
    <div>
    <Navlog />
    <div className="container">
      <div className="signup-form">
        <Signup />
      </div>
      <div className="login-form">
        <h2 style={{textAlign:"left"}}>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
  );
};

export default Login;
