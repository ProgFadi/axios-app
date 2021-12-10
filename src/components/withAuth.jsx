import React, {useEffect} from 'react';
import {TOKEN_KEY} from '../utils/Constants'
import { useNavigate } from 'react-router-dom';

const withAuth = (Component) => {

    const AuthComponent = (props) => {
        let token
        const navigate = useNavigate()
        const [isLogged, setIsLogged] = React.useState(true)
        useEffect(()=>{
            token = localStorage.getItem(TOKEN_KEY)
            if(!token)
            setIsLogged(false)
        },[])

        if(!isLogged)
        {
            navigate('/login')
            return null
        }
            
        return <Component {...props} />

    }



    return AuthComponent
}

export default withAuth;