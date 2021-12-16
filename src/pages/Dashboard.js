import React ,{useEffect,useState} from 'react'
import {Navigate} from 'react-router-dom'
export default function Dashboard() {
    const [isLogged, setIsLogged] =useState(true)
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
        <div>
            <h1>Dashboard Page</h1>
        </div>
    )
}
