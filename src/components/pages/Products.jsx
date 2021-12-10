import React, {useEffect} from 'react';
import Box from './Home';
import ProductsCards from '../ProductsCards'
import {Navigate} from "react-router-dom";


function Products(props) {
    const [isLogged, setIsLogged] = React.useState(true)
    useEffect(()=>{
        let token;
        try {
            token = JSON.parse(localStorage.getItem('token'))
            if(!token)
                setIsLogged(false)

        } catch (error) {
            console.log(error)
            setIsLogged(false)
        }

    },[])

    if(!isLogged)
        return <Navigate to="/login"/>

    return (
        <Box>
            <ProductsCards/>
        </Box>
    );
}
export default Products;