import React from 'react';
import useAuth from '../hooks/useAuth';
import {Navigate} from 'react-router-dom'
function Login(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const {login,isAuth} = useAuth()
    if(isAuth)
        return <Navigate to="/dashboard"/>;

    return (
        <div>
          <form>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
              <input type="submit" onClick={(e)=> {
                  e.preventDefault()
                  login(email,password)
              }}/>
          </form>
        </div>
    );
}

export default Login;