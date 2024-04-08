// ProductFormCard.js
import React, { useState } from "react";

const ProductFormCard = ({ onSubmitForm }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState(null);
  const { user } = useCurrentUser();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData object to send file data along with other form data
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productQuantity", productQuantity);
    formData.append("productImage", productImage);

    // Call onSubmitForm function with formData
    onSubmitForm(formData);

    // Clear form fields
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
    setProductImage(null);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Upload Product</h5>
        <form onSubmit={handleSubmit}>
          {/* Form fields for product details */}
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Product Name"
          />
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Product Price"
          />
          <input
            type="number"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            placeholder="Product Quantity"
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default ProductFormCard;
