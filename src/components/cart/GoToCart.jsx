import React from "react";
import { Link } from "react-router-dom";

import "./GoToCart.css";

const GoToCart = () => {
  return (
    <Link to="/cart">
      <button className="btn btn-go-to-cart">Ir al carrito</button>
    </Link>
  );
};

export default GoToCart;