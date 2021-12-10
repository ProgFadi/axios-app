import Box from '@mui/material/Box';
import DetailsPaper from './DetailsPaper'
import ItemsCart from './ItemsCart'

const Cart = () => {
    return (
        <Box sx={{
            display:'flex',
            width:'100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
        <ItemsCart />
        <DetailsPaper />
        </Box>
    )
}

export default Cart
