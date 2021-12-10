import React, {useEffect} from 'react';
import {Navigate} from "react-router-dom";
import Card from '../Card'
import Box from './Home';
import {CART_PRODUCTS} from "../axios/Constants";


function Cart() {
    const StoredProducts = JSON.parse(localStorage.getItem(CART_PRODUCTS))
    const cartProducts = StoredProducts ? StoredProducts : []

    const [isLogged, setIsLogged] = React.useState(true)
    useEffect(()=>{
        let token;
        try {
            token = JSON.parse(localStorage.getItem('token'))
            if(!token)
                setIsLogged(false)

        } catch (error) {
            console.log(error)
            setIsLogged(false)
        }

    },[])

    if(!isLogged)
        return <Navigate to="/login"/>

    return (
        <Box>
            {cartProducts.map((object, i) => <Card obj={object} key={i} buttonText={'remove'} />)}
        </Box>
    );
}

export default Cart;