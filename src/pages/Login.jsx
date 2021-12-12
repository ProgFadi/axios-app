import * as React from 'react'
import {useState , useContext } from 'react'
import './Login.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import axios from 'axios'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AuthContext from '../contexts/AuthContext'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useContext(AuthContext)

        axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products',
          })
          .then((response)=>{
            let data = response.data;
            localStorage.setItem('data', JSON.stringify(data))
          })
          .catch((err)=>{
            console.log(err)
          })

    return (
        <Box sx={{
            boxSizing: 'border-box',
            backgroundColor: 'rgb(11, 15, 25)',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }} >
            <Container className='MuiContainer-root MuiContainer-maxWidthSm css-123re6j'>
              <Paper className='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation16 MuiCard-root css-xilcp4'>
                <Box className='Boxclass'>
                    <img src={'https://board.computiq.tech/assets/logo.b3f1408e.png'} alt='Comutiq logo' height='40px'/>
                    <h4>Login</h4>
                    <p>Sign in on the internal platform</p>
                </Box>
                <Box>
                <form 
                className='formStyle' 
                onSubmit={(e)=> {
                    e.preventDefault()
                    login(email,password)
                    }}>

                    <TextField  label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                    <TextField  label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                    <Button 
                    variant="contained"
                     type="submit"
                     onClick={(e)=> {
                     e.preventDefault()
                     login(email,password)
                     }}>Login</Button>
                 </form>
                </Box>
               </Paper>
            </Container>
      </Box>
    );
}

export default Login;