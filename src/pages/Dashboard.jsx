import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function Dashboard(props) {
  const [isLogged, setIsLogged] = React.useState(true);
  useEffect(() => {
    let token;
    try {
      token = JSON.parse(localStorage.getItem('token'));
      if (!token) setIsLogged(false);
    } catch (error) {
      console.log(error);
      setIsLogged(false);
    }
  }, []);

  if (!isLogged) return <Navigate to="/login" />;

  return <div>Dashboard</div>;
}

export default Dashboard;
