import React from 'react';
import shoose from '../assets/images/shoose.jpg'

function Product(props) {
  return (
    <div className="product">
      <img className="product-image" src={shoose} alt="product"/>
      <div className="title">
        <small>{props.product.category}</small>
      </div>

        <div className="product-desc">
          <b>{props.product.title}</b>
          <small>{props.product.price}</small>
        </div>
      <button className="product-button">Add to Cart</button>
    </div>
  );
}

export default Product;