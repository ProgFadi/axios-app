import React from 'react'
import { Box } from '@mui/material'
import {CART_PRODUCTS} from '../../utils/Constants'
import './StyleProductCard.css'

function ProductCard(props) {

    let tempProducts = [];

    /* add item to the cart */
    const addItem = () => {
        let product = { id: props.product.id, title: props.product.title , price: props.product.price, image: props.product.image, description: props.product.description}
        tempProducts = JSON.parse(localStorage.getItem(CART_PRODUCTS));
        tempProducts.push(product);
        localStorage.setItem(CART_PRODUCTS, JSON.stringify(tempProducts));
        alert('Added to your cart');
    }

    // remove item from the cart 
    const removeItem = () => {
        tempProducts = JSON.parse(localStorage.getItem(CART_PRODUCTS));
        tempProducts.splice(tempProducts.findIndex(x => x.id === props.product.id), 1);
        localStorage.setItem(CART_PRODUCTS,JSON.stringify(tempProducts));
        window.location.reload(false);
    }

    const CardFunction = () => {
        if(props.buttonText === 'remove')
            removeItem()
        else
            addItem()
    }
    return (
        <Box className="product-card">
            <img src={props.product.image} alt="product" width="200px" height="200px"/>
            <span className="span">Sneakers</span>
            <Box className="card-details">
                <h4>{props.product.title}</h4>
                <span>{props.product.price}$</span>
            </Box>
            <p>{`${props.product.description.substring(0, 123)}...`}</p>
            <button onClick={CardFunction}>{props.buttonText}</button>
        </Box>
    );
}

export default ProductCard;
