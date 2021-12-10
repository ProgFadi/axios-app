import React from 'react';
import Button from '@mui/material/Button';
import { addItem, removeItem } from "../utils/cartHelpers";



const Card = ({product,showAddToCartButton = true,
    showRemovebookButton = false})  => {

  const addToCart = () => {
   addItem(product)


  }
  const removeProduct = () =>{
   return removeItem(product.id)
  }

  

  const showAddBtn  =  (showAddToCartButton) =>{
    return (  
      showAddToCartButton &&
       (
      <Button variant="contained"   onClick={() => {removeItem(product.id)}} style={{backgroundColor:'#31c110',height:'20px',marginBottom:'22px'}}>
      Add product
     </Button>   
    ))
  }

  const showRemoveBtn  =(showRemovebookButton) =>{
    return (   showRemovebookButton &&  (
      <Button variant="contained"     style={{backgroundColor:'#FF0000B2',height:'20px',marginBottom:'22px'}}>
      Remove product
     </Button>   
    ))
  }

  

    return ( 
        <div style={{margin:'12px',borderRadius:'6px',textAlign:'center'}}>
        <img style={{height:'100%',width:'180px',height:'180px'}} src={product.image} />
        <div style={{display:'flex',alignContent:'space-between',alignItems:'baseline'}}>
        <p style={{borderRadius:'5px',marginRight:'30%',marginLeft:'5%',fontWeight:'bold'}} >{product.category} </p>
        <span style={{borderRadius:'7px',backgroundColor:'gray',height:'20px',color:'orangered',backgroundColor:'#f2f2f2',fontSize:'12px',fontWeight:'bold'}}>         ${product.price}</span>

         </div>
          {showAddBtn(showAddToCartButton)}
          {showRemoveBtn(showRemovebookButton)}
      </div>
     );
}

export default Card;