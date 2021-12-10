import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Login from './pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Drawer from './components/Drawer';
import axios from 'axios';

function App(props) {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products?limit=6')
      .then((response) => {
        setProducts(response.data);
      })
      .catch(function (error) {
        // console.log(error);
      })
      .then(setLoading(false));
  }, []);

  useEffect(() => {
    JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  // localStorage.clear();

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Routes>
      <Route path="/dashboard" element={<Drawer />} />
      <Route path="/categories" element={<Drawer {...props} />} />
      <Route
        path="/products"
        element={
          <Drawer
            products={filteredProducts}
            searchValue={searchValue}
            handleSearch={handleSearch}
            loading={loading}
            handleAddToCart={handleAddToCart}
          />
        }
      />
      <Route path="/cart" element={<Drawer />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
