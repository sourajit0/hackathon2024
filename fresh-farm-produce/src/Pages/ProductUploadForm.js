// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ProductUploadForm = () => {
//   const navigate = useNavigate();
//   const [productName, setProductName] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [productQuantity, setProductQuantity] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Construct the product data object
//     const productData = {
//       productName,
//       productPrice,
//       productQuantity,
//     };

//     try {
//       // Send a POST request to the server to add the product
//       const response = await fetch("http://localhost:3001/add-product", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(productData),
//       });

//       if (response.ok) {
//         alert("Product added successfully");
//         navigate("/parent_page");
//       } else {
//         throw new Error("Failed to add product");
//       }
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product");
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="productName">Product Name:</label>
//           <input
//             type="text"
//             id="productName"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="productPrice">Product Price:</label>
//           <input
//             type="number"
//             id="productPrice"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="productQuantity">Product Quantity:</label>
//           <input
//             type="number"
//             id="productQuantity"
//             value={productQuantity}
//             onChange={(e) => setProductQuantity(e.target.value)}
//           />
//         </div>
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// };

// export default ProductUploadForm;
