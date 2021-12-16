import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import img from '../assets/images/1.png';
import { makeStyles } from '@mui/styles';
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { InputBase } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link ,useLocation, useNavigate } from "react-router-dom";
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Cart from '../pages/Cart'


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation()


 

  const renderContent = (routeName) => {
    console.log(routeName)
    switch (routeName) {
      case '':
        return <Home />
      case '/login':
        return <Login />
      case '/products':
        return <Products  addToCart ={props.addto}  />
      case '/dashboard':
        return <Dashboard />
      case '/categories':
        return <Categories />
      
        case '/cart':
          return <Cart  addToCart ={props.addToCart} cartItem={props.cartItem}  setCartItem={props.setCartItem}/>
    }
  }
  

  function handleDrawerOpen() {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };
 

  const useStyles = makeStyles (theme => ({
    toolbar: {
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor: '#fdfdfd',
      border: 0,
      color: '#58585b',
      height: 48,
      padding: '0 30px',
    },
    
    logo:{
      display:'flex',
      alignItems: 'center'
    },
    logotitle:{
      color:'#d32f2f',
    },
    search:{
      display:'flex',
      alignItems:'center',
      backgroundColor: '#fbfbfb',
      '&:hover': {
      backgroundColor: '#eee'},
      boxShadow:'0px 0px 3px 1px #a199991f',
      height:'35px',
      borderRadius:'5px',
      width:'40%',
    },
    icons:{
        display:'flex',
        alignItems:'center',
        fontSize:'25px',
        position:'relative'    
    },
    badge:{
        marginRight:'20px',
        position: 'absolute',
        top: '-5px',
        fontSize: '15px',
        left:' 44px',
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        
    },
    iconnav:{
        fontSize:'26px !important'
    },
    button:{
        margin:'0px 15px 0px -6px',
     
    },
    
    list:{
        paddingTop: '35px',
        paddingLeft:'10px'
    },
    listitem:{
        display:'flex',
        alignItems:'center',
        height:'45px',
        lineHeight:'45px',
        backgroundColor: '#fff',
         '&:hover': {
        backgroundColor: '#d32f2f33'},
        paddingLeft:'20px'

    },
    icon:{
        color:'#d32f2f',
        fontSize:'30px ',
        margin:'-2px auto'
    },
    link:{
        textDecoration:'none',
        alignSelf:'center',
        color:'#000',
        fontSize:'20px ',
        marginLeft: '10px',


    }
    

}));
  

   const classes=useStyles()
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className={classes.toolbar}>
        <div className={classes.logo} >
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                <MenuIcon />
            </IconButton>
            <Typography  className={classes.logotitle} variant="h6" noWrap component="div">
                EcoShop
            </Typography>
          </div>
      
            <div className={classes.icons} > 
                  <IconButton component={Link} to='/cart'  color="primary" className={classes.button} caria-label="add to shopping cart">
                      <ShoppingCartIcon className={classes.iconnav}/>
                  </IconButton>
               
               

                <Stack direction="row" spacing={3}>
                    <Avatar alt="Cindy Baker" src={img}  />
                </Stack>

            </div>
        </Toolbar>
      </AppBar>
            
                
    


      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className={classes.list}>
          
        <ListItemText className={classes.listitem}>
            <HomeIcon className={classes.icon}/>
            <Link to='/' className={classes.link}>Home</Link>
        </ListItemText>
        <ListItemText className={classes.listitem}>
            <CategoryIcon className={classes.icon}/>
            <Link to='/categories' className={classes.link}>Categories</Link>
        </ListItemText>
        <ListItemText className={classes.listitem}>
            <DashboardIcon  className={classes.icon}/>
            <Link to='/dashboard' className={classes.link}>Dashboard</Link>
        </ListItemText>
        <ListItemText className={classes.listitem}>
            <AddShoppingCartIcon className={classes.icon} />
            <Link to='/products' className={classes.link}>Products</Link>
        </ListItemText>
        <ListItemText className={classes.listitem}  >
            <LoginIcon className={classes.icon} />
            <Link to='/login' className={classes.link}>LogIn</Link>
        </ListItemText>
             
        
        </List>
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {renderContent(location.pathname)}
      </Main>
    </Box>
  );
}
