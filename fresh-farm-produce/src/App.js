import React from "react";
import "./App.css";
import ProfilePage from "./Pages/ProfilePage";
import NotificationPage from "./Pages/NotificationPage";
import LogoutPage from "./Pages/LogoutPage";
// import HomePage from "./homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login/login";
import { CurrentUserProvider } from "./Pages/Login/CurrentUserContext";
import NavScrollExample from "./components/NavScrollExample";
import Footer from "./components/Footer";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div
      className="background"
      style={{
        minHeight: "100vh",
        color: "white",
      }}
    >
      <CurrentUserProvider>
        <Login />
      </CurrentUserProvider>
    </div>
  );
}

export default App;
