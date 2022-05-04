import React, { useEffect, useState } from "react";
import { getProducts } from "../data/getProducts";
import ProductsList from "../components/ProductsList";


const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    getProducts()
      .then((result) => setProducts(result))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
      <>
        <h1 style={{margin: 12}}>SECCIÓN EN CONSTRUCCIÓN</h1>
        <ProductsList products={products}/>
      </>
  );
};


export default ProductsContainer;
