import React from "react";
// import Button
import ButtonAdd from './buttonAdd';

const Product = (props)=>{
    return (
        <div className="product-item">
            <img src= {props.item.image} alt="img"/>
            <p className="title">{props.item.title}</p>
            <p className="description">{props.item.description}</p>
            <p className="price">{props.item.price} $</p>
            <ButtonAdd onClickFunction={props.buttonFunction} content={props.buttonDes} />
        </div>
        )
};

export default Product
