import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

const CartContext = createContext(0);
function CartProvider({children}) {
    const [cart,setCart]=useState([]);
    useEffect(()=>{
      setCart(JSON.parse(localStorage.getItem("mycart")))
    },[])
  return (
    <CartContext.Provider value={{cart,setCart}}>
        {children}
    </CartContext.Provider>
  )
}

const useCart=()=>useContext(CartContext)

export {useCart,CartProvider}
