import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from '../components/Card'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Navigate} from 'react-router-dom'





const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Products(props) {
  const [Products,setProducts] =useState([])
  const baseURL="https://fakestoreapi.com/products?limit=20&sort=desc";
  const [isLogged, setIsLogged] = React.useState(true)
  useEffect(()=>{
    axios.get(baseURL).then((response) => {
        setProducts(response.data);
      }); 
    let token;
    try {
    token = JSON.parse(localStorage.getItem('token'))
    if(!token)
     setIsLogged(false)

    } catch (error) {
        setIsLogged(false)
    }

},[])


    

if(!isLogged)
    return <Navigate to="/"/>



    return ( 
  
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
      <Grid container spacing={1}>
        <Grid  container item xs={12}>
        {/* <Grid container justifyContent="center" > */}
        { Products.map((product,i)=>(
         <Paper sx={{ height: 300, width: 300 }} >
         <Card product={product}></Card>
         </Paper>
       
      ))}
        {/* </Grid> */}
      
        </Grid>
   
        </Grid>
        </Grid>
        </Grid>
    </Box>
      
// </div>
    );
}

export default Products;