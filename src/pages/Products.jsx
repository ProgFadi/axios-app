import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {Product, TOKEN_KEY} from "../utils/Constants";
import {Button} from "@mui/material";

const  Bodw=styled.div`
  padding-top: 40px;
  background-color: #FFFAE2;

`;
const Container = styled.div`
  height: 50px;
  padding-top: 30px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  //justify-content: flex-end;
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
const Card =styled.div`
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


function Products() {

    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState(products);

    axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            const products = response.data;
            localStorage.setItem(Product, JSON.stringify(products))
            setProducts(products)

        });
    useEffect(() => {
        setSearch(products)

    },[products])
         const searched=(e)=>{
               let filter = products.filter((item)=>{
                   return item.title.toLowerCase().includes(e.target.value.toLowerCase())
               })
             setSearch(filter)
    }

    const addToCard=(item)=>{
        console.log(item);
        let getData=JSON.parse(localStorage.getItem('CartsData'))
        if(!getData){
            let addCart=[item]
            localStorage.setItem('CartsData',JSON.stringify(addCart))
        }else {
            let obj =getData.find(o => o.title === item.title);
             if(!obj){
                 getData.push(item)
                 localStorage.setItem('CartsData',JSON.stringify(getData))
             }
             else {
                 alert('item add ')
             }
        }
    };
        return (
            <div>
                <Bodw>
                    <div>
                        <Container>
                            <Wrapper>
                                <Left>
                                    <input
                                        onChange={searched}
                                             // value={search} type="text"
                                             placeholder={'Search Product'} />
                                </Left>
                            </Wrapper>
                        </Container>

                        <Bod>
                            {
                                search.map((item,index)=>
                                    <Card>
                                        <img width={270} height={200}
                                             src={item.image}/>
                                        <h6>{item.title}</h6>
                                        <RowText>
                                            <h6>{item.price}</h6>
                                            <Text>{item.category}</Text>
                                        </RowText>
                                        <BottonB>
                                            <Button  onClick={()=>addToCard(item)}>
                                                <p style={{color:'#FFF'}}>add new</p></Button>
                                        </BottonB>
                                    </Card>
                                )
                            }
                        </Bod>
                    </div>
                </Bodw>
            </div>
        );

}

export default Products;


