import Box from '@mui/material/Box';
import ProductImage from '../ProductPage/ProductImage'
import ProductDetials from '../ProductPage/ProductDetials'
import Button from '../ProductPage/Button'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';



const ItemsCart = ({onClick,productCart}) => {
    
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Box sx={{
            width:'75%',
            marginRight: '50px',
            
        }}>
              <div className={'productsDiv'} style={{border: '1px solid gray',
            borderRadius: '10px',
            backgroundColor: '#f8f8f8',}}>
                
             {productCart ? productCart.map((product, index)=>(
                 
                 <div className={'product'} key={index}>
         <div> 
            <ProductImage productImage={product.image} />
         </div>
            <ProductDetials product={product} />
            <div>
                <Button name={'Remove item from Cart'} styles='btnAddCart'  onClick={() => onClick(product)} />
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error"  sx={{ width: '100%' }}>
                    Product removed
                </Alert>
            </Snackbar>

            </div>
        </div>

                 )
                 ): <Link to='/product'>Your Cart is empty Go to Shop</Link>  }
                 </div>
                 </Box>
        
    )
}

export default ItemsCart
