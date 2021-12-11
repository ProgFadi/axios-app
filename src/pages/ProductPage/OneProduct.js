import Button from './Button'
import DeleteProduct from './DeleteProduct'
import ProductDetials from './ProductDetials'
import ProductImage from './ProductImage'
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { useState } from 'react';

const Product = ({product, onDelete,name}) => {
    const [open, setOpen] = useState(false);
    const onClick = () => {
        let getData = JSON.parse(localStorage.getItem('CartData'))
        if (!getData){
            let addCart = [product]
            localStorage.setItem('CartData', JSON.stringify(addCart) )
            setOpen(true)
        }
        else{
            let obj = getData.find(o => o.title === product.title);
                if(!obj) {
                    getData.push(product)
            localStorage.setItem('CartData', JSON.stringify(getData) )
            setOpen(true)
        }
        else {
            alert('Item Alredy Added')
    }
            
        }
    }
    const handleClose = (event) => {
        setOpen(false);
    }
    return (
        <div className={'product'}>
         <div> 
           <DeleteProduct onDelete={onDelete} product={product.id} />
            <ProductImage productImage={product.image} />
         </div>
            <ProductDetials product={product} />
            <div>
                <Button name={name} styles='btnAddCart'  onClick={onClick} />
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose}>
                    Item Added to your cart
                </Alert>
            </Snackbar>
            </div>
        </div>
    )
}

export default Product