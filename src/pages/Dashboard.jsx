import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'
function Dashboard(props) {

    const [isLogged, setIsLogged] = useState(true);

    useEffect(()=>{
        let token;
        try {
            //i convert the data from string to object after i get it from localStorage
            token = JSON.parse(localStorage.getItem('token'))
            if(!token) {
                setIsLogged(false)
            }
            else {
                setIsLogged(true)
            }    
        }
        catch(error) {
            setIsLogged(false)
        }
    }, [])

    if(!isLogged)
    return <Navigate to="/login" />

    return (
        <div>
            Dashboard
        </div>
    );
}

export default Dashboard;


// const [isLogged, setIsLogged] = React.useState(true)
// useEffect(()=>{
//     console.log('1')
//     let token;
//     try {
//     token = JSON.parse(localStorage.getItem('token'))
//     console.log('2')
//     if(!token)
//     setIsLogged(false)

//     } catch (error) {
//         console.log(error)
//         setIsLogged(false)
//     }

// },[])