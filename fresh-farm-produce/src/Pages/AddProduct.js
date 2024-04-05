import React, { useState } from "react";

function AddProduct() {
  // State to hold product details
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like sending the product data to a server
    console.log("Product submitted:", product);
    // Reset the form
    setProduct({
      name: "",
      price: "",
      description: "",
    });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
