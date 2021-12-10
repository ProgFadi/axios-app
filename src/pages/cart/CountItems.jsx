import Box from '@mui/material/Box';

const CountItems = ({length,price}) => {

   

    return (
        <Box sx={{
            display:'flex',
            width:'100%',
            flexDirection: 'column',
        }}>
            <Box className={'cartTotal'}>
                <h3 className={'divPaperh3'}>Items Number :</h3> 
                <h3>{length}</h3> 
            </Box>
            <Box className={'cartTotal'}>
                <h3 className={'divPaperh3'}>total Amount :</h3>
                <h3>{price}$</h3>
            </Box>
            <Box className={'cartTotal'}>
                <h3 className={'divPaperh3'}>Discount:</h3>
                    <h3 style={{color:'red'}}> Sorry you dont have DIscount Now</h3>
            </Box>
        </Box>
    )
}

export default CountItems
