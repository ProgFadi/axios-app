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

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch(function (error) {
        // console.log(error);
      })
      .then(setLoading(false));
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  });

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
          />
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
