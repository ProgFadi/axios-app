import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { TOKEN_KEY } from "../utils/Constants";
import AuthContext from "../contexts/AuthContext";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useContext(AuthContext);
  console.log("login jsx ", login);
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,

        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius:'5px',
          backgroundColor:'green',
          padding:'35px'
        }}
      >
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          label="Email"
          variant="outlined"
          style={{
            marginTop: "5px",
          }}
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          label="Password"
          variant="outlined"
          style={{
            marginTop: "15px",
          }}
        />

        <Button
          style={{
            marginTop: "25px",
          }}
          onClick={(e) => {
            e.preventDefault();
            login(email, password);
          }}
          variant="contained"
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
