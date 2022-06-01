import React from 'react';
import { Link } from 'react-router-dom';

import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <Link to={'/product/' + product.id}>
      <div className='divCont'>
        <img className="imgCard" src={product.pictureUrl} alt={product.productName} />
        <strong>{product.productName}</strong>
        <div>{product.mark}</div>
      </div>
    </Link>
  )
}


export default ProductCard;