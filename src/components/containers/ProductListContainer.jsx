import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductList from "../../components/cart/ProductList";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { getProducts } from "../../jsonToFirestore";



const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProducts(category)
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.log.apply(error))
      .finally(() => setIsLoading(false));
  }, [category]);

  return isLoading ? (
    <LoadingSpinner text='Cargando productos...' />
  ) : (
    <ProductList products={products} />
  );
};


export default ProductListContainer;