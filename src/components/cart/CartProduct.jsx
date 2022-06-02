import React from "react";

import { useCartContext } from "../../context/CartContextProvider";

const CartProduct = ({ product, key }) => {
  const { deleteById, removeOneUnit } = useCartContext();
  const { name, quantity, price, id, pictureUrl } = product;

  return (
    <div className="card" style={{ width: '350px', height: '500px', justifyContent: 'center' }}>
      <h1>{name}</h1>
      <img src={pictureUrl} alt={name} style={{ margin: 'auto' }} className="card-img" />
      <h4 style={{ textAlign: 'center' }}>Unidades: {quantity}</h4>
      <h4 style={{ textAlign: 'center' }}>Precio unitario: ${price}</h4>
      <button className="btn btn-add-to-cart" style={{ display: 'block', margin: '20px auto', width: '180px' }} onClick={() => removeOneUnit(id)}>Eliminar 1</button>
      <button className="btn btn-add-to-cart" style={{ display: 'block', margin: 'auto', width: '180px' }} onClick={() => deleteById(id)}>Eliminar todos</button>
    </div>
  );
};

export default CartProduct;