import React, { useState } from "react";
import image from "../apples.jpg";
import { Buffer } from "buffer";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  const handleRemoveFromCart = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const base64Image1 = Buffer.from(product.image_data).toString("base64");
  const imageUrl = `data:image/png;base64,${base64Image1}`;

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={imageUrl}
          alt={product.name}
          style={{ height: "150px", width: "150px" }}
        />
      </div>
      <div className="product-details">
        <h2>{product.product_name}</h2>
        <p>{product.quantity}KG</p>
        <p>Rs {product.product_price}</p>
        <div className="cart-controls">
          <button onClick={handleRemoveFromCart}>-</button>
          <span style={{ margin: "10px" }}>{count} kg </span>
          <button onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
