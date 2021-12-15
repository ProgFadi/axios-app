import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import {Navigate} from 'react-router-dom'

function Products(props) {

    

    const [isLogged, setIsLogged] = React.useState(true)
    useEffect(()=>{
        console.log('1')
        let token;
        try {
        token = JSON.parse(localStorage.getItem('token'))
        console.log('2')
        if(!token)
         setIsLogged(false)

        } catch (error) {
            console.log(error)
            setIsLogged(false)
        }
    
    },[])
    console.log('3')

    if(!isLogged)
        return <Navigate to="/login"/>
    
    return (
    <div class="card">
        <Cards/>
    </div>
    )
}

export default Products;