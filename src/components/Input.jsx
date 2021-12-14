import React from "react";
import TextField from "@mui/material/TextField";

function Input(props) {
  return (
    <TextField
      onChange={props.onChangeFunction}
      defaultValue={props.value}
      autoComplete="off"
      name={props.name}
      type="text"
      placeholder={props.placeholder}
    />
  );
  // return (
  //   <input
  //     autoComplete="off"
  //     name={props.name}
  //     onChange={props.onChangeFunction}
  //     value={props.value}
  //     type="text"
  //     placeholder={props.placeholder}
  //   />
  // );
}

export default Input;
