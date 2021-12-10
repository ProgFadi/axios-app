import React , {useState, useEffect} from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Masonry from '@mui/lab/Masonry';
import Product from '../components/Product';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import withDrawer from '../components/Drawer';
import withAuth from '../components/withAuth'

let Cart = (props)=> {
    const [items, setItems] = useState([]);
    const [empty, setEmpty] = useState(true)
    const [inum, setInum] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)
    const [final, setFinal] = useState(0)
    const [qty, setQty] = useState(0)

    
    useEffect(()=>{
        let carts = JSON.parse(localStorage.getItem('items')) ?? []

        if(carts.length!=0)
        {
            
            setEmpty(false)
            setItems([...carts])
        } 
            
    },[])

    useEffect(()=>{
        let carts = JSON.parse(localStorage.getItem('items')) ?? []
        setEmpty(carts.length==0? true : false)
        let tot=0,fin=0,dis=99,qt=0
        setInum(carts.length)
        setDiscount(99)
        carts.map((item)=> tot+=(item.price*item.qty) )
        carts.map((item)=> qt+=item.qty)
        fin = (tot - dis) 
        fin = fin<0? 0 : fin
        setTotal(tot.toFixed(2))
        setFinal(fin.toFixed(2))
        setQty(qt)

    

        
            
    },[items])

    return (
            <Container fixed>
              
                {empty && <Typography variant="h4" gutterBottom component="div">Cart is Empty!</Typography>}
                <Box sx={{ flexGrow: 1  }}>
                    <Grid container >
                        <Grid item xs={6}>
                            <Masonry columns={{ xs: 2}} >
                                {
                                    items.map((item,index)=>{
                                        return <Product key={index} title={item.title} price={item.price} img={item.image} product={item}  btn='Remove' type='remove' setItems={setItems} />
                                })
                                }
                            </Masonry>
                        </Grid>

                        <Grid item xs={6}>
                                <Paper sx={{p: 3}} elevation={3}>
                                    <Typography variant="h2" gutterBottom component="div">Details :</Typography>
                                    <Typography variant="h4" gutterBottom component="div" sx={{color: '#607d8b'}}>Items number : {inum}</Typography>
                                    <Typography variant="h4" gutterBottom component="div" sx={{color: '#607d8b'}}>Qty number : {qty}</Typography>
                                    <Typography variant="h4" gutterBottom component="div" sx={{color: '#607d8b'}}>Total Amount : {total}$</Typography>
                                    <Typography variant="h4" gutterBottom component="div" sx={{color: '#607d8b'}}>Discount : {discount}$</Typography>
                                    <Typography variant="h4" gutterBottom component="div" sx={{color: '#2e7d32'}}>Final Amount : {final}$</Typography>
                                    <Button variant='contained' sx={{display: 'block'}}>Check Out</Button>
                                </Paper>
                        </Grid>
                    </Grid>
                </Box>      
            </Container>
    );
}

Cart = withAuth(withDrawer(Cart))

export default Cart;





