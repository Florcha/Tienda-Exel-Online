import React from 'react';
import { CartConsumer } from '../../context/CartContextProvider';

const ProductDetail = ({ product }) => {
  console.log(product)
  return (
    <CartConsumer>
      {/* Estos son los metodos que expones en el CartContextProvider, desde aqui podes accederlos */}
      {({ productList, addToCart, emptyCart, deleteById, totalCount, totalPrice, removeOneUnit, unitsPerProduct, }) => (
        <div>
          <article className="detail">
            <img alt="Product" src={product.pictureUrl} />
            <h1>{product.productName}</h1>
            <p>${product.price}</p>
          </article>
          {/* Añade aqui la logica para que se añadan al carrito y demas */}
          <button>
            Decrement
          </button>
          <button>
            Increment
          </button>
        </div>
      )}
    </CartConsumer>
  )
}

export default ProductDetail;