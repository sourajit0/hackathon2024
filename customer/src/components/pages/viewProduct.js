import React, { useState, useEffect } from "react";
import NavBar from "../nav2";
import Footer from "../footer2";
import ProductCard from "./ComponentViewProduct"; // Import the ProductCard component
import "./viewProduct.css";
import { Link } from "react-router-dom";

function ViewProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <NavBar />

      {/* Header */}
      <header className="products-header" style={{ color: "white" }}>
        <h1>View Products</h1>
      </header>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link to="/cart">
        <button className="AddToCart" style={{ margin: "20px" }}>
          Add to Cart
        </button>
      </Link>

      <Footer />
    </div>
  );
}

export default ViewProductsPage;
