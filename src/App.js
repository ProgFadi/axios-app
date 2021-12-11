import './App.css';

import Login from './pages/Login'
import {Navigate, Route, Routes} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Drawer from './components/Drawer'


function App(props) {


  return  <Routes>
   <Route path="/dashboard" element={<Drawer/>}/>
   <Route path="/categories" element={<Drawer   {...props}/>}/>
   <Route path="/products" element={<Drawer/>}/>
   <Route path="/login" element={<Login/>}/>

</Routes>
}

export default App;
