import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import axios from '../utils/axios'
import PCard from '../components/PCard'
import { Box } from '@mui/material';
import CartContext from '../contexts/CartContext';


function Products(props) {
   
    const [products, setProducts] = useState([
       {
           title:'',
           image:'',
           description:'',
           category:''
       },
       {
        title:'',
        image:'',
        description:'',
        category:''
    },
    {
        title:'',
        image:'',
        description:'',
        category:''
    },
    {
        title:'',
        image:'',
        description:'',
        category:''
    }
   ])

   const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res)
            setProducts(res.data)
            setIsLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setIsLoading(false)
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
                   return <PCard obj={item} isLoading={isLoading}/>
                      
               })
           }
        </Box>
    );
}

export default Products;