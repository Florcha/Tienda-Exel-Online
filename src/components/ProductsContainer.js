import { useEffect, useState } from "react";
import  ProductCard  from "./ProductCard";
import { products as productsList }  from "../data/products";

const ProductsContainer = () => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = new Promise( (resolve, reject) => {
      setTimeout( () =>{
        resolve([productsList])
      }, 5000)
    })

    getProducts.then ((result) => {
      console.log('Se completó la promesa', result);
      setProducts(result)
    }).catch((err) => {
      console.log('hubo un error', err);
    })

    console.log('Se terminó el efecto');
  }, [])
  
  
  return (
    <div>
      {products.map( product => <ProductCard key={product.id} productsData={product}/>)}
    </div>
  )
}

export default ProductsContainer
