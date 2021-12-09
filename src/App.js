import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import Products from './pages/Products'
import Login from './pages/Login'
import Cart from './pages/Cart'
import {Navigate, Route, Routes} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Drawer from './components/Drawer'


function App(props) {
  const [cartItems, setCartItems] = useState([]);
  const addToLocalStorage = ((addData)=>{
    let obj ={
             id : addData.id,
             title : addData.title,
             price : addData.price,
             image : addData.image,
        }
        cartItems.push(obj)
    localStorage.setItem("data", JSON.stringify(cartItems))
   })
  return  <Routes>
   <Route path="/dashboard" element={<Drawer/>}/>
   <Route path="/categories" element={<Drawer   {...props}/>}/>
   <Route path="/products" element={<Drawer onAdd={addToLocalStorage}/>}/>
   <Route path="/" element={<Login/>}/>
   <Route path="/cart" element={<Drawer setCartItems={setCartItems}/>}/>


</Routes>
}

export default App;
