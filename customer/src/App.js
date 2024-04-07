import React from 'react';
import HomePage from './homePage.jsx'; // Import the HomePage component
import Orders from './components/pages/Orders.js'; 
import ViewProductsPage from './components/pages/viewProduct.js';
import ViewCart from './components/pages/viewCart.js';
import "./App.css";

function App() {
  return (
    <div className='background' style={{minHeight:"auto"}}>
    <div className="App">
      {/* Render the HomePage component */}
      <HomePage/>
    </div>
    </div>
  );
}

export default App;