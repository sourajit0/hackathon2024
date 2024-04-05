import React from "react";
import "./Style/Card.css";

function Card({ image, title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="content">
        <h2>{title}</h2>
        
      </div>
    </div>
  );
}

export default Card;
