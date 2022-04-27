import { useEffect, useState } from "react";
import { products as productsData } from "../data/products";

const ProductsContainer = () => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = new Promise( (resolve, reject) => {
      setTimeout( () =>{
        reject('error en la promesa')
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
      {products.map( products => <ProductsCard key={products.id} productsData={products}/>)}
    </div>
  )
}

export default ProductsContainer
