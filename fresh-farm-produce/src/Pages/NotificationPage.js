import React, { useState, useEffect } from 'react';
import NotificationItem from './compNotification/compNotification'; // Notification item component
import './StyleNotification/StyleNotification.css'
import './compNotification/compNotification.css'

function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  // Fetch notifications from backend when the component mounts
  useEffect(() => {
    // Make API request to fetch notifications
    // Update state with fetched notifications
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      <div>
        {notifications.map(notification => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
}

export default NotificationPage;
