import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios'
import {TOKEN_KEY} from '../utils/Constants'
import './login.css'
function Login(props) {
    const navigate = useNavigate()
    const [ username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const login = (e)=>{
        e.preventDefault()
        axios.post('https://fakestoreapi.com/auth/login',
        {
            username: username,
            password:password
        }
        )
        .then((response)=>{
            console.log(response)
            let data = response.data;
            localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
            console.log(data)
            navigate('/dashboard')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className='content'>
          <form className='form'>
              <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Username' />
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'/>
              <input type="submit" className="btn-form" onClick={login}/>
          </form>
        </div>
    );
}

export default Login;