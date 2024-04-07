import React from "react";
import "./App.css";
import { useCurrentUser } from "./Pages/Login/CurrentUserContext";
import Login from "./Pages/Login/login";
import HomePage from "./homePage";

function App() {
  const { user } = useCurrentUser(); // Extract user from the context
  // if (user) {
  //   alert(JSON.stringify(user)); // Convert user object to string and display in alert
  // }
  return (
    <div className="background" style={{ minHeight: "100vh", color: "white" }}>
      {user ? <HomePage /> : <Login />}
    </div>
  );
}

export default App;
