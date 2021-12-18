import React, {
  useRef,
  useState,
  useEffect,
  useContext
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  SvgIcon,
  Tooltip,
  Typography
} from '@mui/material';
import {  makeStyles} from '@mui/styles'
import {
  Bell as BellIcon,
  Package as PackageIcon,
  MessageCircle as MessageIcon,
  Truck as TruckIcon
} from 'react-feather';
import CartContext from '../contexts/CartContext'
import Grow from '@mui/material/Grow';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const iconsMap = {
  order_placed: PackageIcon,
  new_message: MessageIcon,
  item_shipped: TruckIcon
};

const useStyles = makeStyles((theme) => ({
  popover: {
    width: 320
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));

const Carts = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const {carts} = useContext(CartContext)
  console.log('carts is : ',carts)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{


  },[])

  return (
    <>
      <Tooltip title="View Cart">
        <IconButton
          color="inherit"
          ref={ref}
          onClick={handleOpen}
        >
         <ShoppingCartIcon/>
        </IconButton>
      </Tooltip>
      {/* <Grow
                   in={true}
                   style={{ transformOrigin: '0 0 0' }}
                   {...(true ? { timeout: 1000 } : {})}
                 > */}
                   <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        classes={{ paper: classes.popover }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <Box p={2}>
          <Typography
            variant="h5"
            color="textPrimary"
          >
            Carts
          </Typography>
        </Box>
        {carts.length === 0 ? (
          <Box p={2}>
            <Typography
              variant="h6"
              color="textPrimary"
            >
              There are no item added to cart
            </Typography>
          </Box>
        ) : (
          <>
            <List
            sx={{
              maxHeight:'80%',
              overflowX:'auto'
            }}
            disablePadding>
              {carts.map((cart) => {
                const Icon = iconsMap[cart.type];

                return (
                  <ListItem
                    component={RouterLink}
                    divider
                    key={cart.id}
                    to="#"
                    sx={{
                      display:'flex',
                      flexDirection:'column'
                    }}
                  >
                   
                    <ListItemText
                      primary={cart.title}
                      primaryTypographyProps={{ variant: 'subtitle2', color: 'textPrimary' }}
                      secondary={cart.description}
                    />
                    <p>{cart.price}</p>
                  </ListItem>
                );
              })}
            </List>
            <Box
              p={1}
              display="flex"
              justifyContent="center"
            >
              <Button
                component={RouterLink}
                size="small"
                to="#"
              >
               Checkout
              </Button>
            </Box>
          </>
        )}
      </Popover>
                 {/* </Grow> */}
     
    </>
  );
};

export default Carts;
