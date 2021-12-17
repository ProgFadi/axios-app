import React from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth'

function AuthGuard(props) {
    const {isAuth} = useAuth()
    console.log('Auth Guard: ',isAuth)
    // if(!isAuth)
    //     return <Navigate to="/login"/>

    return (
        <div>
            {props.children}
        </div>
    );
}

export default AuthGuard;