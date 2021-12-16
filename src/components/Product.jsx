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
          <small style={{ color: "#808080", fontWeight: '400'}}>$ {props.product.price}</small>
        </div>
      <button className="product-button" onClick={props.onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;