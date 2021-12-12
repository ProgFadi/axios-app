import React, {Component, useState} from 'react';
import styled from "styled-components";

import {Button} from "@mui/material";

const Body=styled.div`
display: flex;
flex-display: row;
  justify-content: space-between;
`;
const buttons = styled.div`
  font-size: 14px;
 
`;
const Bod=styled.div`
  flex-direction: row;
  //background-color:#FFFAE2;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  //padding-bottom: 10px;
`;
const Carde =styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    //padding-bottom: 0px;
    background-color: white;
    width: 270px;
    border-radius: 10px;
  
    //alt:"Avatar"; 
  `;
const RowText=styled.div`
display: flex;
flex-direction: row;
  justify-content: space-around;
  align-items: center;

`;
const Text=styled.div`
padding-left: 10px;
`;
const BottonB=styled.div`
background-color: black;
  
`;
const Ht6=styled.h6`
color: white;
  justify-content: center;
  text-align-last:center;
`;
function Cards(){
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem('CartsData')))
    const [price,setPrice]=useState(0)
     const remove=(removeCart)=>{
        let temp =cart.filter((product)=>product.id != removeCart.id)
         setCart(temp)
         localStorage.setItem('CartsData',JSON.stringify(temp))
     }
    if(!cart){
        return  <p>don't found</p>
    }
    return (
        <Body>
            <Bod>
                {

                    cart.map((item,index)=>
                        <Carde>
                            <img width={270} height={200}
                                 src={item.image}/>
                            <h6>{item.title}</h6>
                            <RowText>
                                <h6>{item.price}</h6>
                                <Text>{item.category}</Text>
                            </RowText>
                            <box styles={{padding:'80px'}}>
                                <BottonB>
                                    <Button >
                                        <p style={{color:'#FFF',paddingLeft:'90px'}} onClick={()=>remove(item)}>remove</p></Button>
                                </BottonB>

                            </box>
                        </Carde>
                    )
                }
            </Bod>
            <box style={{color:'green'}}>
                <p>itemsCount {cart.length}</p>


            </box>

        </Body>
    );
}

export default Cards;