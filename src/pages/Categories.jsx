import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Categories(props) {
    const{isAuth} = useAuth()
    if(!isAuth)
     return <Navigate to="/login"/>

    return (
        <div>
            Categories
        </div>
    );
}

export default Categories;