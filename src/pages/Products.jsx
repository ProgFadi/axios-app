import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import cardCss from "../Css/Card.css";

function Products({ onAdd }) {
  const [productFetch, steProducts] = useState([]);
  const [isLogged, setIsLogged] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=6")
      .then((res) => {
        console.log(res.data);
        steProducts(res.data);
      })
      .catch((err) => {
        console.log("There's an Error");
      });
    let token;
    try {
      token = JSON.parse(localStorage.getItem("token"));
      if (!token) setIsLogged(false);
    } catch (error) {
      console.log(error);
      setIsLogged(false);
    }
  }, []);
  if (!isLogged) {
    return <Navigate to="/" />;
  }
  if (!productFetch.length) return <h2>Loading ...</h2>;
  return (
    <div>
      <h1>Products</h1>
      <div className="Card">
        {productFetch.map((product, index) => {
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
                        onClick={() => onAdd(product)}
                        className="productBtn"
                      >
                        Add to cart
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

export default Products;
