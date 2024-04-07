import React, { useState, useEffect } from 'react';
import './Style2/OrdersPage.css'; // Import CSS file
import './comp2/box2.css' ;
import Card2 from './comp2/card2'; // Import Card2 component



// OrdersPage.js
const OrdersPage = () => {
  // Define state to store orders
  const [orders, setOrders] = useState([]);

  // Simulated API call to fetch orders data
  useEffect(() => {
    // Simulate fetch orders data
    setTimeout(() => {
      const exampleOrders = [
           { id: 1, customerName: 'Suvodeep', productName: 'Apples', quantity: 5, total: 10, image: 'apple.jpg' },
        // { id: 2, customerName: 'Jane Smith', productName: 'Oranges', quantity: 3, total: 6, image: 'orange.jpg' },
        // { id: 3, customerName: 'Alice Johnson', productName: 'Bananas', quantity: 2, total: 4, image: 'banana.jpg' }
      ];
      setOrders(exampleOrders);
    }, 1000); // Simulate delay
  }, []);

  // Handler function for confirming an order
  const handleConfirm = (orderId) => {
    // Implement confirm logic here
    console.log('Confirm order with ID:', orderId);
  };

  // Handler function for rejecting an order
  const handleReject = (orderId) => {
    // Implement reject logic here
    console.log('Reject order with ID:', orderId);
  };

  return (
    <div className="container2">
      <h1 className="heading">Orders Received</h1>
      <div className='outer'>
      <div className="orders-list">
        {orders.map(order => (
          <Card2
            key={order.id}
            order={order}
            onConfirm={handleConfirm}
            onReject={handleReject}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default OrdersPage;
