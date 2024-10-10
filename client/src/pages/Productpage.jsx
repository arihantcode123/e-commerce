import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Productpage() {

    const {id}=useParams();
    const [product,setProduct]=useState({
        name:"",
        price:""
    })

    const fetchProduct=async(req,res)=>{
        try {
            const response = await fetch(`http://localhost:5000/api/data/products/${id}`,{
                method:"GET"
            })
            
            if(response.ok){
                const productDetails = await response.json();
                console.log(productDetails);
                setProduct({name:productDetails.name,price:productDetails.price})          
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchProduct();
    },[])
  return (
    <div>
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
  )
}
