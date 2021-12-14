import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { TOKEN_KEY, PRODUCTS_API } from "../utils/Constants";
import Input from "../components/Input";
import Product from "../components/Product";
import axios from "axios";
import "./PagesStyles/ProductsPage.css";
import ProductCard from "../components/ProductCard";
function Products(props) {
  const [isLogged, setIsLogged] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  axios.get(PRODUCTS_API).then((response) => {
    setProducts(response.data);
  });
  useEffect(() => {
    let userData;
    try {
      userData = JSON.parse(localStorage.getItem(TOKEN_KEY));
      if (userData) setIsLogged(true);
      else setIsLogged(false);
    } catch (error) {
      setIsLogged(false);
    }
  }, []);

  if (!isLogged) return <Navigate to="/login" />;

  function onSearchChange(event) {
    let newSearchValue = event.target.value;
    let productsCopy = [...products];
    const newFilteredProducts = productsCopy.filter((productObj) => {
      return productObj.title
        .toLowerCase()
        .startsWith(newSearchValue.toLowerCase());
    });
    setSearchValue(newSearchValue);
    setFilteredProducts(newFilteredProducts);
  }
  return (
    <div>
      {/* Upper section */}
      <div className="upper-bar">
        {/* Search div */}
        <Input
          onChangeFunction={onSearchChange}
          placeholder="Search Products"
          value={searchValue}
        />
      </div>
      <div className="products">
        {/* Products section */}
        {filteredProducts.length === 0 && searchValue === ""
          ? products.map((item) => {
              return (
                <ProductCard
                  object={item}
                  productName={item.title}
                  productPrice={item.price}
                  imgSrc={item.image}
                />
              );
            })
          : filteredProducts.map((item) => {
              return (
                <ProductCard
                  object={item}
                  productName={item.title}
                  productPrice={item.price}
                  imgSrc={item.image}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Products;
