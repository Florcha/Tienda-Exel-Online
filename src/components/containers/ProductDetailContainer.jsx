import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/cart/ProductDetail";
import { getProduct } from "../../data/getProducts";

import "./ProductDetailContainer.css";

const ProductDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [loading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((resp) => setProduct(resp))
      .catch((error) => console.log.apply(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div className="detail-container">
      {loading ? <h1>Cargando...</h1> : <ProductDetail product={product} />}
    </div>
  );
};

export default ProductDetailContainer;