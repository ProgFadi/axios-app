import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'
import Auth from '../utils/Auth';

function Dashboard(props) {

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}

Dashboard = Auth(Dashboard)

export default Dashboard;
