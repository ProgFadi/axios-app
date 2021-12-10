import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
function Products(props) {
  let [isLogged, setIsLogged] = useState(true);
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      setIsLogged(false);
    }
  }, []);
  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  return <div>Products</div>;
}

export default Products;
