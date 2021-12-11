import * as React from 'react';
import axios from '../utils/axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_KEY } from '../utils/Constants'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

function Login(props) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const login = (e) => {
        e.preventDefault()
        axios.post('/api/academy/auth/login',
            {
                email: email,
                password: values.password
            }
        )
            .then((response) => {
                let data = response.data;
                localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ padding: '5rem' }}>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 1 }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField sx={{ width: '100%' }} value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="input-with-sx" label="Email" variant="standard" />
                </Box>

                <FormControl sx={{ m: 1, mt: '1rem' }} variant="standard">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <InputLabel htmlFor="standard-adornment-password" sx={{ ml: 4, my: 0.5 }} >Password</InputLabel>

                        <Input sx={{ width: '100%' }}
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                    </Box>
                    <Button sx={{ mt: '4rem' }} variant="contained" type="submit" onClick={login} >Login</Button>
                </FormControl>

            </Card>
        </Box>
    );
}

export default Login;
