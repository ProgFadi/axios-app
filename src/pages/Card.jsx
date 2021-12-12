import React, {Component, useState} from 'react';
import styled from "styled-components";

import {Button} from "@mui/material";

const Body=styled.div`
display: flex;
flex-display: row;
  //align-items: start;
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
  width: 900px;
  //padding-bottom: 10px;
`;
const Carde =styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    //padding-bottom: 0px;
    background-color: #E6E6E6;
    width: 270px;
    border-radius: 10px;
  
    //alt:"Avatar"; 
  `;
const RowText=styled.div`
display: flex;
flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;

`;
const Text=styled.div`
padding-left: 10px;
`;
const BottonB=styled.div`
background-color: black;
  height: 60px;
`;

const Ht6=styled.h6`
color: white;
  justify-content: center;
  text-align-last:center;
`;
function Cards(){
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem('CartsData')))
    var price = 0
    if(cart){
        cart.map((item)=>(
            price+=item.price
        ))
    }

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
                     <div style={{padding:'30px'}}>
                         <Carde>
                         <img width={270} height={200}
                              src={item.image}/>

                         <RowText>
                             <h4>{item.category}</h4>
                             <div style={{
                                 height:'30px',
                                 color:'red',
                                 background:'#FFF',
                                 borderRadius: '15px'
                             }}>${item.price}</div>

                         </RowText>
                         <box styles={{padding:'80px'}}>
                             <BottonB>
                                 <Button >
                                     <p style={{color:'#FFF',paddingLeft:'90px'}} onClick={()=>remove(item)}>remove</p></Button>
                             </BottonB>

                         </box>
                     </Carde>
                     </div>
                    )
                }
            </Bod>
            <div style={{ backgroundColor: '#E6E6E6',
                width: '315px',
                // paddingRight:' 20px',
                paddingTop:'30px',
                margin:'30px',
                borderRadius: '10px',}}>
                <div style={{paddingLeft:'30px'}}>
                    <h4>Details</h4>
                    <p>items Number: {cart.length}</p>
                    <p>Total Amount  ${price}</p>
                    <p>Discount: 99$</p>
            </div>
                <div style={{paddingLeft:'100px',
                paddingTop:'120px'}}>
                    <h4>Final Amount:</h4>
                    <h3 style={{color:'green'}}>900 $</h3>
                </div>
                <div style={{paddingLeft:'90px',paddingTop:'160px'}}>                <buttons style={{background:'green',color:'#FFF',paddingLeft:'30px',paddingRight:'30px',paddingTop:'10px',paddingBottom:'10px'}}>checkout</buttons>
                </div>
            </div>

        </Body>
    );
}

export default Cards;