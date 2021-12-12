import Box from '@mui/material/Box';
import DetailsPaper from './DetailsPaper'
import ItemsCart from './ItemsCart'
import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'


const Cart = () => {
const [productCart,setProductCart] = useState(JSON.parse(localStorage.getItem('CartData')))
    const [isLogged, setIsLogged] = useState(true)
    useEffect(()=>{
        let token;
        try {
        token = localStorage.getItem('Token')
        if(!token)
         setIsLogged(false)

        } catch (error) {
            setIsLogged(false)
        }
    
    },[])

    if(!isLogged)
        return <Navigate to="/login"/>
    let cart = JSON.parse(localStorage.getItem('CartData'))
    let length = cart.length
    let price = 0
    cart.map((item)=>(
        price+=item.price
    ))



    const onClick = (id) => {
        
 
        let filter = productCart.filter((product) => product.id !== id.id )
        setProductCart(filter)
       localStorage.setItem('CartData', JSON.stringify(filter) )
    //    setOpen(true)
     }



    return (
        <Box sx={{
            display:'flex',
            width:'100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
        <ItemsCart onClick={onClick} productCart={productCart} />
        <DetailsPaper length={length} price={price.toFixed(3)} />
        </Box>
    )
}

export default Cart
