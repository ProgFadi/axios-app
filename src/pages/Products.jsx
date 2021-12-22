import React, {useState, useEffect} from 'react';
import ProductsPage from '../components/Products-Page/Products-PageFun'
import {Navigate} from 'react-router-dom'

function Products(props) {
    
    
    const [isLogged, setIsLogged] = useState(true);

    useEffect(()=>{
        let token;
        try {
            token = JSON.parse(localStorage.getItem('token'))
            if(!token) {
                setIsLogged(false)
            }
            else {
                setIsLogged(true)
            }    
        }
        catch(error) {
            setIsLogged(false)
        }
    }, [])

    if(!isLogged)
    return <Navigate to="/login" />

    return (
        <div>
            <ProductsPage/>
        </div>
    );
}

export default Products;