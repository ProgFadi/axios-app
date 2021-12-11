import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Auth from '../utils/Auth';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

const Img = styled('img')({
    width: '100%',
    height: '100%',
    maxWidth: '300px',
    maxHeight: '300px',
    borderRadius: '5px',
});

const removeFromCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const newCart = cart.filter(item => item.title !== product.title)
    localStorage.setItem('cart', JSON.stringify(newCart))
    window.location.reload()
}

function Cart(item) {
    let cartItems = JSON.parse(localStorage.getItem('cart'));

    return (
        <Box style={{ display: 'flex', flexDirection: 'row' }} sm={{ flexDirection: 'row' }} >

            <Grid container alignItems="stretch" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "60%" }}>
                <Grid item style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', p: 2, justifyContent: 'center' }}>

                    {
                        (cartItems.length > 0) ? cartItems.map((item, index) => {
                            return (
                                <Card sx={{ m: 1, maxWidth: '300px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch' }}>
                                    <Box p={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <ButtonBase>
                                            <Img src={item.image} />
                                        </ButtonBase>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                                        <Typography sx={{ fontSize: '1rem' }} variant="h6">{item.title}</Typography>
                                        <Chip sx={{ ml: '1rem' }} label={`$ ` + item.price} variant="outlined" />
                                    </Box>
                                    <Typography sx={{ ml: '1rem', textTransform: 'capitalize', color: '#757575' }} variant="body2">{item.category}</Typography>
                                    <Box item sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
                                        <ButtonBase sx={{ cursor: 'pointer', backgroundColor: 'rgba(0, 0, 0, .7)', color: 'white', padding: 1.5, borderRadius: 2, textAlign: 'center', mt: 2, width: '100%', fontSize: '1rem', fontWeight: 600 }} variant="body2" onClick={() => removeFromCart(item)}>
                                            Remove from Cart
                                        </ButtonBase>
                                    </Box>
                                </Card>
                            )
                        }) : <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: '25vh' }} >
                            <Typography sx={{ color: 'rgba(0, 0, 0, .7)' }} variant="h6">No items in cart, yet.</Typography>
                            <Typography variant="body2"><ShoppingBasket sx={{ fontSize: '15rem', color: 'rgba(0, 0, 0, .1)' }} /></Typography>
                        </Box>
                    }
                </Grid>
            </Grid>
            <Grid container alignItems="stretch" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "40%" }} >
                <Card sx={{ m: 1, display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch', width: '75%', maxWidth: '30rem', color: 'rgba(0, 0, 0, .8)', fontWeight: 'Bold' }}>
                    <Box p={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography variant="h4" >Cart Details</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Payment Method: </Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Cash On Delivery</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Delivery Address: </Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">146 Inverness Lane Shakopee, MN 55379</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Delivery Date: </Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Between 13th of December &amp; 1 January</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Payment Status: </Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Pending</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Order Status: </Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Pending</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Order Id: </Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">YmVKXSNwTJ</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Items Number: </Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">{cartItems.length}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Total Amount: </Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">${cartItems.reduce((acc, item) => acc + item.price, 0)}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Discounted Amount: </Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">${cartItems.reduce((acc, item) => acc + item.price, 0) * 0.1}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">Delivery Fee (free): </Typography>
                        <Typography sx={{ fontSize: '1rem' }} variant="h6">$0.00</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(198, 247, 136, .3)' }} p={2}>
                        <Typography variant="h6">Final Amount: </Typography>
                        <Typography sx={{ fontSize: '1rem', color: '#3A7C44' }} variant="h6">${cartItems.reduce((acc, item) => acc + item.price, 0) * 0.9}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} p={2}>
                        <Button variant="filled" sx={{ '&:hover': { color: 'white', backgroundColor: '#096063' }, width: '100%', backgroundColor: '#7DD772', color: 'green', p: 2 }} >Checkout</Button>
                    </Box>

                </Card>
            </Grid>

        </Box>

    )
}


Cart = Auth(Cart);

export default Cart;
