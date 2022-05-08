import React from 'react';

/*import './;*/
const ProductDetail = ({ product }) => {
  console.log(product)
  return (
    <article className="detail">
        <img src={ product.image } />
        <h1>{product.productName}</h1>
        <p>${product.price}</p>
    </article>
  )
}

export default ProductDetail;