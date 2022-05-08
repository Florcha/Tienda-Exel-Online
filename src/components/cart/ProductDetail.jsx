import React from 'react';

const ProductDetail = ({ product }) => {
  console.log(product)
  return (
    <article className="detail">
      <img alt="Product" src={product.pictureUrl} />
      <h1>{product.productName}</h1>
      <p>${product.price}</p>
    </article>
  )
}

export default ProductDetail;