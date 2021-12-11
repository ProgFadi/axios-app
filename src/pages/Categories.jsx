import React, { useEffect } from 'react';
import Auth from '../utils/Auth';

function Categories(props) {
    console.log(props)
    useEffect(() => {
        console.log('use effect')
        let userData = JSON.parse(localStorage.getItem('myData'))
        console.log(userData)
    }, [])
    return (
        <div>
            <h1>Categories</h1>
        </div>
    );
}

Categories = Auth(Categories)

export default Categories;
