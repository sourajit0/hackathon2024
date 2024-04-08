import React, { useState } from "react";
import NavBar from "../nav2";
import Footer from "../footer2";
import CartItem from "./ComponentViewCart"; // Import the CartItem component
import "./viewCart.css"; // Import CSS for styling
import { Link } from "react-router-dom";

const ViewCart = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 20, quantity: 2 },
    { id: 2, name: "Product 2", price: 30, quantity: 1 },
    { id: 3, name: "Product 3", price: 25, quantity: 3 },
  ]);

  // Function to remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <NavBar />
      <div className="cart-container2" style={{ minHeight: "750px" }}>
        <h1 style={{ color: "white" }}>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemove={removeItem} />
            ))}
            <div className="total">
              <h2 style={{ color: "white" }}>Total:</h2>
              <p style={{ color: "white" }}>
                Rs{" "}
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
            <Link to="/orders">
              <button className="Checkout" style={{ margin: "20px" }}>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ViewCart;
