import React from "react";
import Button from "@mui/material/Button";

export default function Buttons(props) {
  return (
    <Button
      onClick={props.onClick}
      className={props.ClassName}
      variant="contained"
      sx={{
        p: 2,
      }}
    >
      {props.title}
    </Button>
  );
}
