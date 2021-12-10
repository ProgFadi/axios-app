import Box from '@mui/material/Box';
import CountItems from './CountItems';
import TotalAmount from './TotalAmount';


const DetailsPaper = ({length,price}) => {


    
    return (
        <Box sx={{
            display:'flex',
            width:'20%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #dadada',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#f8f8f8',
        }}>
            <Box>
            <h1>Details</h1>
            <Box>
            <CountItems length={length} price={price} />
            </Box>
            </Box>
            <Box>
                <TotalAmount price={price} />
            </Box>


        </Box>
    )
}

export default DetailsPaper
