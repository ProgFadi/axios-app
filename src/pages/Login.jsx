import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios.js';
import {TOKEN_KEY} from '../utils/Constants'
import {CART_PRODUCTS} from '../utils/Constants'


function Login(props) {
    const navigate = useNavigate();
    const [username, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')

    const login = (e) => {
        e.preventDefault();
        //short hand way to write request by axios
        axios.post('/auth/login',
        {
            username: username,
            password: password
        })
        .then((response)=> {
            console.log(response)
            let token = response.data.token;
            //i convert the data from object to string before i set it in localStorage
            localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
            localStorage.setItem(CART_PRODUCTS, JSON.stringify([]));
            navigate('/dashboard')
        })
        .catch((error)=> {
            console.log(error)
        })
    }
    return (
        <div>
            <form>
                <input type="text" value={username} onChange={(e)=>{setUserName(e.target.value)}} />
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <input type="submit" onClick={login} />
            </form>
        </div>
    );
}

export default Login;
