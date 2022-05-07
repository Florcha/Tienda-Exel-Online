import React from "react";
import ProductCard from "../components/ProductCard";

const ProductsList = ({ products }) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {products.map((productsData) => (
            <ProductCard key={productsData.id} products={productsData} />       
            ))}
        </div>
    );
};

export default ProductsList