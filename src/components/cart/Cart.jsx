import { useCartContext } from "../../context/CartContextProvider";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { productList, emptyCart, totalPrice } = useCartContext();

  return (
    <div>
      {productList.map((item) => (
        <CartProduct key={item.id} product={item} />
      ))}
      {productList.length > 0 ? (
        <>
          <button onClick={() => emptyCart()}>Vaciar Carrito</button>
          <h1>Precio total: ${totalPrice()}</h1>
        </>
      ) : (
        <h1>El carrito esta vacio</h1>
      )}
    </div>
  );
};

export default Cart;