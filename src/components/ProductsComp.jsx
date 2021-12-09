import React from "react";

function ProductsComp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 16 }} sx={{ height: 500 }}>
        {Products.map((item, index) => {
          return <Product key={index} product={item} onClickFunction={onAdd} />;
        })}
      </Grid>
    </Box>
  );
}

export default ProductsComp;
