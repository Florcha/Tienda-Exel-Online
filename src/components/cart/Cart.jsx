import { useCartContext } from "../../context/CartContextProvider";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { productList, emptyCart, totalPrice } = useCartContext();

  return (
    <>
      <div style={{ margin: '50px', display: 'flex'}}>
        {productList.length > 0 ? (
          <>
            <h1>Precio total: ${totalPrice()}</h1>
            <button className="btn btn-add-to-cart" style={{margin: '0 20px'}} onClick={() => emptyCart()}>Vaciar Carrito</button>
          </>
        ) : (
          <h1>El carrito esta vacio</h1>
        )}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {productList.map((item) => (
          <CartProduct key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default Cart;