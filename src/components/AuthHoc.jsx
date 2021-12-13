import React, { useState, useEffect } from 'react'
import {Navigate} from "react-router-dom";

const AuthHoc = Component => {
    const NewComponent = () => {
    const [isLogged, setIsLogged] = useState(true)
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
                <Component />
        )
    }
    return NewComponent
}
export default AuthHoc
