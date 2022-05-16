import { useState } from "react";
import { useCartContext } from "../../context/CartContextProvider";
import GoToCart from "../../components/cart/GoToCart";
import ProductCount from "../../context/ProductCount";

import "./ProductDetail.css";

const ProductDetail = ({ product }) => {
  const { name, price, pictureUrl, stock, id } = product;
  const [countToAdd, setCountToAdd] = useState(0);
  const { addToCart, unitsPerProduct } = useCartContext();

  const handleOnAdd = (count) => {
    if (count + unitsPerProduct(id) > stock) {
      const availableToAdd = stock - unitsPerProduct(id);
      return alert(`Agregar tu ${availableToAdd} producto`);
    }
    setCountToAdd(count);
    addToCart(product, count);
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={pictureUrl} alt={name} className="card-img" />
      <h4>Precio: ${price}</h4>
      <h4>Stock: {stock} unidades</h4>
      {countToAdd === 0 ? (
        <ProductCount stock={stock} initial={1} onAdd={handleOnAdd} />
      ) : (
        <GoToCart/>
      )}
    </div>
  );
}

export default ProductDetail;