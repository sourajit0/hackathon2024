import React, { useState } from 'react';
import image from "../apples.jpg"

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

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={product.name}  style={{height:"150px" , width:"150px"}}/>
            </div>
            <div className="product-details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Rs {product.price}</p>
                <div className="cart-controls">
                    <button onClick={handleRemoveFromCart}>-</button>
                    <span style={{margin:"10px"}}>{count} kg </span>
                    <button onClick={handleAddToCart}>+</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;