import React from 'react';
import './box2.css'; // Importing CSS file

// Card2.js


const Card2 = ({ order, onConfirm, onReject }) => {
  const { id, customerName, productName, quantity, total, image } = order;

  const handleConfirm = () => {
    onConfirm(id);
  };

  const handleReject = () => {
    onReject(id);
  };

  return (
    <div className="card2">
      <div className="card2-img">
        <img src={image} alt={productName} />
      </div>
      <div className="card2-info">
        <h3>{customerName}</h3>
        <p>Product: {productName}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: {total}</p>
        <div className="card2-buttons">
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleReject}>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
