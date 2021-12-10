import Box from '@mui/material/Box';
import ProductImage from '../ProductPage/ProductImage'
import ProductDetials from '../ProductPage/ProductDetials'
import Button from '../ProductPage/Button'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const ItemsCart = () => {
    
    const [productCart,setProductCart] = useState(JSON.parse(localStorage.getItem('CartData')))

    useEffect(() => {
        setProductCart(productCart)
    
      },[productCart])
      

   const onClick = (id) => {
       

       let filter = productCart.filter((product) => product.id !== id.id )
       setProductCart(filter)
      localStorage.setItem('CartData', JSON.stringify(filter) )
    }
    return (
        <Box sx={{
            width:'75%',
            
        }}>
              <div className={'productsDiv'} style={{border: '1px solid gray',
            borderRadius: '10px',
            backgroundColor: '#f8f8f8',}}>
                
             {productCart.length ? productCart.map((product, index)=>(
                 
                 <div className={'product'} key={index}>
         <div> 
            <ProductImage productImage={product.image} />
         </div>
            <ProductDetials product={product} />
            <div>
                <Button name={'Remove item from Cart'} styles='btnAddCart'  onClick={() => onClick(product)} />
            </div>
        </div>

                 )
                 ): <Link to='/product'>Your Cart is empty Go to Shop</Link>  }

                 </div>
                 </Box>
        
    )
}

export default ItemsCart
