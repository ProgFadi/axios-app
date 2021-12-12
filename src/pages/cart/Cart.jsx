import Box from '@mui/material/Box';
import DetailsPaper from './DetailsPaper'
import ItemsCart from './ItemsCart'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';



const Cart = () => {
const [productCart,setProductCart] = useState(JSON.parse(localStorage.getItem('CartData')))
const navigate = useNavigate()
    const auth = useAuth().isAuth

    useEffect(() => {
        if(!auth) navigate('/login')
    }, )

   
    let cart = JSON.parse(localStorage.getItem('CartData'))
    var price = 0
    if(cart){
        var length = cart.length
        cart.map((item)=>(
         price+=item.price
        ))
    }
    else {
         length = 0
    }
    
    
    



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
