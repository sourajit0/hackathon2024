import React from 'react';
import NavBar from "../nav2";
import Footer from "../footer2";
import "./viewOrders.css";

function ViewOrdersPage() {
    return (
        <div>
            <NavBar />
            
            {/* Header */}
            <header className="orders-header">
                <h1>View Orders Placed</h1>
            </header>

            {/* Orders list */}
            <div className="orders-container">
                <div className="order-item">
                    <h2>Order #1</h2>
                    <p>Order details...</p>
                </div>
                <div className="order-item">
                    <h2>Order #2</h2>
                    <p>Order details...</p>
                </div>
                {/* Add more order items as needed */}
            </div>
            
            <Footer />
        </div>
    );
}

export default ViewOrdersPage;
