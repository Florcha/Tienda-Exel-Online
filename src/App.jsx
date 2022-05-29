import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import NavBar from "./components/common/NavBar";
import ProductDetailContainer from "./components/containers/ProductDetailContainer";
import ProductListContainer from "./components/containers/ProductListContainer";
import { CartContextProvider } from "./context/CartContextProvider";
import Form from "./components/common/Form";
import PortadaPrincipal from "./components/common/PortadaPrincipal";


function App() {
  return (
    <>
      <div className="App">
      <CartContextProvider>      
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<PortadaPrincipal />} />
            <Route path="products" element={<ProductListContainer />} />
            <Route path="products/:category" element={<ProductListContainer />} />
            <Route path="product/:id" element={<ProductDetailContainer />} />
            <Route path="form" element={<Form />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>      
      </CartContextProvider>
      </div>
    </>
  )
}

export default App;
