import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import Products from './pages/Products'
import Login from './pages/Login'
import {Navigate, Route, Routes} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Drawer from './components/Drawer'
import Cart from './components/Cart';

function App(props) {

  let [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('pro')));
  const addToStorage = ((addPro)=>{
    let objects ={
             name : addPro.name,
             image : addPro.image,
             price : addPro.price,
        }
        cartItems.push(objects)
    localStorage.setItem("pro", JSON.stringify(cartItems))
    setCartItems(JSON.parse(localStorage.getItem('pro')))
  })


  const removeFromStorage = ((index)=>{
    cartItems.splice(index, 1)
    localStorage.setItem('pro', JSON.stringify(cartItems))
    setCartItems(JSON.parse(localStorage.getItem('pro')))
})

  return  <Routes>
   <Route path="/" element={<Drawer/>}/>
   <Route path="/dashboard" element={<Drawer/>}/>
   <Route path="/categories" element={<Drawer   {...props}/>}/>
   <Route path="/products" element={<Drawer/>}/>
   <Route path="/cart" element={<Cart setCartItems={setCartItems} cartItems={cartItems} onRemove={removeFromStorage}/>}/>
   <Route path="/login" element={<Login/>}/>

</Routes>
=======
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Drawer from "./components/Drawer";
import { AuthProvider } from "./contexts/AuthContext";
function App(props) {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/dashboard" element={<Drawer />} />
        <Route path="/categories" element={<Drawer {...props} />} />
        <Route path="/products" element={<Drawer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
