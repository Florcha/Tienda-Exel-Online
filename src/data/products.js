/*import React from "react";

const Products = ({ products }) => {
    return (
        <>
          <h1 style={{padding: 25, margin: 25}}>Productos BioCosmética EXEL</h1>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              {products.map((product) => (
                <div key={product.id} style={{display:"flex", flexDrection: "column", alignItems: "center", border: "2px solid pink", padding: 25, margin: 25}}>
                  <h1> {product.name} </h1>
                  <h2> Marca: {product.mark} </h2>
                
                </div>        
            ))}
            </div>
        </>
    );
};

export default Products*/


export const products = [
    {
        id: 1, 
        name:'Gel', 
        mark:'Exel',
        category: '',
        pictureUrl: 'Facial'
    },

    {
        id: 2, 
        name:'Crema', 
        mark:'Lidherma',
        category: '',
        pictureUrl: 'Corporal'
    },

    {
        id: 3, 
        name:'Enjuague', 
        mark:'Loreal',
        category: 'Cabello',
        pictureUrl: ''
    },

    {  
        id: 4, 
        name:'Shampoo', 
        mark:'Victus',
        category: 'Cabello',
        pictureUrl: ''
    },
];

/*export default Products*/
