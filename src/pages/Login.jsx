import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { TOKEN_KEY } from "../utils/Constants";
function Login(props) {
  const navigate = useNavigate();
  const [username, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        let token = response.data.token;
        let data = response.data;
        localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form>
        <input value={username} onChange={(e) => setEmail(e.target.value)} type="username" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <input type="submit" onClick={login} />
      </form>
    </div>
  );
}

export default Login;
