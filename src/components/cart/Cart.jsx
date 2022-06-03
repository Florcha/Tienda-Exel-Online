import { useCartContext } from "../../context/CartContextProvider";
import CartProduct from "./CartProduct";

import "./Cart.css";

const Cart = () => {
  const { productList, emptyCart, totalPrice } = useCartContext();

  return (
    <>
      <div className="divStyleUno">
        {productList.length > 0 ? (
          <>
            <h1>Precio total: ${totalPrice()}</h1>
            <button className="btn btn-add-to-cart-total" onClick={() => emptyCart()}>Vaciar Carrito</button>
          </>
        ) : (
          <h1>El carrito esta vacio</h1>
        )}
      </div>
      <div className="divStyleDos">
        {productList.map((item) => (
          <CartProduct key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default Cart;