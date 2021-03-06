import React, { createContext, useContext, useState } from "react";


export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const isInCart = (id) => {
    return productList.some((item) => item.id === id);
  };

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      return setProductList(
        productList.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    }
    setProductList([...productList, { ...item, quantity }]);
  };

  const emptyCart = () => {
    setProductList([]);
  };

  const deleteById = (id) => {
    setProductList(productList.filter((item) => item.id !== id));
  };

  const removeOneUnit = (id) => {
    if (unitsPerProduct(id) === 1) {
      return deleteById(id);
    }
    setProductList(
      productList.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const totalCount = () => {
    return productList.reduce((total, item) => total + item.quantity, 0);
  };

  const totalPrice = () => {
    return productList.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const unitsPerProduct = (id) => {
    const foundInCart = productList.find((item) => item.id === id);
    return foundInCart ? foundInCart.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        productList,
        addToCart,
        emptyCart,
        deleteById,
        totalCount,
        totalPrice,
        removeOneUnit,
        unitsPerProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function CartConsumer({ children }) {
  return (
    <CartContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error('CartConsumer must be used within a CartContextProvider')
        }
        return children(context);
      }}
    </CartContext.Consumer>
  )
}

export { CartContextProvider, CartConsumer };