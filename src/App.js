import './App.css';
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import Products from './pages/Products'
import Login from './pages/Login'
import {Route, Routes} from 'react-router-dom'
import Cart from './pages/Cart';


function App(props) {


  return  (
  
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
  )
}

export default App;
