import React from 'react';
import { CartConsumer } from '../../context/CartContext';

const ProductDetail = ({ product }) => {
  console.log(product)
  return (
    <CartConsumer>
      {({ state, dispatch }) => (
        <div>
          <article className="detail">
            <img alt="Product" src={product.pictureUrl} />
            <h1>{product.productName}</h1>
            <p>${product.price}</p>
          </article>
          <div>{state.count}</div>
          <button onClick={() => dispatch({ type: 'decrement' })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: 'increment' })}>
            Increment
          </button>
        </div>
      )}
    </CartConsumer>
  )
}

export default ProductDetail;