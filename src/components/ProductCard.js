import React from 'react'

const ProductCard = (productsData) => {
  return (
    <div style={{border:'solid pink 2px', margin:'20px', padding: '20px'}}>
        <strong>{productsData.name}</strong>
        <div>{productsData.mark}</div>
    </div>
  )
}

export default ProductCard