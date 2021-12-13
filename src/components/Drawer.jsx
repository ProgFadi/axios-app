import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import CategoryIcon from "@mui/icons-material/Category";
import ListItemText from "@mui/material/ListItemText";
import '../components/styles/IconsStyle.css'
import {useStyles} from "./styles/HomePageStyles";
import {useNavigate} from "react-router-dom";

const drawerWidth = 240;


function DrawerComponent() {
    const classes = useStyles()
    const navigate = useNavigate();
    return (
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
                    <ListItem button className={classes.ListItemStyle} key={text} onClick={() => {navigate('/'+text.toLowerCase())}} >
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

        </Drawer>
    );
}

export default DrawerComponent;