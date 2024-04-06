import React from "react";
import Login from "./Login/login";
import Signup from "./Signup/Signup";

function LogoutPage() {
  // Function to handle logout action
  const handleLogout = () => {
    // Perform logout action here, such as clearing session/local storage, redirecting, etc.
    // For this example, let's just simulate a logout by alerting a message
    alert("You have been logged out!");
  };

  // When the component mounts, call the handleLogout function
  React.useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}

export default LogoutPage;
