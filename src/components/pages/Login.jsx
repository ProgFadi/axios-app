import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios/axios'
import {CART_PRODUCTS, TOKEN_KEY} from '../axios/Constants'

function Login() {
    const navigate = useNavigate()
    const [username, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')

    const login = (e)=>{
        e.preventDefault()
        axios.post('/auth/login', {
            username:username,
            password:password
        }).then((response)=>{
            let data = response.data.token;
            localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
            localStorage.setItem(CART_PRODUCTS, JSON.stringify([]));
            navigate('/products')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
          <form>
              <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" />
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
              <input type="submit" onClick={login}/>
          </form>
        </div>
    );
}

export default Login;