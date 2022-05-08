import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductList from "../../components/cart/ProductList";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { getProducts } from "../../data/getProducts";


const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((result) => {
        setProducts(
          category
            ? result.filter((item) => item.category === category)
            : result
        );
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