import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    
    const navigate = useNavigate()
    const auth = useAuth().isAuth

    useEffect(() => {
        if(!auth) navigate('/login')
    }, )

    return (
        <div>
            Dashboard
        </div>
    );
}

export default Dashboard;