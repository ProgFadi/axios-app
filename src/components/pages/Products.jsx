import React from 'react';
import Box from './Home';
import ProductsCards from '../ProductsCards'
import AuthHoc from "../AuthHoc";

function Products() {
    return (
        <Box>
            <ProductsCards/>
        </Box>
    );
}

Products = AuthHoc(Products);
export default Products;