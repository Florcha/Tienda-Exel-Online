import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={'/product/' + product.id}>
      <div style={{ border: 'solid black 5px', margin: '20px', padding: '20px', fontFamily: 'white' }}>
        <strong>{product.name}</strong>
        <div>{product.mark}</div>
      </div>
    </Link>
  )
}


export default ProductCard;