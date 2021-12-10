import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login(props) {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const login = (e)=>{
        e.preventDefault()
        axios.post('https://fakestoreapi.com/auth/login',
        {
            username:email,
            password:password
        }
        )
        .then((response)=>{
            let token = response.data.token;
            localStorage.setItem('token', JSON.stringify(token))
            navigate('/dashboard')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
          <form>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
              <input type="submit" onClick={login}/>
          </form>
        </div>
    );
}

export default Login;