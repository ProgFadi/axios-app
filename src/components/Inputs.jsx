import React from "react";
import TextField from "@mui/material/TextField";
export default function Inputs(props) {
  return (
    <TextField
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      label={props.ph}
      className={props.ClassName}
      variant="outlined"
      error={props.error}
    ></TextField>
  );
}
