import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import axios from '../utils/axios'
import PCard from '../components/PCard'
import { Box } from '@mui/material';
function Products(props) {
   const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res)
            setProducts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <Box
        sx={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
            backgroundColor:'#f5f3f0'
        }}
        >
           {
               products && products.map((item)=>{
                   return <PCard obj={item}/>
               })
           }
        </Box>
    );
}

export default Products;