import { Avatar, Stack } from '@mui/material';
import * as React from 'react';

export default function CartIcon() {
  return (
      // <IconButton id='icon' alt="Cart Icon" src={require('./img/shopping-cart.png').default} onClick={()=> {return <Navigate to="/cart"/>}} />
      <Stack direction="row" spacing={2}>
        <Avatar id='icon' alt="Cart" src={require('./img/shopping-cart.png').default} />
      </Stack>

  );
}
