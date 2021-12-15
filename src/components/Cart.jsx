// import '../App.css'
import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'

function Cart({onRemove, cartItems}) {

    const [isLogged, setIsLogged] = React.useState(true)
    useEffect(()=>{
        console.log('1')
        let token;
        try {
        token = JSON.parse(localStorage.getItem('token'))
        console.log('2')
        if(!token)
         setIsLogged(false)

        } catch (error) {
            console.log(error)
            setIsLogged(false)
        }
    
    },[])
    console.log('3')

    if(!isLogged)
        return <Navigate to="/login"/>

    return (
        <div>
              <div className={'pro'}>
                {
                    cartItems.map((product, index)=>(
                        <div key={index} className={'pr'}>
                            <div className={'img-div'}>
                            <img src={product.image} alt="" />
                            </div>
                            <h3 className={'pro-nam'}>
                            {product.name}
                            </h3>
                            <h4 className={'price'}>
                            $ {product.price}
                            </h4>
                            <button className={'cart-btn'} onClick={()=>onRemove(index)}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart;