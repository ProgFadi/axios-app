import React, { useEffect, useState } from "react";
import { TOKEN_KEY } from "../utils/Constants";
import Inputs from "../components/Inputs";

import { Navigate } from "react-router-dom";

// import Product from "../components/Product";
import Product from "../components/ProductCard";
import axios from "../utils/axios";
import "../App.css";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

function Products(props) {
  const [Products, setProducts] = useState([]);
  const [search_value, setSearch] = useState("");
  const [items_filter, setFilter] = useState([]);
  //check if cart already has products in local storage or just create new one
  const [Cart, setCart] = useState(() => {
    const localData = localStorage.getItem("carts");
    return localData ? JSON.parse(localData) : [];
  }, []);

  //add product to cart
  const onAdd = (product) => {
    if (Cart.filter((item) => item.id === product.id) != "") {
      return;
    }
    Cart.push(product);
    setCart(Cart);
    localStorage.setItem("carts", JSON.stringify(Cart));
    props.handleClick();
  };

  //searching for products
  function onSearchChange(e) {
    let newValue = e.target.value;
    let name = Products;
    if (!newValue) {
      setSearch(newValue);
      setFilter([...Products]);
    }
    let filtered = name.filter((item) => {
      return item.title.toLowerCase().includes(newValue.toLowerCase());
    });
    setSearch(newValue);
    setFilter([...filtered]);
  }

  //get products from the api
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        setFilter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Products]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Inputs
        name="search"
        ph="Search Products"
        value={search_value}
        onChange={onSearchChange}
        ClassName="single-input-left"
      />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 16 }} sx={{ height: 500 }}>
        {items_filter.map((item, index) => {
          return <Product key={index} product={item} onClickFunction={onAdd} />;
        })}
      </Grid>
    </Box>
  );
}

export default Products;
