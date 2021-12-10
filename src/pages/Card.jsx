import React, {Component} from 'react';
import axios from "axios";
import styled from "styled-components";
// import  Buttons from "@mui/material";
import {Product} from "../utils/Constants";

const Body=styled.div`
display: flex;
justify-content: space-between;
  align-items: center;
  
`;
// const  card=styled.div`
// background-color: ;
// `;
const Card =styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    //padding-bottom: 0px;
    background-color: red;
    width: 395%;
  height: 300%;
    border-radius: 10px;
  
    //alt:"Avatar"; 
  `;
const TextRow=styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  //align-content: center;
  align-items: center;
`;
const CardRow=styled.div`
  background-color: white;
  width: 30%;
  height: 45%;
  border-radius: 10px;
  
`;
const BottenCard=styled.div`
  background-color: black;
  width: 90%;
  height: 15%;
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;
`;
const BottenCard2=styled.div`
  background-color: green;
  width: 90%;
  height: 15%;
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;

function Cards({setCartItems}){
    let carts = localStorage.getItem(Product);
    const removeFromLocalStorage = (Product, index) => {
        setCartItems(Product.splice(index, 1));
        localStorage.setItem(Product, JSON.stringify(Product));
    };
    return (
        <Body>
                <Card>
                    {
                    carts.map((item, index) =>
                    // <img src={item.images}>
                   <div> <TextRow>
                       <p>{item.title}</p>
                       <CardRow>{item.price}</CardRow>
                   </TextRow>
                       <BottenCard>
                           <button onClick=
                                       {() => removeFromLocalStorage(item)}>Remove</button>
                       </BottenCard></div>
                )}
            </Card>

        </Body>

    );
}

export default Cards;