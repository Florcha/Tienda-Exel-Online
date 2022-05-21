import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
/*import Cart from "./components/cart/Cart";*/
import NavBar from "./components/common/NavBar";
import ProductDetailContainer from "./components/containers/ProductDetailContainer";
import ProductListContainer from "./components/containers/ProductListContainer";
import { CartContextProvider } from "./context/CartContextProvider";
/*import dataToFirebase from "../src/jsonToFirestore";*/


function App() {
  return (
    <>
      <div className="App">
      <CartContextProvider>      
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="products" element={<ProductListContainer />} />
            <Route path="products/:category" element={<ProductListContainer />} />
            <Route path="product/:id" element={<ProductDetailContainer />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>      
      </CartContextProvider>
      </div>
    </>
  )
}

export default App;
