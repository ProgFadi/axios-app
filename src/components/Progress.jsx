import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <Box sx={{marginTop:'300px', maxWidth:'30%', marginInline:'auto'}}>
        <h3 style={{textAlign:'center'}}>Loading Products</h3>
      <LinearProgress />
    </Box>
  );
}
