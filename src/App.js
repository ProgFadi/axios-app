import './App.css';
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
import Categories from './components/pages/Categories'
import Products from './components/pages/Products'
import Login from './components/pages/Login'
import Cart from './components/pages/Cart'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/login" element={<Login/>}/>
                  <Route exact path="/cart" element={<Cart/>}/>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/categories" element={<Categories/>}/>
                  <Route path="/products" element={<Products/>}/>
              </Routes>
          </BrowserRouter>
      );
}

export default App;
