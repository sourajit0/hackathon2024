import React, { useState } from 'react';
import Card from './comp/Card1';
import './Style1/manage_product.css';
import './comp/box.css'; // Importing CSS file


const ProductList = () => {
  const [ products , setProducts ] = useState([
    // { id: 1, name: 'Product 1', price: "200$", image: 'product1.jpg' },
    // { id: 2, name: 'Product 2', price: "300$", image: 'product2.jpg' },
    // Add more products as needed
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Editing product with id ${id}`);
  };

  return (
    <div className='containerBox' style={{minHeight:'700px'}}>
      {products.map(product => (
        <Card
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
      <div className='massage'>No More product left</div>
    </div>
  );
};

export default ProductList;
