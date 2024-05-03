import React from "react";
import "../styles/Card.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  const { title, description } = props;
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  const readmore = () => {};

  return (
    <div className="main-card">
      <div className="card-image">
        <img src={props.image} className="cimage" alt="Blog" />
      </div>
      <div className="card-content">
        <h3 style={{ margin: 0 }}>{title}</h3>
        <p>Author: {truncatedDescription}</p>
        <button className="btn" onClick={readmore}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
