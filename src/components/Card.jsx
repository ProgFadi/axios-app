import { useStyles } from './styles/CardStyles';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {CART_PRODUCTS} from "./axios/Constants";

export default function MultiActionAreaCard(props) {
    const classes = useStyles();
    let tempProducts = [];

    /* add item to the cart */
    const addItem = () => {
        console.log(props.obj.price)
        let product = { id: props.obj.id, title: props.obj.title , price: props.obj.price, image: props.obj.image}
        tempProducts = JSON.parse(localStorage.getItem(CART_PRODUCTS));
        console.log(tempProducts)
        tempProducts.push(product);
        localStorage.setItem(CART_PRODUCTS, JSON.stringify(tempProducts));
    }

    /* remove item from the cart (you should refresh the page to see the new items array) */
    const removeItem = () => {
        tempProducts = JSON.parse(localStorage.getItem(CART_PRODUCTS));
        tempProducts.splice(tempProducts.findIndex(x => x.id === props.obj.id), 1);
        localStorage.setItem(CART_PRODUCTS,JSON.stringify(tempProducts));
    }

    const CardFunction = () => {
        if(props.buttonText === 'remove')
            removeItem()
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
                        {'$'+props.obj.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" className={classes.CardButton} onClick={ CardFunction }>
                    {props.buttonText}
                </Button>
            </CardActions>
        </Card>
    );
}
