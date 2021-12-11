import React, { useState, useEffect } from 'react';
import { TOKEN_KEY } from './Constants'
import { useNavigate } from 'react-router-dom';

const Auth = (Component) => {

    const Authenticate = (props) => {
        const navigate = useNavigate();
        const [isLogged, setIsLogged] = useState(true);

        useEffect(() => {
            const token = localStorage.getItem(TOKEN_KEY);
            if (!token) {
                navigate('/login');
            }
        }, [navigate])

        if (!isLogged) {
            navigate('/login')
            return null
        }
        return <Component {...props} />
    }

    return Authenticate
}

export default Auth;
