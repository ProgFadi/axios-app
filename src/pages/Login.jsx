import React from 'react';
import axios from 'axios'

function Login(props) {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const login = (e)=>{
        e.preventDefault()
        console.log('logging')
        
        axios.post('https://website-backend.computiq.tech/api/score/auth/login',{
            email: "info@computiq.tech",
            password: "1234"
        })
        .then((response) => {
          console.log(response)
        });
    }
    return (
        <div>
          <form>
              <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" />
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
              <input type="submit" onClick={login}/>
          </form>
        </div>
    );
}

export default Login;