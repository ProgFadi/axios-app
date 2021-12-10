import React from 'react';
import withDrawer from '../components/Drawer';
import withAuth from '../components/withAuth'

let Dashboard = (props)=> {
    return (
        <div>
            Dashboard
        </div>
    );
}

Dashboard = withAuth(withDrawer(Dashboard))

export default Dashboard;