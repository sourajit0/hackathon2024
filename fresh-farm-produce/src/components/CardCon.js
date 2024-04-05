import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import market from "./market.png";
import manage from "./manage.png";
import order from "./order.png";
import "./Style/cardcon.css";

const CardContainer = () => {
  return (
    <>
      <div className="msg-farmer">
        Your Ultimate Destination for Selling Your Harvest
      </div>
      <div className="card-container">
        <Link to="/add-product">
          <Card image={market} title="Add Products" />
        </Link>
        <Link to="/manage-product">
          <Card image={manage} title="Manage Products" />
        </Link>
        <Link to="/order-list">
          <Card image={order} title="Order List" />
        </Link>
      </div>
    </>
  );
};

export default CardContainer;
