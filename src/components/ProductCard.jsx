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
    <div class="card">
      <img src={props.imgSrc} alt="" />
      <div class="card-body">
        <div class="row">
          <div class="card-title">
            <h4>{props.productName}</h4>
            <h3>{props.productPrice}</h3>
          </div>
        </div>
        <hr />
        <div class="btn-group">
          {props.cartItem ? (
            <Chip
              className={"btn"}
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
              className={"btn"}
              onClickFunction={() => {
                addItem(props.object);
              }}
              text="Add to Cart"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
