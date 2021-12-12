import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
function Dashboard(props) {
    const{isAuth} = useAuth()
    console.log(isAuth)
    if(!isAuth)
     return <Navigate to="/login"/>

    return (
        <div>
            Dashboard
        </div>
    );
}

export default Dashboard;