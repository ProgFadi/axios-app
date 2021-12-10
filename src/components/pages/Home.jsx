import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import CategoryIcon from '@mui/icons-material/Category';
import {useLocation, useNavigate} from 'react-router-dom';
import {Avatar, Stack} from "@mui/material";
import '../styles/IconsStyle.css'
import {ListItemStyle, ContentBoxStyle, ToolBarStyle, TypographyStyle, Appbar} from '../styles/HomePageStyles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';


const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
    const navigate = useNavigate();
    const pathname = useLocation().pathname


    return (
        <Box sx={ContentBoxStyle} className={'box'}>
            <CssBaseline />
            <AppBar  elevation={0} position="fixed" sx={Appbar(drawerWidth)} >
                <Toolbar sx={ToolBarStyle}>
                    <Typography variant="h6" noWrap component="div" sx={TypographyStyle}>
                        {pathname !== '/' ? pathname.slice(1) : 'home'}
                    </Typography>
                    <Stack direction={'row'} alignItems={'center'} spacing='1.3em'>
                        <IconButton onClick={() => navigate('/cart')}>
                            <ShoppingCartIcon style={{fill: '#292c2f', fontSize: '2rem'}}/>
                        </IconButton>
                        <Avatar alt="user avatar" src= {require('../../assets/images/avatar.jpg').default} />
                    </Stack>
                </Toolbar>
            </AppBar>

            <Drawer
                className={'drawer'}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left">

                <Toolbar />

                <List className={'list'}>
                    {['Dashboard', 'Categories', 'Products'].map((text, index) => (
                            <ListItem button sx={ListItemStyle} key={text} onClick={() => {navigate('/'+text.toLowerCase())}} >
                                <ListItemIcon >
                                    {(() => {
                                        switch (index) {
                                            case 0:
                                                return <i className={'listItemIcon1'}><FontAwesomeIcon  icon={faChartLine} /></i>;
                                            case 1:
                                                return  <i className={'listItemIcon2'}><CategoryIcon /></i>;
                                            case 2:
                                                return  <i className={'listItemIcon3'}><FontAwesomeIcon icon={faShoppingCart} /></i>;
                                            default:
                                                return null;
                                        }
                                    })()}
                                </ListItemIcon>
                                <ListItemText primary={text} primaryTypographyProps={{
                                    fontFamily: '\'Poppins\', sans-serif',
                                    color: '#4F5264',
                                }} />
                            </ListItem>
                    ))}
                </List>

                {/*<Divider />*/}
            </Drawer>

            <Box component="main" sx={{display: 'flex', gap: '1em',padding: '1em',marginTop: '1em',flexWrap: 'wrap'
            }}>
                {props.children}
            </Box>
        </Box>
    );
}
