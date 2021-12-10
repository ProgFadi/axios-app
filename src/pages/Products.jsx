import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';
import SearchInput from '../components/SearchInput';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products({
  products,
  searchValue,
  handleSearch,
  handleAddToCart,
}) {
  const [isLogged, setIsLogged] = React.useState(true);
  // useEffect(() => {
  //   let token;
  //   try {
  //     token = JSON.parse(localStorage.getItem('token'));
  //     if (!token) setIsLogged(false);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLogged(false);
  //   }
  // }, []);

  // if (!isLogged) return <Navigate to="/login" />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ mx: '80px', mb: '40px' }}>
        <h1>Products</h1>
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
            <ProductCard
              id={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
