import React from 'react';

function Login(props) {
    
    const login = (e)=>{
        e.preventDefault()
        console.log('logging')
    }
    return (
        <div>
          <form>
              <input type="text" required/>
              <input type="password" required/>
              <input type="submit" onClick={login}/>
          </form>
        </div>
    );
}

export default Login;