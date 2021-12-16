import './App.css';
import React,{useState,useEffect} from "react";
import Login from '../src/pages/Login';
import {Routes, Route } from "react-router-dom";
import Drawer from '../src/components/Drawer'

function App(props) {
  const getFromLocal=JSON.parse(localStorage.getItem('cart') || '[]');
  const [cartItem,setCartItem]=useState(getFromLocal);
    useEffect(() => {
      localStorage.setItem('cart',JSON.stringify(cartItem));
      
    }, [cartItem]);
  
  const addToCart = (product) => {
    const productExist=cartItem.find((item)=> item.id=== product.id);
      if(productExist){
        setCartItem(cartItem.map((item)=>
        item.id === product.id ?
        {...productExist,qty:productExist.qty +1} : item
        ))
        
        alert('Item quantity has been increased')
      }
      else{
        setCartItem([...cartItem,{...product,qty:1}])
        alert('Added to cart successfully ')
        

      }
      }
      
  return  (

    <div>
      
      <Routes>
            <Route exact path="/" element={<Drawer />} />
            <Route exact path="/categories" element={<Drawer />} />
            <Route exact path="/dashboard" element={<Drawer />} />
            <Route exact path="/products" element={<Drawer addto={addToCart} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/cart" element={<Drawer addToCart ={addToCart} cartItem={cartItem}  setCartItem={setCartItem} />} />
            
          </Routes>
    
    </div>

  )
}



export default App;
