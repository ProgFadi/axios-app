import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Auth from '../utils/Auth';
import Product from '../components/Product';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const addToCart = (product) => {
    if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', JSON.stringify([product]))
    } else {
        const cart = JSON.parse(localStorage.getItem('cart'))
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

function Products(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=10')

            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    let originalProducts = [...products];

    const onSearch = (e) => {
        let search = e.target.value;

        if (search.length > 0) {

            let filteredProducts = products.filter(product => {
                return product.title.toLowerCase().includes(search.toLowerCase());
            });

            setProducts(filteredProducts);

        } else {
            setProducts(originalProducts);
        }
    }

    return (
        <Grid container alignItems="stretch" style={{ display: 'flex', flexDirection: 'column' }} sx={{ alignItems: 'center' }}>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, maxWidth: '30rem', width: '20em' }, px: '2vw', pb: '2vh' }} noValidate autoComplete="off" >
                <TextField id="product-search" label="Search Products" variant="outlined" onChange={onSearch} />
            </Box>
            <Grid item style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', p: 2, justifyContent: 'center' }}>


                {(products.length > 0) ? products.map((product, index) => {
                    return (
                        <Product title={product.title} category={product.category} price={product.price} image={product.image} key={index} />
                    )
                }) :
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: '20vh' }}>
                        <Typography sx={{ color: 'rgba(0, 0, 0, .7)' }} variant="h6">Loading Products ...</Typography>
                        <Typography variant="body2"><HourglassBottomIcon sx={{ fontSize: '15rem', color: 'rgba(0, 0, 0, .1)' }} /></Typography>
                    </Box>
                }


            </Grid>

        </Grid>
    );
}

Products = Auth(Products);

export default Products;
