import React from "react";
import { useCartContext } from "../../context/CartContextProvider";
import PurchaseInProgress from "../purchase/PurchaseInProgress";

const PurchaseContainer = () => {

  const { productList, totalPrice, emptyCart } = useCartContext();

  return (
    <div className="detail-container">
      {
        (!totalPrice()) ?
          <h1>El carrito esta vacio</h1> :
          <PurchaseInProgress productList={productList} totalPrice={totalPrice()} emptyCart={emptyCart}></PurchaseInProgress>
      }
    </div>
  );
};

export default PurchaseContainer;