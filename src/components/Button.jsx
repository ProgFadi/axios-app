import React from "react";
import Snackbar from "./Snackbar";

function Button(props) {
  return (
    <Snackbar onClickFunction={props.onClickFunction} text="Add to cart" />
  );
}

export default Button;
