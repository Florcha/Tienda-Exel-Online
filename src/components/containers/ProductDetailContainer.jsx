import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/cart/ProductCard";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { getProduct } from "../../data/getProducts";

const ProductDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProduct(id)
      .then((result) => {
        setProduct(result);
      })
      .catch((error) => console.log.apply(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return isLoading ? (
    <LoadingSpinner text='Cargando productos...' />
  ) : (
    <ProductCard product={product} />
  );
};

export default ProductDetailContainer;