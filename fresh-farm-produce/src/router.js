import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./Pages/AddProduct";
import ManageProduct from "./Pages/ManageProduct";
import OrderList from "./Pages/OrderList";
import CardContainer from "./components/CardCon";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/manage-product" element={<ManageProduct />} />
        <Route path="/order-list" element={<OrderList />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
