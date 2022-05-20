import React from "react";

import { useCartContext } from "../../context/CartContextProvider";

const CartProduct = ({ product, key }) => {
  const { deleteById, removeOneUnit } = useCartContext();
  const { name, quantity, price, id, pictureUrl } = product;

  return (
    <div>
      <h1>{name}</h1>
      <img src={pictureUrl} alt={name} className="card-img" />
      <h4>Unidades: {quantity}</h4>
      <h4>Precio unitario: ${price}</h4>
      <button onClick={() => removeOneUnit(id)}>Eliminar 1</button>
      <button onClick={() => deleteById(id)}>Eliminar todos</button>
    </div>
  );
};

export default CartProduct;