import React, {useState, useEffect}  from 'react'
import Inputs from '../Inputs/Inputs'
import ProductCard from '../Product-Card/ProductCard'
import axios from '../../utils/axios'
import { Box } from '@mui/material'
import './StyleProductsPage.css'


function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);


    useEffect( ()=>{
        axios.get('/products?limit=6').then((response)=>{
            let data = response.data.map((obj) => {
                /* To make the titles of  products short because it is too much long */
                obj.title = obj.title.replace('-', '').split(" ").splice(0,3).join(" ")
                return obj })
            setProducts(data)
            setSearchProducts(data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])


    const onSearch = (searchedVal) => {
        const filteredproducts = products.filter((obj) => {
            if(!searchedVal){
                return obj
            } else if (obj.title.toLowerCase().includes(searchedVal.toLowerCase()))
            return obj;
        });
        setSearchProducts(filteredproducts);
    };


    return (
        <Box className="page-style">
            <Box className="header-style">
                <Inputs ph="Search Products" onChange={(e) => onSearch(e.target.value)} />
            </Box>
            <Box className="products">
                {
                    searchProducts.map((product) => {
                        return <ProductCard key={product.id} product={product} buttonText='Add to cart' />
                    })
                }
            </Box>
        </Box>
    )
}

export default ProductsPage;
