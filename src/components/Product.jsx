

import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';


const Img = styled('img')({
    width: '100%',
    height: '100%',
    maxWidth: '300px',
    maxHeight: '300px',
    borderRadius: '5px',
});

// TODO - Implement Quantities

const addToCart = (product) => {
    if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', JSON.stringify([product]))
    } else {
        const cart = JSON.parse(localStorage.getItem('cart'))
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

const Product = (props) => {
    return (
        <Card sx={{ m: 1, maxWidth: '300px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch' }}>
            <Box p={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonBase>
                    <Img src={props.image} />
                </ButtonBase>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'Bold' }} variant="h6">{props.title}</Typography>
                <Chip sx={{ ml: '1rem' }} label={`$ ` + props.price} variant="outlined" />
            </Box>
            <Typography sx={{ ml: '1rem', textTransform: 'capitalize', color: '#757575' }} variant="body2">{props.category}</Typography>
            <Box item sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
                <ButtonBase sx={{ cursor: 'pointer', backgroundColor: 'rgba(0, 0, 0, .7)', color: 'white', padding: 1.5, borderRadius: 2, textAlign: 'center', mt: 2, width: '100%', fontSize: '1rem', fontWeight: 600 }} variant="body2" onClick={() => addToCart(props)}>
                    Add to Cart
                </ButtonBase>
            </Box>
        </Card>
    )
}

export default Product
