import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Auth from '../utils/Auth';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from '@mui/system';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '80%',
    maxHeight: '80%',
});

function Products(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=5')

            .then(res => {
                console.log(res);
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <Box>
            <Grid container spacing={2}>

                {products.map((product, i) => {
                    return (

                        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 300, flexGrow: 1 }} key={i}>
                            <Grid sx={{ flexDirection: 'column' }} container spacing={2}>
                                <Grid item>
                                    <ButtonBase >
                                        <Img alt={product.title} src={product.image} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container direction="column">
                                    <Grid item xs container direction="row" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                {product.title}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {product.category}
                                            </Typography>

                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" component="div">
                                                {product.price} €
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', padding: 1, borderRadius: 2, textAlign: 'center', mt: 2 }} variant="body2">
                                            Add to Cart
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    )
                })}
            </Grid>
        </Box>

    );
}

Products = Auth(Products);

export default Products;
