import Box from '@mui/material/Box';
import ProductImage from '../ProductPage/ProductImage'
import ProductDetials from '../ProductPage/ProductDetials'
import Button from '../ProductPage/Button'
import { useEffect, useState } from 'react';


const ItemsCart = () => {
    const [productCart,setProductCart] = useState(JSON.parse(localStorage.getItem('CartData')))

    useEffect(() => {
        setProductCart(productCart)
    
      },[productCart])

   const onClick = (id) => {
       let a = productCart.filter((product) => product.id !== id.id )
       setProductCart(a)
       console.log(a)

      localStorage.setItem('CartData', JSON.stringify(a) )

    // var index = productCart.indexOf(product);
    // console.log(productCart)
    // console.log(product)
    // if (index > -1)
    //     productCart.splice(index, 1);
    // localStorage.setItem('CartData', JSON.stringify(productCart) )
        
    }
    return (
        <Box sx={{
            width:'75%',
            
        }}>
              <div className={'productsDiv'} style={{border: '1px solid gray',
            borderRadius: '10px',
            backgroundColor: '#f8f8f8',}}>
             {productCart.map((product, index)=>(
                 
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
                 )}  
                 </div>
                 </Box>
        
    )
}

export default ItemsCart
