import * as React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { palette } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ImgMediaCard(props) {
  let button_text = "Send to Cart";
  let location = useLocation();
  switch (location.pathname) {
    case "/product":
      button_text = "Send to Cart";
    case "/CartPage":
      button_text = "Remove";
  }
  return (
    <Grid item xs={2} sm={4} md={4} key={props.index}>
      <Item sx={{ m: 0, p: 0 }}>
        <Card
          sx={{
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "White",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            src={props.product.image}
            sx={{
              width: 1,
              height: 1 / 2,
              objectFit: "contain",
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontSize: 14,
                width: 1,
              }}
              sm={{
                fontsize: 9,
              }}
            >
              {props.product.title}
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontSize: 16,
                backgroundColor: "#DDDDDD",

                borderRadius: 3,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              ${props.product.price}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              position: "relative",
              p: 2,
            }}
          >
            <Button
              variant="contained"
              size="small"
              color="secondary"
              sx={{
                width: "100%",
                position: "absolute",
              }}
              onClick={() => props.onClickFunction(props.product)}
            >
              {button_text}
            </Button>
          </CardActions>
        </Card>
      </Item>
    </Grid>
  );
}
