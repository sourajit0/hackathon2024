import React from 'react';
import "./viewCart.css";

const CartItem = ({ item, onRemove }) => {
    return (
        <div className="cart-item2">
            <div>
                <h2>{item.name}</h2>
                <p>Price: Rs {item.price}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
            <button className='cart-item button2' onClick={() => onRemove(item.id)} >Remove</button>
        </div>
    );
};

export default CartItem;
