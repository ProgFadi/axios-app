import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios'
import {TOKEN_KEY} from '../utils/Constants'
import './LoginStyle.css'

function Login(props) {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const login = (e)=>{
        e.preventDefault()
        axios.post('/api/academy/auth/login',
        {
            email:email,
            password:password
        }
        )
        .then((response)=>{
            console.log(response)
            let data = response.data;
            localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
            navigate('/dashboard')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  
    // function validateForm() {
    //   return email.length > 0 && password.length > 0;
    // }
  
    // function handleSubmit(event) {
    //   event.preventDefault();
    // }
    
    return (
        <div className='main-holder'>
            <div className='form-login'>
                <h1>Login</h1>
            <form id="login-form">
                <input className='login-form-field first' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                <input className='login-form-field' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                <input id='login-form-submit' type="submit" onClick={login} value={"Login"}/>
            </form>
            </div>
        </div>
    );
}

export default Login;