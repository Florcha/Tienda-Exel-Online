import React from "react";
import Products from "../data/products";

const ProductsList = ({ products }) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {products.map((product) => (
            <Products key={product.id} products={products} />       
            ))}
        </div>
    );
};

export default ProductsList