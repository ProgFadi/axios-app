import React from 'react';
import axios from '../utils/axios'

function Login(props) {
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
            let token = response.data.token.access_token;
            let data = response.data;
            localStorage.setItem('token', JSON.stringify(data))
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