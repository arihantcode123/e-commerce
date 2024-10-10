import React, { useState } from 'react';
import Cards from './Cards';
import { useAuth } from '../store/auth';



const ProductsCard = ({query}) => {
  
  const {products} = useAuth();
  console.log(products);
  
  return (
    <div className='product_container'>
      {products.filter((items)=>{
        return items.name.toLowerCase().includes(query)
      }).map((product) => (
        <Cards key={product.id} product={product}/>
      ))}
      
    </div>
  );
};

export default ProductsCard;
