import { useEffect, useState } from "react";
import { products as productsData } from "../data/products";

const ProductsContainer = () => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = new Promise( (resolve, reject) => {
      setTimeout( () =>{
        resolve(productsData)
      }, 5000)
    })

    getProducts.then (result) => {
      console.log('Se completó la promesa', result);
      setProducts(result)
    }), (err) => {
      console.log('hubo un error');
    })

    console.log('Se terminó el efecto');
  }, [])
  
  
  return (
    <div>
      {products.map( products => products.name )}
    </div>
  )
}

export default ProductsContainer
