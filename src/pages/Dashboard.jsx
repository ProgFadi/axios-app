import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'
function Dashboard() {
    const [isLogged, setIsLogged] = useState(true)
    useEffect(()=>{
        let token;
        try {
        token = localStorage.getItem('Token')
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
        <div>
            Dashboard
        </div>
    );
}

export default Dashboard;