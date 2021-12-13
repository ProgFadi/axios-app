import React from 'react';
import Card from '../Card'
import Box from './Home';
import {CART_PRODUCTS} from "../axios/Constants";
import AuthHoc from "../AuthHoc";


function Cart() {
    const StoredProducts = JSON.parse(localStorage.getItem(CART_PRODUCTS))
    const cartProducts = StoredProducts ? StoredProducts : []

    return (
        <Box>
            {cartProducts.map((object, i) => <Card obj={object} key={i} buttonText={'remove'} />)}
        </Box>
    );
}

Cart = AuthHoc(Cart);
export default Cart;