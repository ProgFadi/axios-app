import React from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth'

function AuthGuard(props) {
    const {isAuth} = useAuth()
    if(!isAuth)
        return <Navigate to="/login"/>

    return (
        <div>
            {props.children}
        </div>
    );
}

export default AuthGuard;