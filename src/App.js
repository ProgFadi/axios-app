import './App.css';
import Login from './pages/Login'
import { Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import Drawer from './components/Drawer'

function App(props) {
  const cartList =JSON.parse(localStorage.getItem('data'));
  let [cartItems, setCartItems] = useState(cartList);
  const addToLocalStorage = ((addData)=>{
    let obj ={
             id : addData.id,
             title : addData.title,
             price : addData.price,
             image : addData.image,
        }
        cartItems.push(obj)
    localStorage.setItem("data", JSON.stringify(cartItems))
    setCartItems(JSON.parse(localStorage.getItem('data')))
  })


  const removeFromLocalStorage = ((index)=>{
    cartItems.splice(index, 1)
    localStorage.setItem('data', JSON.stringify(cartItems))
    setCartItems(JSON.parse(localStorage.getItem('data')))
})


  return  <Routes>
   <Route path="/dashboard" element={<Drawer/>}/>
   <Route path="/categories" element={<Drawer   {...props}/>}/>
   <Route path="/products"  element={<Drawer onAdd={addToLocalStorage}/>}/>
   <Route path="/cart" element={<Drawer setCartItems={setCartItems} cartItems={cartItems} onRemove={removeFromLocalStorage}/>}/>
   <Route path="/login" element={<Login/>}/>
</Routes>
}

export default App;
