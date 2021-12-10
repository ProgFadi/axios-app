import React from 'react';
import withDrawer from '../components/Drawer';
import withAuth from '../components/withAuth'

let Categories = (props)=> {
    return (
        <div>
            Categories
        </div>
    );
}

Categories = withAuth(withDrawer(Categories))

export default Categories;