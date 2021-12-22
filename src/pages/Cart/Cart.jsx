import { Box } from '@mui/material';
import React from 'react'
import ProductCard from '../../components/Product-Card/ProductCard';
import {CART_PRODUCTS} from '../../utils/Constants';
import './CartStyle.css';

function Cart() {
    let StoredProducts = JSON.parse(localStorage.getItem(CART_PRODUCTS));
    const cartProducts = StoredProducts ? StoredProducts : []

    return (
        <Box className='cartpage'>
            <h1>Products In Your Cart</h1>
            <Box className='cartProduct'>
                {
                    cartProducts.map((product) => {
                        return <ProductCard product={product} buttonText='remove'/>
                    })
                }
            </Box>
        </Box>
    )
}

export default Cart
