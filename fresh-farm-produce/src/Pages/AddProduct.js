import React, { useState } from "react";
import "./Style/AddProduct.css";

const ProductFormCard = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission here
    console.log("Product Name:", productName);
    console.log("Product Price:", productPrice);
    console.log("Product Quantity:", productQuantity);
    console.log("Product Image:", productImage);

    // Clear form fields
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
    setProductImage(null);
  };

  return (
    <div classname="form_final">
    <div className="card-product-form-card">
      <div className="card-body">
        <h5 className="card-title" style={{fontSize:"40px"}}>Upload Product</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName" style={{fontSize:"20px" , fontWeight:"10000"}}>Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice" style={{fontSize:"20px" , fontWeight:"10000"}}>Product Price</label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productQuantity" style={{fontSize:"20px" , fontWeight:"10000"}}>Product Quantity</label>
            <input
              type="number"
              className="form-control"
              id="productQuantity"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productImage" style={{fontSize:"20px" , fontWeight:"10000"}}>Product Image</label>
            <input
              type="file"
              className="form-control-file"
              id="productImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit" className="btn-btn-primary">
            Upload
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ProductFormCard;

