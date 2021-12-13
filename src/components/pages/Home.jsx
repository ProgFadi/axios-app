import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerComponent from '../Drawer'
import AppBarComponent from "../AppBar";


export default function PermanentDrawerLeft(props) {

    return (
        <Box  sx={{display: 'flex', backgroundColor: "#F3F4F9", paddingTop: '4em',}}>
            <CssBaseline />

            <AppBarComponent/>

            <DrawerComponent/>

            <Box component="main" sx={{display: 'flex', gap: '1em',padding: '1em',marginTop: '1em',flexWrap: 'wrap',fontFamily: '\'Poppins\', sans-serif'}}>
                {props.children}
            </Box>
        </Box>
    );
}
