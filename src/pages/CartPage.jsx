import React, { useEffect, useState } from "react";
import { TOKEN_KEY } from "../utils/Constants";
import Inputs from "../components/Inputs";
import Buttons from "../components/Buttons";
import Button from "@mui/material/Button";
import { shadows } from "@mui/system";
import { borders } from "@mui/system";

// import Product from "../components/Product";
import Product from "../components/ProductCard";
import axios from "../utils/axios";
import "../App.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
let total;

function CartPage(props) {
  let sum;

  //const to check if there is items in the cart
  const [Cart, setCart] = useState(() => {
    const localData = localStorage.getItem("carts");
    return localData ? JSON.parse(localData) : [];
  }, []);

  //to remove item from cart
  const onRemove = (product) => {
    setCart(Cart.filter((item) => item.id != product.id));
  };
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(Cart));
  }, [Cart]);

  sum = Cart.reduce((prev, current) => {
    return prev + +current.price;
  }, 0);
  sum = (Math.round(sum * 100) / 100).toFixed(2);
  let discount = sum / 2;
  total = (Math.round((sum - discount) * 100) / 100).toFixed(2);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
      }}
    >
      <Box sx={{ width: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Cart.map((item, index) => {
            return <Product key={index} product={item} onClickFunction={onRemove} />;
          })}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: 500,
          width: 400,
          backgroundColor: "white",
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            p: 1,
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              Details
            </Typography>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              color: "#818181",
            }}
          >
            {" "}
            <Typography variant="body1">Items Number:</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">{Cart.length}</Typography>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              color: "#818181",
            }}
          >
            <Typography variant="body1">Total Price</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">{sum} $</Typography>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              color: "#818181",
            }}
          >
            <Typography variant="body1">Discount</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">{discount} $</Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Final Amount:</Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#00ae06",
            }}
          >
            {total} $
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="success"
            sx={{
              width: 200,
              p: 1,
              m: 1,
              backgroundColor: "#00ae06",
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CartPage;
