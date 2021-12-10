import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios'
import {TOKEN_KEY} from '../utils/Constants'

function Login(props) {
    const navigate = useNavigate()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [msg, setMsg] = React.useState('')

    const login = (e)=>{
        e.preventDefault()
        axios.post('/auth/login',
        {
            username:username,
            password:password
        }
        )
        .then((response)=>{
            let token = response.data.token;
            if(!token)
            {
                setMsg("invalid credintials")
                return
            }
            localStorage.setItem(TOKEN_KEY, token)
            navigate('/dashboard')
        })
        .catch((err)=>{
            console.log(err)
        })


    }


    useEffect(()=>{
        let token = localStorage.getItem(TOKEN_KEY)
        if(token)
            navigate('/dashboard')
    },[])


    return (
        <div>
          <form>
              <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" />
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
              <input type="submit" onClick={login}/>
              {msg? msg : 'please login' }
          </form>
        </div>
    );
}

export default Login;