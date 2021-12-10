import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'
import './Home.css'


const Cart = () => {
    const [productCart,setProductCart] = useState(JSON.parse(localStorage.getItem('CartData')))

    
    
    const onClick = (id) => {
        let filter = productCart.filter((product) => product.name !== id.name )
       setProductCart(filter)
       localStorage.setItem('CartData', JSON.stringify(filter) )
    }

    const [isLogged, setIsLogged] = useState(true)
    useEffect(() => {
        setProductCart(productCart)
    
      },[productCart])
    useEffect(()=>{
        let token;
        try {
        token = localStorage.getItem('token')
        if(!token)
         setIsLogged(false)

        } catch (error) {
            setIsLogged(false)
        }
    
    },[])

    if(!isLogged)
        return <Navigate to="/login"/>

    let cart = JSON.parse(localStorage.getItem('CartData'))
    let length = cart.length
    let price = 0
    cart.map((item)=>(
        price+=item.price
    ))
    
    return (
        <Box sx={{
            display:'flex',
            width:'100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>



            
<Box>
              <div >
                
             {productCart.map((product, index)=>(
                 
                 <div className={"Card"} key={index}>
         <div > 
         <img width="50px" src={product.image} alt='' />
         </div>
         <div>
        <div>{product.description}</div>

        <div >
            <div>
            <p >{product.name}</p>
            </div>
            
        </div>

        <div>
     <p >{product.price} $ </p>
    </div>
            
    </div>
            <div>
            <button className={"Btn"}
            onClick={() => onClick(product)}
           >
                Remove item
        </button>
            </div>
        </div>

                 )
                 )}

                 </div>
                 </Box>
        
    






                 <Box sx={{
            display:'flex',
            width:'20%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #dadada',
            borderRadius: '10px',
            padding: '20px',
        }}>
            <Box>
            <h1>Details</h1>
            <Box>
            <Box sx={{
            display:'flex',
            width:'100%',
            flexDirection: 'column',
        }}>
            <Box>
                <h3>Items Number :</h3> 
                <h3>{length}</h3> 
            </Box>
            <Box>
                <h3>total Amount :</h3>
                <h3>{price}$</h3>
            </Box>
            <Box>
                <h3>Discount:</h3>
                    <h3 style={{color:'red'}}> ماريد ابيعلكم بطلت </h3>
            </Box>
        </Box>
            </Box>
            </Box>
            <Box>
            <Box sx={{display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '390px',}}>
           <Box sx={{display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
                <h1>Final Amount</h1>
                <h1 style={{color:'red'}}>{price}$</h1>
            </Box>
        <Box>
            <button> 
              Checkout
        </button>
        </Box>
        </Box>
            </Box>


        </Box>



        </Box>
    )
}

export default Cart
