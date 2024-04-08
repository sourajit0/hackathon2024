import React from "react";
import HomePage from "./homePage1"; // Import the HomePage component
import "./App.css";
// import ViewCart from "./components/pages/viewCart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./homePage1";
import ViewProduct from "./components/pages/viewProduct";
import ViewCart from "./components/pages/viewCart";
import Orders from "./components/pages/Orders";
import ViewOrdersPage from "./components/pages/Orders";
// import rout from "./uniRouter";
// import React, { useRef } from "react";

function App() {
  return (
    <div className="background" style={{ minHeight: "auto" }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ViewProduct />} />
            <Route path="/cart" element={<ViewCart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
