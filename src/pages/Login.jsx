import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {TOKEN_KEY} from '../utils/Constants'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('eve.holt@reqres.in')
    const [password, setPassword] = React.useState('cityslicka')

    const login = (e)=>{
        e.preventDefault()
        axios.post('https://reqres.in/api/login',
        {
            email:email,
            password:password
        }
        )
        .then((response)=>{
            console.log(response)
            let token = response.data.token.access_token;
            let data = response.data;
            localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
            navigate('/products')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  const theme = createTheme();
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };
  


return ( <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit" onClick={login}
            >
              Sign In
            </Button>
           
          </Box>
        </Box>
       <h2> Note:  use default info to login  </h2>
      </Container>
    </ThemeProvider>
  );

  
}

export default Login;