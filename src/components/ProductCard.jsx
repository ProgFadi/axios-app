import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductCard({ product, handleAddToCart }) {
  const handleClick = () => {
    handleAddToCart(product);
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={product.image}
          alt="product"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            style={{
              maxWidth: 200,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {product.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          fullWidth
          variant="contained"
          onClick={handleClick}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
