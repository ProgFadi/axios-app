import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductCard() {
  const product = {
    name: 'nike',
    price: 90,
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia component="img" height="130" image="" alt="product" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" fullWidth variant="contained">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
