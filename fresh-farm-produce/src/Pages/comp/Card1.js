import React from "react";
import "./box.css"; // Importing CSS file
import { Buffer } from "buffer";

const Card1 = ({ product, onDelete, onEdit }) => {
  const { id, name, price, image } = product;
  const base64Image1 = Buffer.from(product.image_data).toString("base64");
  const imageUrl = `data:image/png;base64,${base64Image1}`;
  return (
    <div className="card1">
      <div className="card1-img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="ca">
        <div className="card1-info">
          <h3>{product.product_name}</h3>
          <h3>₹{product.product_price}</h3>
          <h3>{product.quantity}KG</h3>
        </div>
        <div className="card1-buttons">
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={() => onEdit(id)}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
