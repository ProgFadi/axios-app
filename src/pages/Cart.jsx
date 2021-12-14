import React from "react";
import Product from "../components/Product";
import "./PagesStyles/ProductsPage.css";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
function Cart() {
  const [neglected, productsRerender] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart || cart.length == 0) {
    return <div>Empty cart, go shop like crazy!</div>;
  }

  return (
    <div className={"container"}>
      {cart.map((item, index) => {
        item = JSON.parse(item);
        item.index = index;
        return (
          <ProductCard
            productsRerender={productsRerender}
            cartItem={true}
            object={item}
            productName={item.title}
            productPrice={item.price}
            imgSrc={item.image}
          />
        );
      })}
    </div>
  );
}

export default Cart;
