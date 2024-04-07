import React from 'react';
import NavBar from "../nav2";
import Footer from "../footer2";
import ProductCard from "./ComponentViewProduct"; // Import the ProductCard component
import "./viewProduct.css";
import image from "../../components/order.png";

function ViewProductsPage() {
    // Sample product data
    const products = [
        { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 20, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 25, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 40, image: 'product3.jpg' },
        { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 30, image: 'product4.jpg' },
        { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 10, image: 'product5.jpg' },
        { id: 6, name: 'Product 6', description: 'Description of Product 6', price: 10, image: 'product7.jpg' },
        { id: 7, name: 'Product 7', description: 'Description of Product 5', price: 10, image: 'product5.jpg' },
        { id: 8 ,name: 'Product 8', description: 'Description of Product 5', price: 10, image: 'product5.jpg' },
        { id: 9, name: 'Product 9', description: 'Description of Product 5', price: 10, image: 'product5.jpg' },
        { id: 10, name: 'Product 10', description: 'Description of Product 7', price: 10, image: 'product6.jpg' },
      
    

        // Add more product data as needed
    ];

    return (
        <div>
            <NavBar />
            
            {/* Header */}
            <header className="products-header" style={{color:"white"}}>
                <h1>View Products</h1>
            </header>

            {/* Products */}
            
            <div className="products-container">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <button className='AddToCart' style={{margin:"20px"}}>
                Add to Cart
            </button>
            
            <Footer />
        </div>
    );
}

export default ViewProductsPage;
