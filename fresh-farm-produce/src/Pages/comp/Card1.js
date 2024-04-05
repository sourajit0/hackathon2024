import React from 'react';
import './box.css'; // Importing CSS file

const Card1 = ({ product, onDelete, onEdit }) => {
  const { id, name,price,   image } = product;

  return (
    
    <div className="card1">
      <div className="card1-img">
        <img src={image} alt={name} />
      </div>
      <div className="card1-info">
        <h3>{name}</h3>
        <h3>{price}</h3>
        <div className="card1-buttons">
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={() => onEdit(id)}>Edit</button>
        </div>
      </div>

    </div>
    
  );
};

export default Card1;
