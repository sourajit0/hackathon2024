// import React, { useState } from 'react';
// import Card from './comp/Card1';
// import './Style1/manage_product.css';
// import './comp/box.css'; // Importing CSS file

// const ProductList = () => {
//   const [ products , setProducts ] = useState([
//     // { id: 1, name: 'Product 1', price: "200$", image: 'product1.jpg' },
//     // { id: 2, name: 'Product 2', price: "300$", image: 'product2.jpg' },
//     // Add more products as needed
//   ]);

//   const handleDelete = (id) => {
//     setProducts(products.filter(product => product.id !== id));
//   };

//   const handleEdit = (id) => {
//     // Implement edit functionality
//     console.log(`Editing product with id ${id}`);
//   };

//   return (
//     <div className='containerBox' style={{minHeight:'700px'}}>
//       {products.map(product => (
//         <Card
//           key={product.id}
//           product={product}
//           onDelete={handleDelete}
//           onEdit={handleEdit}
//         />
//       ))}
//       <div className='massage'>No More product left</div>
//     </div>
//   );
// };

// export default ProductList;

// ProductList.js

import React, { useState, useEffect } from "react";
import Card from "./comp/Card1";
import "./Style1/manage_product.css";
import "./comp/box.css"; // Importing CSS file
import { useCurrentUser } from "./Login/CurrentUserContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { user } = useCurrentUser();

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products when component mounts

  const fetchProducts = async () => {
    try {
      // Fetch products for current user from the backend
      const userId = "currentUserId"; // Replace 'currentUserId' with the actual user ID
      const response = await fetch(
        `http://localhost:3001/products?userId=${user}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Deleting product with id ${id}`);
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Editing product with id ${id}`);
  };

  return (
    <div className="product-upload-page">
      <h2>Manage Products</h2>
      <div className="containerBox" style={{ minHeight: "700px" }}>
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
        {products.length === 0 && (
          <div className="message">No products available</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
