import React , {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Product from '../components/Product';
import axios from '../utils/axios'
import withDrawer from '../components/Drawer';
import withAuth from '../components/withAuth'
import Typography from '@mui/material/Typography';

let Products = (props)=> {
    const [searchVal, setSearchVal] = useState("")
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [load, setLoad] = useState(true)

    const onSearchChange = (e) => {
        let Products = Array.from(products);
        let value = e.target.value
        if(!value) {
          setSearchVal(value)
          setFilteredProducts([...products])
          return
        }

        setSearchVal(value)
        let filteredProducts = Products.filter((product)=>{return product.title.toLowerCase().includes(value.toLowerCase())})
        setFilteredProducts([...filteredProducts])
    }

    useEffect(()=>{
        axios.get('/products')
        .then((res)=> {
            setProducts([...res.data])
            setFilteredProducts([...res.data])
            setLoad(false)
        })
        .catch((err)=> console.log(err))
    },[])



    return (
        <Container fixed>
            <Box>
                <TextField label="Search Products" color="primary" value={searchVal} onChange={onSearchChange} />
            </Box>

            {load &&  <Typography variant="h4" gutterBottom component="div">Loading ...</Typography>}
            <Box sx={{ flexGrow: 1 , marginTop: 15 }}>
                <Masonry columns={{ xs: 3, sm: 4 }} spacing={1}>
                    {
                        filteredProducts.map((item,index)=>{
                            return <Product key={index} title={item.title} price={item.price} img={item.image} product={item}  btn='Add to Cart' type='add' />
                       })
                    }
                </Masonry>
            </Box>      
        </Container>
    )
}

Products = withAuth(withDrawer(Products))

export default Products;