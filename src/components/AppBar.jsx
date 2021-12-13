import React from 'react';
import AppBar from "@mui/material/AppBar";
import {Appbar, useStyles} from "./styles/HomePageStyles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Avatar, IconButton, Stack} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useLocation, useNavigate} from "react-router-dom";

const drawerWidth = 240;

function AppBarComponent() {
    const navigate = useNavigate();
    const pathname = useLocation().pathname
    const classes = useStyles()
    return (
        <AppBar  elevation={0} position="fixed" sx={Appbar(drawerWidth)} >
            <Toolbar className={classes.ToolBarStyle}>
                <Typography variant="h6" noWrap component="div" className={classes.TypographyStyle}>
                    {pathname !== '/' ? pathname.slice(1) : 'home'}
                </Typography>
                <Stack direction={'row'} alignItems={'center'} spacing='1.3em'>
                    <IconButton onClick={() => navigate('/cart')}>
                        <ShoppingCartIcon style={{fill: '#292c2f', fontSize: '2rem'}}/>
                    </IconButton>
                    <Avatar alt="user avatar" src= {require('../assets/images/avatar.jpg').default} />
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarComponent;