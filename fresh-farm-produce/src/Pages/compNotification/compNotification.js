import React from 'react';

function NotificationItem({ notification }) {
  const { id, type, message, timestamp, read } = notification;

  // Function to mark the notification as read (you'll need to implement this)
  const markAsRead = () => {
    // Make API request to mark the notification as read
    // Update state to reflect the change
  };

  return (
    <div className={`notification-item ${read ? 'read' : 'unread'}`} onClick={markAsRead}>
      <div className="notification-type">{type}</div>
      <div className="notification-message">{message}</div>
      <div className="notification-timestamp">{timestamp}</div>
    </div>
  );
}

export default NotificationItem;
