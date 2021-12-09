import React, { useEffect, useState } from "react";
function Cart({ setCartItems }) {
  let cartList = localStorage.getItem("data");
  cartList = JSON.parse(cartList);
  const removeFromLocalStorage = (removeData, index) => {
    setCartItems(removeData.splice(index, 1));
    localStorage.setItem("data", JSON.stringify(removeData));
  };

  return (
    <div>
      <div className="Card">
        {cartList.map((product, index) => {
          return (
            <div>
              <div class="product-card">
                <div class="product-tumb">
                  <img src={product.image} alt="" />
                </div>
                <div class="product-details">
                  <span class="product-catagory">{product.category}</span>
                  <p>{product.title}</p>
                  <div class="product-bottom-details">
                    <div class="product-price">{product.price + " " + "$"}</div>
                    <div class="product-links">
                      <button
                        onClick={() => removeFromLocalStorage(cartList)}
                        className="productBtn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Cart;
