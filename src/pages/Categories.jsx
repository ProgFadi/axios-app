import React, { useEffect } from 'react';

function Categories(props) {
    console.log(props)
    useEffect(()=>{
        console.log('use effect')
        let userData = JSON.parse(localStorage.getItem('myData'))
        console.log(userData)
    },[])
    return (
        <div>
            Categories
        </div>
    );
}

export default Categories;