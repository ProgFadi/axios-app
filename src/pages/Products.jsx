import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Products({onAdd}) {
    const [isLogged, setIsLogged] = useState(true)
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((response) => {
            let redata = response.data
            setData(redata);
        });

        let token;
        try {
        token = JSON.parse(localStorage.getItem('token'))
        if(!token)
            setIsLogged(false)
        }
        catch (error)
        {
            setIsLogged(false)
        }
    },[])

    if(!isLogged){
        return <Navigate to="/login"/>}
    return (
       <ProductCard passedData={data} onAdd={onAdd}/>
    );
}

export default Products;