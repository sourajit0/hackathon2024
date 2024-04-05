import React, { useState } from 'react';
import "./Style/manage_product.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleAddProduct = () => {
    if (productName && productPrice) {
      const newProduct = {
        id: new Date().getTime(),
        name: productName,
        price: parseFloat(productPrice),
      };
      setProducts([...products, newProduct]);
      setProductName('');
      setProductPrice('');
    }
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <div className='manage_Product'>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={handleProductNameChange}
        />
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={handleProductPriceChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;
