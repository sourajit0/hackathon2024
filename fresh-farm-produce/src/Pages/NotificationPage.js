import React, { useState } from "react";

function NotificationPage() {
  // State variable to hold notifications
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New order received" },
    { id: 2, message: "Payment processed successfully" },
    { id: 3, message: "Delivery scheduled for tomorrow" },
  ]);

  // Function to remove a notification
  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="container">
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              {notification.message}
              <button onClick={() => removeNotification(notification.id)}>
                Dismiss
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No new notifications</p>
      )}
    </div>
  );
}

export default NotificationPage;
