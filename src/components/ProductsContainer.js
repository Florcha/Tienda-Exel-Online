import React, { useEffect, useState } from "react";
import { getProducts } from "../data/getProducts";
import ProductsList from "../components/ProductsList";
import { useParams } from 'react-router-dom';


const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams ()
  console.log(category);

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
