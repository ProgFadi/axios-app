import { createContext, useEffect, useState } from "react";
import {CARTS_KEY} from '../utils/Constants'
const initValue = {
    carts:[],
    addToCarts:(obj)=>{},
    removeCart:(id)=>{}
}
const CartContext = createContext(initValue)

export const CartProvider = ({children})=>{
    const [carts, setCarts] = useState([])
    useEffect(()=>{
      let cartsData =  JSON.parse(localStorage.getItem(CARTS_KEY))
      if(cartsData)
      {
          setCarts(cartsData)
      }
    },[])
    const addToCarts = (cart)=>{
        console.log('add to cart..')
        let cartsTemp = carts
        cartsTemp.push(cart)
        setCarts([...cartsTemp])
        console.log('add to cart...')

        localStorage.setItem(CARTS_KEY,JSON.stringify(cartsTemp))
        console.log('added')
    }
    const removeCart = (id)=>{
        
        let cartsTemp = carts.filter((item)=>{
           return item.id != id
        })
        setCarts(cartsTemp)
        localStorage.setItem(CARTS_KEY,JSON.stringify(cartsTemp))

    }
    return <CartContext.Provider
    
    value={{
        carts:carts,
        addToCarts,
        removeCart
    }}
    >
        {children}
    </CartContext.Provider>
}
export default CartContext;