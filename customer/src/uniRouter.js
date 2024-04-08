// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homePage1";
import ViewProduct from "./components/pages/viewProduct";
import ViewCart from "./components/pages/viewCart";
import Orders from "./components/pages/Orders";

const rout = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/product" component={ViewProduct} />
        <Route path="/cart" component={ViewCart} />
        <Route path="/orders" component={Orders} />
      </Routes>
    </Router>
  );
};

export default rout;
