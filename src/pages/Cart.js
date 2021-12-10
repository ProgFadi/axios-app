import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { getCart,itemTotal } from "../utils/cartHelpers";

import Card from '../components/Card'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Products(props) {
  const [Products,setProducts] =useState([])
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  const baseURL="https://fakestoreapi.com/products?limit=3&sort=desc";
 
  const getTotal = () => {
    return items.reduce((currentValue, nextValue) => {
      let res =   Math.round(( currentValue + nextValue.count * nextValue.price) * 1)
      return res
    }, 0);
   
  };

  useEffect(() => {
    setItems(getCart());  
    
  }, []);


    return ( 
  
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
      <Grid container spacing={2}>
        <Grid  container item xs={9}>
        { items.map((product,i)=>(
         <Paper sx={{ height: 300, width: 300 }} >
         <Card product={product}   showAddToCartButton = {false}
        showRemovebookButton = {true}></Card>
         </Paper>
       
      ))}
      
        </Grid>
        <Grid item xs={3}>
        <Paper sx={{ height: 800, width: 300 }}  style={{backgroundColor:'#f9f9f9'}}>
           <Box style={{margin:'10px',display:'flex',alignContent:'space-between',flexDirection:'column'}}>
             <Box>
             <p style={{fontSize:'20px',fontWeight:'bold'}}>Details</p>
            <p>Items Numbers:<span style={{fontWeight:'bold'}}> {itemTotal()}</span></p>
            <p>Totla Amount:<span style={{fontWeight:'bold'}}> {getTotal()} $</span></p>
            <p>Discount:<span style={{fontWeight:'bold'}}> 0 $</span></p>

             </Box>
             <Box>
             <p style={{marginTop:'220px',fontSize:'20px',fontWeight:'bold',marginLeft:'26%'}}>Final Amount: </p>
            <p style={{fontSize:'20px',fontWeight:'bold',color:'#31c110' ,marginLeft:'40%'}}>{getTotal()} $</p>
             </Box>
             <Box style={{marginTop:'230px'}}> 
             <Button variant="contained" style={{backgroundColor:'#31c110',width:'260px'}}>
              Checkout
      </Button> </Box>
        
        
           </Box>
        </Paper>
        </Grid>
        </Grid>
        </Grid>
        </Grid>
    </Box>
      
// </div>
    );
}

export default Products;