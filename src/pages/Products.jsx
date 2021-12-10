import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';
import SearchInput from '../components/SearchInput';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products({ products, searchValue, handleSearch }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ mx: '80px', mb: '40px' }}>
        <SearchInput
          products={products}
          searchValue={searchValue}
          handleSearch={handleSearch}
        />
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={4}
        align="center"
        // justify="center"
      >
        {Array.from(products).map((product, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ProductCard id={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
