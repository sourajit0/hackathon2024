import React from "react";

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
      <h2>Logout</h2>
      <p>You have been successfully logged out.</p>
      {/* You can also add a link here to redirect users back to the login page */}
    </div>
  );
}

export default LogoutPage;
