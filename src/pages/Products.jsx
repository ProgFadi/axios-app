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
//products
// function Products(){
//     const  [ searchVal,setSearchVal]=useState('');
//     const [filteredPoints, setfilteredPoints] = useState([]);
//     const [searchInput, setSearchInput] = useState('');
//             const [products,setProducts]=useState([
//                     {
//                     }
//                 ])
//     // const [products,setProducts]=React.useState([])
//     axios.get('https://fakestoreapi.com/products?limit=3&sort=desc')
//         .then((response) => {
//
//             const products=response.data;
//             setProducts(products)
//         })
//
//     {/*const searchItems = (searchValue) => {*/}
//     {/*    setSearchInput(searchValue)*/}
//     {/*    if (searchInput !== '') {*/}
//     //         const filteredData = products.filter((item) => {
//     //             return Object.values(item).join('').includes(searchInput)
//     //         })
//     //         setFilteredResults(filteredData)
//     //     }
//     //     else{
//     //         setFilteredResults(products)
//     //     }
//     // }
//
//
//    function search_product(e) {
//         let newValue = e.target.value;
//         let tempPoints = products;
//         // search
//         if(!newValue)
//         {
//             setSearchVal(newValue);
//             setfilteredPoints(products);
//             return
//         }
//         let filtered = tempPoints.filter((item)=>{
//             return item.title == newValue
//         });
//        setSearchVal(newValue);
//        setfilteredPoints(products);
//     }
//         return
//     }
// export default Products;


function Products({addcart}) {

    const [products, setProducts] = useState([]);
    //   searchVal:"",
    const [searchVal, setSearchVal] = useState([]);
    const [filteredPoints, setFilteredPoints] = useState([])
    axios.get('https://fakestoreapi.com/products?limit=3&sort=desc')
        .then((response) => {

            const products = response.data;
            localStorage.setItem(Product, JSON.stringify(products))
            setProducts(products)

        });

//     search_product(e)
//     {
//         let newValue = e.target.value;
//         let tempPoints = setProducts(products);
//         // search
//         if (!newValue) {
//             setSearchVal(newValue);
//             setFilteredPoints(products);
//         }
//         return
//     let filtered = tempPoints.filter((item) => {
//         return item.title == newValue
//     });
//     setSearchVal(newValue);
//     setFilteredPoints(products);
// }
        return (
            <div>
                <Bodw>
                    <div>
                        <Container>
                            <Wrapper>
                                <Left>
                                    <input
                                        // onChange={()=>search_product}
                                             value={searchVal} type="text"
                                             placeholder={'Search Product'} />
                                </Left>
                            </Wrapper>
                        </Container>
                        <Bod>
                            {
                                products.map((item,index)=>
                                    <Card>
                                        <img width={270} height={200}
                                             src={item.image}/>
                                        <h6>{item.title}</h6>
                                        <RowText>
                                            <h6>{item.price}</h6>
                                            <Text>{item.category}</Text>
                                        </RowText>
                                        <BottonB>
                                            <Button  onClick={() => addcart(item)}>
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


