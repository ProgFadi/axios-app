import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import { CardActionArea, CardActions } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const Product = (props)=> {
    const [open, setOpen] = React.useState(false);

    const addToCart = (product)=> {
        setOpen(false)
        let items = JSON.parse(localStorage.getItem('items')) ?? []
        let updated_product 
        let qty

        if(items.length==0)
        {
            updated_product=product

        } else {
            updated_product = items.find((item)=> item.id==product.id) ?? product
        }
        qty = updated_product.qty ??  0
        updated_product.qty = qty+1
        items = items.filter((item)=>{
            return item.id!=product.id
        })
        items.push(updated_product)
        localStorage.setItem("items",JSON.stringify(items))
        setOpen(true)
        
    }

    const removeFromCart = (product) => {
        let items = JSON.parse(localStorage.getItem('items'))
        if(!items)
            return
        
        items = items.filter((item,index)=>{
            return item.id!=product.id
        })

        props.setItems([...items])
        localStorage.setItem("items",JSON.stringify(items))
    }

    const handleClick = ()=> {
        if(props.type==='add')
        {
            return addToCart(props.product)
        }

        return removeFromCart(props.product)
    }

    const handleClose = (event) => {
        setOpen(false);
    }


    return (
        <Card sx={{ maxWidth: 260 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.img}
                    alt="product"
                />
                <CardContent sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                    <Typography variant="subtitle2" color="text.secondary">{props.category}</Typography>
                    <Typography variant="h5">{props.title}</Typography>
                    </div>
                    <Typography variant="overline" display="block" color="text.secondary">${props.price}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button sx={{width: '100%'}} variant="contained" startIcon={props.type==='add'? <AddIcon /> : <RemoveIcon />}  onClick={handleClick} >{props.btn}</Button>
            </CardActions>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    item added to cart
                </Alert>
            </Snackbar>
        </Card>
    )
}

export default Product;