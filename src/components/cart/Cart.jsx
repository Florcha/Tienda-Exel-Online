import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContextProvider";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { productList, emptyCart, totalPrice } = useCartContext();

  return (
    <>
      <div className="divStyleUno">
        {productList.length > 0 ? (
          <>
            <h1>Precio total: ${totalPrice()}</h1>
            <button className="btn btn-add-to-cart-fn" onClick={() => emptyCart()}>Vaciar Carrito</button>
            <Link to="/purchase">
              <button className="btn btn-add-to-cart-fn">Finalizar compra</button>
            </Link>
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