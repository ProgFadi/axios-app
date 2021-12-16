import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../utils/axios'
// import {TOKEN_KEY} from '../utils/Constants'
import AuthContext from '../contexts/AuthContext'
function Login(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const {login} = useContext(AuthContext)
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