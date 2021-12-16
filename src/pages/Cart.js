import React from "react";
import './cart.css';

export default function Cart({addToCart, cartItem,setCartItem}) {
    const removeFromCart = (product) => {
        const productExist=cartItem.find((item)=> item.id === product.id);
        if(productExist.qty === 1){
          setCartItem(cartItem.filter((item)=>item.id !== product.id ))
  
        }
        else{
            setCartItem(cartItem.map((item)=>
            item.id === product.id ?
            {...productExist,qty:productExist.qty-1} : item
            
        ));      
       
        }
        }
        const totalPrice=cartItem.reduce((price,item)=>price+ item.qty * item.price,0)
        let cartItems=cartItem.reduce((totle,item)=>totle+ item.qty,0)
     
    
    return (
        <div className="content">  
        <div className="cart-items">
        <h2>Cart ({cartItems} items)</h2>
        {cartItem.map(product=>(
  
          <div key={product.id} className="carts">
         
          <div className="item-del">
            <div className="img-item">
              <img src={product.image} alt='' />
            </div>
            <div className="text">
              <p>{product.title}</p>
              <span>{product.category}</span>
              <div className="btn-cart">
                  <button onClick={()=> removeFromCart(product)}> <i className="far fa-trash-alt"></i>REMOVE ITEM </button>
                  <button > <i className="fas fa-heart"></i> MOVE TO WISH LIST</button>
              </div>
            </div>
          </div>
          <div className="qty-price">
          <div class='qty'>
            <button className="qty-btn" onClick={()=> addToCart(product)}>+</button>
            <span className="qty-span">{product.qty}</span>
            <button className="qty-btn" onClick={()=> removeFromCart(product)}>-</button>
          </div>
           <span className="price">$ {product.price}</span>
          </div>
        
        </div>
       
        ))
        }
        </div>
        <div className="total-amount">
          <h2>The total amount of</h2>
          <div className="temporary-amount">
              <p>Price Items Of Cart</p>
              <span>${totalPrice}</span>
          </div>
          <div className="temporary-amount">
              <p>Shipping</p>
              <span>Gratis</span>
          </div>
          <div className="temporary-amount vat">
              <p>The total amount of 
                (including VAT)</p>
              <span>${totalPrice}</span>
          </div>
          <button className="btn-amount">GO TO CHECKOUT</button>
        </div>
        
        </div>
    )
}
