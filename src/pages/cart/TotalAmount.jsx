import Box from '@mui/material/Box';
import Button from '../ProductPage/Button'

const TotalAmount = ({price}) => {
    return (
        <Box sx={{display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '390px',}}>
{console.log(price)
}            <Box sx={{display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
                <h1>Final Amount</h1>
                <h1 style={{color:'red'}}>{price}$</h1>
            </Box>
        <Box>
            <Button name = {'Checkout'} styles={'checkoutBtn'} />
        </Box>
        </Box>
    )
}

export default TotalAmount
