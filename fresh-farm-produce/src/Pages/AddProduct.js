import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "./Login/CurrentUserContext";
import "./Style/AddProduct.css";
const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [error, setError] = useState("");
  const { user } = useCurrentUser();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !productPrice || !productQuantity || !productImage) {
      setError("Please fill out all fields");
      return;
    }

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productQuantity", productQuantity);
    formData.append("userId", user); // Assuming user object contains id field
    formData.append("productImage", productImage);

    try {
      const response = await fetch("http://localhost:3001/add-product", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      alert("Product added successfully");
      navigate("/parent_page");

      // Clear form fields
      setProductName("");
      setProductPrice("");
      setProductQuantity("");
      setProductImage(null);
      setError("");
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Failed to add product");
    }
  };

  return (
    <div className="product-upload-page">
      <div className="card1000">
        <h2>Upload Product</h2>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Product Price:</label>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productQuantity">Product Quantity:</label>
            <input
              type="number"
              id="productQuantity"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productImage">Product Image:</label>
            <input
              type="file"
              id="productImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
