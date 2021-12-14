import React from "react";
import Button from "./Button";
import Chip from "@mui/material/Chip";

import "./componentsStyle/Product.css";
import { width } from "@mui/system";
import { useState } from "react";
const getId = () => {
  return "id" + new Date().getTime();
};
function Product(props) {
  const addItem = (object) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([]));
      let cart = JSON.parse(localStorage.getItem("cart"));
      object.id = getId();
      cart.unshift(JSON.stringify(object));
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }
    object.id = getId();
    cart.unshift(JSON.stringify(object));
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const deleteItem = (itemId, productsRerenderFun) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(
      cart.findIndex((obj) => {
        obj = JSON.parse(obj);
        return obj.id == itemId;
      }),
      1
    );
    localStorage.setItem("cart", JSON.stringify(cart));
    productsRerenderFun([]);
  };
  return (
    <div className="product">
      <img src={props.imgSrc} alt="Shoe" width="200px" height="200px" />
      <h3>{props.productName}</h3>
      <h4>${props.productPrice}</h4>
      {props.cartItem ? (
        <Chip
          sx={{
            width: "100%",
            backgroundColor: "#d11a2a",
          }}
          label="Delete from cart"
          onDelete={() => {
            deleteItem(props.object.id, props.productsRerender);
          }}
        />
      ) : (
        <Button
          onClickFunction={() => {
            addItem(props.object);
          }}
          text="Add to Cart"
        />
      )}
    </div>
  );
}

export default Product;
