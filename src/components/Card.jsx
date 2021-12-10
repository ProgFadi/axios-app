import { useStyles } from './styles/CardStyles';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {CART_PRODUCTS} from "./axios/Constants";

/* for currency formatting */
const formatPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export default function MultiActionAreaCard(props) {
    const classes = useStyles();

    /* add to cart */
    function addItem() {
        let tempProducts = [];
        let product = { id: props.obj.id, title: props.obj.title , price: formatPrice.format(props.obj.price),image: props.obj.image}
        tempProducts = JSON.parse(localStorage.getItem(CART_PRODUCTS));
        tempProducts.push(product);
        localStorage.setItem(CART_PRODUCTS, JSON.stringify(tempProducts));
    }

    function removeItem(ID) {
        let tempProducts = [];
        tempProducts = JSON.parse(localStorage.getItem(CART_PRODUCTS));
        tempProducts.splice(tempProducts.indexOf(ID), 1);
        console.log(tempProducts)
        localStorage.setItem(CART_PRODUCTS,JSON.stringify(tempProducts));
    }

    const CardFunction = (ID) => {
        if(props.buttonText === 'remove'){
             removeItem(ID)
        }
        else
             addItem()
    }

    return (
        <Card sx={{ minWidth: 225 , marginTop: '1.5em'}}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    image={props.obj.image}
                    alt="product image"
                    className={classes.CardMedia}
                />
                <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant="h5" component="div" className={`${classes.title} ${classes.Typography}`}>
                        {props.obj.title}
                    </Typography>
                    <Typography component="div" className={`${classes.price} ${classes.Typography}`}>
                        {formatPrice.format(props.obj.price)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" className={classes.CardButton} onClick={() => {
                    console.log(props.obj.id)
                    CardFunction(props.obj.id)
                }}>
                    {props.buttonText}
                </Button>
            </CardActions>
        </Card>
    );
}
