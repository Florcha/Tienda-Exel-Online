import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import ProductDetailContainer from "./components/containers/ProductDetailContainer";
import ProductListContainer from "./components/containers/ProductListContainer";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="products" element={<ProductListContainer />} />
            <Route path="products/:category" element={<ProductListContainer />} />
            <Route path="product/:id" element={<ProductDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;