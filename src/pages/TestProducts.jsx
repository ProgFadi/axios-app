import React, { useEffect, useState } from "react";
import { TOKEN_KEY } from "../utils/Constants";
import Inputs from "../components/Inputs";
import Buttons from "../components/Buttons";

// import Product from "../components/Product";
import Product from "../components/TestProductCard";
import axios from "../utils/axios";
import "../App.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Products(props) {
  const [Products, setProducts] = useState([]);
  const [Cart, setCart] = useState(() => {
    const localData = localStorage.getItem("carts");
    return localData ? JSON.parse(localData) : [];
  }, []);
  const onAdd = (product) => {
    console.log(product);
    Cart.push(product);
    setCart(Cart);
    localStorage.setItem("carts", JSON.stringify(Cart));
    console.log(Cart);
  };

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        if (Products.length == 0) {
          setProducts(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Products]);

  // const [isLogged , setLogged] = setState(false)
  // const Checklogging = () => {
  //     token = JSON.parse(localStorage.getItem(T))
  // }
  /* <Inputs
            name="search"
            ph="Search Products"
            value={search_value}
            onChange={onSearchChange}
            ClassName="single-input-left"
          /> */
  /* {Products.map((item, index) => {
          return <Product key={index} product={item} />;
        })} */
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 16 }} sx={{ height: 500 }}>
        {Products.map((item, index) => {
          return <Product key={index} product={item} onClickFunction={onAdd} />;
        })}
      </Grid>
    </Box>
  );
}

export default Products;
